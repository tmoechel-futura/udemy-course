import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onTitleChange }) {
  const [inEditMode, setInEditMode] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };
  const handleEdit = () => {
    setInEditMode(!inEditMode);
  };

  const onSubmit = (title, id) => {
    console.log(book.title);
    onTitleChange(title, id);
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
          <button onClick={handleDelete} className="button m-2">
            Delete
          </button>
          <button onClick={handleEdit} className="button m-2">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
