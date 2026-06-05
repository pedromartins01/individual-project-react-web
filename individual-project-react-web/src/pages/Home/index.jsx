import { CardAlimentos } from "../../components/CardAlimentos"
import { Cabecalho } from "../../components/Header"
import { produtos } from "../../data/dados"
import { HomeStyle, BotaoPromocao } from "./style"
import { CiSquareAlert } from "react-icons/ci";

export const Home = ({irParaPromocao}) => {

    return (
        <HomeStyle>
            <BotaoPromocao onClick={irParaPromocao}>
                CLIQUE PARA VER A OFERTA DO DIA
            </BotaoPromocao>
            {produtos.map((produto) => (
                <CardAlimentos 
                    key={produto.id} 
                    nome={produto.nome} 
                    categoria={produto.categoria} 
                    preco={produto.preco} 
                    unidade={produto.unidade} 
                    imagem={produto.imagem}
                />
            ))}
        </HomeStyle>
    )
}