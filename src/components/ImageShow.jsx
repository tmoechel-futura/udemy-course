function ImageShow({ image }) {
  console.log(image);

  return (
    <div className="card w-96 hover:shadow-lg">
      <div>Image Show</div>
      <img alt={image.alt_description} src={image.urls.small}
        className="h-24 sm:h-48 object-cover" />
      <div className="mt-6">{image.description}</div>
    </div>
  );
}

export default ImageShow;
