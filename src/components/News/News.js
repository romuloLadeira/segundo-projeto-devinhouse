import React, { useContext, useEffect, useState } from 'react';
import { MmoContext } from '../../context/mmoContext';
import { fetchNews } from '../../services/games-services';
import { Header } from '../Header';
import {NewsCard} from '../NewsCard';
export const News = () => {

    const{termoBusca, lista, setLista, listaFiltrada} =useContext(MmoContext)

    useEffect(()=>{
        (async ()=>{
            const noticias = await fetchNews()
            setLista(noticias)
            
        })()
    },[])
    return (<>

        <Header/>
        <div>
        {(termoBusca.length < 1?lista:listaFiltrada).map((news)=>{
            return (
          <>
            
            <NewsCard key={news.id} title={news.title} description={news.short_description} url={news.article_url} thumbnail={news.thumbnail}/>
            
          </> 
            )})}
        </div>
        )
        </>

    )};
