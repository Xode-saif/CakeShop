import React from 'react'
import { useSelector } from 'react-redux';
function Cartitem() {
    const datas = useSelector(state => state.cartItems);
    console.log('this is data',datas)
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
            <div className="flex-grow text-left min-h-[100px] pl-2 text-[14px] sm:text-[16px] rounded-r-lg shadow sm:col-span-9">
              <p className='font-mono '>{data.name}</p>
              <span className='py-4 font-semibold'> ₹ {data.price}</span><br/>
              <div className='py-3'>
                <button className="px-3 py-1 border border-gray-300 rounded-l" >
                  -
                </button>
                <span className="px-3 py-1 border-t border-b border-gray-300 inline-block">1</span>
                <button className="px-3 py-1 border border-gray-300 rounded-r">
                  +
                </button>
              </div>
            </div>
          </div>
          ))}
    </div>
    
  )
}

export default Cartitem