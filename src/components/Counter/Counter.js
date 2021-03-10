import React, { useContext } from 'react';
import './Counter.scss';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';
import { BasketContext } from '../../BasketContext';

const Counter = ({ count, onDecrement, onIncrement }) => {
  const Theme = useContext(ThemeContext);
  const Basket = useContext(BasketContext);

  return (
    <div className="counter">
      <button type="button" onClick={onIncrement} style={{ background: Theme.backgroundColor, color: Theme.color }}>+</button>
      <p className="inBasket" style={{ background: Basket.backgroundColor }}>
        {count}
        {' '}
        in Basket
      </p>
      <button type="button" onClick={onDecrement} style={{ background: Theme.backgroundColor, color: Theme.color }}>-</button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counter;
