import React from 'react'
import Cartitem from './Cartitem'

function Cart() {
  return (
    <>
        <div className='grid sm:grid-cols-2 my-10'>
          <div>
            <Cartitem/>
          </div>
          <div className='min-h-[100px] border m-2 rounded-lg'>
            <h2 className='m-4 font-bold'>Order Summery</h2>
          </div>
          
          {/* <img className='py-10 sm:min-h-[468px] min-h-[280px] ' src="./empty_cart.avif" alt="" /> */}
        </div>
    </>
  )
}

export default Cart