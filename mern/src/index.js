import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProviderFunction } from "./context";
import {CookiesProvider} from 'react-cookie';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
    <ProviderFunction>
      <App />
    </ProviderFunction>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
