import React from "react";
import { GiCupcake } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function Cupcaked() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-2 bg-[#E1EDDF] border-[#E1EDDF] p-3 w-fit font-bold text-xl ">
        <GiCupcake className="text-[#88B67D] text-2xl" />
        <span className="text-[#010101]">Cupcake</span>
      </div>

      {/* Card Section */}
      <div className="bg-[#FFFFFF] border border-[#D9E7E6]  md:justify-center sm:justify-center p-6">
        <div
          className="flex flex-wrap  gap-5 justify-center
                     md:gap-4 lg:gap-5 bg-[#FFFFFF] text-white"
        >
          {/* === CARD START === */}
          {[
             {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/08/homemade-vanilla-cupcakes-with-vanilla-buttercream-600x900.jpg",
            text:"CAKES",
            title: "Simply Perfect Vanilla Cupcakes",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/10/homemade-hostess-cupcakes-cream-filled-cupcakes-2-600x900.jpg",
             text:"CAKE",
            title: "Cream-Filled Chocolate Cupcakes",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/04/blueberry-lemon-cupcakes-600x900.jpg",
             text:"CAKES",
            title: "Lemon Blueberry Cupcakes",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/02/pistachio-cupcake-600x900.jpg",
            text:"CAKES",
            title: "Pistachio Cupcakes with Strawberry Buttercream",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/08/Ultimate-Snickers-Cupcakes-4.jpg",
             text:"CAKE",
            title: "Ultimate Snickers Cupcakes",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/strawberry-shortcake-cupcakes-6-600x900.jpg",
             text:"CAKES",
            title: "Strawberry Shortcake Cupcakes",
            comments: "45 Comment",
          },
          ].map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[47%] md:w-[30%] lg:w-[15%] max-w-sm 
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
                <h5 className="p-3 text-xl font-semibold text-gray-900 
                               group-hover:text-gray-800 transition duration-300">
                  {card.title}
                </h5>
                <p className="flex items-center gap-1 px-3 pb-3 text-sm text-black">
                  <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
                  {card.comments}
                </p>
              </div>
            </div>
          ))}

        </div>
        <div className="flex  md:justify-end pt-5 m-3">
                                      <button
                                        className="flex items-center justify-center gap-2 bg-[#88B67D] text-black 
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