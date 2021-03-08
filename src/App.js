/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Order/Order';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      products: [
        {
          company: 'Fresho',
          image: '../assets/images/apple.jpeg',
          id: 1,
          name: 'Apple',
          price: 10,
          count: 0,
        },
        {
          company: 'Fresho',
          image: '../assets/images/banana.jpeg',
          id: 2,
          name: 'Banana',
          price: 20,
          count: 0,
        },
        {
          company: 'Fresho',
          image: '../assets/images/cherry.jpeg',
          id: 3,
          name: 'Cherry',
          price: 30,
          count: 0,
        },
        {
          company: 'Fresho',
          image: '../assets/images/dragonfruit.jpeg',
          id: 4,
          name: 'Dragonfruit',
          price: 40,
          count: 0,
        },
        {
          company: 'Fresho',
          image: '../assets/images/litchi.jpeg',
          id: 5,
          name: 'Litchi',
          price: 50,
          count: 0,
        },
      ],
      cartTotal: 0,
    };
  }

  onIncrement= (id) => {
    const { products } = this.state;
    this.setState((prevState) => {
      let newState = {
        ...prevState,
        cartTotal: prevState.cartTotal + 1,
        products: products.map((eachProduct) => (eachProduct.id === id ? {
          ...eachProduct,
          count: eachProduct.count + 1,
        } : eachProduct)),
      };

      newState = {
        ...newState,
        cartItems: newState.products.filter((product) => product.count > 0),
      };
      return newState;
    });
    const { cartItems } = this.state;
    console.log(cartItems);
  };

  onDecrement = (id) => {
    const { products } = this.state;
    const currentItem = products.filter((product) => product.id === id);
    // gives array with one item
    const canDecrementBePerformed = currentItem[0].count > 0;
    // console.log(canDecrementBePerformed);
    if (canDecrementBePerformed) {
      this.setState((prevState) => {
        let newState = {
          ...prevState,
          cartTotal: prevState.cartTotal - 1,
          products: prevState.products.map((product) => ({
            ...product,
            count: (product.id === id && product.count > 0) ? product.count - 1 : product.count,
          })),
        };

        newState = {
          ...newState,
          cartItems: newState.products.filter((product) => product.count > 0),
        };
        return newState;
      });
    }
  }

  render() {
    const { cartTotal, products, cartItems } = this.state;
    return (
      <div>
        <BrowserRouter>
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
              <Home
                products={products}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
