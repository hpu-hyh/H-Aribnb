import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import App from "@/App";
import "normalize.css";
import "./assets/css/index.less";
import 'antd/dist/antd.less'
import store from "./store";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter fallback="H_yh">
          <App />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
