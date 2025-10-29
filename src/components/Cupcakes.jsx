import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { RiCake3Line } from "react-icons/ri";

export default function Cupcakes() {
  return (
    <div className="bg-[#F7FAF7] py-11">
        <div className="p-3 pl-5">
            <h5 className=" text-3xl gap-2 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#E1EDDF] decoration-3 underline-offset-4">
                        <RiCake3Line className="text-[#88B67D] text-5xl rounded-full p-2 " />
                       Popular Cupcakes
                      </h5>
        </div>
      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-[#F7FAF7]"
      >
        {/* Card Component (Reusable Style) */}
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
            className="w-full sm:w-[80%] md:w-[50%] lg:w-[15%] max-w-sm bg-[#FFFFFF] shadow-sm transition duration-300 transform hover:-translate-y-2 
                       hover:shadow-lg hover:shadow-gray-500 cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="object-cover h-[350px] w-full"
            />
            <div className="p-3">
                <p className="pb-3 text-sm underline">{card.text}</p>
              <h5 className="text-2xl font-semibold text-black group-hover:text-gray-800 transition duration-300">
                {card.title}
              </h5>
              <p className="flex items-center py-2 gap-1 text-sm text-black mt-2">
                <BiSolidMessageRounded className="text-[#CE7C77] text-lg" />
                {card.comments}
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center md:justify-end px-5 m-3">
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
  );
}