import { useState } from 'react'
import backgroundImage from './assets/ds.png'; 
import './App.css'
import DegreeDiv from './components/DegreeDiv';
import Header from './components/Header';
import Description from './components/Description';
import Lookingforwardto from './components/Lookingforwardto';
import GetMoreInfoDiv from './components/GetMoreInfoDiv';
import LocationDiv from './components/LocationDiv';
import MeetDiv from './components/MeetDiv';
import ContactUs from './components/ContactUs';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />

      {/* header image div */}
      <div className="h-[470px] flex items-center justify-center text-white bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-center flex flex-col items-center"> {/* Use flex-col to align content vertically */}
            <span className="font-bold text-5xl mb-4">
              MSc Data Science
            </span>
            <br />
            <span className="mt-4 font-semibold text-xl">
              The structured collection of data with intelligent
              <br /> data management is the basis of all successful analyses.
              <br /> Become an expert in methods such as clustering,
              <br /> predictive modeling and deep learning.
            </span>
            
            <span className="h-10 w-[200px] bg-red-500 text-white flex items-center justify-center cursor-pointer p-3 mt-14 rounded-3xl font-bold">
              Get More Info
            </span>
          </div>
      </div>


      {/* why do your masters div */}
      <div className="h-[440px] flex flex-col items-center  text-black">
         <div className='font-medium text-4xl m-7 text-gray-800'>Why choose your Masters<span className='text-red-500'>.</span></div>
         <div className='w-9/12 h-4/6 grid grid-cols-3 mx-5 p-5'>
            <div className='h-full w-[330px] text-left p-4 relative'>
              <div className='bg-gray-300 rounded-full h-14 w-14 absolute -top-0 -left-0'></div>
              <span className='font-semibold text-2xl relative z-10'>Fast Track Option</span>
              <p className='text-md mt-5'>
                Depending on your prior education and experience, our Master&nbsp;s can be completed in 1 year, 1.5 years or 2 years.
              </p>
            </div>
            <div className='h-full w-[330px] text-left p-4 relative'>
              <div className='bg-red-300 rounded-full h-14 w-14 absolute -top-0 -left-0'></div>
              <span className='font-semibold text-2xl relative z-10'>Community & Network</span>
              <p className='text-md mt-5'>
              Join a community of over 3000 international students from 90+ countries while networking in the start-up capital Berlin.
              </p>
            </div>
            <div className='h-full w-[330px] text-left p-4 relative'>
              <div className='bg-gray-300 rounded-full h-14 w-14 absolute -top-0 -left-0'></div>
              <span className='font-semibold text-2xl relative z-10'>Become a Digital Pioneer</span>
              <p className='text-md mt-5'>
              Our programmes combine Tech and Data with Design: a thrilling combination that will be key for future developments and your career.
              </p>
            </div>            
         </div>
      </div>


     <DegreeDiv />
     <GetMoreInfoDiv />
     <Description />
     <Lookingforwardto />     
     <GetMoreInfoDiv />
     <LocationDiv />
     <div className='w-full h-[120px] bg-white'>

     </div>
     <MeetDiv />
     <ContactUs />

     


      



    </>
  )
}

export default App
