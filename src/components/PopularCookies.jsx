import React from "react";
import { PiCookieBold } from "react-icons/pi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function PopularCookies() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-2 bg-[#F0D9D6] border-[#F0D9D6] p-3 w-fit font-bold text-xl ">
        <PiCookieBold className="text-[#C66D64] text-2xl" />
        <span className="text-[#010101]">Most Popular Cookies</span>
      </div>

      {/* Card Section */}
      <div className="bg-[#FFFFFF] border border-[#F0D9D6]  md:justify-center sm:justify-center p-6">
        <div
          className="flex flex-wrap  gap-5 justify-center
                     md:gap-4 lg:gap-5 bg-[#FFFFFF] text-white"
        >
          {/* === CARD START === */}
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
              className="w-full sm:w-[47%] md:w-[30%] lg:w-[15%] max-w-sm 
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

        </div>
      </div>
    </div>
  );
}