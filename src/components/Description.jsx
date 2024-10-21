import React from 'react'
import backgroundImage from '../assets/ds.png'

const Description = () => {
  return (
    <>
        <div
        className="h-[520px] relative flex items-center justify-center text-white mt-[50px]"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* White overlay div */}
            <div
                className="absolute left-[100px] h-full bg-white"
                style={{
                width: '40%', // Taking 40% of the width
                
                }}
            >
              <div className="m-3">
                <div className="font-normal text-5xl p-5 mb-2 text-gray-800">
                  UE - A unique place to study<span className="text-red-500">.</span>
                </div> 
                <div className="p-5">
                  <p className='text-gray-800 text-lg mb-4 '>
                    The University of Europe for Applied Sciences (UE) is state-accredited, 
                    has received multiple awards and is a worldwide leader among universities 
                    with an international approach.
                  </p>
                  <p className='text-gray-800 text-lg mb-4'>
                    We are <span className="text-red-500 font-semibold">ranked Top 25 </span> among Europe's best private universities in the business 
                    sector and have been enabling students to successfully pursue their career goals for <span className="text-red-500 font-semibold"> over 20 years</span>
                  </p>
                  <p className='text-gray-800 text-lg mb-4'>
                    It is our mission to provide you with all the necessary skills to start your professional life with 
                    confidence and to set yourself apart from the crowd.  
                  </p>
                </div>               
              </div>
                
            </div>
        </div>      
    </>
  )
}

export default Description
