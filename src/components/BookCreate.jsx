import { useState } from "react";
import { useBookContext } from "../hooks/useBooksContext";

function BookCreate() {
  const [title, setTitle] = useState("The Green Mile");
  const { handleCreateBook } = useBookContext();
  

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateBook(title);
    setTitle("");
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg h-44 flex items-center">
      <div className="ml-4">
        <label className="text-xl">Add a Book</label>
        <form className="mt-4" onSubmit={handleSubmit}>
          <label className="block">Title</label>
          <input className="input" value={title} onChange={handleInputChange} />
          <button className="button mt-4"> Create</button>
        </form>
      </div>
    </div>
  );
}

export default BookCreate;
