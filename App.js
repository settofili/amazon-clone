import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
    <div className="app">   
    <Header />
    <Switch>
      <Route path="/checkout">
          <Checkout />
      </Route>
      git <Route path="/">
          <Home /> 
    </Route>
    </Switch>
   
    </div>
    </Router>
  );
}

export default App;
