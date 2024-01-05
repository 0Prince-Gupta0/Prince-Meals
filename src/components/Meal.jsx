import React, { useContext } from 'react'
import Button from './UI/button';
import CartContext from '../Store/CartContext';
const Meal = ({meal}) => {
    const currencyFormatter=new Intl.NumberFormat('en-US',{
        style :'currency',
        currency: 'INR'
    });
    const cartCtx=useContext(CartContext);
   
    const handleClick=()=>
    {
     cartCtx.addItem(meal);
    }
  return (
    <li className='meal-item'>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}></img>
        <div>
            <h3>{meal.name}</h3>
            <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
            <p className='meal-item-description'></p>
        </div>
        <p className='meal-item-actions'>
            <Button onClick={handleClick}>Add To Cart</Button>
        </p>
      </article>
    </li>
  )
}

export default Meal