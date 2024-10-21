import React from 'react'

const MeetDiv = () => {
  return (
    <>
        {/* Meet your professor and some graduates */}
      <div className="h-[700px] bg-violet-50 flex flex-col items-center justify-center  text-black">
         <div className=' h-[300px] w-3/4 text-gray-800 grid grid-cols-2'>
            <div className='h-full col-span-1'>
              <video className='w-full h-full' controls>
                <source src="your-video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>              
            </div>
            <div className='h-full col-span-1 p-6'>
              <div className='font-medium text-4xl mb-8'>
                Meet your professor<span className=' text-red-500'>.</span>              
              </div> 
              <p>
              Our professors & lecturers all have experience in the field. Hear from Professor Dr. Iris Lorscheid, 
              Director of Digital Business & Data Science at the University of Europe for Applied Sciences.
              </p>
            </div>
         </div>     


         <div className=' h-[500px] w-3/4 text-gray-800 grid grid-rows-4 mt-[40px]'>
            <div className='h-full row-span-1 border-2 border-blue-400'>
                         
            </div>
            <div className='h-full row-span-3 border-2 border-yellow-400'>
              
            </div>
         </div>     


      </div>
      
      
    </>
  )
}

export default MeetDiv
