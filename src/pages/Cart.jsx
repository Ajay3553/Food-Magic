import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import CartCard from '../components/CartCard';
import { useSelector } from 'react-redux';
import { BiSad } from "react-icons/bi";
import { toast } from 'react-toastify';
import authService from '../appwrite/auth';

export default function Cart() {
  const navigate = useNavigate();
  const [animateTop, setAnimateTop] = useState(false);
  const [animateBottom, setAnimateBottom] = useState(false);
  const [userData, setUserData] = useState(null);
  const cartItems = useSelector(state => state.cart);
  useEffect(() => {
    setTimeout(() => {
      setAnimateTop(true);
      setAnimateBottom(true);
    }, 200); // slight delay to allow render first
  }, []);

  let subTotal = cartItems.reduce((total, item) => total + item.quantity*item.price, 0);
  let deliveryFee = 10;
  let taxes = Number((subTotal * 18/100).toFixed(3));
  let totalAmount = subTotal + deliveryFee + taxes;
  useEffect(() => {
    authService.getCurrentUser()
      .then(user => setUserData(user))
      .catch(err => console.log("Failed to getUser at cart:", err));
  }, []);
  function handlePlaceOrder() {
    if(userData) toast.success("Order Placed");
    else toast.error("User Not Logged In");
  }

  return (
    <div className='min-h-screen bg-slate-200 flex flex-col'>
      <div
        className={`sticky top-2 z-50 w-full flex items-center px-4 py-2 transition-all duration-700 ${
          animateTop ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        }`}
      >
        <div
          className='w-[50px] h-[50px] bg-white flex items-center justify-center rounded-md shadow-lg cursor-pointer hover:bg-slate-100 transition-transform duration-300 hover:scale-105'
          onClick={() => navigate('/')}
        >
          <FaArrowLeftLong className='text-sky-500' />
        </div>
        <span className='ml-4 text-[20px] font-semibold'>Your Cart</span>
      </div>

        {cartItems.length ? (
          <div className='flex flex-col px-4 gap-4 align-top py-2'>
            {cartItems.map((item) => (
              <CartCard name = {item.name} price = {item.price} image = {item.image} id = {item.id} key={item.id} quantity={item.quantity} />
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center text-[180%] font-bold px-2 gap-1'>
            <span>Your Cart Feeling Lonely!</span>
            <BiSad />
          </div>
        )}
        {cartItems.length ? (
          <div className='w-full border-t-2 border-gray-500 mt-8 flex justify-center'>
          <div className='flex flex-col gap-4 p-6 border-2 border-gray-300 rounded-lg shadow-lg w-[300px] mt-8 transition-all duration-300 hover:w-[350px] hover:h-[auto] hover:p-[26px]'>
            <div className='flex justify-between items-center'>
              <span className='text-lg text-gray-500 font-semibold'>Sub-total:</span>
              <span className='text-lg text-gray-500 font-bold'>Rs {subTotal} -/</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-lg text-gray-500 font-semibold'>Delivery Fee:</span>
              <span className='text-lg text-gray-500 font-bold'>Rs {deliveryFee} -/</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-lg text-gray-500 font-semibold'>Tax:</span>
              <span className='text-lg text-gray-500 font-bold'>Rs {taxes} -/</span>
            </div>
            <div className='flex justify-between items-center border-t-2 border-gray-300 pt-2'>
              <span className='text-lg text-gray-500 font-semibold'>Total:</span>
              <span className='text-lg text-gray-500 font-bold'>Rs {totalAmount} -/</span>
            </div>
          </div>
        </div>
        ) : null}
      {cartItems.length > 0 ? (
          <div className='px-5 py-8'>
            <button className='w-full h-[40px] bg-red-500 rounded-lg hover:bg-blue-300 duration-300 shadow-lg hover:scale-[1.02] transition-transform' onClick={handlePlaceOrder}>
              <span className='font-semibold text-[18px]'>Place Order</span>
            </button>
          </div>
      ) : null}
    </div>
  );
}
