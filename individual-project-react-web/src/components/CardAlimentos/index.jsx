import { CardStyle } from "./style"

export const CardAlimentos = ({nome, categoria, preco, unidade}) => {
    return (
        <CardStyle>
            <p>{nome}</p>
            <p>{categoria}</p>
            <p>{preco}</p>
            <p>{unidade}</p>
        </CardStyle>
    )
}