import React from 'react';
import './styles/App.css';
import './additionalFunctions';

import Header from "./components/header/Header";
// import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/router/AppRouter"

import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      {/* <Body /> */}
      <AppRouter />
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
