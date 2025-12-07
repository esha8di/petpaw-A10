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
        <SwiperSlide>
          <div className="relative">
             <img src='https://i.ibb.co.com/gbJdPdBr/woman-grooming-golden-retriever-dog.jpg' className='w-full h-[400px] object-cover' alt="" srcset="" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                Find Your Furry Friend Today!
              </h2>
            </div>
            

          </div>
           </SwiperSlide>
         
        <div>
          
        <SwiperSlide><img src='https://i.ibb.co.com/whG3t3sG/full-shot-women-dog-playing-with-toy.jpg' className='w-full h-[400px] object-cover' alt="" srcset="" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                Adopt, Don’t Shop — Give a Pet a Home.
              </h2>
            </div>
        </SwiperSlide>
          
        </div>

        <div className="relative">
           <SwiperSlide><img src='https://i.ibb.co.com/zH23MsW9/professional-veterinarian-check-dog-breed-yorkshire-terrier-using-otoscope-pet-hospital.jpg' className='w-full h-[400px] object-cover' alt="" srcset="" />
           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
               Because Every Pet Deserves Love and Care.
              </h2>
            </div>
           </SwiperSlide>

        </div>
         
       
    </Swiper>
    </div>
  );
};

export default Slider;
