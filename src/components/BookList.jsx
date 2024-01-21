import BookShow from "./BookShow";
import { useBookContext } from "../hooks/useBooksContext";

function BookList() {
  const { books } = useBookContext();

  const BookList = books.map((book) => {
    return (
      <div key={book.id}>
        <BookShow book={book} />
      </div>
    );
  });

  return <div className="flex gap-3 flex-wrap">{BookList}</div>;
}

export default BookList;
