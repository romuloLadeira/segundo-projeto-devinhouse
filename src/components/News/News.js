import React, { useContext, useEffect, useState } from 'react';
import { MmoContext } from '../../context/mmoContext';
import { fetchNews } from '../../services/games-services';
import { Header } from '../Header';
import {NewsCard} from '../NewsCard';
import { NewsCardConteiner } from '../styles/CardConteiner';
import { List } from '../styles/List';
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
        <List>
        {(termoBusca.length < 1?lista:listaFiltrada).map((news)=>{
            return (
          <>
            <NewsCardConteiner>
                <NewsCard key={news.id} title={news.title} description={news.short_description} url={news.article_url} thumbnail={news.thumbnail}/>
            </NewsCardConteiner>
          </> 
            )})}
        </List>
        )
        </>

    )};
