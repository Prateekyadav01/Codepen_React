// src/components/Right.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser, setError, setLoading } from './redux/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Right = () => {
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    const authInstance = getAuth();
    const user = authInstance.currentUser;
    if (user) {
      dispatch(setUser(user));
      console.log(user);
    }
  }, [dispatch]);

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAuth = async () => {
    const authInstance = getAuth();
    dispatch(setLoading(true));
    try {
      let response;
      if (check) {
        response = await createUserWithEmailAndPassword(authInstance, email, password);
      } else {
        response = await signInWithEmailAndPassword(authInstance, email, password);
      }
      dispatch(setUser(response.user));
      toast.success('Login Successful');
    } catch (error) {
      dispatch(setError(error.message));
      toast.error(error.message);
    }
  };

  const signUpWithGoogle = async () => {
    dispatch(setLoading(true));
    try {
      const authInstance = getAuth();
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(authInstance, provider);
      dispatch(setUser(response.user));
    } catch (error) {
      dispatch(setError(error.message));
      toast.error(error.message);
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
        {authState.isAuthenticated ? (
          <button className="bg-green-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md ml-3 transition duration-300">
            {authState.user.displayName ? authState.user.displayName.substring(0, 1) : 'U'}
          </button>
        ) : (
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md ml-3 transition duration-300">
            Add
          </button>
        )}
      </div>

      {!authState.isAuthenticated && (
        <>
          <h3 className='text-white text-xl mb-6 flex items-center justify-center'>Join with us</h3>
          <div className='bg-gray-900 p-6 rounded-md w-[50%] flex flex-col mx-auto'>
            <div className='mb-4'>
              <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange} 
                className='w-full py-3 px-4 bg-gray-700 text-white border-none rounded-md focus:outline-none' 
                placeholder="Email" 
              />
            </div>
            <div className='mb-4'>
              <input 
                type="password" 
                value={password} 
                onChange={handlePasswordChange} 
                className='w-full py-3 px-4 bg-gray-700 text-white border-none rounded-md focus:outline-none' 
                placeholder="Password" 
              />
            </div>
            {check ? (
              <button onClick={handleAuth} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md mb-6 transition duration-300">
                Signup
              </button>
            ) : (
              <button onClick={handleAuth} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md mb-6 transition duration-300">
                Login
              </button>
            )}
            <div className='text-center flex gap-2 items-center justify-center text-white mb-6'>
              <h3>Already have an account?</h3>
              {check ? (
                <a className='cursor-pointer' onClick={handleCheck}>Login</a>
              ) : (
                <a className='cursor-pointer' onClick={handleCheck}>Signup</a>
              )}
            </div>
            <h3 className='text-center text-white mb-6'>or</h3>
            <div className='flex justify-center gap-4'>
              <button onClick={signUpWithGoogle} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-300">
                Google
              </button>
              <button className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-300">
                GitHub
              </button>
            </div>
          </div>
        </>
      )}
      {authState.loading && <div className="text-white text-center">Loading...</div>}
      <ToastContainer />
    </div>
  );
};

export default Right;
