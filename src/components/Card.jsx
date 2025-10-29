import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Card() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
  <a
  href="#"
  className="flex flex-col items-center bg-[#F0D9D6] 
             md:flex-row w-full max-w-6xl  
             dark:bg-gray-800 dark:hover:bg-gray-700 
             transition duration-300 overflow-hidden"
>
  <img
    className="object-cover w-full h-[32rem] md:h-auto md:w-1/2"
    src="https://sallysbakingaddiction.com/wp-content/uploads/2025/09/sally-mckenney-and-sallys-baking-101-cookbook-2.jpg"
    alt="Noteworthy technology acquisitions 2021"
  />

  <div className="flex flex-col justify-between w-full md:w-1/2  p-12 leading-relaxed">
  <p className="pb-9 underline decoration-black decoration-1 underline-offset-2">New York Times Best Seller</p>
    <h5 className="mb-6 text-4xl font-semibold tracking-tight text-black dark:text-white">
      Sally’s Baking 101
    </h5>
    <p className="mb-8 text-xl font-normal text-gray-700 dark:text-gray-400">
     A New York Times Best Seller, this is the ultimate baking book for home cooks of all skill levels, packed with 101 sweet and savory, foolproof recipes plus plenty of helpful tips for best results.
    </p>
    <button
  className="flex items-center justify-center gap-2 bg-black text-white 
             w-44 px-6 py-3 rounded-full mx-3 mt-3 sm:mt-0 
             hover:bg-[#CE7C77] hover:text-[#010101] 
             transition-all duration-300 text-sm font-semibold 
             shadow-md shadow-black/40"
>
  ORDER TODAY
  <FaArrowRight className="text-sm mt-[2px]" />
</button>
  </div>
</a>

</div>

  );
}
