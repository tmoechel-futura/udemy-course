import { useState } from "react";
import { useBookContext } from "../hooks/useBooksContext";


import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [inEditMode, setInEditMode] = useState(false);
  const { handleDeleteBookById } = useBookContext();

  const handleButtonDeleteClick = () => {
    handleDeleteBookById(book.id);
  };

  const handleButtonEditClick = () => {
    setInEditMode(!inEditMode);
  };

  const onSubmit = (title, id) => {
    console.log("submit" + book.title);
    setInEditMode(false);
  };

  return (
    <div className="card">
      <div key={book.id} className="flex flex-col w-44">
        <div className="flex-grow m-2">
          {book.title}
          <img
            src={`https://picsum.photos/seed/${book.title}/200`}
            alt="books"
          />
          {inEditMode && <BookEdit book={book} onSubmit={onSubmit} />}
        </div>
        <div className="flex mt-auto">
          <button onClick={handleButtonDeleteClick} className="button m-2">
            Delete
          </button>
          <button onClick={handleButtonEditClick} className="button m-2">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
