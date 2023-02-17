import styled from "@emotion/styled";

const Result = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 24px;
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;
const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
    
  return (
    <Result>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imgCrypto" />
      <div>
        <Precio>
          The price is: <span>{PRICE}</span>
        </Precio>
        <Texto>
          The highest price of the day is: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          The lowest price of the day is: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variation last 24hrs: <span>{CHANGEPCT24HOUR}%</span>
        </Texto>
        <Texto>
          Last Update: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Result>
  );
};

export default Resultado;
