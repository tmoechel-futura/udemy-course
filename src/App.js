import "bulma/css/bulma.css";
import ShowAnimal from "./components/ShowAnimal";
import { useState } from "react";

function App() {
  const [animalCount, setAnimalCount] = useState(0);

  function handleAddAnimalClick() {
    setAnimalCount(animalCount + 1);
  }

  console.log(animalCount);

  return (
    <div>
      <button onClick={handleAddAnimalClick}> Add Animal </button>
      <h2> Number of animals {animalCount}</h2>
      <ShowAnimal />
    </div>
  );
}
export default App;
