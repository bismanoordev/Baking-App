import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";

export default function LatestCookies() {
  return (
    <div className="bg-white p-4">
      {/* Heading */}
      <h1 className="text-4xl flex pt-6 px-15 ">
        Latest in Cookies
      </h1>
      <div className="mt-6 mx-15 border-b-3 px-10 border-dotted border-[#d46c63]" />
      {/* Description */}
      

      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-8 bg-white"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/06/chocolate-chip-cookie-pizza-1024x1536.jpg",
           text:"COOKIES",
            title: "Chocolate Chip Cookie Pizza",
            comments: "396 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/09/pumpkin-crumb-cake-cookies-3-600x900.jpg",
            text:"COOKIES",
            title: "Pumpkin Crumb Cake Cookies",
            comments: "19 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/10/apple-cinnamon-cookies-600x900.jpg",
            text:"COOKIES",
            title: "Apple Cinnamon Oatmeal Cookies",
            comments: "108 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/01/oatmeal-cream-pies-600x900.jpg",
            text:"COOKIES",
            title: "Homemade Oatmeal Cream Pies",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/05/big-peanut-butter-monster-cookies-600x900.jpg",
            text:"COOKIES",
            title: "Big Giant Monster Cookies ",
            comments: "450 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/04/peanut-butter-and-chocolate-swirl-cookies-600x900.jpg",
            text:"COOKIES",
            title: "Peanut Butter Chocolate Swirl Cookies",
            comments: "393 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/03/salted-caramel-coconut-macaroon-thumbprints-600x900.jpg",
            text:"COOKIES",
            title: "Caramel Coconut Macaroon Thumbprints",
            comments: "97 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/05/soft-chocolate-chip-cookie-bars-600x900.jpg",
            text:"COOKIES",
            title: "Soft & Chewy Chocolate Chip Cookie Bars",
            comments: "457 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2021/02/naturally-flavored-raspberry-sugar-cookies-600x900.jpg",
            text:"COOKIES",
            title: "Raspberry Sugar Cookies (Real Flavor)",
            comments: "25 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/02/peanut-butter-valentines-day-cookies-2-600x900.jpg",
            text:"COOKIES",
            title: "Peanut Butter Valentine’s Day Cookies",
            comments: "13 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/12/chocolate-frosted-cookies-2.jpg",
            text:"COOKIES",
            title: "Chocolate Frosted Cookies",
            comments: "987 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/12/crescent-cookies-recipe-500x750.jpg",
            text:"COOKIES",
            title: "Almond Crescent Cookies",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/12/chocolate-chip-cookie-bark-2-500x750.jpg",
            text:"COOKIES",
            title: "Chocolate Chip Cookies Bark",
            comments: "895 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/12/iced-lemon-shortbread-cookies-500x750.jpg",
            text:"COOKIES",
            title: "Lemon Shortbread Cookies",
            comments: "134 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/12/brown-sugar-cookie-cutter-cookies-2-500x750.jpg",
            text:"COOKIES",
            title: "Brown Sugar Cut-out Cookies",
            comments: "145 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/12/peanut-butter-fudge-puddle-cookie-cups-500x750.jpg",
            text:"COOKIES",
            title: "Peanut Butter Fudge Puddles (Cookie Cups)",
            comments: "48 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/12/peppermint-meltaways-2-500x750.jpg",
            text:"COOKIES",
            title: "Peppermint Meltaway Cookies",
            comments: "624 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/11/75-Christmas-Cookies-500x750.jpg",
            text:"COOKIES",
            title: "75+ Christmas Cookie Recipe & Free Printable",
            comments: "65 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/12/chocolate-raspberry-crinkles-500x750.jpg",
            text:"COOKIES",
            title: "Chocolate Raspberry Crinkles",
            comments: "235 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/gingerbread-latte-cookies-500x750.jpg",
            text:"COOKIES",
            title: "Gingerbread Latte Cookies",
            comments: "623 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/01/lemon-loaf-pound-cake-4-600x900.jpg",
            text:"COOKIES",
            title: "Cookie Decorating Buttercream (Video)",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/11/best-spritz-cookies-3-600x900.jpg",
            text:"COOKIES",
            title: "My Favorite Spritz Cookies",
            comments: "454 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/12/how-to-decorate-sugar-cookies-500x750.jpg",
            text:"COOKIES",
            title: "How to Decorate Sugar Cookies",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/10/brown-sugar-shortbread-cookies-2-500x750.jpg",
            text:"COOKIES",
            title: "Brown Sugar Shortbread Cookies",
            comments: "459 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/09/pumpkin-oatmeal-cream-pies-600x900.jpg",
            text:"COOKIES",
            title: "Pumpkin Oatmeal Cream Pies",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2012/12/cake-batter-chocolate-chip-cookies-photo-3-600x900.jpg",
            text:"COOKIES",
            title: "Cake Batter Chocolate Chip Cookies",
            comments: "913 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/05/chocolate-cookies-caramel-filling-600x900.jpg",
            TEXT:"COOKIES",
            title: "Salted Caramel Dark Chocolate Cookies",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/12/oreos-homemade-600x900.jpg",
            text:"COOKIES",
            title: "Homemade Oreos",
            comments: "22 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/12/red-velvet-cookies-600x900.jpg",
            text:"COOKIES",
            title: "Red Velvet Chocolate Chip Cookies",
            comments: "597 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/12/rum-balls-photo-600x900.jpg",
            text:"COOKIES",
            title: "Festive & Easy Rum Balls",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/12/cherry-linzer-cookies-photo-600x900.jpg",
            text:"COOKIES",
            title: "Iced Cherry Almond Linzer Cookies",
            comments: "183 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/12/chocolate-butter-cookies-photo-2-600x900.jpg",
            text:"COOKIES",
            title: "Piped Chocolate Butter Cookies",
            comments: "756 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/11/lemon-curd-thumbprint-cookies-600x900.jpg",
            text:"COOKIES",
            title: "Lemon Thumbprint Cookies",
            comments: "36 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/03/gingerbread-cookie-bars-600x900.jpg",
            text:"COOKIES",
            title: "Gingerbread Cookie Bars",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/12/nutella-crinkles-photo-2-600x900.jpg",
            text:"COOKIES",
            title: "Nutella Crinkle Cookies",
            comments: "145 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/12/maple-walnut-tassies-photo-2-600x900.jpg",
            text:"COOKIES",
            title: "Maple Walnut Tassies",
            comments: "1,173 Comment",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[22%] max-w-sm bg-[#F5F3F2] shadow-sm transition duration-300 transform hover:-translate-y-2 
                       hover:shadow-lg hover:shadow-gray-500 cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="object-cover h-[280px] w-full"
            />
            <div className="p-3">
                <p className="text-sm pb-3 font-semibold underline">
                    {card.text}
                </p>
              <h5 className="text-xl font-semibold text-black group-hover:text-gray-800 transition duration-300">
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

    </div>

  );
}