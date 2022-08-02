/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import './BookList.css';

export default function BookList() {
  const books = useSelector((state) => state.book);
  return (
    <div className="booksContainer">
      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          id={book.id}
          key={book.id}
        />
      ))}
    </div>
  );
}
