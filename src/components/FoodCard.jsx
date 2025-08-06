import React from 'react'
import { IoLeafOutline } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux'
import { AddItems } from '../store/cartSlice';
import { toast } from 'react-toastify';

function FoodCard({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(AddItems({ id, name, price, image, quantity: 1 }));
    toast.success("Item Added");
  };

  return (
    <div className='flex flex-wrap justify-center'>
      <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-xl hover:border-2 border-blue-300 relative'>

        <div className='w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200'>
          <img
            src={image}
            alt={name}
            className='object-cover w-full h-full pointer-events-none'
            loading="lazy"
          />
        </div>

        <div className='text-2xl font-semibold'>
          {name}
        </div>

        <div className='w-full flex justify-between items-center'>
          <div className='text-lg font-bold text-sky-500'>
            Rs {price} /-
          </div>
          {type === "veg" ? (
            <div className='flex items-center gap-2 text-green-500 text-lg font-semibold'>
              <IoLeafOutline />
              <span>{type}</span>
            </div>
          ) : (
            <div className='flex items-center gap-2 text-red-500 text-lg font-semibold'>
              <GiChickenOven />
              <span>{type}</span>
            </div>
          )}
        </div>

        <button
          onClick={handleAdd}
          className='z-10 w-full bg-blue-500 text-white p-2 rounded-lg text-lg font-bold hover:bg-blue-300 transition cursor-pointer'
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default FoodCard;
