import React from 'react'

function CatagoryMenu() {
  return (
    <div className='flex flex-col text-left justify-between'>
        <h3 className='font-semibold text-xl mx-3 my-2 ml-0'>Find the best cake</h3>
        <div className='justify-start flex gap-3 overflow-x-scroll scroll-smooth'>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white' >All</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white' >Chocolate</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white' >Vanella</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white' >StrowBerry</button>
        </div>
    </div>
  )
}

export default CatagoryMenu