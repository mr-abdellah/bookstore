import './Book.css';
import './Circle.css';

export default function Book(BookInfo) {
  const { title, author } = BookInfo;
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
          <button type="button" id="remove">Remove</button>
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
