import React, { useState } from "react";
import { GiPieSlice } from "react-icons/gi";
import PopularPies from "./PopularPies";
import Pieweek from "./Pieweek";
import CreamPies from "./CreamPies";
import PieTools from "./PieTools";
import FruitPie from "./FruitPie";
import TartRecipe from "./TartRecipe";
import LatestPie from "./LatestPie";
import Icons from "./Icons";
import SignUp from "./SignUp";
import Classic from "./classic";






export default function Pies() {
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
        <div className="flex min-h-[75vh]  bg-[#F6F0EA]">
      <a
        href="#"
        className="flex flex-col  bg-[#F6F0EA] p-3 pt-10
                   md:flex-row w-full max-w-8xl  
                   dark:bg-gray-800 dark:hover:bg-gray-700 
                   transition duration-300 overflow-hidden shadow-sm"
      >
        {/* Left: Text & Form */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 py-20 pl-10 leading-relaxed">
        
          <h5 className=" text-4xl gap-2 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#E7D8C7] decoration-3 underline-offset-4">
            <GiPieSlice className="text-[#BF9A6E] text-5xl rounded-full p-2  bg-[#E7D8C7]" />
           Pies, Crisps, & Tarts
          </h5>

          <p className=" text-xl font-medium pl-3 text-gray-700 dark:text-gray-400">
          No recipe makes you feel more accomplished than a completely from-scratch pie such as<span className="font-bold text-[#715532] underline"> apple pie, blueberry pie, or pumpkin pie.</span> This section includes all my favorite pie recipes and most helpful success tips, all intended to boost your pie-making confidence. If you’re a homemade pie beginner, a great place to start is with my complete<span className="font-bold text-[#715532] underline"> pie crust</span> tutorial for how to make the best buttery, flaky pie crust. I also show you how to<span className="font-bold text-[#715532] underline">  lattice pie crust</span> and<span className="font-bold text-[#715532] underline"> blind bake pie crust.</span>If you prefer a crumb crust, we have those, too! Check out this 6-ingredient <span className="font-bold text-[#715532] underline">cookies & cream pie</span> and this <span className="font-bold text-[#715532] underline"> strawberry cream cheese pie.</span>  You’ll also find recipes for <span className="font-bold text-[#715532] underline">apple crisp, cobbler, </span> and plenty of tarts in this vast section.
          </p>

        </div>

        {/* Right: Image */}
        <div className="py-10 pl-22">
            <img
  className="object-cover w-72 h-80 md:h-[25rem] md:w-[28rem] bg-white p-3 rounded-lg transition-transform duration-500 rotate-6 "
  src="https://sallysbakingaddiction.com/wp-content/uploads/2024/11/apple-cranberry-crumble-pie-600x600.jpg"
  alt="Baking recipes"
/>

        </div>
      </a>
      
    </div>
    <PopularPies/>
    <Pieweek/>
    <CreamPies/>
    <PieTools/>
    <FruitPie/>
    <TartRecipe/>
    <LatestPie/>
    <Icons/>
    <SignUp/>
    <Classic/>
    </div>
  );
}