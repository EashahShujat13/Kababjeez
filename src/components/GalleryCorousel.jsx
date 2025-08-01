import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/gallPIC/pic23.jpg';
import img2 from '../assets/gallPIC/7.jpg';
import img3 from '../assets/gallPIC/5.jpg';
import img4 from '../assets/gallPIC/4.jpg';
import img5 from '../assets/gallPIC/8.jpg';

const images = [img1, img2, img3, img4, img5];

function CorouselAuto  () {
  return (
    <div className="px-4 py-12 sm:py-16 text-center relative">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E3DAC9] font-serif mb-4 uppercase tracking-widest">
        Gallery
      </h2>
      <div className="w-20 h-1 bg-[#CCA43B] mx-auto mb-10 rounded"></div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3020 }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 10 },
          480: { slidesPerView: 1.5, spaceBetween: 12 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="mySwiper custom-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-[90%] sm:w-[260px] h-[280px] mx-auto p-2 bg-white/5 border border-[#E3DAC9] shadow-md rounded-md">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrow Styles */}
      <style jsx="true">{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #E3DAC9 !important;
          scale: 1.1;
        }
      `}</style>
    </div>
  );
}

export default CorouselAuto;
