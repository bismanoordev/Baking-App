import React, { useState } from "react";
import { RiBreadLine } from "react-icons/ri";
import TopBread from "./TopBread";
import Bread101 from "./Bread101";
import YeastBread from "./YeastBread";
import QuickBread from "./QuickBread";
import LatestBread from "./LatestBread";
import Icons from "./Icons";
import SignUp from "./SignUp";
import Classic from "./Classic";

export default function BreadN() {
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
        <div className="flex min-h-[75vh] bg-[#F2EFF3]">
      <a
        href="#"
        className="flex flex-col  bg-[#F2EFF3] p-3
                   md:flex-row w-full max-w-8xl  
                   dark:bg-gray-800 dark:hover:bg-gray-700 
                   transition duration-300 overflow-hidden shadow-sm"
      >
        {/* Left: Text & Form */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 py-20 pl-10 leading-relaxed">
        
          <h5 className=" text-4xl gap-1 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#DDD5DF] decoration-3 underline-offset-4">
            <RiBreadLine className="text-[#A692AD] text-3xl mt-2 " />
            Savory & Sweet Bread Recipes
          </h5>

          <p className=" text-xl font-medium pl-3 text-gray-700 dark:text-gray-400">
            Is there any smell better than fresh bread in the oven? Skip the bakery and make <span className="font-bold underline">homemade bread</span> in your own kitchen! With my detailed instructions and thorough tutorials, anyone can learn how. Here you’ll find all my easy-to-follow recipes and tutorials for <span className="font-bold underline">yeast breads</span> and <span className="font-bold underline">quick breads</span>, including <span className="font-bold underline">banana bread</span> , <span className="font-bold underline">pizza dough</span>, rolls, <span className="font-bold underline">soft pretzels</span>, <span className="font-bold underline">biscuits</span>, bagels, and more. Bread beginners welcome!
          </p>

        </div>

        {/* Right: Image */}
        <div className="py-10 pl-25">
            <img
  className="object-cover w-72 h-80 md:h-[25rem] md:w-[28rem] bg-white p-3 rounded-lg transition-transform duration-500 rotate-6 "
  src="https://sallysbakingaddiction.com/wp-content/uploads/2024/12/homemade-ciabatta-bread-600x600.jpg"
  alt="Baking recipes"
/>

        </div>
      </a>
      
    </div>
    <TopBread/>
    <Bread101/>
    <YeastBread/>
    <QuickBread/>
    <LatestBread/>
    <Icons/>
    <SignUp/>
    <Classic/>
    </div>
  );
}