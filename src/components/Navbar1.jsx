import React from "react";
import bookImage from "../assets/book.png"; // 📘 replace with your image path

export default function Navbar1() {
  return (
    <div className="bg-[#f8dcd6] flex items-center justify-center py-6 px-2 ">
      <div className="flex items-center justify-center max-w-3xl w-full ">
        {/* Book Image */}
        <img
          src={bookImage}
          alt="Cookbook"
          className="w-16 h-20 object-contain"
        />

        {/* Text and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full ">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">
            Sally&apos;s Baking 101 Cookbook
          </h1>
          <button className="bg-black text-white px-6 py-2 rounded-full mx-3 mt-3 sm:mt-0 hover:bg-[#CE7C77] hover:text-[#010101] transition-all duration-300 text-sm font-semibold shadow-md shadow-black/40">
            ORDER TODAY!
          </button>
        </div>
      </div>
    </div>
  );
}
