import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MmoContext } from '../../context/mmoContext';
import { filterSearch } from '../../helper/filter';

export const Header = () => {
    const inputEl = useRef("")
    const{termoBusca, setTermoBusca, lista,setListaFiltrada,theme, setTheme} =useContext(MmoContext)

    const themeHandler= ()=>{
      theme==='light'? setTheme('dark'):setTheme('light')
    }
    const getTermoBusca =() =>{
        setTermoBusca(inputEl.current.value)
         setListaFiltrada(filterSearch(inputEl.current.value, lista))
        }
        
  return <div>
     <nav>
     <h1>DevInMMO</h1>
     <Link to='/news'>Noticias</Link>
     <Link to='/'>Jogos</Link>
    </nav> 
    <input ref={inputEl} type='text' placeholder='busca'value={termoBusca} onChange={getTermoBusca}></input>
    <button onClick={themeHandler}>mudar temar</button>
  </div>;
};

