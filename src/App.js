import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "New Age" },
    { id: 2, title: "The Unicorn" },
  ]);

  const handleCreateBook = (title) => {
    var newBook = { title, id: books.length + 1 };
    setBooks([...books, newBook]);
  };

  const handleDeleteBookById = (id) => {
    console.log("book id to delete:", id);
    const newBooksList = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBooksList);
  };

  const handleTitleChange = (title, id) => {
    console.log("change title for id", id);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookCreate onCreate={handleCreateBook} />
      <BookList
        books={books}
        onDelete={handleDeleteBookById}
        onTitleChange={handleTitleChange}
      />
    </div>
  );
}
export default App;
