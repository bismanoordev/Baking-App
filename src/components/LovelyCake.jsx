import React from "react";
import { TbCake } from "react-icons/tb";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function LovelyCake() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      {/* Heading */}
      <div className="flex  gap-3 bg-[#E2ECF2] border-[#E2ECF2] p-3 w-fit font-bold text-xl ">
        <TbCake className="text-[#8AB3CA] text-2xl" />
        <span className="text-[#010101]">Lovely Layer Cakes</span>
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
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/02/naked-cake-2-600x900.jpg",
              title: "Vanilla Naked Cake",
              comment: "Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/10/cinnamon-snickerdoodle-cake-2-600x900.jpg",
              title: "Snickerdoodle Cake",
              comment: "19 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2020/03/fresh-berry-cream-cake-600x900.jpg",
              title: "Fresh Berry Cream Cake",
              comment: "5 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/04/layer-lavender-cake-600x900.jpg",
              title: "Blackberry Lavender Cake",
              comment: "450 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/05/boston-cream-pie-600x900.jpg",
              title: "Boston Cream Pie",
              comment: "22 Comment",
            },
            {
              img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/01/chocolate-chip-layer-cake-ganache-chocolate-drip-600x900.jpg",
              title:
                "Chocolate Chip Cake with Ganache Drip",
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
        <div className="flex  md:justify-end py-5 m-3">
                              <button
                                className="flex items-center justify-center gap-2 bg-[#8AB3CA] text-black 
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