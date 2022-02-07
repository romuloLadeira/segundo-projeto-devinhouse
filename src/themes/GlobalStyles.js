import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    *{
        html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        box-sizing:border-box;

    }

    body{
        background-color:${({theme})=>theme.color.background};
        color:${({theme})=>theme.color.font};
    }
`

export default GlobalStyle 