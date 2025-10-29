import React from "react";
import { FaCubes } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function PieTools() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-2 bg-[#E7D8C7] border-[#E7D8C7] p-3 w-fit font-bold rounded-t-md text-xl ">
        <span className="text-[#010101]">Recommended Pie Baking Tools</span>
      </div>

      {/* Card Section */}
      <div className="bg-[#FFFFFF] border border-[#E7D8C7]  md:justify-center sm:justify-center p-6">
        <div className="text-xl pb-5">
            <p>As a published baking cookbook author, I’ve tested MANY baking tools. And I’m happy to recommend my absolute must-haves to fellow home bakers.</p>
        </div>
        <div
          className="flex flex-wrap  gap-5 justify-center
                     md:gap-4 lg:gap-5 bg-[#FFFFFF] text-white"
        >
          {/* === CARD START === */}
          {[
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/product-kitchen-tools-rolling-pin-600x600.jpg",
              title: "Rolling Pin",
              comment: "Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/product-baking-pans-pie-glass-600x600.jpg",
              title: "Glass Pie Dish",
              comment: "19 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/product-kitchen-utensils-pastry-blender-600x600.jpg",
              title: "Pastry Blender",
              comment: "5 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/product-kitchen-tools-food-scale-600x600.jpg",
              title: "Food Scale",
              comment: "450 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/oxo-stainless-steel-bowls.jpg",
              title: "Stainless Steel Nesting Mixing Bowls",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/05/pie-weights-ceramic.jpg",
              title:
                "Ceramic Pie Weights",
              comment: "19 Comment",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[47%] md:w-[30%] lg:w-[15%] max-w-sm 
                         h-auto hover:shadow-gray-500 hover:shadow-sm
                         transition duration-300 transform hover:-translate-y-2"
            >
              <div className="group flex flex-col bg-[#F5F3F2] cursor-pointer h-[380px]
                              transition duration-300 hover:shadow-lg hover:shadow-gray-600">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover h-[180px] w-full"
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