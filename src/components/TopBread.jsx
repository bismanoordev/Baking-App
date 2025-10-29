import React from "react";

import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";


export default function TopBread() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
        <div className="flex items-center justify-center gap-3 bg-[#F2EFF3] border-[#F2EFF3] p-3 w-fit font-bold text-xl">
          <GiKnifeFork className="text-[#A692AD] text-2xl" />
          <span className="text-[#010101]">Top Bread Recipes</span>
        </div>

       <div className="bg-[#FFFFFF] border border-[#F2EFF3] md:justify-center sm:justify-center">
       <div
    className="flex flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap 
               md:items-center sm:items-center md:justify-center sm:justify-center 
               md:gap-1 gap-2 p-4 md:p-6 items-center h-auto justify-between 
               min-h-[75vh] bg-gradient-to-br bg-[#FFFFFF] text-white px-5 md:px-5"
       >
    {/* Card 1 */}
         <div
      className="w-full sm:w-[80%] md:w-[30%] lg:w-[15%] max-w-sm shadow-sm mx-auto sm:mx-2 
                 h-auto hover:shadow-gray-500 hover:shadow-lg lg:h-[73vh] md:h-[73vh]
                      transition duration-300 transform hover:-translate-y-2"
    >
      <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer lg:h-[73vh]  md:h-[73vh]
                      transition duration-300 hover:shadow-lg hover:shadow-gray-600">
        <img
          src="https://sallysbakingaddiction.com/wp-content/uploads/2019/03/dinner-rolls-in-pan-600x900.jpg"
          alt=""
          className="object-cover h-[300px] w-full"
        />
        <h5 className="p-3 text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          Slow Cooker BBQ Meatballs
        </h5>
        <p className="flex items-center gap-1 px-3 pb-3 text-sm text-black">
          <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
          Comment
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="w-full sm:w-[80%] md:w-[30%] lg:w-[15%] max-w-sm shadow-sm mx-auto sm:mx-2 
                 h-auto hover:shadow-gray-500 hover:shadow-lg  lg:h-[73vh]  md:h-[73vh]
                 transition duration-300 transform hover:-translate-y-2"
    >
      <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer lg:h-[73vh]  md:h-[73vh]
                      transition duration-300 hover:shadow-lg hover:shadow-gray-600">
        <img
          src="https://sallysbakingaddiction.com/wp-content/uploads/2018/12/bagels-600x900.jpg"
          alt=""
          className="object-cover h-[300px] w-full"
        />
        <h5 className="p-3 text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          Easy Halloween Dessert Recipes
        </h5>
        <p className="flex items-center gap-1 px-3 pb-3 text-sm text-black">
          <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
          19 Comment
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="w-full sm:w-[80%] md:w-[30%] lg:w-[15%] max-w-sm shadow-sm mx-auto sm:mx-2 
                 h-auto hover:shadow-gray-500 hover:shadow-lg lg:h-[73vh]  md:h-[73vh]
                 transition duration-300 transform hover:-translate-y-2"
    >
      <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer lg:h-[73vh]  md:h-[73vh]
                      transition duration-300 hover:shadow-lg hover:shadow-gray-600">
        <img
          src="https://sallysbakingaddiction.com/wp-content/uploads/2019/11/sandwich-bread-600x900.jpg"
          alt=""
          className="object-cover h-[300px] w-full"
        />
        <h5 className="p-3 text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          Thick & Chewy Candy Bar Blondies
        </h5>
        <p className="flex items-center gap-1 px-3 pb-3 text-sm text-black">
          <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
          5 Comment
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div
      className="w-full sm:w-[80%] md:w-[30%] lg:w-[15%] max-w-sm shadow-sm mx-auto sm:mx-2 
                 h-auto hover:shadow-gray-500 hover:shadow-lg lg:h-[73vh]  md:h-[73vh]
                 transition duration-300 transform hover:-translate-y-2"
    >
      <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer lg:h-[73vh]  md:h-[73vh]
                      transition duration-300 hover:shadow-lg hover:shadow-gray-600">
        <img
          src="https://sallysbakingaddiction.com/wp-content/uploads/2018/10/homemade-banana-bread-600x900.jpg"
          alt=""
          className="object-cover h-[300px] w-full"
        />
        <h5 className="p-3 text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          Black Velvet Cupcakes
        </h5>
        <p className="flex items-center gap-1 px-3 pb-3 text-sm text-black">
          <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
          45 Comment
        </p>
      </div>
    </div>

    {/* Card 5 */}
    <div
      className="w-full sm:w-[80%] md:w-[30%] lg:w-[15%] max-w-sm shadow-sm mx-auto sm:mx-2 
                 h-auto hover:shadow-gray-500 hover:shadow-lg lg:h-[73vh]  md:h-[73vh]
                 transition duration-300 transform hover:-translate-y-2"
    >
      <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer lg:h-[73vh]  md:h-[73vh]
                      transition duration-300 hover:shadow-lg hover:shadow-gray-600">
        <img
          src="https://sallysbakingaddiction.com/wp-content/uploads/2019/01/pizza-dough-on-floured-counter-600x900.jpg"
          alt=""
          className="object-cover h-[300px] w-full"
        />
        <h5 className="p-3 text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          30+ Fall Cake Recipe Ideas
        </h5>
        <p className="flex items-center gap-1 px-3 pb-3 text-sm text-black">
          <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
          22 Comment
        </p>
      </div>
    </div>

    {/* Card 6 */}
    <div
      className="w-full sm:w-[80%] md:w-[30%] lg:w-[15%] max-w-sm shadow-sm mx-auto sm:mx-2 
                 h-auto hover:shadow-gray-500 hover:shadow-lg lg:h-[73vh]  md:h-[73vh]
                 transition duration-300 transform hover:-translate-y-2"
    >
      <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer lg:h-[73vh]  md:h-[73vh]
                      transition duration-300 hover:shadow-lg hover:shadow-gray-600">
        <img
          src="https://sallysbakingaddiction.com/wp-content/uploads/2019/12/homemade-artisan-bread-600x900.jpg"
          alt=""
          className="object-cover h-[300px] w-full"
        />
        <h5 className="p-3 text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition duration-300 ">
          Warm Brussels Sprouts Salad With Bacon and Apple
        </h5>
        <p className="flex items-center gap-1 px-3 pb-3 text-sm text-black">
          <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
          19 Comment
        </p>
      </div>
    </div>
  </div>

</div>

    </div>
    
  );
}