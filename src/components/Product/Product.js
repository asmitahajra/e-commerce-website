import PropTypes from 'prop-types';
import React from 'react';
// import './Product.css';
import Counter from '../Counter/Counter';
import styles from './Product.module.css';
// import { ThemeContext } from '../../ThemeContext';

const Product = ({ product, onIncrement, onDecrement }) => {
  // const Theme = useContext(ThemeContext);
  // const currentTextColor = Theme.color;
  // const { product, onIncrement, onDecrement } = props;
  const {
    // eslint-disable-next-line react/prop-types
    name, price, count, image,
  } = product;
  return (
    <div data-testid="counter" className={styles.product_card_light}>
      <div className="details">
        <img data-testid="card-img" src={image} alt={name} className={styles.image} />
        {/* <p>{company}</p> */}
        <p><b>{name}</b></p>
        <p>1 kg</p>
      </div>
      <div className={styles.check}>
        <p>
          <b>
            MRP
            {' '}
            {price}
            /-
          </b>
        </p>
        <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    // company: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Product;
