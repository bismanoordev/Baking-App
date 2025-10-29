import React from "react";

import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { PiBreadBold } from "react-icons/pi";


export default function Bread() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
        <div className="flex items-center justify-center gap-3 bg-[#DDD5DF] border-[#DDD5DF] p-3 w-fit font-bold text-xl">
          <PiBreadBold className="text-[#232223] text-2xl" />
          <span className="text-[#010101] text-xl">Let’s Bake Bread</span>
        </div>

       <div className="bg-[#FFFFFF] border border-[#EDD6CC] md:justify-center sm:justify-center min-h-[120vh]">
        <p className="text-xl text-black px-7 pt-2">Bread bakers of all levels will love easy recipes like 4-ingredient <span className="font-bold underline">homemade bread</span> , quick & easy <span className="font-bold underline">soft pretzels</span>, and this <span className="font-bold underline">honey oat bread</span> . This <span className="font-bold underline">Baking With Yeast Guide</span> is a great starting point if you are new to baking bread.</p>
       <div
    className="flex flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap 
               md:items-center sm:items-center md:justify-center sm:justify-center 
               md:gap-1 gap-2 p-4 md:p-6 items-center h-auto justify-between 
               min-h-[75vh] bg-gradient-to-br bg-[#FFFFFF] text-white px-5 md:px-5"
       >
    {/* Card 1 */}
         <div
      className="w-full sm:w-[80%] md:w-[30%] lg:w-[30%] max-w-sm shadow-sm mx-auto sm:mx-2 
                 h-auto hover:shadow-gray-500 hover:shadow-lg lg:h-[84vh] md:h-[73vh]
                      transition duration-300 transform hover:-translate-y-2"
    >
      <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer lg:h-[93vh]  md:h-[73vh]
                      transition duration-300 hover:shadow-lg hover:shadow-gray-600">
        <img
          src="https://sallysbakingaddiction.com/wp-content/uploads/2024/08/dutch-oven-cranberry-nut-bread-600x900.jpg"
          alt=""
          className="object-cover h-[440px] w-full"
        />
        <p className="text-black px-4 pt-2 text-sm underline">BREAD</p>
        <h5 className="px-4 pt-2 text-2xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          Crusty Cranberry Nut No-Knead Bread
        </h5>
        <p className="flex items-center gap-1 pt-2 px-3 pb-3 text-sm text-black">
          <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
          Comment
        </p>
      </div>
    </div>


    {/* Card 2 */}
    <div
      className="w-full sm:w-[80%] md:w-[30%] lg:w-[30%] max-w-sm shadow-sm mx-auto sm:mx-2 
                 h-auto hover:shadow-gray-500 hover:shadow-lg lg:h-[84vh]  md:h-[73vh]
                 transition duration-300 transform hover:-translate-y-2"
    >
      <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer lg:h-[93vh]  md:h-[73vh]
                      transition duration-300 hover:shadow-lg hover:shadow-gray-600">
        <img
          src="https://sallysbakingaddiction.com/wp-content/uploads/2024/01/cinnamon-swirl-bread-photo-2-600x900.jpg"
          alt=""
          className="object-cover h-[440px] w-full"
        />
        <p className="text-black px-4 pt-2 text-sm underline">BREAD</p>
        <h5 className="px-4 pt-2 text-2xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          Homemade Cinnamon Swirl Bread
        </h5>
        <p className="flex items-center gap-1 px-3 pt-2 pb-3 text-sm text-black">
          <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
          22 Comment
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="w-full sm:w-[80%] md:w-[30%] lg:w-[30%] max-w-sm shadow-sm mx-auto sm:mx-2 
                 h-auto hover:shadow-gray-500 hover:shadow-lg lg:h-[84vh]  md:h-[73vh]
                 transition duration-300 transform hover:-translate-y-2"
    >
      <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer lg:h-[93vh]  md:h-[73vh]
                      transition duration-300 hover:shadow-lg hover:shadow-gray-600">
        <img
          src="https://sallysbakingaddiction.com/wp-content/uploads/2015/11/homemade-honey-butter-rolls-4-600x900.jpg"
          alt=""
          className="object-cover h-[440px] w-full"
        />
        <p className="text-black px-4 pt-2 text-sm underline">YEAST BREAD</p>
        <h5 className="px-4 pt-2 text-2xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          Tried & True Honey Butter Rolls
        </h5>
        <p className="flex items-center gap-1 px-3 pt-2 pb-3 text-sm text-black">
          <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
          19 Comment
        </p>
      </div>
    </div>
  </div>

  {/* Button */}
  <div className="flex justify-center mt-20 px-5 sm:justify-center md:justify-end w-full">
    <button
      className="flex items-center justify-center gap-2 bg-[#A38EAA] text-black 
                 w-fit px-6 py-3 rounded-full mb-5 sm:mt-0 
                 hover:bg-black hover:text-white 
                 transition-all duration-300 text-sm font-semibold 
                 shadow-md shadow-black/40"
    >
      VIEW MORE RECIPES
      <FaArrowRight className="text-sm mt-[2px]" />
    </button>
  </div>
</div>

    </div>
    
  );
}