import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../../Redux/books/books';
import './Book.css';
import './Circle.css';

export default function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.book);

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
    console.log(books);
  };
  console.log(books);

  return (
    <div className="bookContainer">

      <div className="part1">
        <ul className="info">
          <li>Action</li>
          <li>{title}</li>
          <li>{author}</li>
        </ul>

        <ul className="CRE">
          <button type="button" id="comments">Comments</button>
          <div className="divider" />
          <button type="button" id="remove" onClick={handleRemoveBook}>Remove</button>
          <div className="divider" />
          <button type="button" id="edit">Edit</button>
        </ul>
      </div>

      <div className="percentage">
        <div className="ratio" style={{ '--ratioDeg': 0.65 }} />
        <div className="completed">
          <p id="percentage">64%</p>
          <p>Completed</p>
        </div>
      </div>

      <ul className="status">
        <li>Current Chapter</li>
        <li>Chapter 17</li>
        <button type="button" id="update">UPDATE PROGRESS</button>
      </ul>

    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
