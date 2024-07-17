import React from 'react'
import Logo from "../img/healthmate logo.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className=" shadow-lg">
        <div className="max-w-[1400px] flex justify-between items-center m-auto p-3 ">
            <div>
                <img src={Logo} alt="logo" className="w-[220px] h-auto"/>
            </div>
            <div className="flex ">
                <Link to="/" > <p className="cursor-pointer p-2 m-1 font-medium hover:text-[#6565f9]">Home</p> </Link>
                <Link to="/calculate-bmi"> <p className="cursor-pointer p-2 m-1 font-medium hover:text-[#6565f9]">Diet Planner</p> </Link>
               <Link to="/exercise" >  <p className="cursor-pointer p-2 m-1 font-medium hover:text-[#6565f9]">Exersice</p> </Link>
            </div>
        </div>
    </div>
  )
}

export default Header