import React from "react";
import ReactDom from "react-dom";
import { compose, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import './index.css'

import reducers from './reducers'

const store=createStore(reducers,compose(applyMiddleware(thunk)));

ReactDom.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root")
);
