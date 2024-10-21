import React from 'react'
import { RiBriefcase4Line } from "react-icons/ri";
import { MdOutline4K } from "react-icons/md";
import { PiLightbulbFilamentBold, PiArrowsSplitBold } from "react-icons/pi";
import { BiConversation, BiTaxi } from "react-icons/bi";

const Lookingforwardto = () => {
  return (
    <>
       {/* your degree in a nut shell div */}
       <div className="h-[950px] flex flex-col items-center text-black">
         <div className='font-medium text-4xl m-7 text-gray-800'>What you can look forward to<span className='text-red-500'>.</span></div>
          <div className='w-9/12 h-5/6 grid grid-cols-2 mx-5 mb-4'>

          {/* first half div on the left */}
              <div className='h-full w-[480px] grid grid-rows-3 p-4'>
                {/* first div */}
                <div className='row-span-1 w-full mb-3 grid grid-cols-4 '>
                  <div className='col-span-1 relative items-center p-6'>
                    <div className='bg-green-300 rounded-full h-10 w-10 absolute top-3 right-5'></div>
                    <span className='font-extrabold text-5xl relative z-10'>
                      <RiBriefcase4Line className='text-gray-800 font-extrabold' />
                    </span>                    
                  </div>
                  <div className='col-span-3 p-6'>
                    <div className='text-gray-800 font-semibold text-2xl mb-2'>Find a job</div>
                    <span>68% of our students are employed before graduation, and 93% find 
                      employment within 12 months of graduating. Our career centre will support 
                      you every step of the way.
                    </span>
                  </div>
                </div>
                {/* second div */}
                <div className='row-span-1 w-full mb-3 grid grid-cols-4 '>
                  <div className='col-span-1 relative items-center p-6'>
                    <div className='bg-violet-400 rounded-full h-10 w-10 absolute top-3 right-5'></div>
                    <span className='font-extrabold text-5xl relative z-10'>
                      <MdOutline4K className='text-gray-800 font-extrabold' />
                    </span>                    
                  </div>
                  <div className='col-span-3 p-6'>
                    <div className='text-gray-800 font-semibold text-2xl mb-2'>Use the latest equipment</div>
                    <span>Our campus is equipped with updated iMacs with high-end design software, photo studios, 
                      VR equipment, green screen rooms, sound studios, graphic tabs, game labs, SR cameras and more.
                    </span>
                  </div>
                </div>
                {/* third div */}
                <div className='row-span-1 w-full mb-3 grid grid-cols-4 '>
                  <div className='col-span-1 relative items-center p-6'>
                    <div className='bg-orange-300 rounded-full h-10 w-10 absolute top-3 right-5'></div>
                    <span className='font-extrabold text-5xl relative z-10'>
                      <PiLightbulbFilamentBold className='text-gray-800 font-extrabold' />
                    </span>                    
                  </div>
                  <div className='col-span-3 p-6'>
                    <div className='text-gray-800 font-semibold text-2xl mb-2'>Enter the Berlin start up scene</div>
                    <span>500+ new Berlin start-ups are being created each year with the potential for you to 
                      gain a variety of experience through internships or full-time work.
                    </span>
                  </div>
                </div>              
              </div>


              {/* Second half div on the right */}
              <div className='h-full w-[480px] grid grid-rows-3 p-4'>
                {/* first div */}
                <div className='row-span-1 w-full mb-3 grid grid-cols-4 '>
                  <div className='col-span-1 relative items-center p-6'>
                    <div className='bg-amber-300 rounded-full h-10 w-10 absolute top-3 right-6'></div>
                    <span className='font-extrabold text-5xl relative z-10'>
                      <BiConversation className='text-gray-800 font-extrabold' />
                    </span>                    
                  </div>
                  <div className='col-span-3 p-6'>
                    <div className='text-gray-800 font-semibold text-2xl mb-2'>Opportunity to learn German</div>
                    <span>100% of our creative programmes in Berlin are taught in English but if you want to learn 
                      German anyways, we offer support with a range of language courses.
                    </span>
                  </div>
                </div>
                {/* second div */}
                <div className='row-span-1 w-full mb-3 grid grid-cols-4 '>
                  <div className='col-span-1 relative items-center p-6'>
                    <div className='bg-pink-400 rounded-full h-10 w-10 absolute top-3 right-6'></div>
                    <span className='font-extrabold text-5xl relative z-10'>
                      <BiTaxi className='text-gray-800 font-extrabold' />
                    </span>                    
                  </div>
                  <div className='col-span-3 p-6'>
                    <div className='text-gray-800 font-semibold text-2xl mb-2'>Excursions & field trips</div>
                    <span>During the study, you can take part in excursions and field trips to companies like 
                      Volkswagen in Wolfsburg, Google or Amazon in Silicon Valley and many more.
                    </span>
                  </div>
                </div>
                {/* third div */}
                <div className='row-span-1 w-full mb-3 grid grid-cols-4 '>
                  <div className='col-span-1 relative items-center p-6'>
                    <div className='bg-blue-300 rounded-full h-10 w-10 absolute top-3 right-6'></div>
                    <span className='font-extrabold text-5xl relative z-10'>
                      <PiArrowsSplitBold className='text-gray-800 font-extrabold transform scale-y-[-1]' />
                    </span>                    
                  </div>
                  <div className='col-span-3 p-6'>
                    <div className='text-gray-800 font-semibold text-2xl mb-2'>Internships & practical projects</div>
                    <span>Build global networks through team projects, company visits, internships, business links and 
                      academic experience with one of our many partnered companies like Audi or Unilever.
                    </span>
                  </div>
                </div>              
              </div>       
         </div>
      </div>
    </>
  )
}

export default Lookingforwardto
