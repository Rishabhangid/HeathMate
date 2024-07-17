import React from 'react'
import Logo from "../img/healthmate logo.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="bg-[#223FD3]   ">
            <div className="w-[90%] m-auto flex justify-between items-start">
                <div>
                    <img src={Logo} alt="logo" className="w-[200px] mt-6" />
                    <p className="text-white mt-2">All Right Reserved.</p>
                </div>

                <div className="text-white p-4">
                    <h1 className="text-[21px] font-bold mb-3">Our Services</h1>
                     <Link to="/calculate-bmi"> <h1 className="text-[18px] cursor-pointer">Diet Planner</h1> </Link>
                     <Link to="/exercise"><h1 className="text-[18px] cursor-pointer">Know Exersice</h1></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer