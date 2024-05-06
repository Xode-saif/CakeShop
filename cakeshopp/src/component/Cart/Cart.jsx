import React,{useState} from 'react'
import Cartitem from './Cartitem'
import { useSelector } from 'react-redux'
import Popup from './Popup';

function Cart() {
  const TotalCount = useSelector(state=>state.Count);
  const dataArray = useSelector(state=>state.cartItems);
  let totalPrice = dataArray.reduce((acc,data)=> acc + parseInt(data.price),0);

  //popup
  const[showPopup,setShowPopup] = useState(false);
  if(dataArray.length===0){
    return (
      <img className='py-10 sm:min-h-[468px] min-h-[280px] ' src="../empty_cart.avif" alt="empty_cart" />
    )
  }
  // const isMobile = window.matchMedia('(max-width: 640px)').matches;
  return (
    <>
        <div className='grid sm:grid-cols-2 my-10'>
          <div className='max-h-[400px] overflow-y-auto'>
            <Cartitem/>
          </div>
          <div className='sm:max-h-[400px] h-[270px] border m-2 rounded-lg flex flex-col'>
            <div>
              <h2 className='mt-4 ml-4 font-bold text-gray-500 text-left'>Order Summery</h2>
              <h2 className='m-4 font-bold text-gray-500 text-left'>Total Item : {TotalCount}</h2>
              <h2 className='mb-4 ml-4 font-bold text-gray-500 text-left'>Grand total : ₹ {totalPrice}</h2>
            </div>

            <div className='mt-auto '>
              {/* <button className="   bottom-0  text-orange border bg-orange-700  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 m-5 focus:outline-none "
                > CONTINUE SHOPPING</button> */}
              <button 
              onClick={() =>setShowPopup(true)}
              className=" bottom-0 text-white border bg-orange-700  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 ml-0 m-5 focus:outline-none "
                > PLACE ORDER</button>
                {showPopup && <Popup onClose={() =>setShowPopup(false)}/>}
            </div>
            
          </div>
        </div>
        
    </>
  )
}

export default Cart