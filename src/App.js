import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { FavoritePage } from "./Pages/FavoritePage";
import "./reset.css";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/favorites" component={FavoritePage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
