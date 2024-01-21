import { useEffect, useContext } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/BookContext";

function App() {
  const { fetchBooks } = useContext(BookContext);

  // the empty array causes the arrow function to be called only once
  // if the arrow function inside useEffect references a variable this variable can become stale
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div>
      <BookCreate />
      <hr className="h-px my-4 mt-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <BookList />
    </div>
  );
}
export default App;
