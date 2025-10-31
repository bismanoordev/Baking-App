import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { RxCookie } from "react-icons/rx";

export default function CookiesD() {
  return (
    <div className="bg-[#FBF5F5] py-11">
        <div className="p-3 pl-5">
            <h5 className=" text-3xl gap-2 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#F0D9D6] decoration-3 underline-offset-4">
                        <RxCookie className="text-[#C8736A] text-5xl rounded-full p-2 " />
                       Cookies
                      </h5>
        </div>
      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-[#FBF5F5]"
      >
        {/* Card Component (Reusable Style) */}
        {[
         {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookies-600x900.jpg",
              title: "The Best Sugar Cookies",
              comment: "Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/Classic-chocolate-chip-cookies-600x900.jpg",
              title: "Chewy Chocolate Chip Cookies",
              comment: "19 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/07/oatmeal-raisin-cookies-3-600x900.jpg",
              title: "Soft & Chewy Oatmeal Raisin Cookies",
              comment: "5 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/07/double-chocolate-chip-cookies-recipe-600x900.jpg",
              title: "Double Chocolate Chip Cookies Recipe",
              comment: "450 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/05/thick-peanut-butter-oatmeal-chocolate-chip-cookies-6-600x900.jpg",
              title: "Big Fat Peanut Butter Oatmeal Chocolate Chip Cookies",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/05/oatmeal-chocolate-chip-cookies-600x900.jpg",
              title:
                "Chewy Oatmeal Chocolate Chip Cookies",
              comment: "19 Comment",
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
                {card.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center md:justify-end px-5 m-3">
              <button
                className="flex items-center justify-center gap-2 bg-[#C3665C] text-black 
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