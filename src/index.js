import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../src/styles/globalStyles";
import { Provider } from "react-redux";
import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <BrowserRouter basename="fake-store-react-redux/">
      <GlobalStyles />
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
