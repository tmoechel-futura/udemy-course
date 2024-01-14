import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  console.log(onSubmit);

  const [title, setTitle] = useState(book.title);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("change title in Edit");
    event.preventDefault();
    setTitle(title);
    onSubmit(title, book.id);
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg h-44 flex items-center">
      <div className="ml-4">
        <label className="text-xl">Change Title</label>
        <form className="mt-4" onSubmit={handleSubmit}>
          <label className="block">Title</label>
          <input className="input" value={title} onChange={handleInputChange} />
          <button className="button mt-4"> Save</button>
        </form>
      </div>
    </div>
  );
}

export default BookEdit;
