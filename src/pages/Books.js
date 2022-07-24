import React from 'react';
import BookList from '../components/BookList/BookList';
import BookInfo from '../components/BookInfo/BookInfo';
import './Books.css';

export default function Books() {
  return (
    <div className="container">
      <BookList />
      <BookInfo />
    </div>
  );
}
