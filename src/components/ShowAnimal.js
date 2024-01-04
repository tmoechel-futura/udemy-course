import { useState } from "react";
import imgBird from "../images/bird.svg";
import imgCat from "../images/cat.svg";
import imgCow from "../images/cow.svg";
import imgDog from "../images/dog.svg";
import imgGator from "../images/gator.svg";
import imgHeart from "../images/heart.svg";
import imgHorse from "../images/horse.svg";

const svgMap = {
  imgBird,
  imgCat,
  imgCow,
  imgDog,
  imgGator,
  imgHeart,
  imgHorse,
};
function ShowAnimal({ type }) {
  const [imageClickCount, setImageClickCount] = useState(0);
  const onIncreaseImageSize = () => {
    setImageClickCount(imageClickCount + 1);
  };
  return (
    <div onClick={onIncreaseImageSize} className="card hover:shadow-lg mr-4">
      <p> {imageClickCount} </p>
      <img
        alt="animal"
        src={svgMap[type]}
        className="w-full h-36 sm:h-48 object-cover"
      />
      <img
        alt="heart"
        src={imgHeart}
        style={{ width: 10 + 10 * imageClickCount + "px" }}
      />
    </div>
  );
}

export default ShowAnimal;
