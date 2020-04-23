import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <h1>
            <Link to="/login">Login Page</Link>
          </h1>
          <h2>
            <Link to="/login" onClick={() => localStorage.removeItem("token")}>
              Logout
            </Link>
          </h2>
        </div>
        <Switch>
          <PrivateRoute exact path="/private" component={Friends} />

          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// styled components: 

