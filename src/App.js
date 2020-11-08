import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FavoritesPage } from "./Pages/FavoritesPage";
import { HomePage } from "./Pages/HomePage";
import "./reset.css";
import { StoreContext } from "./StoreContext";
const App = () => {
  const { photos } = useContext(StoreContext);

  return (
    <>
      <Router>
        <Switch>
          <Route state={photos} path="/favorites" component={FavoritesPage} />
          <Route state={photos} path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
