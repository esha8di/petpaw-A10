import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';



const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src='https://i.ibb.co.com/gbJdPdBr/woman-grooming-golden-retriever-dog.jpg' className='w-full h-[400px] object-cover' alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co.com/whG3t3sG/full-shot-women-dog-playing-with-toy.jpg' className='w-full h-[400px] object-cover' alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src='https://i.ibb.co.com/zH23MsW9/professional-veterinarian-check-dog-breed-yorkshire-terrier-using-otoscope-pet-hospital.jpg' className='w-full h-[400px] object-cover' alt="" srcset="" /></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Slider;
