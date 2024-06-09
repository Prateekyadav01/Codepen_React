import React from 'react';

const Left = () => {
  return (
    <div className='flex flex-col w-[20%] border-r-2 h-screen gap-1 items-center bg-black'>
      <h1 className="text-xl font-semibold mt-4 text-white cursor-pointer">CodePen</h1>
      <div className="text-white text-lg border border-black w-[80%] flex items-center justify-center rounded-sm cursor-pointer">Start coding</div>

      <div className="flex items-center justify-center w-full cursor-pointer py-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 3m0 0l3-3m-3 3v8a2 2 0 002 2h10a2 2 0 002-2V9l-3 3m0 0l-3-3m3 3l3 3" />
        </svg>
        <span className="text-lg text-white cursor-pointer">Home</span>
      </div>
    </div>
  );
};

export default Left;
