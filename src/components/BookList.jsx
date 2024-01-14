import BookShow from "./BookShow";

function BookList({ books, onDelete, onTitleChange }) {
  const BookList = books.map((book) => {
    return (
      <div key={book.id}>
        <BookShow
          book={book}
          onDelete={onDelete}
          onTitleChange={onTitleChange}
        />
      </div>
    );
  });

  return <div className="flex space-x-4">{BookList}</div>;
}

export default BookList;
