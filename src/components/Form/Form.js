/* eslint-disable */
import './Form.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../../Redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const book = useSelector(state => state.book);

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({title,author}));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <div className="bookInfoContainer">
        <h3>ADD NEW BOOK</h3>
        <form className="form" onSubmit={handleAddBook}>
          <input type="text" className="title" name="title" placeholder="     Book title" required value={title} onChange={(e) => setTitle(e.target.value )} />
          <input type="text" className="author" name="author" placeholder="    Book author" required value={author} onChange={(e) => setAuthor(e.target.value )} />
          <button type="submit" id="addBook" onClick={handleAddBook}>Add Book</button>
        </form>
      </div>
    </div>
  );
};
export default Form;
