import { useState } from "react";

import ShowAnimal from "./components/ShowAnimal";

function getRandomAnimal() {
  const imgArray = [
    "imgBird",
    "imgCat",
    "imgCow",
    "imgDog",
    "imgGator",
    "imgHorse",
  ];
  const index = Math.floor(Math.random() * imgArray.length);
  return imgArray[index];
}

function App() {
  const [animals, setAnimals] = useState([]);

  function handleAddAnimalClick() {
    setAnimals([...animals, getRandomAnimal()]);
  }

  return (
    <div>
      <button
        className="btn bg-gray-200 mt-3 hover:shadow-inner"
        onClick={handleAddAnimalClick}
      >
        {" "}
        Add Animal{" "}
      </button>
      <div>
        <div className="md:flex md:justify-start md:items-center flex-wrap">
          {animals.map((animal, index) => {
            return <ShowAnimal type={animal} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
