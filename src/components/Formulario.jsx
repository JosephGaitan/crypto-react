import { useState } from "react"
import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import {monedas} from "../data/monedas" 

const InputSubmit = styled.input`
    background-color: #9497ff;
    margin-top: 30px;
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


    const [moneda, SelecMonedas] = useSelectMonedas('Choose your local currency', monedas);
    
  return (
    <form>
        <SelecMonedas />
            {moneda}
        <InputSubmit 
            type='submit'
            value='quote now'
        />
      
    </form>
  )
}

export default Formulario
