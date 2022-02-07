import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MmoContext } from '../../context/mmoContext';
import { filterSearch } from '../../helper/filter';
import { StyledHeader } from '../styles/StyledHeader';

export const Header = () => {
    const inputEl = useRef("")
    const{termoBusca, setTermoBusca, lista,listaFiltrada,setListaFiltrada,theme, setTheme} =useContext(MmoContext)

    const themeHandler= ()=>{
      theme==='light'? setTheme('dark'):setTheme('light')
    }
    const getTermoBusca =() =>{
        setTermoBusca(inputEl.current.value)
         setListaFiltrada(filterSearch(inputEl.current.value, lista))
        }
        
  return <StyledHeader>
     <nav>
     <h1>DevInMMO</h1>
     <section>
     <Link to='/news'>Noticias</Link>
     <Link to='/'>Jogos</Link>
     </section>
    </nav> 
    <div>
    <input ref={inputEl} type='text' placeholder='Busque Aqui'value={termoBusca} onChange={getTermoBusca}></input>
    <p>({listaFiltrada.length})Resultados para '{termoBusca}'</p>
    <button onClick={themeHandler}>mudar tema</button>
    </div>
  </StyledHeader>;
};

