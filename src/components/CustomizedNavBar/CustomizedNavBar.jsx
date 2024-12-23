import { useState } from "react";
import CustomizedLinks from "../CustomizedNav/CustomizedLinks";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const CustomizedNavBar = () => {

const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/home", },
      {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Products",
      path: "/products",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: "FAQ",
      path: "/faq",
    },
  ];


  return <nav>
    <div className="text-3xl md:hidden  " onClick={()=> setOpen(!open)}>
      {
        open === true ? <IoMdClose /> : < IoMenuOutline/> 
      }
    
    </div>

   <ul className={`md:flex absolute duration-100 bg-yellow-200 w-full text-black `}> 
   {
        routes.map(route=> <CustomizedLinks key={route.id} route={route}></CustomizedLinks>)
    }
   </ul>
  </nav>;
};

export default CustomizedNavBar;



// toggole korar jnno 3ta kaj krte hoi..............
/**
 * 1. use state
 * 2.use onclick handle for btn
 * 3.use 
 */
