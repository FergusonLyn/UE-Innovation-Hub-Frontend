import React from 'react';

const MeetDiv = () => {
  return (
    <>
      {/* Meet your professor and some graduates */}
      <div className="h-auto md:h-[1700px] bg-violet-50 flex flex-col items-center justify-center text-black">
        {/* First section */}
        <div className="h-auto md:h-[300px] w-full md:w-3/4 text-gray-800 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Text content */}
          <div className="h-full col-span-1 p-4 md:p-6 mb-4 md:mb-0 text-center md:text-left md:order-last">
            <div className="font-medium text-3xl md:text-4xl mb-8">
              Meet your professor<span className="text-red-500">.</span>
            </div>
            <p>
              Our professors & lecturers all have experience in the field. Hear from Professor Dr. Iris Lorscheid, 
              Director of Digital Business & Data Science at the University of Europe for Applied Sciences.
            </p>
          </div>

          {/* Video content */}
          <div className="h-full mx-auto md:mx-0 col-span-1 md:order-first flex justify-center md:justify-start">
            <video className="w-full md:w-full h-full" controls>
              <source src="your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>     

        {/* Second section */}
        <div className="w-full md:w-3/4 text-gray-800 grid grid-rows-4 mt-8 md:mt-[60px]">
          <div className="row-span-1 md:h-full h-[150px]  flex justify-center md:justify-start p-4">
            <div className="font-medium text-3xl md:text-4xl text-center md:mt-0 mt-24">
              And some of our <br /> graduates<span className="text-red-500">.</span>
            </div>
          </div>

          {/* Graduate cards */}
          <div className="row-span-3 p-0 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-[250px] w-[300px] md:h-[300px] md:w-[250px] shadow-md bg-white shadow-gray-500  mb-12 md:mb-0 mx-auto md:bottom-[-35%] md:left-0 md:mb-0 mb-5">
              <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 h-[120px] w-[120px] bg-blue-300 rounded-full">
                <img
                  src="https://convertri.imgix.net/b77be6d5-e846-11ea-abef-0697e5ca793e/69bfbaf1da532fd46647c60b9858d5851479081c/Round-Alumnis-_Eva-Lotta.png?auto=compress,format&fit=scale&w=130&h=130"
                  alt="Eva" 
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="p-4 pt-[80px] text-center">
                <div className="font-medium text-2xl mb-4">
                  Eva Lotta 
                </div>
                <p>
                  Eva studied corporate management at UE and is now Branch Manager of the junior centre of a well-known Hamburg football club.
                </p>
              </div>
            </div>

            <div className="relative h-[250px] w-[300px] md:h-[300px] md:w-[250px] shadow-md bg-white shadow-gray-500 mb-12 md:mb-0 mx-auto">
              <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 h-[120px] w-[120px] bg-blue-300 rounded-full">
                <img
                  src="https://convertri.imgix.net/b77be6d5-e846-11ea-abef-0697e5ca793e/de81e8c5fa50b8aacd5c010830e3a861f29dea91/43518328-0-Round-Alumnis--Sasch.png?auto=compress,format&fit=scale&w=130&h=130"
                  alt="Sasha"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="p-4 pt-[80px] text-center">
                <div className="font-medium text-2xl mb-4">
                  Sasha
                </div>
                <p>
                  Sasha studied communication & media management at UE and is now head of new business at one of the largest software companies in the world.
                </p>
              </div>
            </div>

            <div className="relative h-[250px] w-[300px] md:h-[300px] md:w-[250px] shadow-md bg-white mb-12 md:mb-0 shadow-gray-500 mx-auto md:top-[-35%] md:right-0">
              <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 h-[120px] w-[120px] bg-blue-300 rounded-full">
                <img
                  src="https://convertri.imgix.net/b77be6d5-e846-11ea-abef-0697e5ca793e/361efd21351128e1c02885aef77f163e2de9a905/Yuvraj.png?auto=compress,format&fit=scale&w=130&h=130"
                  alt="Yuvraj"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="p-4 pt-[80px] text-center">
                <div className="font-medium text-2xl mb-4">
                  Yuvraj 
                </div>
                <p>
                  Yuvraj came from India to Berlin to study Innovation Design Management and now works for ShareNow as a UX designer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetDiv;
