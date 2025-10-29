import React, { useState } from "react";
import { RxCookie } from "react-icons/rx";
import PopularCookies from "./PopularCookies";
import Palooza from "./Palooza";
import CutoutCookie from "./CutoutCookie";
import DropCookies from "./DropCookies";
import ChillCookies from "./ChillCookies";
import Icebox from "./Icebox";
import LatestCookies from "./LatestCookies";
import Icons from "./Icons";
import SignUp from "./SignUp";
import Classic from "./classic";


export default function CookiesN() {
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
        <div className="flex min-h-[75vh]  bg-[#F9F1F0]">
      <a
        href="#"
        className="flex flex-col  bg-[#F9F1F0] p-3 pt-10
                   md:flex-row w-full max-w-8xl  
                   dark:bg-gray-800 dark:hover:bg-gray-700 
                   transition duration-300 overflow-hidden shadow-sm"
      >
        {/* Left: Text & Form */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 py-20 pl-10 leading-relaxed">
        
          <h5 className=" text-4xl gap-2 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#F0D9D6] decoration-3 underline-offset-4">
            <RxCookie className="text-[#C3665C] text-5xl rounded-full p-2  bg-[#F0D9D6]" />
           Trusted Cookie Recipes
          </h5>

          <p className=" text-xl font-medium pl-3 text-gray-700 dark:text-gray-400">
          Welcome to my most expansive recipe category! From the ever-popular recipes for classics like chewy<span className="font-bold text-[#994238] underline">  chocolate chip cookies  </span> and<span className="font-bold text-[#994238] underline">  sugar cookies,</span>  to reader favorites like <span className="font-bold text-[#994238] underline"> snickerdoodles </span> and <span className="font-bold text-[#994238] underline">  oatmeal raisin cookies, </span>  you’ll find literally hundreds of cookie recipes here. All these recipes contain my best tips and tutorials for cookie success, and don’t forget to stop by my<span className="font-bold text-[#994238] underline">  Cookie Baking Supplies </span>page. Whether you’re a baking beginner or are looking for your next challenge, you’re sure to find a new favorite cookie recipe here.
          </p>

        </div>

        {/* Right: Image */}
        <div className="py-10 pl-22">
            <img
  className="object-cover w-72 h-80 md:h-[25rem] md:w-[28rem] bg-white p-3 rounded-lg transition-transform duration-500 rotate-6 "
  src="https://sallysbakingaddiction.com/wp-content/uploads/2017/05/chewy-oatmeal-chocolate-chip-cookies-2-600x600.jpg"
  alt="Baking recipes"
/>

        </div>
      </a>
      
    </div>
    <PopularCookies/>
    <Palooza/>
    <CutoutCookie/>
    <DropCookies/>
    <ChillCookies/>
    <Icebox/>
    <LatestCookies/>
    <Icons/>
    <SignUp/>
    <Classic/>
    </div>
  );
}