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
import { useDispatch } from "react-redux";
import { getUserInfo, setUserState } from "./redux/actions/userAction";

const App = () => {
  const { photos, setUserIsLogged, userIsLogged } = useContext(StoreContext);

  // const { userLogged } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    instance.auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        setUserIsLogged(false);
      } else {
        setUserIsLogged(true);
        dispatch(setUserState());
        dispatch(getUserInfo(currentUser.email, currentUser.photoURL));
      }
    });
  }, [setUserIsLogged, dispatch]);

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
