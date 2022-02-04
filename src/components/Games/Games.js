import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MmoContext } from '../../context/mmoContext';
import { filterSearch } from '../../helper/filter';
import {fetchGames} from '../../services/games-services'
import { Header } from '../Header';

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
    {(termoBusca.length < 1?lista:listaFiltrada).map((game)=>{
        return (
      <>
        
        <div key={game.id}>
          <img src={game.thumbnail} alt={game.title}/>
          <Link to={`/game/${game.id}`}>
              <h3>{game.title}</h3>
          </Link>
          <h4>{game.platform}</h4>
          <p>{game.short_description}</p>
        </div>
      </> 
        )
    })}
  </>);
};


