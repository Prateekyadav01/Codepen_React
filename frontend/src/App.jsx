
import './App.css'
import Layout from './components/Layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Code from './components/code/Code'
// import Root, { rootLoader } from "./routes/root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // loader: rootLoader,
    },
    {
      path: "/code",
      element: <Code/>,
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
