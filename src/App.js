import { useState, useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "New Age" },
    { id: 2, title: "The Unicorn" },
  ]);

  // the empty array causes the arrow function to be called only once
  useEffect(() => {
    fetchBooks();
  },[])

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    
    setBooks(response.data);
  };

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    // var newBook = { title: response.data.title, id: response.data.id };
    setBooks([...books, response.data]);
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
      <hr class="h-px my-4 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <BookList
        books={books}
        onDelete={handleDeleteBookById}
        onTitleChange={handleTitleChange}
      />
    </div>
  );
}
export default App;
