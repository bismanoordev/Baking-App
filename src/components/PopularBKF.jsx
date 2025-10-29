import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function PopularBKF() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-3 bg-[#F4DDC1] border-[#F4DDC1] p-3 w-fit font-bold text-xl ">
        <GiKnifeFork className="text-[#E8B67B] text-2xl" />
        <span className="text-[#010101]">Popular Breakfast Recipes</span>
      </div>

      {/* Card Section */}
      <div className="bg-[#FFFFFF] border border-[#F4DDC1]  md:justify-center sm:justify-center p-6">
        <div
          className="flex flex-wrap  gap-5 justify-center
                     md:gap-4 lg:gap-5 bg-[#FFFFFF] text-white"
        >
          {/* === CARD START === */}
          {[
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/04/scone-varieties-600x900.jpg",
              title: "Master Scones Recipe",
              comment: "Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/09/breakfast-casserole-2-600x900.jpg",
              title: "Easy Make-Ahead Breakfast Casserole ",
              comment: "219 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/12/banana-muffins-recipe-2-600x900.jpg",
              title: "Quick & Easy Banana Muffins",
              comment: "455 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2021/03/homemade-overnight-cinnamon-rolls-600x900.jpg",
              title: "Homemade Overnight Cinnnamon Rolls",
              comment: "145 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/04/muffins-recipe-600x900.jpg",
              title: "Ultimate Muffin Recipe (1 Batter, Many Flavors)",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/12/bagels-600x900.jpg",
              title:
                "Homemade Bagels Recipe",
              comment: "19 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/06/homemade-crepes-1-600x900.jpg",
              title: "How to Make Crepes",
              comment: "Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/05/crumb-coffee-cake-2-600x900.jpg",
              title: "Sour Cream Coffee Cake (with Crumb Topping)",
              comment: "19 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2021/05/double-chocolate-muffins-with-chocolate-chips-600x900.jpg",
              title: "Double Chocolate Muffins",
              comment: "5 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/04/quiche-600x900.jpg",
              title: "How to Make the Perfect Quiche",
              comment: "450 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/06/blueberry-oatmeal-muffins-2-600x900.jpg",
              title: "Blueberry Oatmeal Muffins",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/09/pumpkin-crumb-cake-600x900.jpg",
              title:
                "Pumpkin Coffee Cake with Crumb Topping",
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