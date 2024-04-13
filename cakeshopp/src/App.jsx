import { useId, useState ,useEffect} from 'react'
import './App.css'
import Layout from './Layout'
import Carousal from './component/Carousal'
import Card from './component/Card'
import CatagoryMenu from './component/CatagoryMenu'
import axios from 'axios'
const BASE_URL ='http://localhost:8000';

const data = [
  {
    title:"Chocolate Cake",
    price:"200",
    imageUrl:"/image1.jpg",
    rating:"4.3"
  },
  {
    title:"StrowBerry Cake",
    price:"250",
    imageUrl:"/image2.jpg",
    rating:"4.3"
  },
  {
    title:"Fruit Cake",
    price:"300",
    imageUrl:"/image3.jpg",
    rating:"4.6"
  },
  {
    title:"Vanella Cake",
    price:"200",
    imageUrl:"/image4.jpg",
    rating:"4.5"
  }
]
function App() {
  const [datalist,setDatalist] = useState([]);
  const fetchdata = async ()=>{
    try {
      const res = await axios.get(`${BASE_URL}/user/getalldata`);
      if(!res.data.success) throw new Error(res.message);
      console.log(res.data.data);
      setDatalist(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchdata();
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
            imageUrl={item.imageUrl}
            rating={item.rating}
            />
          ))}
        </div>
    </>
  )
}

export default App
