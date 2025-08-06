import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../store/cartSlice';

function CartCard({name, id, price, image, quantity}) {
    const dispatch = useDispatch();
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between border-2 border-black rounded-lg hover:border-green-300'>
        <div className='w-full h-full flex gap-5'>
            <div className='w-full aspect-[3/4] overflow-hidden'>
                <img src={image} alt="" className='object-cover  w-full h-full pointer-events-none' loading='lazy'/>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <div className='text-lg text-gray-600 font-semibold'>
                    {name}
                </div>
                <div className='w-[100px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-bold border-2 border-sky-300 text-xl'>
                    <button className='w-[30%] h-full bg-white text-sky-400 hover:bg-gray-300' onClick={() => dispatch(DecrementQty(id))}>-</button>
                    <span className='w-[40%] h-full bg-slate-100 flex justify-center items-center text-sky-400'>{quantity}</span>
                    <button className='w-[30%] h-full bg-white text-sky-400 hover:bg-gray-300' onClick={() => dispatch(IncrementQty(id))}>+</button>
                </div>
            </div>
        </div>
        <div className='w-full h-full flex justify-end items-center transform -translate-x-5'>
            <div className='font-semibold text-lg px-5'>
                Rs {price} -/
            </div>
            <div className='flex items-center w-9'>
                <MdDelete className='w-8 h-[80%] text-red-500 hover:text-red-300 cursor-pointer hover:w-9' onClick={() => dispatch(RemoveItem(id))}/>
            </div>
        </div>
    </div>
  )
}

export default CartCard