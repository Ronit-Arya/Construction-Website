import react from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import Blog from './Blog';
import Project from './Project';
import Contact from './Contact';
function App() {
const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path:"/Home",
      element:<><Home/></>,
    },

     {
      path:"/About",
      element:<><About/></>,
    },
    {
      path:"/Services",
      element:<><Services/></>,
    },
    {
      path:"/Blog",
      element:<><Blog/></>
    },

    {
      path:"/Project",
      element:<><Project/></>
    },
    {
      path:"/Contact",
      element:<><Contact/></>
    }


  ]);

  return (
    <>

    <div className=''>
       <RouterProvider router={router}/>
    </div>

    </>
  )
}

export default App
