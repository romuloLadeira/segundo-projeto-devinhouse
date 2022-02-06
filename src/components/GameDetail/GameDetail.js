import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchGame} from '../../services/games-services'
import { CommentForm } from '../Comment';
import { Header } from '../Header';

export const GameDetail = () => {

  const{id} = useParams()
  const [gameInfo, setGameInfo] = useState([])
  const [gameRequirements, setGameRequirements] = useState({})
  const [screenshots, setScreenshots] = useState([])
  const [mainScreenshot, setMainScreenshot] = useState('')
  
  
 
  useEffect(()=>{
      (async () =>{
        const game = await fetchGame(id)
        setGameInfo(game)
        setGameRequirements(game.minimum_system_requirements)
        setScreenshots(game.screenshots)
        setMainScreenshot(game.screenshots[0].image)
      })()
      
    },[])
    console.log(gameInfo)
  return <>
  
  <div>
       <Header/>
       <h1>{gameInfo.title}</h1>
      <section>
      <img style={{width:"600px"}}src={mainScreenshot} alt={gameInfo.title}/>
      <div>
       {screenshots.map((screenshot)=>{
         return <button onClick={()=>{setMainScreenshot(screenshot.image)}}><img style={{width:"200px"}} src={screenshot.image}/></button>
       })}
      </div>
      </section>
      
      <section>
        <div >
          <h4>plataforma</h4>
          <p>{gameInfo.platform}</p>
        </div>
        <div >
          <h4>gênero</h4>
          <p>{gameInfo.genre}</p>
        </div>
        <div >
          <h4>Descrição</h4>
          <p>{gameInfo.short_description}</p>
        </div>
      </section>
      <section>
        <h3>Requisitos de sistema</h3>
        <div >
          <h4>Sistema Operacional</h4>
          <p>{gameRequirements.os}</p>
        </div>
        <div >
          <h4>processador</h4>
          <p>{gameRequirements.processor}</p>
        </div>
        <div >
          <h4>memory</h4>
          <p>{gameRequirements.memory}</p>
        </div>
        <div>
          <h4>Placa de vídeo</h4>
          <p>{gameRequirements.graphics}</p>
        </div>
        <div >
          <h4>Espaço em disco</h4>
          <p>{gameRequirements.storage}</p>
        </div>
      </section>
  </div>
  <CommentForm  gameTitle={gameInfo.title}/>
  
  </>
};

