import React, { useEffect,useState } from 'react'
import Meal from './Meal';



const Product = () => {

    const [availableItems, setAvailableItems]=useState([]);

useEffect(()=>{
async function fetchMeal () {
    try{
        const response=await fetch("http://localhost:3000/meals");
        
        if(!response.ok)
        {
            throw new Error("Unable to Fetch");
        }
        const data=await response.json();
        setAvailableItems(data);
        // console.log(data);
    }
    catch(error)
    {
         //error
          console.log("Error");
    }
    
}
fetchMeal();
},[])

console.log(availableItems);
  return (
      <ul id='meals'>
        {availableItems.map(meal=>
            <Meal key={meal.id} meal={meal}></Meal>
        )}
      </ul>
  )
}

export default Product;