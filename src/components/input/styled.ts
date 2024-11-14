import styled from "styled-components";

export const InputStyled = styled.div`
    border: solid rgb(180, 180, 180) 2px;
    display: flex;
    flex-direction: column;
    /* gap: 6px; */
    width: fit-content;
    height: 60px;
    position: relative;
    border-radius: 8px;
    transition: 1s;
    background-color: #202024;

   

    
    
    label {
        color: rgb(180, 180, 180);
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        position: absolute;
        top: -20px;
        left: 20px;
        border: solid 2px rgb(180, 180, 180);
        padding: 2px 10px;
        background-color: #202024;
        border-radius: 8px;
    }


    input {
        height: 100%;
        width: 400px;
        border-radius: 8px;
        border: none;
        padding: 0px 10px;
        color: white;
        font-size: 20px;
        background-color: transparent;
        font-weight: 600;
        outline: none;

    }

    input::-webkit-input-placeholder {
        color: rgb(180, 180, 180);
        font-size: 20px;
        font-weight: 600;

    }

`