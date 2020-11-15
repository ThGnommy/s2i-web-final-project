import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FavoritesPage } from "./Pages/FavoritesPage";
import { HomePage } from "./Pages/HomePage";
import "./reset.css";
import { StoreContext } from "./StoreContext";
import { auth, instance } from "./api/firebase";

const App = () => {
  const { photos } = useContext(StoreContext);

  useEffect(() => {
    instance.auth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      if (!currentUser) {
        auth.signInWithGoogle();
      }
    });
  }, []);
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
