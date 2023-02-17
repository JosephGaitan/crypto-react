import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  margin-top: 30px;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({setMonedas}) => {
  const [error, setErorr] = useState(false);
  const [criptos, setCriptos] = useState([]);
  const [moneda, SelectMonedas] = useSelectMonedas(
    "Choose your local currency",
    monedas
  );
  const [cripto, SelectCriptos] = useSelectMonedas(
    "Choose your crypto-currency",
    criptos
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, cripto].includes("")) {
      setErorr(true);

      return;
    }
    setErorr(false)
    setMonedas({moneda, cripto})
  };

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=25&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arregloCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return objeto;
      });
      setCriptos(arregloCriptos);
      
    };
    consultarAPI();
  }, []);

  return (
    <> {error && <Error>Please, select at least one item for each category</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptos />
        <InputSubmit type="submit" value="quote now" />
      </form>
    </>
  );
};

export default Formulario;
