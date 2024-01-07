import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

import getImages from "./api";
import { useState } from "react";

function App() {
  const [imageList, setImageList] = useState([]);

  const handleSearch = async (term) => {
    const images = await getImages(term);
    setImageList(images);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ImageList images={imageList} />
    </div>
  );
}
export default App;
