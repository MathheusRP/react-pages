import { Input } from "../../components/input"
import { LoginRegisterStyled } from "../../style/loginRegister"
import { Button } from "../../components/button"
import { Link } from "react-router-dom"

export const Register = () => {

   return (
    <LoginRegisterStyled>
      <div className="container">
        <h1>Faça seu registro</h1>
        <div className="inputs">
            <Input id="name" texto="Digite seu nome" titulo="NOME" tipo="text" />
            <Input id="email" texto="Digite seu email" titulo="EMAIL" tipo="email" />
            <Input id="password" texto="Digite sua Senha" tipo="password" titulo="SENHA"/>
            <Input id="passwordConfirm" texto="Confirme sua Senha" tipo="password" titulo="CONFIRME A SENHA"/>
        </div>
        <Button text="REGISTRAR"/>
        <Link className="link" to={'/'}> Fazer login</Link>
      </div>
    </LoginRegisterStyled>
   )
}

