/* eslint-disable react/no-unused-prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../../Redux/books/books';
import Book from '../Book/Book';
import './BookList.css';

export default function BookList() {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks);
  }, []);

  return (
    <div className="booksContainer">
      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          id={book.id}
          key={book.id}
          category={book.category}
        />
      ))}
    </div>
  );
}
