const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

let initialCount = 0;
const initialState = {
  books: [],
};
/* eslint-disable no-plusplus */
const addBook = (title) => ({
  type: ADD_BOOK,
  id: ++initialCount,
  title,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default: return state;
  }
};

export { addBook, removeBook };

export default bookReducer;
