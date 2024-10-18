import React from 'react'

const Header = () => {
  return (
    <>
    <div className="w-full flex items-center justify-center text-black  gap-x-80 ">
        <p className='font-bold text-3xl text-gray-600'>INNOVATION HUB</p>
        <span className='h-10 w-[200px] bg-red-500 text-white flex items-center justify-center cursor-pointer p-3 m-3 rounded-3xl font-bold'>
        Get More Info
        </span>
    </div>
  </>
  )
}

export default Header
