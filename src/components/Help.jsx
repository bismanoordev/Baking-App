import React from "react";

import { GiKnifeFork } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { ImVideoCamera } from "react-icons/im";

export default function Help() {
  return (
    <div className="p-20 md:p-16 lg:p-25 bg-white">
      <div className="flex items-center justify-center gap-3 bg-[#E7D8C7] border-[#F2D6D0] p-3 w-fit font-bold text-xl">
        <ImVideoCamera className="text-[#BE986B] text-2xl" />
        <span className="text-[#010101]">Helpful Baking Videos</span>
      </div>

      <div className="bg-[#FFFFFF] border border-[#F2D6D0] md:justify-center sm:justify-center">
        <h1 className=" text-xl p-4 px-6">
          While I always include detailed step-by-step directions and photos for
          every recipe I publish, my team and I know how helpful it can be to
          actually watch a recipe come together. We’ve filmed hundreds of recipe
          tutorials!
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap p-5 m-2 gap-6 ">
          <div className="max-w-3xl min-h-auto mx-auto bg-white shadow-sm overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Side: Image */}
            <div className="relative md:w-1/2 ">
              {" "}
              <img
                src="https://sallysbakingaddiction.com/wp-content/uploads/2015/11/freezing-chocolate-chip-cookie-dough-balls-600x900.jpg"
                alt="Cookie Dough Balls"
                className="w-full h-full object-cover "
              />{" "}
              {/* Play Button */}{" "}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                {" "}
                <div className="mt-20 ml-60 md:mt-24 md:ml-48 mb-90 lg:mt-28 lg:ml-60 flex items-center justify-center">
                  {" "}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFFFFF] shadow-md">
                    {" "}
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2D6D0] hover:bg-[#F2D6D0] transition">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        {" "}
                        <path d="M6.5 5.5v9l8-4.5-8-4.5z" />{" "}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side: Text */}
            <div className="p-6 flex flex-col justify-center md:w-1/2 bg-[#F5F3F2]">
              
              <p className="text-xs tracking-widest font-semibold underline text-black mb-2">
                
                BAKING TIPS
              </p>
              <h2 className="text-3xl font-semibold text-black leading-snug mb-3">
                
                How to Freeze Cookie Dough (Video)
              </h2>
              <div className="flex items-center text-black text-sm mt-2">
                <BiSolidMessageRounded className="mr-1 text-[#CE7C77]" />{" "}
                <span>163 Comments</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="max-w-3xl min-h-auto mx-auto bg-white shadow-sm overflow-hidden flex flex-col md:flex-row">
            {" "}
            {/* Left Side: Image */}
            <div className="relative md:w-1/2 ">
              
              <img
                src="https://sallysbakingaddiction.com/wp-content/uploads/2024/01/knead-dough-photo-600x900.jpg"
                alt="Cookie Dough Balls"
                className="w-full h-full  object-cover "
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                
                <div className="mt-20 ml-60 md:mt-24 md:ml-48 lg:mt-28 mb-90 lg:ml-60 flex items-center justify-center">
                  
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFFFFF] shadow-md">
                    
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2D6D0] hover:bg-[#F2D6D0] transition">
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        
                        <path d="M6.5 5.5v9l8-4.5-8-4.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side: Text */}{" "}
            <div className="p-6 flex flex-col justify-center md:w-1/2 bg-[#F5F3F2]">
              
              <p className="text-xs tracking-widest underline font-semibold text-black mb-2">
                
                BAKING TIPS
              </p>
              <h2 className="text-3xl font-semibold text-black leading-snug mb-3">
                
                How to Knead Dough (Video)
              </h2>
              <div className="flex items-center text-black text-sm mt-2">
                
                <BiSolidMessageRounded className="mr-1 text-[#CE7C77]" />
                <span>163 Comments</span>
              </div>
            </div>
          </div>
        </div>
       
        {/* Button */}
        <div className="flex justify-center px-5 sm:justify-center md:justify-end w-full">
          <button
            className="flex items-center justify-center gap-2 bg-[#BE986B] text-black 
                 w-fit px-6 py-3 rounded-full mb-5 sm:mt-0 
                 hover:bg-black hover:text-white 
                 transition-all duration-300 text-sm font-semibold 
                 shadow-md shadow-black/40"
          >
            VIEW ALL VIDEOS
            <FaArrowRight className="text-sm mt-[2px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
