import React from "react";
import ReactDOM from "react-dom";
import "./App/components/styles/index.scss";
import App from "./Main/components/App";

import rootReducer from "./Main/reducer";

import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  compose(composeWithDevTools(applyMiddleware(logger)))
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
