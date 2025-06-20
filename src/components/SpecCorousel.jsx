import React, { useState } from 'react';
import img1 from '../assets/specialPic/menu1.jpg';
import img2 from '../assets/specialPic/2.jpg';
import img3 from '../assets/specialPic/3.jpg';
import img4 from '../assets/specialPic/menu.jpg';
import img5 from '../assets/specialPic/4.jpg';
import img6 from '../assets/specialPic/pic.jpg';
import img7 from '../assets/specialPic/5.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

function Carousel1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getVisibleCards = () => {
    const result = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % images.length;
      result.push(images[index]);
    }
    return result;
  };

  return (
    <section
  className="flex flex-col items-center justify-start px-4 py-20 pb-28 relative z-10"
  style={{ backgroundImage: "url('/background.jpg')" }}
>
  {/* Heading Section */}
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-[#E3DAC9] tracking-wide uppercase">
      Our Specialities
    </h2>
    <div className="w-38 h-1 bg-[#CCA43B] mx-auto my-3 rounded"></div>
    <p className="text-[#F5F2EB] text-lg">
      Some of our best Specialities menu
    </p>
  </div>

  {/* Carousel Section */}
  <div className="relative flex justify-center items-center overflow-visible">
  {/* Left Arrow */}
  <button
    onClick={handlePrev}
    className="absolute -left-22 text-white text-4xl font-bold hover:text-gray-300 z-10"
  >
    &#60;
  </button>

  {/* Cards */}
  <div className="flex gap-5 justify-center items-center mb-20">
    {getVisibleCards().map((img, index) => (
      <div
        key={index}
        className="w-64 h-80 border-4 border-white p-1 rounded-lg bg-white"
        style={{ outline: '2px solid white', outlineOffset: '10px' }}
      >
        <div className="h-[70%]">
          <img
            src={img}
            alt={`Card ${index}`}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="h-[20%] flex items-center justify-center">
          <button className="bg-[#CCA43B] text-black px-4 py-2 rounded hover:bg-gray-800 transition">
            Order Online
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Right Arrow */}
  <button
    onClick={handleNext}
    className="absolute -right-22 text-white text-4xl font-bold hover:text-gray-300 z-10"
  >
    &#62;
  </button>
</div>

</section>

  );
}

export default Carousel1;
