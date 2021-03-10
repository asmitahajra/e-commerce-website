/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import Product from '../Product/Product';
import './Home.scss';

const Home = ({ filteredProducts, onIncrement, onDecrement }) => (
  <div>
    {Object.keys(filteredProducts).map((category) => (
      <div key={category} className="row">
        <h1>{category}</h1>
        <div className="products">
          {filteredProducts[category].map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrement={() => onIncrement(product.id)}
              onDecrement={() => onDecrement(product.id)}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

// const hi = JSON.stringify(filteredProducts);

// Home.propTypes = {
//   filteredProducts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     // company: PropTypes.string.isRequired,
//     // image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     count: PropTypes.number.isRequired,
//     category: PropTypes.string.isRequired,
//   })).isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired,
// };

export default Home;
