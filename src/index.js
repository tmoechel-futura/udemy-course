import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div>
      <textarea autoFocus={true} style={{ backgroundColor: "azure" }} />
      <textarea
        readOnly={true}
        maxLength= {3}
        spellCheck={true}
        style= {{ backgroundColor:"gray"}}      />
    </div>
  );
}

root.render(<App />);
