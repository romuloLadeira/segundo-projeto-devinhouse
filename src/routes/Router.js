import { Route, Routes } from "react-router-dom"
import {GameDetail} from "../components/GameDetail"
import { Games } from "../components/Games"
import {News} from "../components/News"


export const Router = () => {

    return(
        <>
        <Routes>
            <Route path='/' element={<Games/>}/>
            <Route path='/game/:id' element={<GameDetail/>}/>
            <Route path='/news' element={<News />}/>
        </Routes>
        </>
    )
}