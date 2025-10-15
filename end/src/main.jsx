import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./base.css";
import { store } from './app/store'
import { Provider } from 'react-redux'
import "toastify-js/src/toastify.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
