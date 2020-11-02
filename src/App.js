import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FavoritesPage } from "./Pages/FavoritesPage";
import { HomePage } from "./Pages/HomePage";
import "./reset.css";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/favorites' component={FavoritesPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
