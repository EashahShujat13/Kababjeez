import React from 'react';
import bgImage from '../assets/gallPIC/lahore.jpg';

function BgImage2() {
  return (
    <div
      className="bg-cover bg-center absolute top-0 left-0 w-full h-full z-[-1] brightness-50"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
  );
}

export default BgImage2;
