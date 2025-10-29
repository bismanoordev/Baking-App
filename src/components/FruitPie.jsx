import React from "react";
import { FaCubes } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function FruitPie() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-2 bg-[#E7D8C7] border-[#E7D8C7] p-3 w-fit font-bold text-xl ">
        <span className="text-[#010101]">Fruit Pies</span>
      </div>

      {/* Card Section */}
      <div className="bg-[#FFFFFF] border border-[#E7D8C7]  md:justify-center sm:justify-center p-6">
        <div
          className="flex flex-wrap  gap-5 justify-center
                     md:gap-4 lg:gap-5 bg-[#FFFFFF] text-white"
        >
          {/* === CARD START === */}
          {[
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/08/blueberry-galette-600x900.jpg",
              title: "Simple Blueberry Galette",
              comment: "Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/05/strawberry-rhubarb-pie-1.jpg",
              title: "Strawberry Rhubarb Pie",
              comment: "19 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookie-fruit-pizza-600x900.jpg",
              title: "Fruit Pizza",
              comment: "5 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/07/slice-of-apple-pie-2-600x900.jpg",
              title: "My Favorite Apple Pie Recipe",
              comment: "450 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/pear-tarte-tatin-600x900.jpg",
              title: "Pear Tarte Tatin (Made Simple)",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/07/peach-pie-slice-600x900.jpg",
              title:
                "Perfect Peach Pie Recipe",
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
        <div className="flex  md:justify-end pt-5 m-3">
                                      <button
                                        className="flex items-center justify-center gap-2 bg-[#BE986B] text-black 
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
    </div>
  );
}