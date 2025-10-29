import React from "react";
import { LuCandy } from "react-icons/lu";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function Candy() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-2 bg-[#D9E7E6] border-[#D9E7E6] p-3 w-fit font-bold text-xl ">
        <LuCandy className="text-[#648887] text-2xl" />
        <span className="text-[#010101]">Brownies & Bars</span>
      </div>

      {/* Card Section */}
      <div className="bg-[#FFFFFF] border border-[#D9E7E6]  md:justify-center sm:justify-center p-6">
        <div
          className="flex flex-wrap  gap-5 justify-center
                     md:gap-4 lg:gap-5 bg-[#FFFFFF] text-white"
        >
          {/* === CARD START === */}
          {[
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/02/chocolate-cake-pops-recipe-600x900.jpg",
              title: "Chocolate Cake Pops (Recipe + Video)",
              comment: "Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/10/sea-salt-vanilla-caramels-5-600x900.jpg",
              title: "Soft Caramel Candies",
              comment: "19 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/07/cake-pops-recipe-600x900.jpg",
              title: "Homemade Cake Pops",
              comment: "5 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/09/caramel-apples-3-600x900.jpg",
              title: "Homemade Caramel Apples",
              comment: "450 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/12/chocolate-covered-peanut-butter-balls-600x900.jpg",
              title: "Peanut Butter Balls (Truffles)",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/01/homemade-chocolate-truffles-600x900.jpg",
              title:
                "Homemade Chocolate Truffles Recipe",
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
                                        className="flex items-center justify-center gap-2 bg-[#4E7675] text-black 
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