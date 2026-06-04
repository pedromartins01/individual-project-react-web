import { CardAlimentos } from "../../components/CardAlimentos"
import { produtos } from "../../data/dados"
import { HomeStyle } from "./style"

export const Home = () => {

    return (
        <HomeStyle>
            {produtos.map((produto) => (
                <CardAlimentos key={produto.id} nome={produto.nome} categoria={produto.categoria} preco={produto.preco} unidade={produto.unidade} imagem={produto.imagem}/>
            ))}

        </HomeStyle>
    )
}