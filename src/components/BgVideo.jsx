import React from 'react';
import bgVideo from '../assets/video/bgVideo.mp4'

export default function BackgroundVideo() {
  return (
    <>
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-50 "
    >
      <source src={bgVideo} type="video/mp4" />
      
    </video>
    
    <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-5xl font-bold tracking-widest text-center uppercase font-sans">
        The best place to rejoice
        <br />
        variety of cuisines.
        </h1>
      </div>
    </>
  );
}
