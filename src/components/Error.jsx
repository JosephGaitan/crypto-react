import styled from "@emotion/styled"

const MensajeError =styled.p`
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: white;
    background-color: #B7322C;
    font-size: 22px;
    padding: 15px;
    border-radius: 5px;
    border:none;
    font-weight: 700;
    text-align:center;
`

const Error = ({ children }) => {
    return(
        <MensajeError>
            {children}
        </MensajeError>
    )
}

export default Error