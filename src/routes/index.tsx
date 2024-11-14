import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const Rotas = () => {

    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            {/* 'path' indica a rota necessaria para acessar o 'element'*/}
            {/* 'element' indica o que sera mostrado depois de acessar a rota*/}
            {/* '<Login/>' é um código comprimido da pagina login */}

            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}