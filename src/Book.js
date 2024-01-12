import React from "react";

const Book = ({ title, author, year }) => {
  return (
    <div>
      <h2>도서명 : {title}</h2>
      <h3>저자 : {author}</h3>
      <p>출판 년도 : {year}</p>
    </div>
  );
};

export default Book;
