import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter} from "react-router-dom";

//components
import ScrollTop from "./components/ScrollTop";
import Header from "./components/header";
import Router from "./components/router";
import Footer from "./components/footer";
const GlobalStyle = createGlobalStyle`
:root{
  --grey-bg:#35363a;
  --grey-headers:#f0f3f4;
  --grey-txt:#f0f3f4;
  --med-blue:#0098FA;
  --dark-blue: #051A30;
  --unsat-blue:#95ADCF;
  --light-pink:#E1BAC5;
  --dark-pink:#AA848F;
  --light-green:#77FAC7;
  --med-green:#35C191;
  --dark-green:#008A5E;

  --express-pink: #CE5E59;
  --mongo-green:#006411;
  --node-green:#70cc3b;
  --react-blue:#12C1D3;

  --footer-height: 100px;

  --mainTransition: all 0.4s ease-in;
}

@font-face{
  font-family: Vazir-Reg;
  src:url('./assets/fonts/Vazir-Regular-FD.eot') format('eot'),
  url('./assets/fonts/Vazir-Regular-FD.woff') format('woff'),
  url('./assets/fonts/Vazir-Regular-FD.ttf') format('truetype');
}

body {
  margin: 0;
  padding:0;
  height:100%;
  color:var(--grey-txt);
  background-color:var(--grey-bg);
  font-family: 'Vazir-Reg', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,h2,h3,h4,h5,h6{
  color:var(--grey-headers);
}
p{
  line-height:1.6;
}
`;
const Body_Wrapper = styled.div`
  min-height: 80vh;
  padding-bottom: var(
    --footer-height
  ); /* equals to  or more than footer height*/
`;
const Main_Container = styled.div`
  min-height: 100%;
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollTop />
      <Main_Container>
        <Header />
        <Body_Wrapper>
          <Router/>
        </Body_Wrapper>
        <Footer />
      </Main_Container>
    </BrowserRouter>
  );
}

export default App;
