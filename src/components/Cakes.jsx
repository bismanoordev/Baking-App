import React, { useState } from "react";
import { TbCake } from "react-icons/tb";
import TopCake from "./TopCake";
import PerfectCake from "./PerfectCake";
import BestCake from "./BestCake";
import LovelyCake from "./LovelyCake";
import SimpleCake from "./SimpleCake";
import Cupcakes from "./Cupcakes";
import Ideas from "./Ideas";
import Tools from "./Tools";
import LatestCake from "./LatestCake";
import Icons from "./Icons";
import SignUp from "./SignUp";
import Classic from "./Classic";

export default function Cakes() {
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
        <div className="flex min-h-[75vh]  bg-[#F0F5F8]">
      <a
        href="#"
        className="flex flex-col  bg-[#F0F5F8] p-3 pt-10
                   md:flex-row w-full max-w-8xl  
                   dark:bg-gray-800 dark:hover:bg-gray-700 
                   transition duration-300 overflow-hidden shadow-sm"
      >
        {/* Left: Text & Form */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 py-20 pl-10 leading-relaxed">
        
          <h5 className=" text-4xl gap-2 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#E2ECF2] decoration-3 underline-offset-4">
            <TbCake className="text-[#A0C1D4] text-5xl rounded-full p-2  bg-[#E2ECF2]" />
            Homemade Cake Recipes
          </h5>

          <p className=" text-xl font-medium pl-3 text-gray-700 dark:text-gray-400">
           My team and I believe that celebrations call for cake! Here you’ll find cakes of all flavors and sizes, and levels of difficulty ranging from very easy <span className="font-bold text-[#335A82] underline"> berry icebox cake </span> to more challenging<span className="font-bold text-[#335A82] underline">  vertical cake.</span>  If you’re looking for a classic layer cake recipe, <span className="font-bold text-[#335A82] underline">  vanilla cake, white cake,</span> triple <span className="font-bold text-[#335A82] underline">  chocolate cake, carrot cake, red velvet cake, lemon blueberry cake,</span> and<span className="font-bold text-[#335A82] underline">  strawberry cake</span>are some of the most popular recipes on my site, with thousands of reviews. But you’ll also find recipes for Bundt cakes,<span className="font-bold text-[#335A82] underline">  pound cake,</span>sheet cakes, 6-inch cakes, cake pops, and much more!
          </p>

        </div>

        {/* Right: Image */}
        <div className="py-10 pl-22">
            <img
  className="object-cover w-72 h-80 md:h-[25rem] md:w-[28rem] bg-white p-3 rounded-lg transition-transform duration-500 rotate-6 "
  src="https://sallysbakingaddiction.com/wp-content/uploads/2017/01/white-cake-vanilla-frosting-2-600x600.jpg"
  alt="Baking recipes"
/>

        </div>
      </a>
      
    </div>
    <TopCake/>
    <PerfectCake/>
    <BestCake/>
    <LovelyCake/>
    <SimpleCake/>
    <Cupcakes/>
    <Ideas/>
    <Tools/>
    <LatestCake/>
    <Icons/>
    <SignUp/>
    <Classic/>
    </div>
  );
}