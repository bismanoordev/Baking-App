import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function Classic() {
  return (
    <div className="bg-[#FCF5F3] p-4 pt-8">

      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-[#FCF6EF]"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookies-600x900.jpg",
            title: "The Best Sugar Cookies",
            comments: "Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/12/homemade-strawberry-cake-4-600x900.jpg",
            title: "Home Made Strawberry",
            comments: "19 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/12/banana-muffins-recipe-2-600x900.jpg",
            title: "Quick & Easy Banana Muffins",
            comments: "5 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies-600x900.jpg",
            title: "Chewy Chocolate Chip Cookies",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/10/homemade-banana-bread-600x900.jpg",
            title: "My Favorite Banana Bread Recipe ",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4-600x900.jpg",
            title: "Triple Chocolate Cake (Popular Recipe!)",
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