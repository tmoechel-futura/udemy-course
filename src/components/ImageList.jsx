import ImageShow from "./ImageShow";
import Image from "./ImageShow";

function ImageList({ images }) {
  console.log(images);
  const imageList = images.map((image) => {
    return (
      <div key={image.id}>
        <ImageShow image={image} />
      </div>
    );
  });
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4"> {imageList}</div>;
    </div>
  );
}

export default ImageList;
