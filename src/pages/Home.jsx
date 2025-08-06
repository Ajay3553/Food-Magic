import React, { useState, useContext } from 'react'
import Nav from '../components/Nav'
import categories from '../Category'
import FoodCard from '../components/FoodCard'
import foodItems from '../food'
import { dataContext } from '../context/UserContext';
import { useSelector } from 'react-redux'
function Home() {

  let {category, setCategory, input} = useContext(dataContext)
  function handleSetCategory(category){
    if(category === "All") setCategory(foodItems);
    else{
      let newFoodItems = foodItems.filter((item) => (item.food_category === category))
      setCategory(newFoodItems);
    }
  }
  return (
    <div className='w-full min-h-screen bg-slate-200 overflow-x-hidden'>
      <Nav />
      {(input) ? (null) : (
        <div className='flex flex-wrap justify-center gap-5'>
          {categories.map((item) => (
            <div key={item.name} className='bg-white p-3 shadow-xl rounded-lg hover:bg-sky-200 cursor-pointer transition-all duration-400' onClick={() => {handleSetCategory(item.name)}}>
              <div className='text-center font-medium'>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='w-full flex flex-wrap justify-center items-center gap-4 pt-8 pb-8'>
        {category.length > 0 ? (
          category.map((item) => (
            <FoodCard name={item.food_name} id={item.id} price={item.price} image={item.food_image} type={item.food_type} key={item.id}/>
          ))
        ) : (<div className='text-xl font-semibold text-gray-500'> No dish Found </div>)}
      </div>
    </div>
  )
}

export default Home
