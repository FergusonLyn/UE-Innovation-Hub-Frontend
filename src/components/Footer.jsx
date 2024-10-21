import React from 'react'
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className="w-full h-[370px] bg-teal-900 flex items-center justify-center">
            <div className='grid grid-cols-2 w-4/5 h-[260px] '>
                <div className="col-span-1 h-full m-2 flex flex-col text-left p-12">
                    <div className='h-[90px] w-[200px] bg-white mb-2'>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p className='text-white text-sm'>
                            University of Europe for Applied Sciences (UE) is part of GUS Germany GmbH (GGG), a dynamic 
                            network of higher education institutions with more than 15,000 students at locations in Germany, Europe and beyond.
                        </p>

                    </div>


                </div>
                <div className="col-span-1 h-full p-4 m-2 flex flex-col items-center justify-center">
                    <div className='mb-4'>
                        <p className='cursor-pointer underline text-white text-sm'>
                           <a href="">Site Notice | Privacy policy </a> 
                        </p>

                    </div>
                    <div className='flex flex-row'>
                        <div className='bg-red-500 h-[40px] w-[40px] flex items-center justify-center rounded-md m-2'>
                            <IoLogoTiktok className='text-2xl text-teal-900'/>
                        </div>
                        <div className='bg-red-500 h-[40px] w-[40px] flex items-center justify-center rounded-md m-2'>
                            <FaInstagram className='text-2xl text-teal-900'/>
                        </div>
                        <div className='bg-red-500 h-[40px] w-[40px] flex items-center justify-center rounded-md m-2'>
                            <FaFacebookF className='text-2xl text-teal-900'/>
                        </div>
                        <div className='bg-red-500 h-[40px] w-[40px] flex items-center justify-center rounded-md m-2'>
                            <FaLinkedinIn className='text-2xl text-teal-900'/>
                        </div>
                    </div>                  
                </div>

            </div>

        </div>
      
    </>
  )
}

export default Footer
