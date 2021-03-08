import PropTypes from 'prop-types';
import React from 'react';
import Product from '../Product/Product';
import './Home.css';
import Count from '../Count/Count';

const Home = ({ onIncrement, onDecrement, products }) => {
  const allProducts = products.map((product) => (
    <Product
      key={product.id}
      product={product}
      onIncrement={() => onIncrement(product.id)}
      onDecrement={() => onDecrement(product.id)}
    />
  ));
  return (
    <>
      <Count />
      <div className="home-page">
        <h1>Fruits and Vegetables</h1>
        <div className="products">
          {allProducts}
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Home;
