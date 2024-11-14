import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    p, b, span, h2, h3, input, h1 {
        color: white;
        /* font-family: "Inter", serif; */
        font-optical-sizing: auto;

        font-style: normal;
    }

    body {
        background-color: #1E1E1E;
        overflow-x: hidden;
    }

    button {
        border: 2px solid transparent;
        cursor: pointer;
    }

`