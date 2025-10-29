import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

export default function Breakfast() {
  return (
    <div className="bg-[#FCF6EF] p-4">
      {/* Heading */}
      <h1 className="text-3xl p-6 px-15 underline decoration-[#F4DDC1] decoration-4 underline-offset-4">
        Breakfast & Brunch
      </h1>

      {/* Description */}
      <p className="text-xl px-15 pt-2 text-gray-800">
        Breakfast is the most important meal of the day, but it’s also an excuse
        to eat sweet rolls, muffins, donuts, and{" "}
        <span className="font-bold underline">Pastries</span> in the morning!
        (OK, occasionally. But still.) Whether you’re planning a healthy
        wake-up meal with a delicious{" "}
        <span className="font-bold underline">frittata</span>,
        <span className="font-bold underline"> baked oatmeal</span>, or{" "}
        <span className="font-bold underline">breakfast casserole</span>; or a
        lavish special-occasion brunch with{" "}
        <span className="font-bold underline">quiche</span> and{" "}
        <span className="font-bold underline">
          cream cheese French toast casserole
        </span>
        , you’re sure to find a new favorite breakfast recipe to start your day
        off right.
      </p>

      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-6 bg-[#FCF6EF]"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/09/pumpkin-crumb-cake-muffins-with-icing-600x900.jpg",
            text:"MUFFINS",
            title: "Pumpkin Crumb Cake Muffins",
            comments: "Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/06/banana-baked-oatmeal-4-600x900.jpg",
            text:"BREAKFAST",
            title: "Banana Baked Oatmeal",
            comments: "19 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/08/homemade-maple-chicken-breakfast-sausage-600x900.jpg",
            text:"BREAKFAST",
            title: "Maple Chicken Breakfast Sausage",
            comments: "5 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/09/baked-apple-cider-french-toast-casserole-600x900.jpg",
            text:"BREAKFAST",
            title: "Baked Apple Cider French Toast",
            comments: "45 Comment",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[22%] max-w-sm bg-[#FFFFFF] shadow-sm transition duration-300 transform hover:-translate-y-2 
                       hover:shadow-lg hover:shadow-gray-500 cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="object-cover h-[280px] w-full"
            />
            <div className="p-3">
                <p className="text-sm font-semibold py-2 underline"> {card.text}</p>
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

      {/* Button */}
      <div className="flex justify-center md:justify-end w-full px-5 m-3">
        <button
          className="flex items-center justify-center gap-2 bg-[#E2A55B] text-black 
                     w-fit px-6 py-3 rounded-full mb-6 sm:mt-0 
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
