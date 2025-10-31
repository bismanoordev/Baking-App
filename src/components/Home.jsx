import React from "react";
import { FaLaptop, FaCode, FaLinkedinIn } from "react-icons/fa";
import Categories from "./Categories"
import Card from "./Card"
import Posts from "./Posts"
import About from "./About"
import Recipes from "./Recipes"
import Season from "./Season"
import Breakfast from "./Breackfast";
import Help from "./Help";
import Tips from "./Tips";
import Bread from "./Bread";
import Dinner from "./Dinner";
import Cookies from "./Cookies";
import Icons from "./Icons";
import SignUp from "./SignUp";
import Classic from "./Classic";

export default function Home() {
  return (
    <div className="bg-[#F5F3F2] ">
      <h1 className="text-center flex pl-9 flex-wrap cursor-pointer text-black text-4xl font-semibold pt-8">
        Trusted Baking Recipes from a Self-Taught Baker 
        <div className="flex flex-wrap">
          <span className="text-[#8AB3CA] text-3xl">.</span><span className="text-[#E2A55B] text-3xl">.</span><span className="text-[#CE9277] text-3xl">.</span><span className="text-[#88B67D] text-3xl">.</span><span className="text-[#A38EAA] text-3xl">.</span><span className="text-[#CE7C77] text-3xl">.</span><span className="text-[#8AB3CA] text-3xl">.</span><span className="text-[#E2A55B] text-3xl">.</span><span className="text-[#CE9277] text-3xl">.</span><span className="text-[#88B67D] text-3xl">.</span><span className="text-[#A38EAA] text-3xl">.</span><span className="text-[#CE7C77] text-3xl">.</span><span className="text-[#8AB3CA] text-3xl">.</span><span className="text-[#E2A55B] text-3xl">.</span><span className="text-[#CE9277] text-3xl">.</span><span className="text-[#88B67D] text-3xl">.</span><span className="text-[#A38EAA] text-3xl">.</span><span className="text-[#CE7C77] text-3xl">.</span><span className="text-[#8AB3CA] text-3xl">.</span><span className="text-[#E2A55B] text-3xl">.</span><span className="text-[#CE9277] text-3xl">.</span><span className="text-[#88B67D] text-3xl">.</span><span className="text-[#A38EAA] text-3xl">.</span><span className="text-[#CE7C77] text-3xl">.</span><span className="text-[#8AB3CA] text-3xl">.</span><span className="text-[#E2A55B] text-3xl">.</span><span className="text-[#CE9277] text-3xl">.</span><span className="text-[#88B67D] text-3xl">.</span><span className="text-[#A38EAA] text-3xl">.</span><span className="text-[#CE7C77] text-3xl">.</span><span className="text-[#8AB3CA] text-3xl">.</span><span className="text-[#E2A55B] text-3xl">.</span><span className="text-[#CE9277] text-3xl">.</span><span className="text-[#88B67D] text-3xl">.</span><span className="text-[#A38EAA] text-3xl">.</span><span className="text-[#CE7C77] text-3xl">.</span><span className="text-[#8AB3CA] text-3xl">.</span><span className="text-[#E2A55B] text-3xl">.</span><span className="text-[#CE9277] text-3xl">.</span><span className="text-[#88B67D] text-3xl">.</span><span className="text-[#A38EAA] text-3xl">.</span><span className="text-[#CE7C77] text-3xl">.</span><span className="text-[#8AB3CA] text-3xl">.</span><span className="text-[#E2A55B] text-3xl">.</span><span className="text-[#CE9277] text-3xl">.</span><span className="text-[#88B67D] text-3xl">.</span><span className="text-[#A38EAA] text-3xl">.</span><span className="text-[#CE7C77] text-3xl">.</span><span className="text-[#E2A55B] text-3xl">.</span><span className="text-[#CE9277] text-3xl">.</span><span className="text-[#88B67D] text-3xl">.</span><span className="text-[#A38EAA] text-3xl">.</span><span className="text-[#CE7C77] text-3xl">.</span><span className="text-[#E2A55B] text-3xl">.</span><span className="text-[#CE9277] text-3xl">.</span><span className="text-[#88B67D] text-3xl">.</span><span className="text-[#A38EAA] text-3xl">.</span><span className="text-[#CE7C77] text-3xl">.</span>
        </div>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br bg-[#F5F3F2] text-white px-5 md:px-15">
      {/* Card 1 */}
      <div
        className="w-full max-w-sm border border-gray-400 shadow-sm mx-2 
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
      >
        <div className="group flex flex-col h-auto  bg-[#FFFFFF] cursor-pointer hover: transition duration-300 hover:shadow-lg hover:shadow-gray-600">
          <img src="https://sallysbakingaddiction.com/wp-content/uploads/2016/05/soft-chocolate-chip-cookie-bars-3-600x900.jpg" alt="" className="object-cover p-3" />
          <h5 className="mb-1 p-3 text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition duration-300 underline decoration-[#F0D9D6] decoration-3 underline-offset-4">
            Brownies & Bars
          </h5>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="w-full max-w-sm border border-gray-400 shadow-sm mx-2 
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
      >
        <div className="group flex flex-col h-auto  bg-[#FFFFFF] cursor-pointer transition duration-300 hover:shadow-lg hover:shadow-gray-600">
          <img src="https://sallysbakingaddiction.com/wp-content/uploads/2019/09/pumpkin-bars-2-600x900.jpg" alt="" className="object-cover p-3" />
          <h5 className="mb-1 p-3 text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition duration-300 underline decoration-[#F0D9D6] decoration-3 underline-offset-4">
            Halloween Recipes
          </h5>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="w-full max-w-sm border border-gray-400 shadow-sm mx-2 
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
      >
        <div className="group flex flex-col h-auto  bg-[#FFFFFF] cursor-pointer transition duration-300 hover:shadow-lg hover:shadow-gray-600">
          <img src="https://sallysbakingaddiction.com/wp-content/uploads/2025/08/apple-cider-spice-muffins-600x900.jpg" alt="" className="object-cover p-3 " />
          <h5 className="mb-1 p-3 text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition duration-300 underline decoration-[#F0D9D6] decoration-3 underline-offset-4">
            Fall Recipes
          </h5>
        </div>
      </div>
      {/* card 4 */}
      <div
        className="w-full max-w-sm border border-gray-400 shadow-sm mx-2 
                      hover:shadow-gray-500 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
      >
        <div className="group flex flex-col h-auto  bg-[#FFFFFF] cursor-pointer transition duration-300 hover:shadow-lg hover:shadow-gray-600">
          <img src="https://sallysbakingaddiction.com/wp-content/uploads/2023/09/brown-butter-pumpkin-oatmeal-cookies-recipe-3-600x900.jpg" alt="" className="object-cover p-3" />
          <h5 className="mb-1 p-3 text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition duration-300 underline decoration-[#F0D9D6] decoration-3 underline-offset-4">
            Pumpkin Recipes
          </h5>
        </div>
      </div>
    </div>
    <Categories/>
    <Card/>
    <Posts/>
    <About/>
    <Recipes/>
    <Season/>
    <Breakfast/>
    <Help/>
    <Tips/>
    <Bread/>
    <Dinner/>
    <Cookies/>
    <Icons/>
    <SignUp/>
    <Classic/>
    </div>
  );
}