import React from 'react'
import {useNavigate} from 'react-router-dom'
function DashButton() {
    const navigate = useNavigate();
  return (
    <div className="w-full h-screen duration-200">
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl bg-orange-500 overflow-x-scroll scroll-smooth'>
            <button onClick={() => navigate('/admin/dashboard')} className='outline-none px-4 py-1 rounded-full text-gray-600 shadow-lg bg-white font-bold' >Dashboard</button>
            <button onClick={() => navigate('/admin/upload')} className='outline-none px-4 py-1 rounded-full text-gray-600 shadow-lg bg-white font-bold' >Upload</button>
            <button onClick={() => navigate('/admin/allproduct')} className='outline-none px-4 py-1 rounded-full text-gray-600 shadow-lg bg-white font-bold' >All product</button>
            
        </div>
        </div>
    </div>
  )
}

export default DashButton