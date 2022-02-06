import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MmoContext } from '../../context/mmoContext';
import { filterSearch } from '../../helper/filter';
import {fetchGames} from '../../services/games-services'
import {GameCard} from '../GameCard';
import { Header } from '../Header';
import { GameList } from '../styles/GameList';

export const Games = () => {
    const{termoBusca, lista, setLista, listaFiltrada} =useContext(MmoContext)

    useEffect(()=>{
      (async () =>{
        const games = await fetchGames()
        setLista(games)
        
      })()
  
    },[])
    
  return (<>

    <Header/>
    <GameList>
    {(termoBusca.length < 1?lista:listaFiltrada).map((game)=>{
        return (
      <> 
        <GameCard key={game.id} thumbnail={game.thumbnail} title={game.title} platform={game.platform} description={game.short_description} id={game.id}/>
      </> 
        )
    })}
    </GameList>
  </>);
};


