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
                    Na próxima semana, todas as frutas estarão com uma promoção de LEVE 1kg e pague APENAS por 700gr!
                </CardPromocaoTexto>
                <CardPromocaoTexto>
                    Não perca! Cuide da sua saúde e ao mesmo tempo do seu bolso!
                </CardPromocaoTexto>
            </CardPromocaoStyle>
        </PromocaoStyle>
    )
}