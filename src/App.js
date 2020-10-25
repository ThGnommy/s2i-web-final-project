import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";
import { FavoritePage } from "./Pages/FavoritePage";
import "./reset.css";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/favorites" component={FavoritePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
