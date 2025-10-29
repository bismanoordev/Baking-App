import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function Tips() {
  return (
    <div className="bg-[#FCF5F3] p-4">
      {/* Heading */}
      <h1 className="text-3xl p-6 px-9 underline decoration-[#F2D6D0] decoration-3 underline-offset-4">
        Best Baking Tips
      </h1>

      {/* Description */}
      <p className="text-xl px-9 pt-2 text-gray-800">
        If you’d like to learn the basics of baking, you’re in the right place—I have plenty of tips to share! The knowledge I’ve learned over the years has created a fantastic foundation on which I can build and share with readers.
      </p>

      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-[#FCF6EF]"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2020/04/measuring-baking-ingredients-properly-600x900.jpg",
            title: "How to Properly Measure Baking Ingredients (Video)",
            comments: "Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/09/browned-butter-3-600x900.jpg",
            title: "How to Brown Butter",
            comments: "19 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/06/chocolate-ganache-3-600x900.jpg",
            title: "How to Make Chocolate Ganache",
            comments: "5 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/08/cake-baking-tools-600x900.jpg",
            title: "10 Essential Cake Baking & Decorating Tools",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/03/no-knead-artisan-bread-600x900.jpg",
            title: "Baking with Yeast Guide ",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/08/homemade-cake-flour-3-600x900.jpg",
            title: "Cake Flour Substitute",
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
          className="flex items-center justify-center gap-2 bg-[#CE7C77] text-black 
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