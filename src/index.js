import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootStore from "./redux/store";

import App from "./App";
import "./index.scss";
import ErrorBoundary from "./components/errorBoundary";
import ContextProvider from "./context/context";

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <Provider store={rootStore}>
        <BrowserRouter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);
