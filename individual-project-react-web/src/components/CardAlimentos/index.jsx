import { CardImagem, CardStyle, CardInfo } from "./style"

export const CardAlimentos = ({nome, categoria, preco, unidade, imagem}) => {
    return (
        <CardStyle>
            <CardImagem src={imagem} alt={nome} />
                <CardInfo>
                    <p>Produto: {nome}</p>
                    <p>Categoria: {categoria}</p>
                    <p>Preço: R${preco}</p>
                    <p>Por {unidade}</p>
                </CardInfo>
        </CardStyle>
    )
}