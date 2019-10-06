import React from "react";
import { BrowserRouter, Route } from "react-router-dom";


import HomePage from "../paginas/Homepage";
import Detalles from "../paginas/Detalles";
import { GlobalStyle } from "../theme/GlobalStyle";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Route component={HomePage} exact path="/" />
        <Route component={Detalles} path="/pagedetails/:idmovie" />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
