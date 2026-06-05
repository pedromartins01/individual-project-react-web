import { CardPromocaoStyle, CardPromocaoTexto, CardPromocaoTitulo } from "./style"
import { PromocaoStyle, BotaoVoltar } from "./style"

export const Promocao = ({ voltarParaHome }) => {
    return (
        <PromocaoStyle>
            <BotaoVoltar onClick={voltarParaHome}>
                ← Voltar para a loja
            </BotaoVoltar>
            <CardPromocaoStyle>
                <CardPromocaoTitulo>OFERTA DA SEMANA</CardPromocaoTitulo>
                <CardPromocaoTexto>
                    Nesta semana, todas as frutas estarão com uma promoção de  <strong>LEVE 1kg</strong> e pague  <strong>APENAS 700gr</strong>!
                </CardPromocaoTexto>
                <CardPromocaoTexto>
                    Não perca! Cuide da sua saúde e ao mesmo tempo do seu bolso!
                </CardPromocaoTexto>
            </CardPromocaoStyle>
        </PromocaoStyle>
    )
}