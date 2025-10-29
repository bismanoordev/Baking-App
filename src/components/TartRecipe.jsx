import React from "react";
import { FaCubes } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function TartRecipe() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-2 bg-[#E7D8C7] border-[#E7D8C7] p-3 w-fit font-bold text-xl ">
        <span className="text-[#010101]">Tart Recipes</span>
      </div>

      {/* Card Section */}
      <div className="bg-[#FFFFFF] border border-[#E7D8C7]  md:justify-center sm:justify-center p-6">
        <div
          className="flex flex-wrap  gap-5 justify-center
                     md:gap-4 lg:gap-5 bg-[#FFFFFF] text-white"
        >
          {/* === CARD START === */}
          {[
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2020/11/peanut-butter-cup-tart-slice-2-600x900.jpg",
              title: "Peanut Butter Cup Tart",
              comment: "450 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/10/nutella-tart-3-600x900.jpg",
              title: "Nutella Tart with Toasted Hazelnut Crust",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/05/fresh-fruit-tart-2-600x900.jpg",
              title:
                "Fresh Fruit Tart with Vanilla Mascarpone Cream",
              comment: "19 Comment",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[47%] md:w-[30%] lg:w-[32%] max-w-sm 
                         h-auto hover:shadow-gray-500 hover:shadow-sm
                         transition duration-300 transform hover:-translate-y-2"
            >
              <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer h-[430px]
                              transition duration-300 hover:shadow-lg hover:shadow-gray-600">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover h-[290px] w-full"
                />
                <h5 className="p-3 text-2xl font-semibold text-gray-900 
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
        <div className="flex  md:justify-end pt-5 m-3">
                                      <button
                                        className="flex items-center justify-center gap-2 bg-[#BE986B] text-black 
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