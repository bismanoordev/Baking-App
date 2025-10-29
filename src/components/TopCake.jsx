import React from "react";
import { TbCake } from "react-icons/tb";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function TopCake() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-3 bg-[#E2ECF2] border-[#E2ECF2] p-3 w-fit font-bold text-xl ">
        <TbCake className="text-[#8AB3CA] text-2xl" />
        <span className="text-[#010101]">Top Cake Recipes</span>
      </div>

      {/* Card Section */}
      <div className="bg-[#FFFFFF] border border-[#E2ECF2]  md:justify-center sm:justify-center p-6">
        <div
          className="flex flex-wrap  gap-5 justify-center
                     md:gap-4 lg:gap-5 bg-[#FFFFFF] text-white"
        >
          {/* === CARD START === */}
          {[
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4-600x900.jpg",
              title: "Triple Chocolate Cake (Popular Recipe!)",
              comment: "Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/12/homemade-strawberry-cake-4-600x900.jpg",
              title: "Homemade Strawberry Cake",
              comment: "19 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/02/frosted-lemon-blueberry-cake-2-600x900.jpg",
              title: "Lemon Blueberry Layer Cake",
              comment: "5 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/03/layer-carrot-cake-2-600x900.jpg",
              title: "My Favorite Carrot Cake Recipe",
              comment: "450 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/01/vanilla-cake-5-600x900.jpg",
              title: "The Best Vanilla Cake I’ve Ever Had",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/02/cream-cheese-pound-cake-5-600x900.jpg",
              title:
                "Perfect Cream Cheese Pound Cake",
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