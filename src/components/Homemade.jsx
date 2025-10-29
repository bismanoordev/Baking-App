import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { RiBreadLine } from "react-icons/ri";

export default function Homemade() {
  return (
    <div className="bg-[#F9EEE0] py-11">

      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-[#F9EEE0]"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/05/glazed-doughnuts-homemade-2-600x900.jpg",
            text:"BREAKFAST",
            title: "How to Make Homemade Glazed Doughnuts",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/02/mini-donut-muffins-with-powdered-sugar-2-600x900.jpg",
             text:"BREAKFAST",
            title: "Mini Powdered Sugar Donut Muffins",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2020/03/homemade-maple-bacon-doughnuts-600x900.jpg",
             text:"BREAKFAST",
            title: "Homemade Maple Bacon Doughnuts",
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