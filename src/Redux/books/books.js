const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const LOADED_BOOK = 'bookstore/books/LOADED_BOOK';

const initialState = [];

export function booksLoaded(books) {
  return {
    type: LOADED_BOOK,
    payload: books,
  };
}

const addBook = (book) => async function addBookAsync(dispatch) {
  const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FQcJl8BQUEjJZ87dvIFO/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      item_id: book.id,
      category: book.category,
      title: book.title,
      author: book.author,
    }),
  });
  if (result.ok) {
    dispatch({ type: ADD_BOOK, payload: book });
  }
};

const removeBook = (id) => async function removeBookAsync(dispatch) {
  const result = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FQcJl8BQUEjJZ87dvIFO/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  if (result.ok) {
    dispatch({ type: REMOVE_BOOK, payload: id });
  }
};

export async function loadBooks(dispatch) {
  try {
    const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FQcJl8BQUEjJZ87dvIFO/books');
    const data = await result.json();
    const books = Object.keys(data).map((key) => ({
      id: key,
      ...data[key][0],
    }));
    if (books.length === 0) {
      throw new Error('There are no books.');
    }
    dispatch(booksLoaded(books));
  } catch (error) {
    dispatch(booksLoaded([]));
  }
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_BOOK:
      return action.payload;

    case ADD_BOOK:
      return [action.payload, ...state];

    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.payload),
      ];

    default:
      return state;
  }
};

export { addBook, removeBook };

export default bookReducer;
