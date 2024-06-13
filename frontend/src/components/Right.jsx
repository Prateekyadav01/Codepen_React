import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './config/firebase';

const Right = () => {
  const [check, setCheck] = useState(false);
  const [auth, setAuth] = useState(null);

  const handleCheck = () => {
    setCheck(!check);
  };

  useEffect(() => {
    const userDetails = getAuth(app);
    const user = userDetails.currentUser;
    if (user) {
      setAuth(user);
      console.log(user);
    } else {
      setAuth(null);
    }
  }, []); 

  useEffect(() => {
    if (auth) {
      console.log(auth);
    }
  }, [auth]); 
  const signUp = async () => {
    try {
      const authInstance = getAuth(app);
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(authInstance, provider);
      console.log(response);
      setAuth(response.user); 
      console.log("signup");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[80%] bg-black p-6'>
      <div className="flex justify-center items-center relative mb-8">
        <input
          type="text"
          className='flex-1 py-2 pl-10 pr-4 bg-gray-800 text-white border-none rounded-md focus:outline-none'
          placeholder="Search"
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17h8m0 0l-4-4m4 4l-4 4m5-9a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
       {
        auth!==null ? (
          <button className="bg-green-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md ml-3 transition duration-300">
          {auth.displayName.substring(0,1)}
        </button>
        ) : (
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md ml-3 transition duration-300">
          Add
        </button>
        )
       }
      </div>

      <h3 className='text-white text-xl mb-6 flex items-center justify-center'>Join with us</h3>
      <div className='bg-gray-900 p-6 rounded-md w-[50%] flex flex-col mx-auto'>
        <div className='mb-4'>
          <input type="email" className='w-full py-3 px-4 bg-gray-700 text-white border-none rounded-md focus:outline-none' placeholder="Email" />
        </div>
        <div className='mb-4'>
          <input type="password" className='w-full py-3 px-4 bg-gray-700 text-white border-none rounded-md focus:outline-none' placeholder="Password" />
        </div>
        {
          check ? (
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md mb-6 transition duration-300">
              Signup
            </button>
          ) : (
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md mb-6 transition duration-300">
              Login
            </button>
          )
        }
        <div className='text-center flex gap-2 items-center justify-center text-white mb-6'>
          <h3>Already have an account?</h3>
          {
            check ? (
              <a className='cursor-pointer' onClick={handleCheck}>Login</a>
            ) : (
              <a className='cursor-pointer' onClick={handleCheck}>Signup</a>
            )
          }
        </div>
        <h3 className='text-center text-white mb-6'>or</h3>
        <div className='flex justify-center gap-4'>
          <button onClick={signUp} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-300">
            Google
          </button>
          <button className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-300">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Right;
