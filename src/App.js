import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <RegisterPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/profile">
          <ProfilePage/>
        </Route>
        <Route path="/">
          <ProfilePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
