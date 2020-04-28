import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import configStore from "./config/configStore";
import configFirebase from "./config/configFirebase";

import App from "./App";

import "./styles/index.css";

const store = configStore();
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};
const rrfProps = {
  firebase: configFirebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
