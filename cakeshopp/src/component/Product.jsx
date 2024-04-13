import React, { useState, useEffect,useId} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import Card from './Card'
import {useDispatch} from 'react-redux';
import { addToCart } from '../Store/cartSlice';
const images = [
  '/image1.jpg',
  '/image4.jpg',
  '/image1.jpg',
  '/image4.jpg',
];
const data = [
  {
    title:"Chocolate Cake",
    price:200,
    imageUrl:"/image1.jpg",
    rating:"4.3"
  },
  {
    title:"StrowBerry Cake",
    price:250,
    imageUrl:"/image2.jpg",
    rating:"4.3"
  },
  {
    title:"Fruit Cake",
    price:300,
    imageUrl:"/image3.jpg",
    rating:"4.6"
  },
  {
    title:"Vanella Cake",
    price:200,
    imageUrl:"/image4.jpg",
    rating:"4.5"
  }
]

function Product() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [message, setMessage] = useState("");

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide - 1 < 0 ? images.length - 1 : prevSlide - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const autoSlideTimer = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(autoSlideTimer);
    };
  }, [currentSlide]);

  //navigate
  const navigate = useNavigate();
  //param
  const {productId} = useParams();
  //dispatch
  const dispatch = useDispatch();
  
  const handleGoToCart = () => {
    dispatch(addToCart({price:data[0].price,name:data[0].title,quantity:1,id:productId,message:message}));
    navigate('/product/cart');
  };
  return (
    <>
      <div className='m-5 grid sm:grid-cols-2 gap-5'>
        {/* <img className='py-10 sm:min-h-[468px] min-h-[280px] ' src="./empty_cart.avif" alt="" />
        <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4
        focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 
        focus:outline-none">Shop</button> */}

        <div className="mt-5 relative w-full h-96">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              ))}
                <button onClick={prevSlide}
                    type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    onClick={nextSlide}
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                    </span>
                </button>
        </div>

        {/* product detail */}
        <div className=' lg:overflow-y-auto lg:h-38'>
            <p className=' text-left mt-4 font-mono text-lg text-bold'>Our Classic Chocolate Truffle Cake</p>
            <p className='mt-2 text-left'>4.9 <p className='text-yellow-400 inline font-mono'> &#9733;</p> (50+ Reviews)</p>
            <div className='mt-7 text-left'><span className=' text-left line-through text-gray-600 mr-2 text-2xl'>₹ 599   </span><span className='text-2xl mr-2 font-bold'>₹ 499</span> 
            <span className=' text-green-500 text-2xl'>(10% OFF)</span></div>
            <div className='mt-7 flex text-left'>
              <form class="max-w-lg ">
              <span className='font-semibold'>Select Weight</span>
                <select class="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
                  <option >Choose a size</option>
                  <option >0.5 Kg</option>
                  <option >1 Kg</option>
                  <option >1.5 Kg</option>
                  <option >2 Kg</option>
                </select>
              </form>
            </div>
            <div className='mt-5 text-left'>
              <span className='font-semibold'>Messsage On Cake</span>
              <input className= 'mt-2 w-full h-10 placeholder-slate-400 border border-dashed border-amber-600 rounded-lg' type="text" placeholder='  Enter Your Message...' onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className='mt-7 border border-dashed border-amber-500'></div>
            <div className='mt-5 text-left'>
              <h2 className='font-semibold'>Product Description</h2>
              <p className='font-sansn text-gray-600'>The classic chocolate truffle cake layered with chocolate ganache frosting & adorned with dark chocolate truffle glaze.</p>
            </div>
            <div className='mt-7 mb-7 grid sm:grid-cols-2 gap-5'>
              <button className="text-orange bg-white border hover:bg-orange-700 hover:text-white  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
              onClick={handleGoToCart}>Add to cart</button>
              <button className="text-white bg-orange-700 hover:bg-orange-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Buy Now</button>
            </div>
            <div className='sm:m-[100px] sm:my-[40px]'>
              <img src="../product_info.avif" alt="info" />
            </div>
        </div>
      </div>
      {/* may like more */}
      <div>
          <div className='ml-4 text-left'>
            <h2 className='font-semibold text-lg '>You may also like</h2>
          </div>
          <div className='grid  sm:grid-cols-5 gap-[100px]'>
            {data.map((item)=>(
              <Card 
              key={useId()}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              rating={item.rating}
              />
            ))}
          </div>
      </div>
    </>
  )
}

export default Product