import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const listener = () => {
      console.log("clicked");
    };
    // problem is that without cleanUp this will continously
    // add addEventListeners
    document.body.addEventListener("click", listener);
    // cleanUp is called on the following render
    return () => {
      document.body.removeEventListener("click", listener);
    };
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  );
}

export default App;
