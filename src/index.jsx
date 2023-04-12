import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


// ReactDOM.render(
  root.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    // document.getElementById("root")
  );
