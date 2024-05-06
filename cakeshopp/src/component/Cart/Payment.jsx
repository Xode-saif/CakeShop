import React from 'react'
import{Outlet,useNavigate} from 'react-router-dom'
function Payment() {
  const navigate = useNavigate();
  const handlecod = () => {
    navigate('/payment/cashondelivery')

  }
  return (
    <div className='w-full grid  sm:grid-cols-12 border rounded-lg h-[500px] my-5 gap-3'>
      <div className='sm:col-span-3 h-[250px] w-[268px]  rounded-lg my-5 mx-3 flex flex-col justify-center'>
        <button onClick={handlecod} className='w-full shadow-lg font-bold border rounded py-2 px-2 my-2 mx-2'>Cash On Delivery</button>
        <button className='w-full shadow-lg font-bold border rounded py-2 px-2 my-2 mx-2'>Upi</button>
        <button className='w-full shadow-lg font-bold border rounded py-2 px-2 my-2 mx-2'>Card</button>
        <button className='w-full shadow-lg font-bold border rounded py-2 px-2 my-2 mx-2'>Netbanking</button>
      </div>
      <div className=' border sm:col-span-9 overflow-y-auto'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Payment