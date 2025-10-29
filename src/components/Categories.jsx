import React from "react";
import { FaBreadSlice, FaCookieBite, FaCandyCane } from "react-icons/fa";
import { GiCupcake, GiCakeSlice, GiPieSlice, GiDonut } from "react-icons/gi";
import { LuCroissant } from "react-icons/lu";

const categories = [
  { name: "BREADS", icon: <FaBreadSlice />, color: "bg-purple-100 text-purple-700" },
  { name: "BREAKFAST", icon: <LuCroissant />, color: "bg-amber-100 text-amber-700" },
  { name: "BROWNIES", icon: <GiDonut />, color: "bg-orange-100 text-orange-700" },
  { name: "CAKES", icon: <GiCakeSlice />, color: "bg-cyan-100 text-cyan-700" },
  { name: "CANDY", icon: <FaCandyCane />, color: "bg-green-100 text-green-700" },
  { name: "COOKIES", icon: <FaCookieBite />, color: "bg-rose-100 text-rose-700" },
  { name: "CUPCAKES", icon: <GiCupcake />, color: "bg-sky-100 text-sky-700" },
  { name: "DESSERTS", icon: <GiDonut />, color: "bg-pink-100 text-pink-700" },
  { name: "PIES", icon: <GiPieSlice />, color: "bg-yellow-100 text-yellow-700" },
];

export default function Categories() {
  return (
    <div className="flex flex-wrap justify-center gap-5 py-9 bg-[#f4f2f0] cursor-pointer">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center bg-white w-32 pt-10 pb-4 rounded-md shadow-sm 
                     hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100"
        >
          {/* Floating Icon */}
          <div
  className={`absolute -top-6 w-14 h-14 ${cat.color} flex items-center justify-center rounded-full 
              text-2xl border-5 border-[#F5F3F2] `}
>
  {cat.icon}
</div>


          {/* Text and underline */}
          <h2 className="mt-4 font-bold text-sm tracking-wide text-gray-800">{cat.name}</h2>
          <div className="w-8 h-[2px] bg-gray-800 mt-1"></div>
        </div>
      ))}
    </div>
  );
}

