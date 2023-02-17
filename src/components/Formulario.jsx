import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import {monedas} from "../data/monedas" 

const InputSubmit = styled.input`
    background-color: #9497ff;
    border :none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #7A7DfE;
        cursor: pointer;
    }
`

const Formulario = () => {

    const [SelecMonedas] = useSelectMonedas('Choose your local currency', monedas);
    
  return (
    <form>
        <SelecMonedas />
        
        <InputSubmit 
            type='submit'
            value='quote now'
        />
      
    </form>
  )
}

export default Formulario
