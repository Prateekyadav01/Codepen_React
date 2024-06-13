import React from 'react';
import { useNavigate } from 'react-router-dom';

const Left = () => {
  const navigate = useNavigate();

  const handleNavigate=()=>{
    navigate('/code')
  }
  const handleShowResult=()=>{
    navigate('/home')
  }
  const handleReturn=()=>{
    navigate('/')
  }
  return (
    <div className='flex flex-col w-[20%] border-r-2 h-screen  items-center bg-black py-6'>
      <h1 onClick={handleReturn} className="text-2xl font-semibold text-white cursor-pointer mb-6">CodePen</h1>
      <div onClick={handleNavigate} className="text-white text-lg border border-gray-700 w-[80%] py-2 flex items-center justify-center rounded-md cursor-pointer mb-6 transition duration-300 hover:bg-gray-700">
        Start Coding
      </div>

      <div className="flex items-center justify-center w-full cursor-pointer py-4 mb-4 hover:bg-gray-800 transition duration-300 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 3m0 0l3-3m-3 3v8a2 2 0 002 2h10a2 2 0 002-2V9l-3 3m0 0l-3-3m3 3l3 3" />
        </svg>
        <span onClick={handleShowResult} className="text-lg text-white">Home</span>
      </div>
    </div>
  );
};

export default Left;
