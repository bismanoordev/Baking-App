import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { RiBreadLine } from "react-icons/ri";

export default function LatestBKF() {
  return (
    <div className="bg-white p-4">
      {/* Heading */}
      <h1 className="text-4xl flex pt-6 px-16 ">
        Latest Breakfast
      </h1>
      <div className="mt-6 mx-16 border-b-3 px-10 border-dotted border-[#d46c63]" />
      {/* Description */}
      

      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-8 bg-white"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/10/glazed-apple-crumb-cake-600x900.jpg",
           text:"BREAKFAST",
            title: "Apple Crumb Cake",
            comments: "396 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/10/easy-baked-pumpkin-donuts-2-600x900.jpg",
            text:"BREAKFAST",
            title: "Baked Pumpkin Donuts",
            comments: "19 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/08/apple-cider-spice-muffins-600x900.jpg",
            text:"MUFFINS",
            title: "Apple Cider Spice Muffins",
            comments: "108 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/04/ultimate-muffins-recipe-600x900.jpg",
            text:"RECIPE ROUND-UPS",
            title: "10 Weekday Breakfasts You Can Bake Ahead",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/08/homemade-maple-chicken-breakfast-sausage-600x900.jpg",
            text:"BREAKFAST",
            title: "Maple Chicken Breakfast Sausage",
            comments: "450 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/06/banana-baked-oatmeal-4-600x900.jpg",
            text:"BREAKFAST",
            title: "Banana Baked Oatmeal",
            comments: "393 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/06/blueberry-lemon-sweet-rolls-600x900.jpg",
            text:"SWEET ROLLS",
            title: "Blueberry Lemon Sweet Rolls",
            comments: "97 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/12/best-homemade-overnight-cinnamon-rolls-cream-cheese-icing-600x900.jpg",
            text:"BREAKFAST",
            title: "How to Freeze Cinnamon Rolls (Video)",
            comments: "457 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/06/homemade-orange-sweet-rolls-600x900.jpg",
            text:"SWEET ROLLS",
            title: "Homemade Orange Sweet Rolls",
            comments: "1,173 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/04/ham-swiss-strata-2-600x900.jpg",
            text:"BREAKFAST",
            title: "Overnight Ham & Swiss Cheese Strata",
            comments: "25 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/04/muffins-recipe-600x900.jpg",
            text:"BREAKFAST",
            title: "Ultimate Muffin Recipe (1 Batter, Many Flavors)",
            comments: "13 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/03/pancakes-600x900.jpg",
            text:"BREAKFAST",
            title: "Fluffy Buttermilk Pancakes",
            comments: "987 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/02/cruffins-600x900.jpg",
            text:"PASTRIES",
            title: "Homemade Cruffins",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/05/blueberry-muffin-600x900.jpg",
            text:"BREAKFAST",
            title: "My Best Blueberry Muffins",
            comments: "895 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/02/easy-homemade-biscuits-600x900.jpg",
            text:"QUICK BREAD",
            title: "Homemade Biscuits (popular Recipe)",
            comments: "134 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/01/crumb-cake-muffins-600x900.jpg",
            text:"MUFFINS",
            title: "Crumb Cake Muffins",
            comments: "145 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/09/baked-apple-cider-french-toast-casserole-600x900.jpg",
            text:"BREAKFAST",
            title: "30+ Make-Ahead Thanksgiving Breakfast Ideas",
            comments: "48 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/make-ahead-sticky-buns-600x900.jpg",
            text:"SWEET ROLLS",
            title: "Maple Pecan Sticky Buns",
            comments: "624 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/cranberry-orange-muffins-with-icing-600x900.jpg",
            text:"MUFFINS",
            title: "Cranberry Orange Muffins",
            comments: "65 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/10/cinnamon-butter-600x900.jpg",
            text:"TOPPINGS & SAUCES",
            title: "Homemade Cinnamon Butter",
            comments: "235 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/09/pumpkin-crumb-cake-muffins-with-icing-600x900.jpg",
            text:"MUFFINS",
            title: "Pumpkin Crumb Cake Muffins",
            comments: "623 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/09/easy-homemade-pumpkin-coffee-creamer-2-600x900.jpg",
            text:"DRINKS",
            title: "Homemade Pumpkin Coffee Creamer",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/09/apple-scones-with-caramel-600x900.jpg",
            text:"SCONES",
            title: "Apple Cinnamon Scones",
            comments: "454 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/09/baked-apple-cider-french-toast-casserole-600x900.jpg",
            text:"BREAKFAST",
            title: "Baked Apple Cider French Toast",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2012/08/mini-cinnamon-sugar-coated-pumpkin-muffins-2-600x900.jpg",
            text:"MUFFINS",
            title: "Mini Cinnamon Sugar Pumpkin Muffins",
            comments: "459 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/09/homemade-apple-turnovers-2-600x900.jpg",
            text:"BREAKFAST",
            title: "Apple Turnovers (Puff Pastry)",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/06/honey-butter-600x900.jpg",
            text:"TOPPINGS & SAUCES",
            title: "Homemade Honey Butter",
            comments: "913 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/09/poptarts-600x900.jpg",
            TEXT:"BREAKFAST",
            title: "Homemade Frosted Brown Sugar Cinnamon Pop Tarts",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/07/zucchini-cheese-biscuits-600x900.jpg",
            text:"QUICK BREAD",
            title: "Zucchini Biscuits (Parmesan Herb)",
            comments: "22 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/02/gluten-free-blueberry-almond-muffins-1-600x900.jpg",
            text:"GLUTEN FREE",
            title: "Blueberry Almond Power Muffins",
            comments: "597 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/07/homemade-blueberry-scones-600x900.jpg",
            text:"SCONES",
            title: "My Favorite Blueberry Scones",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/06/easy-cornbread-muffins-600x900.jpg",
            text:"DINNER & SIDES",
            title: "Easy Cornbread Muffins Recipe",
            comments: "183 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/04/dutch-baby-600x900.jpg",
            text:"BREAKFAST",
            title: "Dutch Baby Recipe ",
            comments: "756 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/04/banana-pancakes-healthy-600x900.jpg",
            text:"BREAKFAST",
            title: "Healthy Banana Pancakes",
            comments: "36 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/02/spinach-quiche-600x900.jpg",
            text:"BREAKFAST",
            title: "Spinach Quiche",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/02/easy-lemon-poppy-seed-muffins-2-600x900.jpg",
            text:"MUFFINS",
            title: "SLemon Poppy Seed Muffins",
            comments: "145 Comment",
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