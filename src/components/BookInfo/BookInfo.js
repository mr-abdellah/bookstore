import './BookInfor.css';

function BookInfo() {
  return (
    <div className="bookInfoContainer">
      <h3>ADD NEW BOOK</h3>
      <form className="form">
        <input type="text" className="title" name="title" placeholder="     Book title" required />
        <input type="text" className="author" name="author" placeholder="    Book author" required />
        <button type="submit" id="addBook">Add Book</button>
      </form>
    </div>
  );
}
export default BookInfo;
