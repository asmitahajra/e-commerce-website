import React from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

const Counter = ({ count, onDecrement, onIncrement }) => (
  <div className="counter">
    <button type="button" onClick={onIncrement}>+</button>
    <p className="inBasket">
      {count}
      {' '}
      in Basket
    </p>
    <button type="button" onClick={onDecrement}>-</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counter;
