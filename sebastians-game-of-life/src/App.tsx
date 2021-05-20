import React from 'react';
import './styling/App.css';
import Rules from './components/Rules';
import LandingPage from './components/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/rules">
            <Rules />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
