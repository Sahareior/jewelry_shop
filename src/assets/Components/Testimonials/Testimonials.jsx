import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './Carousel.css';

// import required modules
import { Autoplay, Pagination} from 'swiper/modules';
import Headers from '../Shared/Headers/Headers';


export default function Tesimonials() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [data,setData] = useState([])
  

  useEffect(()=>{
    fetch('reviews.json')
    .then(res=> res.json())
    .then(item => setData(item))
  },[])

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <div className='mt-8'>
    <Headers text={'User Testimonials'}></Headers>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper p-32 overflow-hidden"
        onSlideChange={handleSlideChange}
      >
     {
        data.map(item => 
            <SwiperSlide className='overflow-hidden' key={item._id}>
         
            <img
             className={`  relative w-full help`}
              src="https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg?w=826&t=st=1696784191~exp=1696784791~hmac=9ec180bc4505639c0f9c4fd2734cd4c770149658843338f81c9d5d56ce7180c1"
              alt=""
            />
            <h1 className='absolute top-96 px-12 left-4 text-3xl text-white'> {item.review}</h1>
            <div className='absolute top-40 right-2/4 flex flex-col justify-center items-centertext-white'>
                <img className='rounded-full w-20' src="http://corano.mallthemes.com/wp-content/uploads/2018/04/testimonial2-150x150.jpg" alt="" />
            <p className='text-2xl text-white font-bold mt-4'>{item.username}</p>
            </div>
          
        </SwiperSlide>
            )
     }
      
      </Swiper>
    </div>
  );
}
