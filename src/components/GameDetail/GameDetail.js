import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchGame} from '../../services/games-services'
import { CommentForm } from '../Comment';

export const GameDetail = () => {

  const{id} = useParams()
  const [gameInfo, setGameInfo] = useState([])
 
  useEffect(()=>{
      (async () =>{
        const game = await fetchGame(id)
        setGameInfo(game)
        
      })()
      
    },[])
  return <>
  
  <div>
       <h1>{gameInfo.title}</h1>
      <img src={gameInfo.thumbnail} alt={gameInfo.title}/>
  </div>
  <CommentForm/>
  </>
};

