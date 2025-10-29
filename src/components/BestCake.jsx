import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { RiBreadLine } from "react-icons/ri";
import { TbCake } from "react-icons/tb";

export default function BestCake() {
  return (
    <div className="bg-[#F8FAFC] py-11">
        <div className="p-3 pl-15">
            <h5 className=" text-3xl gap-2 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#E2ECF2] decoration-3 underline-offset-4">
                        <TbCake className="text-[#8AB3CA] text-5xl rounded-full p-2 " />
                       Top Pancake & Waffle Recipes
                      </h5>
        </div>
      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-[#F8FAFC]"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/02/cream-cheese-pound-cake-5-600x900.jpg",
            text:"CAKES",
            title: "Perfect Cream Cheese Pound Cake",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2021/06/chocolate-marble-banana-bundt-cake-2-600x900.jpg",
             text:"CAKE",
            title: "Chocolate Marble Banana Bundt Cake",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/12/cranberry-orange-bundt-cake-recipe-3-600x900.jpg",
             text:"CAKES",
            title: "Cranberry Orange Bundt Cake",
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
                className="flex items-center justify-center gap-2 bg-[#8AB3CA] text-black 
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