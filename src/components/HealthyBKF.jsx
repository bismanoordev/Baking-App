import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { PiPopcornThin } from "react-icons/pi";

export default function HealthyBKF() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-2 bg-[#F4DDC1] border-[#F4DDC1] p-3 w-fit font-bold text-xl ">
        <PiPopcornThin className="text-[#E8B67B] text-3xl" />
        <span className="text-[#010101]">Healthy Breakfast Recipe</span>
      </div>

      {/* Card Section */}
      <div className="bg-[#FFFFFF] border border-[#F4DDC1]  md:justify-center sm:justify-center p-6">
        <div
          className="flex flex-wrap  gap-5 justify-center
                     md:gap-4 lg:gap-5 bg-[#FFFFFF] text-white"
        >
          {/* === CARD START === */}
          {[
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2012/05/granola-clusters-600x900.jpg",
              text:"GRANOLA & GRANOLA BARS",
              title: "How to Make Granola Clusters",
              comment: "185 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/07/apple-cinnamon-baked-oatmeal-cups-4-600x900.jpg",
              text:"BREAKFAST", 
              title: "Apple Cinnamon Baked Oatmeal Cups",
              comment: "219 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/08/breakfast-egg-muffins-2-600x900.jpg",
              text:"BREAKFAST",
              title: "Breakfast Egg Muffins (Frittata Muffins)",
              comment: "455 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/06/stack-of-breakfast-cookies-600x900.jpg",
              text:"BREAKFAST",
              title: "Breakfast Cookies",
              comment: "145 Comment",
            },
            
          ].map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[47%] md:w-[30%] lg:w-[23%] max-w-sm 
                         h-auto hover:shadow-gray-500 hover:shadow-sm
                         transition duration-300 transform hover:-translate-y-2"
            >
              <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer h-[430px]
                              transition duration-300 hover:shadow-lg hover:shadow-gray-600">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover h-[250px] w-full"
                />
                <p className="text-black text-sm underline p-3">{card.text}</p>
                <h5 className="p-3 text-xl font-semibold text-gray-900 
                               group-hover:text-gray-800 transition duration-300">
                  {card.title}
                </h5>
                <p className="flex items-center gap-1 px-3 pb-3 text-sm text-black">
                  <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
                  {card.comment}
                </p>
              </div>
            </div>
          ))}

        </div>
        <div className="flex  md:justify-end py-5 m-3">
                      <button
                        className="flex items-center justify-center gap-2 bg-[#E2A55B] text-black 
                                   w-fit px-6 py-3 rounded-full sm:mt-0 
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