import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { Link } from "react-router-dom"

import { LoginRegisterStyled } from "../../style/loginRegister"
// Folha de estilo que pode ser usados em diversas paginas, 
// mas no exemplo é usado o mesmo estilo na pagina Login e Register


export const Login = () => {

   return (
    <LoginRegisterStyled>
      <div className="container">
        <h1>Faça seu login</h1>
        <div className="inputs">
            <Input id="name" texto="Digite seu nome" titulo="NOME" tipo="text" />
            {/* Código comprimido que representa um elemento do site que pode ser rederizado todas as vezes que é chamado */}
            <Input id="password" texto="Digite sua Senha" tipo="password" titulo="SENHA"/>
        </div>
        <div className="chebckboxInput">
            <input type="checkbox" />
            <p>Lebrar de mim</p>
        </div>
        <Button text="Login"/>
        <Link className="link" to={'/register'}> Criar conta</Link>
        {/* 'Link' funciona igual o 'a' do HTML, mas geralmente 'a' é usado para levar para links externos*/}
      </div>
    </LoginRegisterStyled>
   )
}

