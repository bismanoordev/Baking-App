import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

export default function About() {
  return (
    <div className="flex justify-center bg-white  md:px-8 w-full">
      {/* Outer Container */}
      <div className="flex flex-col md:flex-row items-center md:items-center p-10 md:p-12 bg-white max-w-[78rem] w-full relative overflow-hidden">

        {/* Left: Image */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0 md:mr-12 z-20">
          <div className="relative flex items-center justify-center w-55 h-55 md:w-72 md:h-72 rounded-full bg-white shadow-lg border-[6px] border-[#F8F7F6] overflow-hidden">
            <img
              src="https://sallysbakingaddiction.com/wp-content/uploads/2024/12/SALLY-HEADSHOT-2024-3.jpg"
              alt="Author"
              className="rounded-full w-full h-full object-cover border-[6px] border-white shadow-md"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="text-center md:text-left z-10 bg-[#F8F7F6] -ml-28 p-9 pl-24">
          <p className="text-sm uppercase tracking-wide text-gray-600 font-semibold">
            About the Author
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-2">
            Sally McKenney
          </h2>

          <p className="text-gray-800 mt-4 leading-relaxed text-[16px]">
            Sally McKenney is a baker, food photographer, and New York Times
            best-selling author. Her kitchen-tested recipes and step-by-step
            tutorials have given millions of readers the knowledge and confidence
            to bake from scratch. Sally’s work has been featured on TODAY, Good
            Morning America, Taste of Home, People, and more.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-[#CE7C77] hover:text-black transition-all duration-300">
            ABOUT SALLY’S BAKING →
          </button>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-6 text-2xl text-gray-600">
            <FaFacebookF className="text-white bg-[#4E7675] p-1 rounded-full cursor-pointer transition hover:scale-110 hover:bg-[#888887]" />
            <FaInstagram className="text-white bg-[#BE986B] p-1 rounded-full cursor-pointer transition hover:scale-110 hover:bg-[#888887]" />
            <FaPinterestP className="text-white bg-[#C3665C] p-1 rounded-full cursor-pointer transition hover:scale-110 hover:bg-[#888887]" />
            <IoLogoTiktok className="text-white bg-[#88B67D] p-1 rounded-full cursor-pointer transition hover:scale-110 hover:bg-[#888887]" />
            <IoLogoYoutube className="text-white bg-[#CE7C77] p-1 rounded-full cursor-pointer transition hover:scale-110 hover:bg-[#888887]" />
          </div>
        </div>
      </div>
    </div>
  );
}





