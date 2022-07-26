import React from 'react';
import Book from '../Book/Book';
import './BookList.css';

export default function BookList() {
  return (
    <div className="booksContainer">
      <Book title="The Hunger Games" author="Suzanne Collins" />
      <Book title="Dune" author="Frank Herbert" />
      <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    </div>
  );
}
