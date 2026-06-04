import styled from 'styled-components'

export const CardStyle = styled.div`
    width: 200px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`

export const CardImagem = styled.img`
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
`
export const CardInfo = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 13px;
    
    p {
        margin: 0;
        font-size: 14px;
    }
`