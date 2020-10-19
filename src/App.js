import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { FavoritePage } from "./Pages/FavoritePage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/favorites' component={FavoritePage} />
          <Route path='/' component={MainPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
