import { Router } from "./routes/Router";
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes";
import { useContext } from "react";
import { MmoContext } from "./context/mmoContext";


function App() {
  const{theme} = useContext(MmoContext)
  return (
    <>
    <ThemeProvider theme={theme ==='light'?lightTheme:darkTheme}>
    <GlobalStyle/>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </ThemeProvider>
    </>

  );
}

export default App;
