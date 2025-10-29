import React from "react";
import { FaCubes } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function PopularPies() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-2 bg-[#E7D8C7] border-[#E7D8C7] p-3 w-fit font-bold text-xl ">
        <FaCubes className="text-[#C29E73] text-2xl" />
        <span className="text-[#010101]">Most Popular Pies</span>
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
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2021/03/lemon-blueberry-tart-shortbread-crust-600x900.jpg",
              title: "Lemon Blueberry Tart",
              comment: "5 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/03/lemon-meringue-pie-recipe-2-600x900.jpg",
              title: "Classic Lemon Meringue Pie",
              comment: "450 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/10/sallys-baking-addiction-pumpkin-pie-2.jpg",
              title: "The Great Pumpkin Pie Recipe",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/03/coconut-cream-pie-2-600x900.jpg",
              title:
                "Homemade Coconut Cream Pie",
              comment: "19 Comment",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[47%] md:w-[30%] lg:w-[23%] max-w-sm 
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