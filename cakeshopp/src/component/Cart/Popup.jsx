import React, { useRef,useState } from 'react'
import { useNavigate} from 'react-router-dom'
import {X} from 'lucide-react'
function Popup({onClose}) {
    //click anywhere to close
    const popupRef = useRef();
    const closepopup = (e) => {
        if(popupRef.current === e.target) {
            onClose();
        }
    }
    //handle address send it to db
    const [Number,setNumber] = useState("");
    const [Name,setName] = useState("");
    const [Locality,setLocality] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [Pincode,setPincode] = useState("");

    const navigate = useNavigate();
    function handlesubmit(e){
        e.preventDefault();
        console.log("form submitted");
        navigate('/payment')
    }
  return (
    <div ref= {popupRef} onClick={closepopup} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center w-full z-50 '>
        <div className='mt-10 flex flex-col gap-5 text-white overflow-y-auto '>
            <button onClick={onClose} className='place-self-end text-black font-bold'><X/></button>
            <div className='bg-orange-700 rounded-md px-8 py-5 flex flex-col gap-5 items-center mx-4 w-[340px] sm:w-[550px]'>
                <h1 className='text-3xl font-extrabold '>Address :-</h1>
                <form className='flex flex-col gap-3 overflow-y-auto '>

                    <label className='text-xl text-left'>Mobile No.  </label>
                    <input onChange={(e)=>setNumber(e.target.value)} className='rounded-lg px-8 py-3 text-black'type="digit" placeholder='Enter Your Mobile Number' required maxLength={10} />
                    <label className='text-xl text-left'>Name </label>
                    <input onChange={(e)=>setName(e.target.value)} className="rounded-lg px-8 py-3 text-black" type="text" placeholder='Enter Your Name' required />
                    <label className='text-xl text-left'>Locality</label>
                    <input onChange={(e)=>setLocality(e.target.value)} className='rounded-lg px-8 py-3' type="String" placeholder='Enter Your Landmark' required/>
                    <label className='text-xl text-left'>Address(Area and Street)</label>
                    <input onChange={(e)=>setAddress(e.target.value)} className="rounded-lg px-8 py-3 text-black" type="text" placeholder='Enter Your Address' required/>
                    <label className='text-xl text-left'>City/District/Town</label>
                    <input onChange={(e)=>setCity(e.target.value)} className="rounded-lg px-8 py-3 text-black" type="text" placeholder='Enter Your City' required/>
                    <label className='text-xl text-left'>Pincode</label>
                    <input onChange={(e)=>setPincode(e.target.value)} value={Pincode} className="rounded-lg px-8 py-3 text-black" type="digit" placeholder='Enter Your Pincode' required maxLength={6}/>
                </form>
                <button onClick={handlesubmit} className='mt-4 w-full flex items-start justify-center gap-2 px-5 py-3 rounded-md bg-black'>SAVE AND DELIVER HERE</button>
            </div>
        </div>
    </div>
  )
}

export default Popup