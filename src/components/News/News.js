import React, { useContext, useEffect, useState } from 'react';
import { MmoContext } from '../../context/mmoContext';
import { fetchNews } from '../../services/games-services';
import { Header } from '../Header';
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
        <ul>
        {(termoBusca.length < 1?lista:listaFiltrada).map((news)=>{
            return (
          <>
            
            <li key={news.id}>
            <h3>{news.title}</h3>
              <img src={news.thumbnail} alt={news.title}/>
              
              

            </li>
          </> 
            )})}
        </ul>
        )
        </>

    )};
