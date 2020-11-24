import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./store/reducer";
import App from "./App";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title="My Person Manager" />
    </Provider>
  </React.StrictMode>,
  rootElement
);
