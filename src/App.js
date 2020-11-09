import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Signup from './components/Registration';
import Login from './components/Login'
import Welcome from './components/Welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Body/>

        </Route>
        <Route exact path="/about-us">
          <About/>

        </Route>
        <Route path="/user-signup">
          <Signup/>

        </Route>
        <Route path="/user-login">
          <Login/>

        </Route>
        <Route path="/user-welcome">
          <Welcome/>

        </Route>

      </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //   <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
