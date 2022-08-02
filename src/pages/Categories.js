import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../Redux/categories/categories';
import './Categories.css';

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  return (
    <div id="categories-container">
      <button type="submit" id="addCategory" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h5>
        {typeof categories === 'string' ? categories : ''}
      </h5>
    </div>
  );
}
