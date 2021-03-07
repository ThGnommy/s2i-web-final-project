import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreContextProvider } from "./StoreContext";
import { ThemeProvider } from "styled-components";

// redux setup

import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./redux/reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnchancer(applyMiddleware(thunk))
);

// styled components theme

const theme = {
  bgDark: "#303236",
  bgLight: "#3d3f43",
  textDark: "#6d6f72",
  textLight: "#fff",
  button: {
    green:
      "linear-gradient(90deg, rgba(44, 161, 192, 1) 0%, rgba(41, 145, 162, 1) 150%)",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
