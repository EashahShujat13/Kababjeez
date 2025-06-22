import React from 'react';

const ContactPage = () => {
  return (
    <div className=" min-h-screen text-black py-20 px-4 sm:px-6 md:px-12 flex flex-col justify-end">

      {/* Grid with responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-start">
        
        {/* --- About Us --- */}
        <section className="space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CCA43B]">About Us</h2>
          <p className="text-sm sm:text-base leading-relaxed text-white">
            We welcome you to explore our<br />
            taste of the world, in continental <br />
            and chinese delights and that's <br />
            even before you get to the variety<br />
            and excellence, of our barbecue<br />
            grill.
          </p>
        </section>

        {/* --- Contact Us --- */}
        <section className="space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CCA43B]">Contact Us</h2>
          <p className="text-sm sm:text-base text-white hover:text-[#CCA43B] transition cursor-pointer">
            Email: kababjeez@example.com
          </p>
          <p className="text-sm sm:text-base text-white hover:text-[#CCA43B] transition cursor-pointer">
            Phone: +92 300 1234567
          </p>
        </section>

        {/* --- Work Time --- */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CCA43B]">Work Time</h2>
          <p className="text-sm sm:text-base text-white">
            Monday – Sunday<br />
            5 PM – 1 AM
          </p>
          <button className="bg-[#CCA43B] hover:bg-[#a0522d] text-black font-semibold py-2 px-4 rounded-xl transition-all">
            Order Online
          </button>
        </section>

        {/* --- Locations --- */}
        <section className="space-y-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CCA43B]">Locations</h2>
          <p className="text-sm sm:text-base text-white">Hyderabad</p>
          <p className="text-sm sm:text-base text-white">Do Darya</p>
          <p className="text-sm sm:text-base text-white">Shaheed-e-Millat</p>
          <p className="text-sm sm:text-base text-white">Highway</p>
          <p className="text-sm sm:text-base text-white">Lahore</p>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
