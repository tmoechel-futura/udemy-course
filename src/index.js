import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return <h2> Hello React </h2>;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
