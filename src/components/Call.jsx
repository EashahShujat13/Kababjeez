import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="bg-[#1C1C1C] py-12 text-center">
      <h2 className="text-2xl  text-gray-500  tracking-widest mb-4">
       Call Now
      </h2>
      <h1 className=' underline text-[#CCA43B] font-mono text-bolder mt-0 text-4xl '>021-111-666-111</h1>
      <button className="bg-[#CCA43B] mt-2.5 text-black px-6 py-3 rounded hover:bg-yellow-700 transition font-semibold">
        Order Online
      </button>
    </section>
  );
};

export default CallToActionSection;
