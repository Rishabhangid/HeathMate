import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from "../img/cover-photo-2.jpg";
import "../output.css"
import "./HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateToBMICalculator = () => {
        navigate('/calculate-bmi');
    };
    const navigateToExersice = () => {
        navigate('/exercise');
    };

    return (

       
        <>
            <div className="herobox">

                <div className="imgbox">
                    <img src={Image} alt="Cover" className="coverimg" />
                </div>

                <div className="textbox">
                    <h1 className="">Empower Your <span className="high">Health</span> Journey</h1>
                    <p>  Track your BMI, tailor your diet, and master your exercises for a healthier you.</p>
                    <button onClick={navigateToBMICalculator}>Diet Plan</button>
                    <button onClick={navigateToExersice}>Know Your Exersice</button>
                </div>

            </div>

            <div className=" w-[90%] m-auto ">

                <h1 className="text-[30px] font-bold text-center pb-16 mt-10">What we Do</h1>

                <div className="flex flex-col rounded-xl">
                    <div className="flex m-auto pb-16 rounded-xl">

                        <div className="rounded-xl">
                            <img src="https://img.freepik.com/free-photo/top-view-arrangement-with-diet-planning-notepad_23-2149099889.jpg?size=626&ext=jpg&ga=GA1.1.609291644.1711262066&semt=ais_user" alt="imgg" className=" w-[300px] h-[200px] object-cover rounded-l-lg " />
                        </div>

                        <div className="p-5 border border-grey-900 rounded-r-xl">
                            <h1  className= "text-[25px] font-bold pb-3">Diet Planner</h1>
                            <p className= "font-medium text-[18px] text-[grey] pb-3" >Plan your customizable diet by calculating your BMI,Calories Needed etc.</p>
                             <Link to="/calculate-bmi"> <button className="bg-[#223FD3] text-white p-2 rounded-xl">Plan your Diet</button> </Link>
                        </div>

                    </div>

                    <div className="flex m-auto pb-16 rounded-xl">

                        <div className="rounded-xl">
                            <img src="https://img.freepik.com/free-photo/man-workingout-local-gym_93675-129300.jpg?t=st=1717678238~exp=1717681838~hmac=02494769daff926fa88023beca34b8a9226eb5b69e4d5e088d7787bda5d1447d&w=996" alt="imgg" className=" w-[300px] h-[200px] object-cover rounded-l-lg " />
                        </div>

                        <div className="p-5 border border-grey-900 rounded-r-xl">
                            <h1  className= "text-[25px] font-bold pb-3">Exersice</h1>
                            <p className= "font-medium text-[18px] text-[grey] pb-3" >Know about different exersices,how to perfrom yoga, gym and many more.</p>
                            <Link to="/exercise"> <button className="bg-[#223FD3] text-white p-2 rounded-xl">Plan your Diet</button> </Link>
                        </div>

                    </div>

                    
                </div>

            </div>
        </>






        // <div className="herobox">

        //     <h1 className="font-semibold fle">Diet Calculator</h1>
        //     <h1>Welcome to Health Management Website</h1>
        //     <p>This website helps you calculate your BMI and suggests a daily diet to stay healthy.</p>
        //     <button onClick={navigateToBMICalculator}>Calculate BMI</button>

        // </div>

    );

}
export default HomePage;


