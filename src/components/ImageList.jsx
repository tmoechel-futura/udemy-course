import ImageShow from "./ImageShow";
import Image from "./ImageShow";

function ImageList({ images }) {
  console.log(images);
  const imageList = images.map((image) => {
    return <ImageShow image={image} />;
  });
    return <div> {imageList}</div>;
}

export default ImageList;
