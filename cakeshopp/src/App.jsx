import { useId, useState ,useEffect} from 'react'
import './App.css'
import Layout from './Layout'
import Carousal from './component/Carousal'
import Card from './component/Card'
import CatagoryMenu from './component/CatagoryMenu'
import axios from 'axios'
const BASE_URL ='http://localhost:8000';

function App() {
  const [datalist,setDatalist] = useState([]);
  const fetchdata = async ()=>{
    try {
      const res = await axios.get(`${BASE_URL}/user/getalldata`);
      if(!res.data.success) throw new Error(res.message);
      // console.log(res.data.data);
      setDatalist(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchdata();
    window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <Carousal/>
      <CatagoryMenu/>
        <div className='flex flex-wrap justify-center lg:justify-start '>
          {datalist.map((item)=>(
            <Card 
            key={item._id}
            id={item._id}
            title={item.name}
            price={item.price}
            imageUrl={item.image}
            rating={item.rating}
            />
          ))}
        </div>
    </>
  )
}

export default App
