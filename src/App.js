import React from 'react';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
