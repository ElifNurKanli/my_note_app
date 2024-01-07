import React from "react";
import ReactDOM from "react-dom/client";
import NoteApp from "./components/NoteApp";
import "./index.css";
import "@picocss/pico";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);
