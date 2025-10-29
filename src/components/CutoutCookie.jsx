import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { RiBreadLine } from "react-icons/ri";
import { RxCookie } from "react-icons/rx";

export default function CutoutCookie() {
  return (
    <div className="bg-[#FBF5F5] py-11">
        <div className="p-3 pl-15">
            <h5 className=" text-3xl gap-1 font-semibold flex tracking-tight text-black dark:text-white underline decoration-[#F0D9D6] decoration-3 underline-offset-4">
                        <RxCookie className="text-[#C9766D] text-5xl rounded-full p-2 " />
                       Cut Out Cookies
                      </h5>
        </div>
      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-[#FBF5F5]"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/03/chocolate-sugar-cookies-1.jpg",
            text:"COOKIES",
            title: "My Best Chocolate Sugar Cookies",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2020/11/stained-glass-window-christmas-cookies-600x900.jpg",
             text:"COOKIES",
            title: "Stained Glass Window Cookies",
            comments: "45 Comment",
          },
          {
            img: "http://sallysbakingaddiction.com/wp-content/uploads/2014/12/decorated-christmas-sugar-cookies-with-icing-600x900.jpg",
             text:"COOKIES",
            title: "Christmas Sugar Cookies Recipe with Easy Icing",
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