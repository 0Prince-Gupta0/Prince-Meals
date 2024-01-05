import React, { useContext } from "react";
import Product from "./components/Product";
import { CartContextProvider } from "./Store/CartContext";

import Header from "./components/Header";
import Cart from "./components/Cart";
import {
  UserProgressContextProvider,
} from "./Store/UserProgressContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header></Header>
        <Product></Product>
        <Cart></Cart>
        <Checkout></Checkout>
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
