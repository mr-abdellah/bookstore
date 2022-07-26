import React from 'react';
import BookList from '../components/BookList/BookList';
import Form from '../components/Form/Form';
import './Books.css';

export default function Books() {
  return (
    <div className="container">
      <BookList />
      <Form />
    </div>
  );
}
