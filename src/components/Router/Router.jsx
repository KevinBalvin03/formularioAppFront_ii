import { Routes, Route } from "react-router-dom";
import { Registro } from "../pages/Registro/Registro";


export function Router(){

    return(
        <Routes>
            <Route path="/" element={<Registro/>}/>
            <Route path="/Registro" element={<Registro/>}/>
        </Routes>
    )
}