import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
    },
    {
      id: uuidv4(),
      title: 'Why We Sleep',
      author: 'Matthew Walker',
    },
    {
      id: uuidv4(),
      title: 'The richest man in babylon',
      author: 'George S. Clason',
    },
  ],
};

console.log(initialState.books);
console.log(initialState.books.length);
/* eslint-disable no-plusplus */
const addBook = ({ title, author }) => ({
  type: ADD_BOOK,
  id: uuidv4(),
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
      return [...state.filter((book) => book.id !== action.id)];

    default: return state;
  }
};

export { addBook, removeBook };

export default bookReducer;
