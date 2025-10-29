import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function YeastBread() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-3 bg-[#F2EFF3] border-[#F2EFF3] p-3 w-fit font-bold text-xl ">
        <GiKnifeFork className="text-[#A692AD] text-2xl" />
        <span className="text-[#010101]">Top Bread Recipes</span>
      </div>

      {/* Card Section */}
      <div className="bg-[#FFFFFF] border border-[#F2EFF3]  md:justify-center sm:justify-center p-6">
        <div
          className="flex flex-wrap  gap-5 
                     md:gap-4 lg:gap-5 bg-[#FFFFFF] text-white"
        >
          {/* === CARD START === */}
          {[
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2020/12/pepperoni-stromboli-slices-600x900.jpg",
              title: "How to Make Homemade Stromboli",
              comment: "Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/easy-soft-cinnamon-rolls-2-600x900.jpg",
              title: "Easy Cinnamon Rolls From Scratch ",
              comment: "219 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/08/dutch-oven-cranberry-nut-bread-600x900.jpg",
              title: "Crusty Cranberry Nut No-Knead Bread",
              comment: "455 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2021/03/homemade-overnight-cinnamon-rolls-600x900.jpg",
              title: "Homemade Overnight Cinnamon Rolls",
              comment: "145 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/03/dinner-rolls-in-pan-600x900.jpg",
              title: "Soft Dinner Rolls Recipe",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/09/easy-asiago-bread-600x900.jpg",
              title:
                "Asiago-Crusted Skillet Bread (No Knead)",
              comment: "19 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/12/bagels-600x900.jpg",
              title: "Homemade Bagels Recipes",
              comment: "Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2021/01/multigrain-bread-loaf-2-600x900.jpg",
              title: "Soft Multigrain Bread",
              comment: "19 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/01/how-to-make-ciabatta-bread-600x900.jpg",
              title: "Homemade Ciabatta Bread",
              comment: "5 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2020/04/easy-homemade-flatbread-2-600x900.jpg",
              title: "Homemade Flatbread Pizza Recipe",
              comment: "450 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/homemade-breadsticks-600x900.jpg",
              title: "Homemade Soft Breadstick",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2020/12/garlic-rosemary-pull-apart-bread-600x900.jpg",
              title:
                "Rosemary Garlic Pull Apart Bread",
              comment: "19 Comment",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[15%] max-w-sm 
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
                  {card.comment}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-center px-5 sm:justify-center md:justify-end w-full">
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
    </div>
  );
}
