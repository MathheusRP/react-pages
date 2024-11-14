import styled from "styled-components";

export const LoginRegisterStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .container {
        border: solid white 4px;
        padding: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        flex-direction: column;
        gap: 20px;
        
        h1 {
            margin-bottom: 50px;
            font-size: 32px;
            text-transform: uppercase;
            
        }

        .inputs {
            display: flex;
            flex-direction: column;
            gap: 40px;

        }

        .chebckboxInput {
            display: flex;
            align-self: flex-start;

            display: flex;
            gap: 10px;

            p {
                font-size: 18px;
            }
        }

        .link {
            text-decoration: none;
            color: white;
            font-size: 18px;
        
        }

    }

`