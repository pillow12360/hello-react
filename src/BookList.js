import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => {
        return (
          <Book title={book.title} author={book.author} year={book.year} />
        );
      })}
    </div>
  );
};

export default BookList;
