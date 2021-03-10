/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Order/Order';
import { Theme, ThemeContext } from './ThemeContext';
import { Basket, BasketContext } from './BasketContext';

const { default: axios } = require('axios');

const App = () => {
  // const [products, setProducts] = useState([
  //   {
  //     company: 'Fresho',
  //     image: '../assets/images/apple.jpeg',
  //     id: 1,
  //     name: 'Apple',
  //     price: 10,
  //     count: 0,
  //     category: 'Fruits & Vegatables',
  //   },
  //   {
  //     company: 'Fresho',
  //     image: '../assets/images/banana.jpeg',
  //     id: 2,
  //     name: 'Banana',
  //     price: 20,
  //     count: 0,
  //     category: 'Fruits & Vegatables',
  //   },
  //   {
  //     company: 'Fresho',
  //     image: '../assets/images/cherry.jpeg',
  //     id: 3,
  //     name: 'Cherry',
  //     price: 30,
  //     count: 0,
  //     category: 'Fruits & Vegatables',
  //   },
  //   {
  //     company: 'Fresho',
  //     image: '../assets/images/dragonfruit.jpeg',
  //     id: 4,
  //     name: 'Dragonfruit',
  //     price: 40,
  //     count: 0,
  //     category: 'Fruits & Vegatables',
  //   },
  //   {
  //     company: 'Fresho',
  //     image: '../assets/images/litchi.jpeg',
  //     id: 5,
  //     name: 'Litchi',
  //     price: 50,
  //     count: 0,
  //     category: 'Fruits & Vegatables',
  //   },
  // ]);

  const [cartItems, setCartItems] = useState([]);
  // const[orders]=useState(constants.orders);
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [theme, setTheme] = useState('white');
  const [basket, setBasket] = useState('disable');
  // const [error, setError] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState({});

  const groupByCategory = (items) => items.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  // useEffect(async () => {
  //   try {
  //     const { items, axiosError } = await axios.get('/items');
  //     if (items) {
  //       setIsLoaded(true);
  //     }
  //     if (axiosError) {
  //       setError(axiosError);
  //       setIsLoaded(true);
  //     }
  //   } catch (e) {
  //     setError(e);
  //   }
  // }, []);

  useEffect(async () => {
    const items = await axios.get('/items');
    setProducts(items.data.data);
    const filterProducts = groupByCategory(items.data.data);
    setIsLoaded(true);
    setFilteredProducts(filterProducts);
  }, []);

  // localstorage

  const onIncrement = (id) => {
    const newProducts = products.map((eachProduct) => (eachProduct.id === id ? {
      ...eachProduct,
      count: eachProduct.count + 1,
    } : eachProduct));
    setProducts(newProducts);
    const newCartItems = newProducts.filter((product) => product.count > 0);
    setCartItems(newCartItems);
    setCartTotal(cartTotal + 1);
    setBasket('active');
  };

  const onDecrement = (id) => {
    const currentItem = products.filter((product) => product.id === id);
    const canDecrementBePerformed = currentItem[0].count > 0;
    if (currentItem[0].count === 1) {
      setBasket('disable');
    }

    if (canDecrementBePerformed) {
      const newProducts = products.map((eachProduct) => (eachProduct.id === id ? {
        ...eachProduct,
        count: eachProduct.count - 1,
      } : eachProduct));
      setProducts(newProducts);
      const newCartItems = newProducts.filter((product) => product.count > 0);
      setCartItems(newCartItems);
      setCartTotal(cartTotal - 1);
    }
  };

  // const currentTheme = useContext(ThemeContext);

  const handleThemeChange = () => {
    if (theme === 'white') {
      setTheme('black');
    } else {
      setTheme('white');
    }
  };

  // const currentTheme = useContext(ThemeContext);
  // const currentBasket = useContext(BasketContext);

  return (
    <div>
      <div className="switch">
        <input type="checkbox" value="Dark mode" onClick={handleThemeChange} />
        <span>Dark Mode</span>
      </div>
      <BrowserRouter>
        <ThemeContext.Provider value={(theme === 'white' ? Theme.light : Theme.dark)}>
          <Header cartTotal={cartTotal} />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/allOrders">
              <Order cartItems={cartItems} />
            </Route>
            <Route path="/" exact>
              <BasketContext.Provider value={(basket === 'active' ? Basket.active : Basket.disable)}>
                {!isLoaded ? <div style={{ textAlign: 'center' }}>Loading</div>
                  : (
                    <Home
                      filteredProducts={filteredProducts}
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                    />
                  )}
              </BasketContext.Provider>
            </Route>
          </Switch>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
