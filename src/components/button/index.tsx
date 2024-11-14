import { ButtomStyled } from "./styled";

interface IButtom {
    text: string
}

export const Button = ({text}: IButtom) => {



    return (
        <ButtomStyled>{text}</ButtomStyled>
    )
}