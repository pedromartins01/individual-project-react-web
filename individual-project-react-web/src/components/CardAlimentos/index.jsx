import { CardImagem, CardStyle, CardInfo } from "./style"
import { useState } from "react"
import { ButtonDefault } from "../Button"

export const CardAlimentos = ({nome, categoria, preco, unidade, imagem}) => {
    const [contador, setContador] = useState(0)
    return (
        
        <CardStyle>
            <ButtonDefault  adicionar={() => setContador(contador + 1)} 
                        diminuir={() => setContador(contador > 0 ? contador - 1 : 0)}
                        contador={contador}
            />
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