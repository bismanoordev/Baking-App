import React, { useState } from "react";
import { PiBowlFoodLight } from "react-icons/pi";
import PopularBKF from "./PopularBKF";
import TopCasseroles from "./TopCasseroles";
import PopularMuffins from "./PopularMuffins";
import Homemade from "./Homemade";
import HealthyBKF from "./HealthyBKF";
import TopPancake from "./TopPancake";
import Popularsweet from "./Popularsweet";
import Join from "./Join";
import LatestBKF from "./LatestBKF";
import Icons from "./Icons";
import SignUp from "./SignUp";
import Classic from "./classic";

export default function Delicious() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
        <div className="flex min-h-[75vh]  bg-[#F2EFF3]">
      <a
        href="#"
        className="flex flex-col  bg-[#FBF2E8] p-3 pt-10
                   md:flex-row w-full max-w-8xl  
                   dark:bg-gray-800 dark:hover:bg-gray-700 
                   transition duration-300 overflow-hidden shadow-sm"
      >
        {/* Left: Text & Form */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 py-20 pl-10 leading-relaxed">
        
          <h5 className=" text-4xl gap-2 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#F4DDC1] decoration-3 underline-offset-4">
            <PiBowlFoodLight className="text-[#E2A65C] text-5xl rounded-full p-2  bg-[#F4DDC1]" />
            Delicious Breakfast Recipes
          </h5>

          <p className=" text-xl font-medium pl-3 text-gray-700 dark:text-gray-400">
           Breakfast is the most important meal of the day, but it’s also an excuse to eat sweet rolls, muffins, donuts, and <span className="font-bold text-[#E2A55B] underline"> pastries </span> in the morning! (OK, occasionally. But still.) Whether you’re planning a healthy wake-up meal with a delicious<span className="font-bold text-[#E2A55B] underline"> frittata, baked oatmeal, breakfast casserole;</span>  or a lavish special-occasion brunch with <span className="font-bold text-[#E2A55B] underline"> quiche</span> and <span className="font-bold text-[#E2A55B] underline"> cream cheese French toast casserole</span> ,you’re sure to find a new favorite breakfast recipe to start your day off right. Make sure to check out the reader-favorite recipes for <span className="font-bold text-[#E2A55B] underline"> scones, bagels, blueberry muffins,</span>, and easy <span className="font-bold text-[#E2A55B] underline"> cinnamon rolls</span>! 
          </p>

        </div>

        {/* Right: Image */}
        <div className="py-10 pl-22">
            <img
  className="object-cover w-72 h-80 md:h-[25rem] md:w-[28rem] bg-white p-3 rounded-lg transition-transform duration-500 rotate-6 "
  src="https://sallysbakingaddiction.com/wp-content/uploads/2024/04/dutch-baby-600x600.jpg"
  alt="Baking recipes"
/>

        </div>
      </a>
      
    </div>
    <PopularBKF/>
    <TopCasseroles/>
    <PopularMuffins/>
    <Homemade/>
    <HealthyBKF/>
    <TopPancake/>
    <Popularsweet/>
    <Join/>
    <LatestBKF/>
    <Icons/>
    <SignUp/>
    <Classic/>
    </div>
  );
}