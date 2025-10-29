import React from "react";

import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { MdDinnerDining } from "react-icons/md";



export default function Dinner() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
        <div className="flex items-center justify-center gap-3 bg-[#F0D9D6] border-[#F0D9D6] p-3 w-fit font-bold text-xl">
          <MdDinnerDining className="text-[#C4675D] text-2xl" />
          <span className="text-[#010101] text-xl">Dinner Recipes Ideas</span>
        </div>

       <div className="bg-[#FFFFFF] border border-[#F0D9D6] md:justify-center sm:justify-center min-h-[120vh]">
        <p className="text-xl text-black px-7 pt-2">Here you’ll find some of my family’s favorite quick & simple dishes, including <span className="font-bold underline">black bean burgers</span> , 20-minute <span className="font-bold underline"> honey garlic shrimp</span>, and <span className="font-bold underline"> creamy lemon & thyme chicken</span> . </p>
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
          src="https://sallysbakingaddiction.com/wp-content/uploads/2025/01/cauliflower-potato-soup-600x900.jpg"
          alt=""
          className="object-cover h-[440px] w-full"
        />
        <p className="text-black px-4 pt-2 text-sm underline">DINNER & SIDES</p>
        <h5 className="px-4 pt-2 text-2xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          Creamy Cauliflower Potato Soup
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
          src="https://sallysbakingaddiction.com/wp-content/uploads/2016/02/baked-honey-bbq-chicken-bites-2-600x900.jpg"
          alt=""
          className="object-cover h-[440px] w-full"
        />
        <p className="text-black px-4 pt-2 text-sm underline">APPETIZERS & SNACKS</p>
        <h5 className="px-4 pt-2 text-2xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          Baked Honey BBQ Chicken Bites
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
          src="http://sallysbakingaddiction.com/wp-content/uploads/2023/08/apple-cider-chicken-2-600x900.jpg"
          alt=""
          className="object-cover h-[440px] w-full"
        />
        <p className="text-black px-4 pt-2 text-sm underline">DINNER & SIDES</p>
        <h5 className="px-4 pt-2 text-2xl font-semibold text-black group-hover:text-gray-800 transition duration-300 ">
          Skillet Apple Cider Chicken (Quick & Easy)
        </h5>
        <p className="flex items-center gap-1 px-3 pt-2 pb-3 text-sm text-black">
          <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
          19 Comment
        </p>
      </div>
    </div>

    <div
      className="w-full sm:w-[80%] md:w-[30%] lg:w-[30%] max-w-sm shadow-sm mx-auto sm:mx-2 
                 h-auto hover:shadow-gray-500 hover:shadow-lg lg:h-[84vh]  md:h-[73vh]
                 transition duration-300 transform hover:-translate-y-2"
    >
      <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer lg:h-[93vh]  md:h-[73vh]
                      transition duration-300 hover:shadow-lg hover:shadow-gray-600">
        <img
          src="https://sallysbakingaddiction.com/wp-content/uploads/2024/01/chicken-pot-pie-photo-600x900.jpg"
          alt=""
          className="object-cover h-[440px] w-full"
        />
        <p className="text-black px-4 pt-2 text-sm underline">DINNER & SIDES</p>
        <h5 className="px-4 pt-2 text-2xl font-semibold text-black group-hover:text-gray-800 transition duration-300 ">
          Chicken Pot Pie Recipes
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
      className="flex items-center justify-center gap-2 bg-[#C3665C] text-black 
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