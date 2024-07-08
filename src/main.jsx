import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Productprovider } from "./context/Productprovider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Productprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Productprovider>
);
