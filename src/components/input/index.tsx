import { InputStyled } from "./styled"

interface IIpunt {
    tipo: string 
    titulo: string 
    id: string
    texto: string
}


export const Input = ({tipo, titulo, id, texto}:IIpunt) => {

    return (
        <InputStyled>
            <label htmlFor={id}>{titulo}</label>
            <img src="" alt="" />
            <input placeholder={texto} id={id} type={tipo}/>
        </InputStyled>
    )
}