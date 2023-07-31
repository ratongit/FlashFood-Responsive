import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Location from "../Pages/Location/Location";
import PartnerHome from "../Pages/Partner/PartnerHome/PartnerHome";
  

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
            
        },
      
        {
            path: "/PartnerHome",
            element:<PartnerHome></PartnerHome>,
            
        },
        {
            path: "/Location",
            element:<Location></Location>,
            
        },
      
      ]
    },
  ]);


  export default router;
    
  