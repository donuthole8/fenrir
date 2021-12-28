import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Restaurants from './components/pages/Restaurants'
import Details from './components/pages/Details'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/restaurants">
          <Restaurants />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
