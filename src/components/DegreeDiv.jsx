import React from 'react';
import { RiGraduationCapLine } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { MdOutlineLocationOn, MdOutlineRocketLaunch, MdGTranslate, MdOutlineSavings } from "react-icons/md";

const DegreeDiv = () => {
  return (
    <>
      {/* your degree in a nutshell div */}
      <div className="h-[630px] flex flex-col items-center text-black bg-red-50 mb-[50px]">
        <div className="font-medium text-4xl mt-8 mb-10 text-gray-800">
          Your degree in a nutshell<span className="text-red-500">.</span>
        </div>
        
        <div className="w-9/12 h-5/6 grid grid-cols-2 gap-8 p-6 mx-5 mb-4">
          <div className="h-full w-full flex justify-between"> {/* Flex layout with space between */}
            {/* First UL (Icons + Titles) */}
            <div className="w-[48%]">
              <ul className="space-y-8"> {/* Adding space between list items */}
                <li className="flex items-center space-x-4">
                  <span className="flex items-center space-x-2 font-bold text-gray-600 text-2xl">
                    <RiGraduationCapLine className="text-gray-600 text-2xl" />
                    <span>Degree</span>
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="flex items-center space-x-2 font-bold text-gray-600 text-2xl">
                    <MdOutlineVerified className="text-gray-600 text-2xl" />
                    <span>Accreditation</span>
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="flex items-center space-x-2 font-bold text-gray-600 text-2xl">
                    <PiClockCounterClockwiseFill className="text-gray-600 text-2xl" />
                    <span>Duration</span>
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="flex items-center space-x-2 font-bold text-gray-600 text-2xl">
                    <MdOutlineLocationOn className="text-gray-600 text-2xl" />
                    <span>Location</span>
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="flex items-center space-x-2 font-bold text-gray-600 text-2xl">
                    <MdOutlineRocketLaunch className="text-gray-600 text-2xl" />
                    <span>Start</span>
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="flex items-center space-x-2 font-bold text-gray-600 text-2xl">
                    <MdGTranslate className="text-gray-600 text-2xl" />
                    <span>Language</span>
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="flex items-center space-x-2 font-bold text-gray-600 text-2xl">
                    <MdOutlineSavings className="text-gray-600 text-2xl" />
                    <span>Fees</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Second UL (Descriptions) */}
            <div className="w-[48%]">
              <ul className="space-y-8"> {/* Same spacing between items */}
                <li>
                  <span className="text-xl text-gray-600">Master of Science (M.Sc.)</span>
                </li>
                <li>
                  <span className="text-xl text-gray-600">State Accreditation</span>
                </li>
                <li>
                  <span className="text-xl text-gray-600">1, 1.5 or 2 years</span>
                </li>
                <li>
                  <span className="text-xl text-gray-600">UE Innovation Hub <br /> (near Berlin)</span>
                </li>
                <li>
                  <span className="text-xl text-gray-600">March or September</span>
                </li>
                <li>
                  <span className="text-xl text-gray-600">English</span>
                </li>
                <li>
                  <span className="text-xl text-gray-600">EU from €854/month <br />Non-EU from €12,000/year</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Second div  */}
          <div className="h-full w-full bg-gray-700 text-white grid grid-rows-3 p-2">
            <div className='w-full h-[150px] grid grid-cols-4 p-2 items-center justify-center'>
                <div className='font-semibold text-5xl  col-span-1 h-full flex items-center justify-center'>
                    1
                </div>
                <div className='font-medium text-md  col-span-3 h-full flex items-center justify-center'>
                Build a solid foundation within areas such as Data Analytics & Engineering, Decision Support Systems, Data Science & Business.
                </div>

            </div>
            <div className='w-full h-[150px]  grid grid-cols-4 p-2 items-center justify-center'>
                <div className='font-semibold text-5xl  col-span-1 h-full flex items-center justify-center'>
                    2
                </div>
                <div className='font-medium text-md  col-span-3 h-full flex items-center justify-center'>
                Progress and delve deeper into exciting topics including Machine Learning and Cloud Computing.
                </div>

            </div>
            <div className='w-full h-[150px]  grid grid-cols-4 p-2 items-center justify-center'>
                <div className='font-semibold text-5xl  col-span-1 h-full flex items-center justify-center'>
                    3
                </div>
                <div className='font-medium text-md  col-span-3 h-full flex items-center justify-center'>
                You'll have the opportunity to work on a variety of projects before writing your master thesis.
                </div>

            </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default DegreeDiv;
