import { createContext, useCallback, useState } from "react";
import axios from "axios";

function Provider({ children }) {
  const [books, setBooks] = useState([
    { id: 1, title: "New Age" },
    { id: 2, title: "The Unicorn" },
  ]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }, []);

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    setBooks([...books, response.data]);
  };

  const handleDeleteBookById = async (id) => {
    console.log("book id to delete:", id);
    await axios.delete(`http://localhost:3001/books/${id}`);
    const newBooksList = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBooksList);
  };

  const handleTitleChangeById = async (title, id) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const bookState = {
    books,
    handleTitleChangeById,
    handleCreateBook,
    handleDeleteBookById,
    fetchBooks,
  };
  return (
    <BookContext.Provider value={bookState}>{children}</BookContext.Provider>
  );
}

const BookContext = createContext();

export { Provider };
export default BookContext;
