import React from 'react';
import backgroundImage from '../assets/ds.png';

const Description = () => {
  return (
    <>
      <div
        className="h-[520px] relative flex items-center justify-center text-white mt-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* White overlay div */}
        <div
          className="absolute bg-white md:left-[100px] h-full md:h-full w-full md:w-[40%] top-0 md:top-auto"
        >
          <div className="m-3">
            <div className="font-normal text-3xl md:text-5xl p-5 mb-2 text-gray-800">
              UE - A unique place to study<span className="text-red-500">.</span>
            </div>
            <div className="p-5">
              <p className="text-gray-800 text-base md:text-lg mb-4">
                The University of Europe for Applied Sciences (UE) is state-accredited,
                has received multiple awards and is a worldwide leader among universities
                with an international approach.
              </p>
              <p className="text-gray-800 text-base md:text-lg mb-4">
                We are <span className="text-red-500 font-semibold">ranked Top 25 </span> among Europe's best private universities in the business
                sector and have been enabling students to successfully pursue their career goals for <span className="text-red-500 font-semibold"> over 20 years</span>
              </p>
              <p className="text-gray-800 text-base md:text-lg mb-4">
                It is our mission to provide you with all the necessary skills to start your professional life with
                confidence and to set yourself apart from the crowd.
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

export default Description;
