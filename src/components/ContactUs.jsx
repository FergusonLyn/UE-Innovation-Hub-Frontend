import React from 'react';

const ContactUs = () => {
  return (
    <>
      <div className='h-[1500px] md:h-[1000px] flex flex-col items-center justify-center text-black'>
        <div className='font-medium text-2xl md:text-4xl mb-8 text-gray-700'>
          Request more information
        </div>

        <div className="grid grid-rows-4 gap-4 w-5/6 md:w-4/5 h-[450px] border-2 mb-10">
          {/* First Row */}
          <div className="grid grid-cols-1 gap-y-6 w-full h-[50px] sm:grid-cols-2 md:gap-4 ">
            {/* First Name */}
            <div className='relative w-full h-[50px] my-3 md:my-0'>
              <label htmlFor="" className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                First Name*
              </label>
              <input 
                type="text" 
                className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' 
              />
            </div>
            {/* Last Name */}
            <div className='relative w-full h-[50px] my-3 md:my-0'>
              <label htmlFor="" className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                Last Name*
              </label>
              <input 
                type="text" 
                className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' 
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 gap-4 w-full h-[50px] sm:grid-cols-2 ">
            {/* Code + Telephone */}
            <div className="grid grid-cols-1 gap-y-6 md:gap-4 w-full h-[50px] sm:grid-cols-4 my-3 md:my-0">
              <div className='relative col-span-1 '>
                <label htmlFor="" className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                  Code*
                </label>
                <input 
                  type="text" 
                  placeholder='+233' 
                  className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' 
                />
              </div>
              <div className='relative col-span-1 '>
                <label htmlFor="" className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                  Telephone*
                </label>
                <input 
                  type="text" 
                  className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' 
                />
              </div>
            </div>
            {/* Email */}
            <div className='relative w-full h-[50px]'>
              <label htmlFor="" className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                Email*
              </label>
              <input 
                type="text" 
                className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' 
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 gap-y-6 md:gap-4 w-full h-[50px] sm:grid-cols-2">
            {/* Country */}
            <div className='relative w-full h-[50px]'>
              <label htmlFor="" className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                Country*
              </label>
              <input 
                type="text" 
                placeholder='Ghana' 
                className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' 
              />
            </div>
            {/* Nationality */}
            <div className='relative w-full h-[50px]'>
              <label htmlFor="" className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                Nationality*
              </label>
              <input 
                type="text" 
                placeholder='Select' 
                className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' 
              />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 gap-y-6 md:gap-4 w-full h-[50px] sm:grid-cols-2">
            {/* Intake Year */}
            <div className='relative w-full h-[50px]'>
              <label htmlFor="" className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                Intake Year*
              </label>
              <input 
                type="text" 
                placeholder='Select' 
                className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' 
              />
            </div>
            {/* Preferred Contact Time */}
            <div className='relative w-full h-[50px]'>
              <label htmlFor="" className='absolute top-[-10px] left-2 text-gray-600 bg-white px-1 text-sm'>
                Preferred Contact Time*
              </label>
              <input 
                type="text" 
                className='bg-white border border-gray-600 h-full w-full p-2 focus:outline-none focus:border-blue-500' 
              />
            </div>
          </div>
        </div>

        <div className='w-full md:w-4/5 h-[250px]'>
          <p className='w-full text-gray-500 text-sm px-4'>
            The University of Europe for Applied Sciences is a part of the Global University Systems group of companies (the GUS Group). 
            The information you provide on this form will be processed in accordance with the University of Europe for Applied Sciences’ privacy policy.
            The University of Europe for Applied Sciences will use the details provided by you to get in touch with you about your enquiry. Please note, you 
            should only complete this form if you are over the age of 16 or if your parents/legal guardians have agreed to the processing of your data.
          </p>

          <p className='px-4 text-gray-500 w-full text-sm bg-white mt-4'>
            <input type="checkbox" name="whatsapp_updates" className='mr-2'/>
            I would like to receive WhatsApp updates specific to my programme of interest, application status and approaching deadlines from the University 
            of Europe for Applied Sciences.
          </p>

          <p className='px-4 text-gray-500 w-full text-sm bg-white mt-4'>
            <input type="checkbox" name="marketing_consent" className='mr-2'/>
            I consent to receiving information (by email, phone, or text/SMS) about the courses and services offered by the University of Europe for Applied Sciences 
            and from other institutions in <a href='#' className='text-blue-500 underline'>the GUS Group.</a>
          </p>

          <p className='px-4 text-gray-500 w-full text-sm bg-white mt-4'>
            You can unsubscribe at any time using links provided in any communication we send.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
