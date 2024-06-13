
import './App.css'
import Layout from './components/Layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Code from './components/code/Code'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './components/config/firebase';
import { useEffect } from 'react';
import Home from './components/Home';
// import app from './config/firebase';
// import Root, { rootLoader } from "./routes/root";

function App() {
  useEffect(()=>{
    const userDetails = getAuth(app);
  const user = userDetails.currentUser;
  if (user) {
    // setAuth(user);
    console.log(user);
    console.log(user);
  } else {
    // setAuth(null);
  }
  },[])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // loader: rootLoader,
    },
    {
      path: "/code",
      element: <Code/>,
    },{
      path:"/home",
      element:<Home/>
    }
  ]);

  return (
    <>
     {/* <Code/> */}
     {/* <Layout/> */}
     <RouterProvider router={router} />
    </>
  )
}

export default App
