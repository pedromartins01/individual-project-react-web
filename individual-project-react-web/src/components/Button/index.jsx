import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { ButtonStyle } from "./style";

export const ButtonDefault = ({adicionar, diminuir, contador}) => {
    return (
        <ButtonStyle>
            <button onClick={adicionar}>
                <CiCirclePlus />
            </button>
            <span>
                {contador}
            </span>
            <button onClick={diminuir}>
                <CiCircleMinus />
            </button>
        </ButtonStyle>
        
    )
}