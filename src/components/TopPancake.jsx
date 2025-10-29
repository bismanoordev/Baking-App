import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { RiBreadLine } from "react-icons/ri";
import { PiBowlFoodLight } from "react-icons/pi";

export default function TopPancake() {
  return (
    <div className="bg-[#F9EEE0] py-11">
        <div className="p-3 pl-15">
            <h5 className=" text-3xl gap-2 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#F4DDC1] decoration-3 underline-offset-4">
                        <PiBowlFoodLight className="text-[#E2A65C] text-5xl rounded-full p-2  bg-[#F4DDC1]" />
                       Top Pancake & Waffle Recipes
                      </h5>
        </div>
      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-[#F9EEE0]"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/04/dutch-baby-600x900.jpg",
            text:"BREAKFAST",
            title: "Dutch Baby Recipes (Pancake)",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/03/pancakes-600x900.jpg",
             text:"BREAKFAST",
            title: "Fluffy Buttermilk Pancakes",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/08/best-pumpkin-pancakes-600x900.jpg",
             text:"BREAKFAST",
            title: "Pumpkin Pancakes (Thick & Flavorful!)",
            comments: "45 Comment",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[80%] md:w-[50%] lg:w-[30%] max-w-sm bg-[#FFFFFF] shadow-sm transition duration-300 transform hover:-translate-y-2 
                       hover:shadow-lg hover:shadow-gray-500 cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="object-cover h-[350px] w-full"
            />
            <div className="p-3">
                <p className="pb-3 text-sm underline">{card.text}</p>
              <h5 className="text-xl font-semibold text-black group-hover:text-gray-800 transition duration-300">
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
  );
}