import React from 'react'

const MeetDiv = () => {
  return (
    <>
        {/* Meet your professor and some graduates */}
      <div className="h-[1200px] bg-violet-50 flex flex-col items-center justify-center  text-black">
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


         <div className=' h-[500px] w-3/4 text-gray-800 grid grid-rows-4 mt-[60px]'>
            <div className='h-full row-span-1 flex text-left p-4'>
              <div className='font-medium text-4xl '>
                And some of our <br /> graduates<span className=' text-red-500'>.</span>              
              </div> 
                         
            </div>
            <div className='h-full row-span-3 p-10 grid grid-cols-3 relative'>

              <div className='relative h-[300px] w-[250px] shadow-md bg-white shadow-gray-500  bottom-[-35%] left-0'>
                <div className='absolute top-[-60px] left-1/2 transform -translate-x-1/2 h-[120px] w-[120px] bg-blue-300 rounded-full'>
                    <img src="https://convertri.imgix.net/b77be6d5-e846-11ea-abef-0697e5ca793e/69bfbaf1da532fd46647c60b9858d5851479081c/Round-Alumnis-_Eva-Lotta.png?auto=compress,format&fit=scale&w=130&h=130" alt="Eva" className="h-auto w-full object-cover" />
                </div>
                <div className='p-4 pt-[80px]'>
                  <div className="font-medium text-2xl mb-4">
                    Eva Lotta 
                  </div>
                  <p>
                  Eva studied corporate management at UE and is now Branch Manager of the junior centre of a well-known Hamburg football club.
                  </p>
                </div>
              </div>

              <div className='relative h-[300px] w-[250px] shadow-md bg-white shadow-gray-500'>
                <div className='absolute top-[-60px] left-1/2 transform -translate-x-1/2 h-[120px] w-[120px] bg-blue-300 rounded-full'>
                    <img src="https://convertri.imgix.net/b77be6d5-e846-11ea-abef-0697e5ca793e/de81e8c5fa50b8aacd5c010830e3a861f29dea91/43518328-0-Round-Alumnis--Sasch.png?auto=compress,format&fit=scale&w=130&h=130" alt="Eva" className="h-auto w-full object-cover" />                
                </div>
                <div className='p-4 pt-[80px]'>
                  <div className="font-medium text-2xl mb-4">
                    Sasha
                  </div>
                  <p>
                  Sasha studied communication & media management at UE and is now head of new business at one of the largest software companies in the world.
                  </p>
                </div>
              </div>

              <div className='relative h-[300px] w-[250px] shadow-md bg-white shadow-gray-500  top-[-35%] right-0'>
                <div className='absolute top-[-60px] left-1/2 transform -translate-x-1/2 h-[120px] w-[120px] bg-blue-300 rounded-full'>
                    <img src="https://convertri.imgix.net/b77be6d5-e846-11ea-abef-0697e5ca793e/361efd21351128e1c02885aef77f163e2de9a905/Yuvraj.png?auto=compress,format&fit=scale&w=130&h=130" alt="Eva" className="h-auto w-full object-cover" />                
                </div>
                <div className='p-4 pt-[80px]'>
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
  )
}

export default MeetDiv
