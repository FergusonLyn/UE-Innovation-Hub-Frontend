import React from 'react';
import backgroundImage from '../assets/ds.png';

const LocationDiv = () => {
  return (
    <>
      <div
        className="h-[600px] relative flex items-center justify-center text-white mt-[100px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* White overlay div */}
        <div
          className="absolute bg-white md:left-[100px] h-full md:h-full w-full md:w-[40%] top-0 md:top-auto"
        >
          <div className="m-3">
            <div className="font-normal text-3xl md:text-5xl p-5 mb-2 text-gray-800">
              Silicon Valley in Potsdam: get to know your Campus<span className="text-red-500">.</span>
            </div>
            <div className="p-5">
              <p className="text-gray-800 text-base md:text-lg mb-4">
                The UE Innovation Hub is located on the Think Campus in Potsdam, near Berlin neighbouring global 
                incubators such as the Volkswagen Group Future Center and the SAP Innovation Center where over 200 
                people research AI and Blockchain technologies.
              </p>
              <p className="text-gray-800 text-base md:text-lg mb-4">
                Potsdam offers the highest density of scientists in Germany but is also a city of universities and 
                research which influences the living environment of the city. Over 14% of all residents are students.
              </p>
              <p className="text-gray-800 text-base md:text-lg mb-4">
                Live in Berlin and study in Potsdam: enjoy the best of both worlds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific image container */}
      <div className="md:hidden w-full h-[200px]" 
           style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
    </>
  );
};

export default LocationDiv;
