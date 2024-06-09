import React from 'react';

const Right = () => {
  return (
    <div className='w-[80%] bg-black'>
      <div className="flex justify-center items-center relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2 absolute left-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17h8m0 0l-4-4m4 4l-4 4m5-9a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" className='flex-1 py-2 px-4 bg-gray-800 text-white relative border-none rounded-md focus:outline-none' placeholder="Search" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ml-2">
          Add
        </button>
      </div>
    </div>
  );
};

export default Right;
