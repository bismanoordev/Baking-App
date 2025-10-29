import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { RiBreadLine } from "react-icons/ri";

export default function QuickBread() {
  return (
    <div className="bg-[#F2EFF3] p-4">
      {/* Heading */}
      <h1 className="text-3xl flex p-6 px-9 underline decoration-[#A692AD] decoration-3 underline-offset-4">
        <RiBreadLine className="text-[#A692AD] text-3xl mt-2 " />
        Popular Quick Bread
      </h1>

      {/* Description */}
      <p className="text-xl px-9 pt-2 text-gray-800">
        Quick breads are bread recipes made without yeast. These recipes use leaveners like baking soda and/or baking powder for rise and can be either sweet or savory.
      </p>

      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-[#F2EFF3]"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2020/09/vanilla-glazed-cinnamon-swirl-quick-bread-600x900.jpg",
            title: "Cinnamon Swirl Quick Bread",
            comments: "Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/07/easy-zucchini-bread-600x900.jpg",
            title: "Zucchini Bread (Better Than Ever!)",
            comments: "19 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/04/double-chocolate-banana-bread-photo-600x900.jpg",
            title: "Double Chocolate Banana Bread",
            comments: "5 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/09/pumpkin-bread-1-600x900.jpg",
            title: "Pumpkin Bread Recipe",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/10/homemade-banana-bread-600x900.jpg",
            title: "My Favorite Banana Bread Recipe ",
            comments: "45 Comment",
          },
          {
            img: "http://sallysbakingaddiction.com/wp-content/uploads/2025/02/easy-homemade-biscuits-600x900.jpg",
            title: "Homemade Biscuits (Popular Recipe)",
            comments: "45 Comment",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[15%] max-w-sm bg-[#FFFFFF] shadow-sm transition duration-300 transform hover:-translate-y-2 
                       hover:shadow-lg hover:shadow-gray-500 cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="object-cover h-[280px] w-full"
            />
            <div className="p-3">
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

      {/* Button */}
      <div className="flex justify-center md:justify-end w-full px-5 m-3">
        <button
          className="flex items-center justify-center gap-2 bg-[#A38EAA] text-black 
                     w-fit px-6 py-3 rounded-full mb-6 sm:mt-0 
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