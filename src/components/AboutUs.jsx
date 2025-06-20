import React from 'react';

function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-[#1C1C1C] text-white py-16 px-6 sm:px-12 md:px-20 flex items-center">
      <div className="flex flex-col md:flex-row w-full"> {/* Removed gap class */}

        {/* Left Side - Text Block (Centered) */}
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
          <div className="max-w-2xl"> {/* Made slightly narrower */}
            <h2 className="text-4xl font-medium mt-8 mb-8">ABOUT US</h2> {/* Reduced top & bottom margin */}

            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                We welcome you to explore our taste of the world,<br />
                in continental and Chinese delights — and that's<br />
                even before you get to the variety and excellence<br />
                of our barbecue grill. With warmth service rarely<br />
                experienced, it is a perfect place of rejoice with<br />
                family, to soak in the relaxing décor and with deep<br />
                desire to revisit — for once is never enough!<br />
                Now with our network of four branches across<br />
                the city of lights, it is possible to experience<br />
                the magic, whilst collecting the best of memories,<br />
                much closer to home.
              </p>

              <p>
                Now you can have the goodness of Kababjees<br />
                delivered at home by just ringing us a bell.<br />
                Call <strong>111-666-111</strong> for more information.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            className="w-10/12 h-auto rounded-xl self-center" // slightly wider image
            src="https://kababjees.com/images/highway%20pic1.jpg"
            alt="Kababjees Restaurant"
          />
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
