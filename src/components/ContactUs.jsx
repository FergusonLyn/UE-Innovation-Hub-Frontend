import React from 'react'

const ContactUs = () => {
  return (
    <>
        <div className='h-[1000px] flex flex-col items-center justify-center text-black'>
            <div className='font-medium text-4xl mb-8 text-gray-700'>
                Request more information             
            </div> 

            <div className="grid grid-cols-2 w-4/5 h-[450px] p-5">
                <div className='h-full col-span-1 p-4'>
                    {/* input box */}
                    <div className='relative w-full h-[50px] mb-10'>
                        <label htmlFor="" 
                        className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                            First Name*
                        </label>
                        <input 
                        type="text" 
                        placeholder='' 
                        className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' />
                    </div>
                    {/* input box */}
                    <div className='grid grid-cols-4 w-full h-[50px] mb-10'>
                        <div className='relative w-[80px] col-span-1 h-[50px]'>
                            <label htmlFor="" 
                            className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                                Code*
                            </label>
                            <input 
                            type="text" 
                            placeholder='+233' 
                            className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' />
                        </div>
                        <div className='relative  col-span-3 h-[50px]'>
                            <label htmlFor="" 
                            className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                                Telephone*
                            </label>
                            <input 
                            type="text" 
                            placeholder='' 
                            className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' />
                        </div>
                    </div>
                    {/* input box */}
                    <div className='relative w-full h-[50px] mb-10'>
                        <label htmlFor="" 
                        className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                            Country*
                        </label>
                        <input 
                        type="text" 
                        placeholder='Ghana' 
                        className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' />
                    </div>
                    {/* input box */}
                    <div className='relative w-full h-[50px] mb-10'>
                        <label htmlFor="" 
                        className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                            Intake Year*
                        </label>
                        <input 
                        type="text" 
                        placeholder='Select' 
                        className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' />
                    </div>
                </div>

                <div className='h-full col-span-1 p-4'>
                    {/* input box */}
                    <div className='relative w-full h-[50px] mb-10'>
                        <label htmlFor="" 
                        className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                            Last Name*
                        </label>
                        <input 
                        type="text" 
                        placeholder='' 
                        className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' />
                    </div>
                    {/* input box */}
                    <div className='relative w-full h-[50px] mb-10'>
                        <label htmlFor="" 
                        className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                            Email*
                        </label>
                        <input 
                        type="text" 
                        placeholder='' 
                        className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' />
                    </div>
                    {/* input box */}
                    <div className='relative w-full h-[50px] mb-10'>
                        <label htmlFor="" 
                        className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                            Nationality*
                        </label>
                        <input 
                        type="text" 
                        placeholder='Select' 
                        className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' />
                    </div>
                </div>
                
            </div>
            
        </div>
      
    </>
  )
}

export default ContactUs
