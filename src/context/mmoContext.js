import { createContext } from "react";
import { useState } from "react";

export const MmoContext = createContext()


export const MmoProvider =({children})=>{
    const [termoBusca, setTermoBusca] = useState('')
    const [lista, setLista] = useState([])
    const [listaFiltrada, setListaFiltrada] = useState([])
    return<MmoContext.Provider value={{termoBusca, setTermoBusca, lista, setLista,listaFiltrada,setListaFiltrada}}>{children}</MmoContext.Provider>
}
