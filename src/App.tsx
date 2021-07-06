import React from 'react';
import './styling/App.css';
import Rules from './components/Rules';
import LandingPage from './components/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Game from './components/Game';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/game">
            <Game/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
