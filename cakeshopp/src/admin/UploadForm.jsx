import React,{useState} from 'react'
import axios from 'axios'
const BASE_URL ='http://localhost:8000'
function Form() {
  const [name, setName] = useState('');
  const [price,setPrice] = useState('');
  const [rating,setRating] = useState('');
  const [desc ,setDesc] = useState('');
  //upload image
  const [file, setFile] = useState();
  // console.log(file,12);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('rating', rating);
    formData.append('desc', desc);
    
    try {
      const response = await axios.post(`${BASE_URL}/user/setData`,
      formData
      ).then(res=>console.log(res))
      .catch(err=>console.log(err));
      if(response.data.success){
        console.alert("Data uploaded successfully");
        setName("");setDesc("");setPrice("");setRating("");setFile(null);
      }else{
        console.alert("There is a problem uploading data");
      }
    } catch (error) {
      console.log(error);
    }
    // setFormData({name:"",price:"",rating:"",desc:""});
  }
  return (
    <div className='grid grid-cols-12'>
      {/* <div className='col-span-3 border rounded-md shadow-md m-2'>
        <a href=""> Upload</a>
      </div> */}
      <div className='col-span-12'>
        <form onSubmit={handleSubmit} className='flex flex-col  '>
          <div className='grid sm:grid-cols-12 grid-cols-6 m-5'>
            <label className='mr-3 text-bold pt-2 col-span-2 sm:col-span-2'>Product Name</label>
            <input className="border-2 px-3 py-4 col-span-4 sm:col-span-10 sm:w-[600px] sm:h-[42px] w-[350] h-[42px]  border-gray-300 rounded-md " type="text" placeholder=' Product Name'
            onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className='grid sm:grid-cols-12 grid-cols-6 m-5'>
            <label className='mr-3 text-bold pt-2 col-span-2 sm:col-span-2'>Price </label> 
            <input className="border-2 px-3 py-4 col-span-4 sm:col-span-10 sm:w-[600px] sm:h-[42px] w-[350] h-[42px] border-gray-300 rounded-md " type="text" placeholder=' Product Price'
            onChange={(e)=>setPrice(e.target.value)}/>
          </div>
          <div className='grid sm:grid-cols-12 grid-cols-6 m-5'>
            <label className='mr-3 text-bold pt-2 col-span-2 sm:col-span-2'>Rating</label>
            <input className="border-2 px-3 py-4 col-span-4 sm:col-span-10 sm:w-[600px] sm:h-[42px] w-[350] h-[42px] border-gray-300 rounded-md " type="text" placeholder=' Product Rating'
            onChange={(e)=>setRating(e.target.value)}/>
          </div>
          <div className='grid sm:grid-cols-12 grid-cols-6 m-5'>
            <label className='mr-3 text-bold pt-2 col-span-2 sm:col-span-2'>Product Disc.</label>
            <input className="border-2 px-3 py-4 col-span-4 sm:col-span-10 sm:w-[600px] sm:h-[42px] w-[350] h-[42px] border-gray-300 rounded-md " type="text" placeholder=' Product Description'
            onChange={(e)=>setDesc(e.target.value)}/>
          </div>
          <div className='p-5 ml-[100px] flex'>
            <input type="file" name="file" onChange={ e => setFile(e.target.files[0])}/>
            {/* <button className='' onClick={handleSubmit}>Upload</button> */}
          </div>
          <div className='flex justify-center m-5'>
            <button type='submit' className=' px-3 py-2 items-end bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white h-10 w-20'>Upload</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Form