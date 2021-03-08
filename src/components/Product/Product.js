/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
// import './Product.css';
import Counter from '../Counter/Counter';
import styles from './Product.module.css';

const Product = (props) => {
  const { product, onIncrement, onDecrement } = props;
  const {
    name, price, count, image, company,
  } = product;
  return (
    <div className={styles.product_card}>
      <div className="details">
        <img src={image} alt={name} className={styles.image} />
        <p>{company}</p>
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
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Product;
