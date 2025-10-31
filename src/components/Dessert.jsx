import React, { useState } from "react";
import { GiCupcake } from "react-icons/gi";
import PopularDessert from "./PopularDessert";
import CakesD from "./CakesD";
import Candy from "./Candy";
import Cheesecake from "./Cheesecake";
import CookiesD from "./CookiesD";
import Cupcaked from "./Cupcaked";
import Icecream from "./Icecream";
import Tarts from "./Tarts";
import SpecialtyD from "./SpecialtyD";
import BakingEasy from "./BakingEasy";
import LatestDessert from "./LatestDessert";
import Icons from "./Icons";
import SignUp from "./SignUp";
import Classic from "./Classic";





export default function Dessert() {
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
        <div className="flex min-h-[75vh]  bg-[#FCF5F3]">
      <a
        href="#"
        className="flex flex-col  bg-[#FCF5F3] p-3 pt-10
                   md:flex-row w-full max-w-8xl  
                   dark:bg-gray-800 dark:hover:bg-gray-700 
                   transition duration-300 overflow-hidden shadow-sm"
      >
        {/* Left: Text & Form */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 py-20 pl-10 leading-relaxed">
        
          <h5 className=" text-4xl gap-2 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#F2D6D0] decoration-3 underline-offset-4">
            <GiCupcake className="text-[#CE7C77] text-5xl rounded-full p-2  bg-[#F2D6D0]" />
           Trusted Cookie Recipes
          </h5>

          <p className=" text-xl font-medium pl-3 text-gray-700 dark:text-gray-400">
          The majority of recipes on this website are desserts, so this is certainly a page with many recipe choices. From indulgent<span className="font-bold text-[#994238] underline"> dark chocolate bread pudding</span> to colorful<span className="font-bold text-[#994238] underline">l fruit pizza,</span> you’re sure to find your new favorite dessert recipe among this vast selection. (If you can’t, you might be on the wrong website entirely!) Browse hundreds of dessert recipes, ranging from the super simple<span className="font-bold text-[#994238] underline"> (1-bowl brownies)</span> to the more challenging <span className="font-bold text-[#994238] underline"> (French macarons)</span> Whether you’re a beginner baker or are looking for a baking challenge, there’s something for everyone here.
          </p>

        </div>

        {/* Right: Image */}
        <div className="py-10 pl-22">
            <img
  className="object-cover w-72 h-80 md:h-[25rem] md:w-[28rem] bg-white p-3 rounded-lg transition-transform duration-500 rotate-6 "
  src="https://sallysbakingaddiction.com/wp-content/uploads/2025/01/chocolate-chip-layer-cake-with-ganache-chocolate-drip-600x600.jpg"
  alt="Baking recipes"
/>

        </div>
      </a>
      
    </div>
    <PopularDessert/>
    <CakesD/>
    <Candy/>
    <Cheesecake/>
    <CookiesD/>
    <Cupcaked/>
    <Icecream/>
    <Tarts/>
    <SpecialtyD/>
    <BakingEasy/>
    <LatestDessert/>
    <Icons/>
    <SignUp/>
    <Classic/>
    </div>
  );
}