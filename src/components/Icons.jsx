import React from 'react'

export default function Icons() {
  return (
    <div className='bg-[#FFFFFF]'>
      <div className="flex justify-center items-center relative my-10">
  {/* Left Dotted Line */}
  <div className="hidden md:block flex-1 h-[2px] bg-dots"></div>

  {/* Center Badge */}
  <div className="flex justify-center items-center mx-4">
    <img
      src="https://sallysbakingaddiction.com/wp-content/themes/sallysbaking/assets/images/badge-white.svg"
      alt="Badge"
      className="h-[150px] w-[150px]"
    />
  </div>

  {/* Right Dotted Line */}
  <div className="hidden md:block flex-1 h-[2px] bg-dots"></div>
</div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-6 md:px-12 py-6">
  <img
    src="https://sallysbakingaddiction.com/wp-content/uploads/2023/01/press-bhg.png"
    alt="Better Homes and Gardens"
    className="h-12 md:h-20 w-auto object-contain"
  />
  <img
    src="https://sallysbakingaddiction.com/wp-content/uploads/2023/01/press-gma.png"
    alt="Good Morning America"
    className="h-12 md:h-20 w-auto object-contain"
  />
  <img
    src="https://sallysbakingaddiction.com/wp-content/uploads/2023/01/press-huffingtonpost.png"
    alt="Huffington Post"
    className="h-12 md:h-20 w-auto object-contain"
  />
  <img
    src="https://sallysbakingaddiction.com/wp-content/uploads/2023/01/press-tasteofhome.png"
    alt="Taste of Home"
    className="h-12 md:h-20 w-auto object-contain"
  />
  <img
    src="https://sallysbakingaddiction.com/wp-content/uploads/2023/01/press-people.png"
    alt="People Magazine"
    className="h-12 md:h-20 w-auto object-contain"
  />
  <img
    src="https://sallysbakingaddiction.com/wp-content/uploads/2025/02/press-today.png"
    alt="Today Show"
    className="h-10 md:h-16 w-30 object-contain"
  />
</div>

    </div>
  )
}
