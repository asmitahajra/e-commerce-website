import React from 'react';

export const Basket = {
  disable: {
    backgroundColor: 'gray',
    color: 'black',
  },

  active: {
    backgroundColor: 'yellow',
    color: 'white',
  },

};

export const BasketContext = React.createContext(Basket.disable);
