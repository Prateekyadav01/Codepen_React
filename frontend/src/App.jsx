import './App.css'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Code from './components/code/Code'
import Home from './components/Home'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from "firebase/auth";
import app from './components/config/firebase';
import ProtectedRoute from './components/ProtectRoute';
import { setUser } from './components/redux/authSlice';

function App() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    const authInstance = getAuth(app);
    const user = authInstance.currentUser;
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/code",
      element: (
        <ProtectedRoute>
          <Code />
        </ProtectedRoute>
      ),
    },
    {
      path: "/home",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
