import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { SearchProvider } from "./context/SearchContext";
import { InputProvider } from "./context/InputsContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <InputProvider>
        <App />
        </InputProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
