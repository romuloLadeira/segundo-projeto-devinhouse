import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {fetchGames} from '../../services/games-services'

export const Games = () => {
    const inputEl = useRef("")
    const [listaGames, setListaGames] = useState([])
    const [termoBusca, setTermoBusca] = useState('')
    const [resultadoBusca, setResultadoBusca] = useState([])

    useEffect(()=>{
      (async () =>{
        const games = await fetchGames()
        setListaGames(games)
      })()
  
    },[])
    
  const handleBusca = (termo)=>{
    setTermoBusca(termo)
    if(termo !== ''){
      const novaListaGames = listaGames.filter((game)=>{
       return game.title.toLowerCase().includes(termo.toLowerCase())
      })
      setResultadoBusca(novaListaGames)
    }else{
      setResultadoBusca(listaGames)
    }
    
  }

    const getTermoBusca =() =>{
      handleBusca(inputEl.current.value)
    }
    
    
  return (<>

    <h1>DevInMMO</h1>
    <input ref={inputEl} type='text' placeholder='busca'value={termoBusca} onChange={getTermoBusca}></input>
    {(termoBusca.length < 1?listaGames:resultadoBusca).map((game)=>{
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


