import React, { useEffect, useState } from 'react';
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.jpeg';

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShow(false); // scrolling down → hide
      } else {
        setShow(true); // scrolling up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`${
        show ? 'top-0' : '-top-20'
      } fixed w-full z-50 bg-black transition-all duration-300 ease-in-out text-gray-100 border-b border-dashed border-gray-400`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2 gap-2 sm:gap-0 text-sm">
        {/* 👉 Contact Info */}
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 text-center sm:text-left">
          <p>Phone: 021 111 666 111</p>
          <p>Email: marketing@kababjees.com</p>
        </div>

        {/* 👉 Social Icons */}
        <div className="flex gap-3">
          <img src={facebook} alt="facebook" className="w-5 h-5" />
          <img src={instagram} alt="instagram" className="w-5 h-5 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
