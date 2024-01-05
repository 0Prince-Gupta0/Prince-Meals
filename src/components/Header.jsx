import React ,{useContext}from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/button';
import CartContext from '../Store/CartContext';
import UserProgressContext from '../Store/UserProgressContext';
const Header = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx=useContext(UserProgressContext);
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity;
    }, 0);
  
    function handleShowCart() {
        // console.log("hello");
        userProgressCtx.showCart();
        // console.log(userProgressCtx.progress);
      }
     

  return (
    <div id="main-header">
        <div id='title'>
        <img src={logo}></img>
        <h1>Prince Meals</h1>
        </div>
       <Button textOnly={true} onClick={handleShowCart}>Cart({totalCartItems})</Button>
    </div>
  )
}

export default Header