import React, { useContext, useEffect } from 'react'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import foodItems from '../food';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {
  const {input, setInput, category, setCategory} = useContext(dataContext);
  const navigate = useNavigate();
  useEffect(() => {
    let newList = foodItems.filter((item) => item.food_name.toLowerCase().includes(input.toLowerCase()))
    setCategory(newList)
  }, [input])
  const cartItems = useSelector((state) => state.cart)
  return (
    <div className='w-full h-[100px] flex justify-center items-center px-2 md:px-8'>
      <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl md:w-[70%]' onSubmit={(e) => e.preventDefault()}>
          <FaSearch className='text-sky-500 w-[20px] h-[20px]'/>
          <input type="text" placeholder='Search Items...' className='w-[100%] outline-none text-[16px] md:text-[20px]'
            onChange={(e) => setInput(e.target.value)} value={input}
          />
      </form>
      <div className='absolute right-2'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer hover:bg-slate-100 ' onClick={() => navigate('/cart')}>
          <span className='absolute top-0 right-1 text-[18px] text-sky-500 font-bold'>{cartItems.length}</span>
        <FaShoppingCart className='w-[30px] h-[30px] text-sky-500'/>
      </div>
      </div>
    </div>
  )
}

export default Nav