import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Swwitch, Route, Switch } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
    <div className="app">   
    <Switch>
      <Route path="/checkout">
          <Header />
          <Checkout />
          <h1>I AM A CHECKOUT, SMASH THE LIKE BUTTON</h1>
    </Route>
    <Route path="/">
          <Header />
          <Home /> 
    </Route>
    </Switch>
   
    </div>
    </Router>
  );
}

export default App;
