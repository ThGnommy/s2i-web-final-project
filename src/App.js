import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import { FavoritesPage } from "./Pages/FavoritesPage";
import { HomePage } from "./Pages/HomePage";
import "./reset.css";
import { instance } from "./api/firebase";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, userSignin } from "./redux/actions/userAction";
import { auth, db } from "./api/firebase/instance";
import {
  getPhotos,
  getVideos,
  setFavoritesPhotos,
  setFavoritesVideos,
  setNextPage,
} from "./redux/actions/mediaAction";

const App = () => {
  const { query } = useSelector((state) => state.search);
  const { currentPage } = useSelector((state) => state.media);
  const { userIsLogged, photos } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // false = photos - true = videos
  const { switchType } = useSelector((state) => state.switchSelector);

  useEffect(() => {
    const getFavoritesPhoto = () => {
      const doc = db.collection("users").doc(auth.currentUser.uid);
      doc
        .get()
        .then((r) => {
          if (r.exists && r.data().favsPhoto) {
            dispatch(setFavoritesPhotos(r.data().favsPhoto));
          }
        })
        .catch((error) => {
          throw Promise.reject(error);
        });
    };

    auth.onAuthStateChanged((user) => {
      if (user) {
        getFavoritesPhoto();
      } else {
        return;
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const getFavoritesVideo = async () => {
      const doc = db.collection("users").doc(auth.currentUser.uid);
      await doc
        .get()
        .then((r) => {
          if (r.exists && r.data().favsVideo) {
            dispatch(setFavoritesVideos(r.data().favsVideo));
          }
        })
        .catch((error) => {
          throw Promise.reject(error);
        });
    };

    auth.onAuthStateChanged((user) => {
      if (user) {
        getFavoritesVideo();
      } else {
        return;
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        await axios
          .get(`https://api.pexels.com/v1/search?query=${query}`, {
            headers: {
              Authorization: process.env.REACT_APP_PEXELS_KEY,
            },
            params: {
              total_results: 10000,
              per_page: 10,
              page: currentPage,
            },
          })
          .then((res) => {
            // Check if next page exist
            let total_results = res.data.total_results;
            let total_pages = total_results / 10;
            total_pages = Math.floor(total_pages);

            if (currentPage === total_pages + 1) {
              dispatch(setNextPage(false));
            } else if (total_pages >= currentPage) {
              dispatch(setNextPage(true));
            }

            if (!res) return;

            dispatch(getPhotos(res.data.photos));
          });
      } catch (error) {
        throw error;
      }
    };

    const fetchVideos = async () => {
      try {
        await axios
          .get(
            `https://api.pexels.com/videos/search?query=${query}&orientation=portrait&size=small`,
            {
              headers: {
                Authorization: process.env.REACT_APP_PEXELS_KEY,
              },
              params: {
                total_results: 10000,
                per_page: 10,
                page: currentPage,
              },
            }
          )
          .then((res) => {
            // Check if next page exist
            let total_results = res.data.total_results;
            let total_pages = total_results / 10;
            total_pages = Math.floor(total_pages);

            if (currentPage === total_pages + 1) {
              dispatch(setNextPage(false));
            } else if (total_pages >= currentPage) {
              dispatch(setNextPage(true));
            }
            if (!res) return;

            dispatch(getVideos(res.data.videos));
          });
      } catch (error) {
        throw error;
      }
    };

    if (query.length > 0) !switchType ? fetchPhotos() : fetchVideos();
    else return;
  }, [query, currentPage, switchType, dispatch]);

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
