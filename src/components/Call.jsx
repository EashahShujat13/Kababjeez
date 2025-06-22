import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="bg-[#1C1C1C] py-10 px-4 sm:px-8 text-center">
      <h2 className="text-base sm:text-lg md:text-xl text-gray-500 tracking-widest mb-2 sm:mb-3">
        Call Now
      </h2>
      <h1 className="underline text-[#CCA43B] font-mono font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
        021-111-666-111
      </h1>
      <button className="bg-[#CCA43B] text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded hover:bg-yellow-700 transition font-semibold text-sm sm:text-base">
        Order Online
      </button>
    </section>
  );
};

export default CallToActionSection;
