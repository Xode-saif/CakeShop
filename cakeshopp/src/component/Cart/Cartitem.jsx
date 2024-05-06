import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {currItemCount,selectTotalItems,removeFromCart} from '../../Store/cartSlice'
function Cartitem() {
  let datas = useSelector(state => state.cartItems);
  // const currCount = useSelector(state=>state.currCount);
  // console.log('this is count',currCount)
  
  //remove item from cart
  const dispatch = useDispatch();
  const handleremoveItem = (id) => {
    console.log("this is id",id);
    dispatch(removeFromCart({id:id}));
  }

  //page from here
  if (!datas ) {
    return <div>Loading...</div>; // Handle loading state or non-array cartData
  }
  return (
    // <div class="my-3 grid sm:grid-cols-12 grid-cols-2">
    <div>
          {datas.map((data) => (
            <div className="my-2 flex items-stretch shadow sm:col-span-3 justify-start">
            <div className="w-[100px] sm:w-auto  rounded-l-lg shadow sm:col-span-3">
              <img className='w-full h-full p-2 ' src="../image1.jpg" alt="cake_photo" />
            </div>
            <div className="flex-grow text-left min-h-[100px] pl-2 text-[14px] sm:text-[16px] rounded-r-lg shadow grid grid-cols-12">
              <div className='col-span-10'>
                <p className='font-mono '>{data.name}</p>
                <span className='py-4 font-semibold'> ₹ {data.price} </span><br/>
                <span className='py-4 font-semibold'> Size : {data.size}</span><br/>
              </div>
              <div className='col-span-2 flex justify-center'>
                <button onClick={()=>handleremoveItem(data.id)}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                  </svg>
                </button>
              </div>
              {/* <div className='py-3'>
                <button className="px-3 py-1 border border-gray-300 rounded-l" 
                onClick={handleid(data.id)}>
                  -
                </button>
                <span className="px-3 py-1 border-t border-b border-gray-300 inline-block">{currCount}</span>
                <button className="px-3 py-1 border border-gray-300 rounded-r">
                  +
                </button>
              </div> */}
            </div>
          </div>
          ))}
    </div>
    
  )
}

export default Cartitem