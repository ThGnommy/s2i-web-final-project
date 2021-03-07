import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { FavoritesPage } from "./Pages/FavoritesPage";
import { HomePage } from "./Pages/HomePage";
import "./reset.css";
import { StoreContext } from "./StoreContext";
import { instance } from "./api/firebase";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, userSignin } from "./redux/actions/userAction";

const App = () => {
  const { photos } = useContext(StoreContext);

  const dispatch = useDispatch();

  const { userIsLogged } = useSelector((state) => state.user);

  useEffect(() => {
    instance.auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        dispatch(userSignin());
        dispatch(getUserInfo(currentUser.photoURL, currentUser.email));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Router>
        <Switch>
          {userIsLogged ? (
            <Route state={photos} path="/favorites" component={FavoritesPage} />
          ) : null}
          <Route state={photos} path="/" component={HomePage} />
        </Switch>
        <Switch>
          {!userIsLogged ? (
            <Route exact path="/favorites">
              <Redirect to="/" />
            </Route>
          ) : null}
        </Switch>
      </Router>
    </>
  );
};

export default App;
