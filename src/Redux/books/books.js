const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

let initialCount = 1;
const initialState = {
  books: [
    {
      id: 1,
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
    },
    {
      id: 2,
      title: 'Why We Sleep',
      author: 'Matthew Walker',
    },
    {
      id: 3,
      title: 'The richest man in babylon',
      author: 'George S. Clason',
    },
  ],
};
/* eslint-disable no-plusplus */
const addBook = ({ title, author }) => ({
  type: ADD_BOOK,
  id: initialCount++,
  title,
  author,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initialState.books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default: return state;
  }
};

export { addBook, removeBook };

export default bookReducer;
