// Imported Usestate
import React, { useState } from 'react';
// Importing React Slick for Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import diets from "../data/Diets";

// const diets = [
//     { name: 'Diet 1', protein: 50, carbs: 100, fat: 20, calories: 450, servingSize: '100g',  img: "https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
//     { name: 'Diet 2', protein: 70, carbs: 120, fat: 25,calories: 450,  servingSize: '100g', img: "https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
//     { name: 'Diet 3', protein: 60, carbs: 110, fat: 22,calories: 450,  servingSize: '100g', img: "https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
// ];

const diets = [
    {
    name: 'Oats',
    protein: 16.9,
    carbs: 66.3,
    fat: 6.9,
    calories: 389,
    servingSize: '100g',
    img:
    "https://images.pexels.com/photos/11350103/pexels-photo-11350103.jpeg?auto=compress"
    },
    {
    name: 'Sweet Potato',
    protein: 2,
    carbs: 20,
    fat: 0.1,
    calories: 86,
    servingSize: '100g',
    img:
    "https://images.pexels.com/photos/7543201/pexels-photo-7543201.jpeg?auto=compress"
    },
    {
    name: 'Cottage Cheese',
    protein: 11,
    carbs: 3.4,
    fat: 4.3,
    calories: 98,
    servingSize: '100g',
    img:
    "https://images.pexels.com/photos/306801/pexels-photo-306801.jpeg?auto=compress"
    },
    {
    name: 'Banana',
    protein: 1.3,
    carbs: 23,
    fat: 0.3,
    calories: 96,
    servingSize: '100g',
    img:
    "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress"
    },
    {
    name: 'Avocado',
    protein: 2,
    carbs: 9,
    fat: 15,
    calories: 160,
    servingSize: '100g',
    img:
    "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress"
    },
    {
    name: 'Carrot',
    protein: 0.6,
    carbs: 10,
    fat: 0.3,
    calories: 41,
    servingSize: '100g',
    img:
    "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress"
    },
    {
    name: 'Rice',
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    calories: 130,
    servingSize: '100g',
    img:
    "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress"
    },
    {
    name: 'Cucumber',
    protein: 0.6,
    carbs: 3.6,
    fat: 0.1,
    calories: 15,
    servingSize: '100g',
    img:
    "https://images.pexels.com/photos/10432461/pexels-photo-10432461.jpeg?auto=compress"
    },
    {
    name: 'Tomato',
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    calories: 18,
    servingSize: '100g',
    img:
    "https://images.pexels.com/photos/96616/pexels-photo-96616.jpeg?auto=compress"
    }
    ];

const BMICalculator = () => {

    // Slider Settings
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    // ************** USESTATES ************************* 

    // state to manage height input by user 
    const [height, setHeight] = useState('');
    // state to manage width input by uswer
    const [weight, setWeight] = useState('');
    // state to manage age input by user
    const [age, setAge] = useState('');
    // state used to control the BMI, setting BMI after calculating it.
    const [bmi, setBMI] = useState(null);
    // these two are the usestates used to calculate calories, nutrion required and updating
    const [calories, setCalories] = useState({ maintain: 0, increase: 0, decrease: 0 });
    const [nutrition, setNutrition] = useState({ protein: 0, carbs: 0, fat: 0 });
    //  it is the usesate which manges the selected diets. Its a emplt array when user add diet , we add in it.
    const [selectedDiet, setSelectedDiet] = useState([]);
    const [totalNutrition, setTotalNutrition] = useState({ protein: 0, carbs: 0, fat: 0, calories:0 });

    // This function got executed when the user click on "Calculate button"
    const calculateBMI = () => {
        // 1st of all, it convert the height (cm) in "meter" by dividing it by "100"
        const heightInMeters = height / 100;
        // it calculates the bmi by the following formula and store the result in the "bmivalue" variable.
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        // it update the "bmi" state with the calculated bmi which was "null" earlier.
        setBMI(bmiValue);
        // just after calculating bmi, it calls the function mentioned below to calculate the users calori needed and nutritional value in order to be healthy..
        calculateCaloriesAndNutrition();
    };

    // this function is executed when it is called in "calculateBMI" function. It basically calculate the nutrition and calori according to users inout data.
    // these info are stored in  a usestate "calorie" and "nutrition" which are the object different values and these fuction update them by "Set....".
    const calculateCaloriesAndNutrition = () => {
        // Using Mifflin-St Jeor Equation for calorie calculation
        const BMR = 10 * weight + 6.25 * height - 5 * age + 5; // for men
        // const BMR = 10 * weight + 6.25 * height - 5 * age - 161; // for women
        const maintain = BMR * 1.2; // assuming sedentary lifestyle
        const increase = maintain + 500;
        const decrease = maintain - 500;
        setCalories({ maintain: Math.round(maintain), increase: Math.round(increase), decrease: Math.round(decrease) });

        // Nutritional needs calculation (simple approximation)
        const protein = (weight * 1.6).toFixed(2); // 1.6 grams of protein per kg of body weight
        const carbs = ((maintain * 0.55) / 4).toFixed(2); // 55% of daily calories from carbs
        const fat = ((maintain * 0.25) / 9).toFixed(2); // 25% of daily calories from fat
        setNutrition({ protein, carbs, fat, maintain });
    };

    
    // this executed when we clcik "add diet" , it received info of which diet is added as argument
    const addDiet = (diet) => {

        // so this just just keep the old data in array and add the the data od diet added.
        setSelectedDiet([...selectedDiet, diet]);
        // it added the new diet nutrion to the total diet added nutri .value and it uses  usestate to do this.
        setTotalNutrition({
            protein: totalNutrition.protein + diet.protein,
            carbs: totalNutrition.carbs + diet.carbs,
            fat: totalNutrition.fat + diet.fat,
            calories: totalNutrition.calories + diet.calories
        });
    };

    // this got executed when user click on the delete button of any selectediet and we get to know which diets user want to delete by passing its index.
    const removeDiet = (index) => {
        // stroing the diet to remove in variable
        const dietToRemove = selectedDiet[index];
        // removing the diet
        const updatedDiet = selectedDiet.filter((_, i) => i !== index);
        // updating the diet
        setSelectedDiet(updatedDiet);
        // updating total nutrition by remving deleted diet nutritional value
        setTotalNutrition({
            protein: totalNutrition.protein - dietToRemove.protein,
            carbs: totalNutrition.carbs - dietToRemove.carbs,
            fat: totalNutrition.fat - dietToRemove.fat,
            calories: totalNutrition.calories - dietToRemove.calories
        });
    };

    // appling color according to the bmi
    const getBMIColor = () => {
        if (bmi < 18.5 || bmi >= 25) {
            return 'red'; // Unhealthy
        }
        return 'green'; // Healthy
    };

    // used to print healthy unhealthy messsge
    const getBMIMessage = () => {
        if (bmi < 18.5 || bmi >= 25) {
            return 'Unhealthy';
        }
        return 'Healthy';
    };

    return (
        // ****************************************************************************************** Main Div Covering All Content
        <div className="bmi-calculator w-[90%] m-auto">

            {/* Taking Input from the User and "Calculate" Button */}
            <div className="input-section border-4 border-grey-800 rounded-xl p-4 mt-10 ">
                <h2 className="text-[28px] font-bold text-center pb-10">Calculate Your BMI and Daily Caloric Needs</h2>
                <div className="flex justify-between">
                    <label>
                        <span className="font-medium text-[20px]">Height (cm): </span>
                        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className=" text-[grey] text-[18px] border-2 rounded-lg p-2 border-black-700" />
                    </label>
                    <label>
                        <span className="font-medium text-[20px]">Weight (kg): </span>
                        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="text-[grey] text-[18px] border-2 rounded-lg p-2 border-black-700" />
                    </label>
                    <label>
                        <span className="font-medium text-[20px]">Age: </span>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className=" text-[grey] text-[18px] border-2 rounded-lg p-2 border-black-700" />
                    </label>

                    {/* After Clicking the Calculate button, funct. "calculateBMI" got executed. */}
                    <button onClick={calculateBMI} className="bg-blue-700 text-white p-3  rounded-xl">Calculate BMI</button>
                </div>

            </div>

            {/* ********************************************************* Showing Calculated BMI, Daily Nutrition and Calorie Needed */}
            <div className="">
                {bmi && (
                    <p style={{ color: getBMIColor() }} className="text-[28px] font-bold text-center pb-10 pt-10" >
                        Your BMI is: {bmi} ({getBMIMessage()})
                    </p>
                )}
                {bmi && (
                    <div className="calories-section border bg-[#223FD3] text-white w-[90%] m-auto p-4 rounded-xl grid grid-cols-2">
                        <div className="">
                            <h3 className="font-bold text-[22px] text-center
                        p-4">Daily Nutritional Needs</h3>
                            <p className="font-medium p-2 text-[18px] text-center">Calories to maintain weight: <span className="text-[#FFAA00]">{calories.maintain} kcal/day </span> </p>
                            <p className="font-medium p-2 text-[18px] text-center">Calories to increase weight: <span className="text-[#FFAA00]">{calories.increase} kcal/day </span> </p>
                            <p className="font-medium p-2 text-[18px] text-center">Calories to decrease weight: <span className="text-[#FFAA00]">{calories.decrease} kcal/day </span> </p>
                        </div>

                        <div className="">
                            <h3 className="font-bold text-[22px] text-center
                            p-4">Daily Nutritional Needs</h3>
                            <p className="font-medium p-2 text-[18px] text-center">Maintainence Calorie: <span className="text-[#FFAA00]"> {Math.round(nutrition.maintain)}g </span> </p>
                            <p className="font-medium p-2 text-[18px] text-center">Protein: <span className="text-[#FFAA00]"> {nutrition.protein}g </span> </p>
                            <p className="font-medium p-2 text-[18px] text-center">Carbs:  <span className="text-[#FFAA00]">{nutrition.carbs}g </span> </p>
                            <p className="font-medium p-2 text-[18px] text-center">Fat: <span className="text-[#FFAA00]"> {nutrition.fat}g </span> </p>
                        </div>
                    </div>
                )}
            </div>

            {/* ************************************************************* Diet Suggestion including Breakfast, Lunch and Dinner Slidwer */}
            <div className="bg-blue-300 p-12 mt-16">
                <div className="diet-section w-[90%] m-auto">
                    <h2 className="text-[28px] font-bold text-center  mt-16">Diet Suggestions</h2>
                    <p className="text-[20px] font-normal text-center pb-10">Plan yuor diet by adding shown diets, in your diet and see the nutritional values of your diet.</p>
                    <h2 className="text-[28px] font-bold text-center text-[grey] pb-10">Breakfast</h2>
                    <Slider {...settings}>
                        {diets.map((diet, index) => (
                            <div key={index} className="diet-item  flex items-center justify-center ">
                                <img src={diet.img} alt="imgg" className="rounded-xl m-auto w-[210px] h-[150px]" />
                                <h2 className="text-center font-bold text-[18px] mt-5"> {diet.name} </h2>
                                <p className="text-center text-[16px] font-medium"> Protein: {diet.protein}g  Carbs: {diet.carbs}g  Fat: {diet.fat}g Calories: {diet.calories}  Serving Size: {diet.servingSize} </p>
                                {/* <p className="text-center"> Carbs: {diet.carbs}g </p>
                        <p className="text-center"> Fat: {diet.fat}g </p> */}
                                {/* <p>{diet.name} - Protein: {diet.protein}g, Carbs: {diet.carbs}g, Fat: {diet.fat}g</p> */}
                                <button onClick={() => addDiet(diet)} className="bg-[#FFAA00] p-2 w-[90%] mt-5 ml-[18px] text-white text-[18px] self-center rounded-lg text-center">Add to Diet</button>
                            </div>
                        ))}
                    </Slider>

                    <h2 className="text-[28px] font-bold text-center text-[grey] pb-10 mt-10">Lunch</h2>
                    <Slider {...settings}>
                        {diets.map((diet, index) => (
                            <div key={index} className="diet-item  flex items-center justify-center ">
                                <img src={diet.img} alt="imgg" className="rounded-xl m-auto w-[210px] h-[150px]" />
                                <h2 className="text-center font-bold text-[18px] mt-5"> {diet.name} </h2>
                                <p className="text-center text-[16px] font-medium"> Protein: {diet.protein}g  Carbs: {diet.carbs}g  Fat: {diet.fat}g Calories: {diet.calories}  Serving Size: {diet.servingSize} </p>
                                {/* <p className="text-center"> Carbs: {diet.carbs}g </p>
                        <p className="text-center"> Fat: {diet.fat}g </p> */}
                                {/* <p>{diet.name} - Protein: {diet.protein}g, Carbs: {diet.carbs}g, Fat: {diet.fat}g</p> */}
                                <button onClick={() => addDiet(diet)} className="bg-[#FFAA00] p-2 w-[90%] mt-5 ml-[18px] text-white text-[18px] self-center rounded-lg text-center">Add to Diet</button>
                            </div>
                        ))}
                    </Slider>


                    <h2 className="text-[28px] font-bold text-center text-[grey] pb-10 mt-10">Dinner</h2>
                    <Slider {...settings}>
                        {diets.map((diet, index) => (
                            <div key={index} className="diet-item  flex items-center justify-center ">
                                <img src={diet.img} alt="imgg" className="rounded-xl m-auto w-[210px] h-[150px]" />
                                <h2 className="text-center font-bold text-[18px] mt-5"> {diet.name} </h2>
                                <p className="text-center text-[16px] font-medium"> Protein: {diet.protein}g  Carbs: {diet.carbs}g  Fat: {diet.fat}g Calories: {diet.calories}  Serving Size: {diet.servingSize}</p>
                                {/* <p className="text-center"> Carbs: {diet.carbs}g </p>
                        <p className="text-center"> Fat: {diet.fat}g </p> */}
                                {/* <p>{diet.name} - Protein: {diet.protein}g, Carbs: {diet.carbs}g, Fat: {diet.fat}g</p> */}
                                <button onClick={() => addDiet(diet)} className="bg-[#FFAA00] p-2 w-[90%] mt-5 ml-[18px] text-white text-[18px] self-center rounded-lg text-center">Add to Diet</button>
                            </div>
                        ))}
                    </Slider>


                </div>
            </div>

         {/* ******************************************************************** Shwing Selected Diets with their Nutritional Values */}
            <div className="selected-diet border-4 border-blue-300 mt-10 mb-10 p-5">
                <h2 className="text-[28px] font-bold text-center mt-3">Selected Diet</h2>
                <div className="flex justify-around mt-5">
                    <h3 className="font-bold text-[25px]">Total Nutrition : </h3>
                    <p className="font-bold text-[20px]">Protein: {totalNutrition.protein}g</p>
                    <p className="font-bold text-[20px]">Carbs: {totalNutrition.carbs}g</p>
                    <p className="font-bold text-[20px]">Fat: {totalNutrition.fat}g</p>
                    <p className="font-bold text-[20px]">Calories: {totalNutrition.calories}g</p>
                </div>
                <div className="mt-10 grid  gap-6 grid-cols-4">
                    {selectedDiet.map((diet, index) => (
                        <div key={index} className="selected-diet-item  flex items-center justify-center">
                            <img src={diet.img} alt="imgg" className=" w-[90px] h-[90px] rounded-full object-cover" />
                            <div className=" pl-3">
                                <p className="text-[15px] font-bold">{diet.name}</p>
                                <p className="text-[14px] mb-1"> Protein: {diet.protein}g  Carbs: {diet.carbs}g  Fat: {diet.fat}g Calories: {diet.calories}  Serving Size: {diet.servingSize} </p>
                                <button onClick={() => removeDiet(index)} className="bg-red-600 text-white p-1 rounded-lg">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>


    );
};

// Exporting This Component
export default BMICalculator;

