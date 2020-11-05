import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FavoritesPage } from "./Pages/FavoritesPage";
import { HomePage } from "./Pages/HomePage";
import "./reset.css";
import { StoreContext } from "./StoreContext";
const App = () => {
  const { favorites } = useContext(StoreContext);

  return (
    <>
      <Router>
        <Switch>
          <Route
            state={favorites}
            path='/favorites'
            component={FavoritesPage}
          />
          <Route state={favorites} path='/' component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
