import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/modules/Header'
import Home from './components/pages/Home'
import Restaurants from './components/pages/Restaurants'
import Details from './components/pages/Details'

export default function App() {
  return (
    <Router>
        {/* <nav>
          <ul>
            <li>
              <div>home</div>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div>about</div>
              <Link to="/about">About</Link>
            </li>
            <li>
              <div>users</div>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
      <Header />

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

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }