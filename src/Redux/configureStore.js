import {
  applyMiddleware, combineReducers, createStore, compose,
} from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  bookReducer,
  categoriesReducer,
});
const enhancers = compose(
  applyMiddleware(thunk),
);

const store = createStore(
  reducers,
  enhancers,
);

export default store;
