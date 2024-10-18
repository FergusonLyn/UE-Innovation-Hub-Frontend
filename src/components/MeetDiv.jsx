import React from 'react'

const MeetDiv = () => {
  return (
    <>
        {/* Meet your professor and some graduates */}
      <div className="h-[700px]  bg-purple-200 flex flex-col items-center  text-black">
         <div className='font-medium text-4xl m-7 text-gray-800'>Why choose your Masters<span className='text-red-500'>.</span></div>
         <div className='w-9/12 h-4/6 border-2 border-red grid grid-cols-3 mx-5'>
            <div className='h-full w-[330px] border-2 border-blue'>

            </div>
            <div className='h-full w-[330px] border-2 border-blue'>

            </div>
            <div className='h-full w-[330px] border-2 border-blue'>

            </div>
         </div>
      </div>
      
    </>
  )
}

export default MeetDiv
