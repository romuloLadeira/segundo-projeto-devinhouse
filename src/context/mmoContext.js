import { createContext } from "react";
import { useState } from "react";

export const MmoContext = createContext()


export const MmoProvider =({children})=>{
    const [termoBusca, setTermoBusca] = useState('')
    const [lista, setLista] = useState([])
    const [listaFiltrada, setListaFiltrada] = useState([])
    const [theme, setTheme] = useState('light')
    return<MmoContext.Provider value={{termoBusca, setTermoBusca, lista, setLista,listaFiltrada,setListaFiltrada,theme,setTheme}}>{children}</MmoContext.Provider>
}
