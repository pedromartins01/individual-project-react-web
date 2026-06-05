import styled from 'styled-components'

export const PromocaoStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 32px;
`

export const BotaoVoltar = styled.button`
    align-self: flex-start;
    padding: 10px 20px;
    background-color: #FDA300;
    color: black;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
`

export const CardPromocaoStyle = styled.div`
    width: 500px;
    max-width: 90%;
    background-color: white;
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.2);
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-top: 6px solid red;
`

export const CardPromocaoTitulo = styled.h2`
    font-size: 24px;
    color: red;
    text-align: center;
`

export const CardPromocaoTexto = styled.p`
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
    color: black;
`