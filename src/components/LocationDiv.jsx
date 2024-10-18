import React from 'react'
import backgroundImage from '../assets/ds.png'

const LocationDiv = () => {
  return (
    <>
    <div
        className="h-[520px] relative flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* White overlay div */}
            <div
                className="absolute left-[100px] h-full bg-white"
                style={{
                width: '40%', // Taking 40% of the width
                // boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)', // Optional shadow for depth
                }}
            >
                {/* Your content goes here */}
            </div>
        </div>      
    </>
  )
}

export default LocationDiv
