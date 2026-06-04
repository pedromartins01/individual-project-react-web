import { CardImagem, CardStyle } from "./style"

export const CardAlimentos = ({nome, categoria, preco, unidade, imagem}) => {
    return (
        <CardStyle>
            <CardImagem src={imagem} alt={nome} />
            <p>{nome}</p>
            <p>{categoria}</p>
            <p>{preco}</p>
            <p>{unidade}</p>
        </CardStyle>
    )
}