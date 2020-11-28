import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FavoritesPage } from "./Pages/FavoritesPage";
import { HomePage } from "./Pages/HomePage";
import "./reset.css";
import { StoreContext } from "./StoreContext";
import { instance } from "./api/firebase";

const App = () => {
  const { photos, setUserIsLogged, userIsLogged } = useContext(StoreContext);

  useEffect(() => {
    instance.auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        setUserIsLogged(false);
      } else setUserIsLogged(true);
    });
  }, [setUserIsLogged]);

  return (
    <>
      <Router>
        <Switch>
          {userIsLogged ? (
            <Route state={photos} path="/favorites" component={FavoritesPage} />
          ) : null}
          {/* <Route state={photos} path='/favorites' component={FavoritesPage} /> */}
          <Route state={photos} path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
