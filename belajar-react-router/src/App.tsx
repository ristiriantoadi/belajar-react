import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Product from "./pages/Product";

const router=createBrowserRouter([
  {
    path:"/",
    element:<Navbar></Navbar>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"help",
        children:[
          {
            index:true,
            element:<Faq></Faq>
          },
          {
            path:"contact",
            element:<Contact></Contact>
          }
        ]
      },
      {
        path:"product/:id/:name",
        element:<Product></Product>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
