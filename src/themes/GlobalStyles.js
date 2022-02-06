import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    *{
        font-family:Montserrat;
        font-size: 1rem;
        box-sizing:border-box;

    }

    body{
        background-color:${({theme})=>theme.color.background};
        color:${({theme})=>theme.color.font};
    }
`

export default GlobalStyle 