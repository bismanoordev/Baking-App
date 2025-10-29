import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { RiBreadLine } from "react-icons/ri";

export default function LatestBread() {
  return (
    <div className="bg-white p-4">
      {/* Heading */}
      <h1 className="text-4xl flex pt-6 px-9 ">
        Latest in Bread
      </h1>
      <div className="mt-6 mx-10 border-b-3 px-10 border-dotted border-[#d46c63]" />
      {/* Description */}
      

      {/* Cards Section */}
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 p-8 bg-white"
      >
        {/* Card Component (Reusable Style) */}
        {[
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/09/pizza-bread-no-knead-3-600x900.jpg",
           text:"YEAST BREAD",
            title: "Cursty No-Knead Pizza Bread",
            comments: "396 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/08/brioche-bread-600x900.jpg",
            text:"BREAD",
            title: "Homemade Brioche",
            comments: "19 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/08/apple-zucchini-bread-600x900.jpg",
            text:"QUICK BREAD",
            title: "Apple Zucchini Bread",
            comments: "108 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/06/blueberry-lemon-sweet-rolls-600x900.jpg",
            text:"SWEET ROLLS",
            title: "Blueberry Lemon Sweet Rolls",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/05/lemon-blueberry-babka-recipe-600x900.jpg",
            text:"BREAD",
            title: "Lemon Blueberry Babka ",
            comments: "450 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2021/06/savory-cheese-quick-bread-2-600x900.jpg",
            text:"QUICK BREAD",
            title: "Savory Quick Bread",
            comments: "393 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/06/homemade-orange-sweet-rolls-600x900.jpg",
            text:"SWEET ROLLS",
            title: "Homemade Orange Sweet Rolls",
            comments: "97 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/02/cruffins-600x900.jpg",
            text:"PASTRIES",
            title: "Homemade Cruffins",
            comments: "457 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/02/easy-homemade-biscuits-600x900.jpg",
            text:"QUICK BREAD",
            title: "Homemade Biscuits (Popular Recipe)",
            comments: "1,173 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/01/easy-garlic-bread-parmesan-600x900.jpg",
            text:"BREAD",
            title: "Homemade Garlic Bread",
            comments: "25 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/01/homemade-croutons-2-600x900.jpg",
            text:"APPETIZERS & SNACKS",
            title: "How to Make Homemade Croutons",
            comments: "13 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/01/how-to-make-ciabatta-bread-600x900.jpg",
            text:"BREAD",
            title: "Homemade Ciabatta Bread",
            comments: "987 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/make-ahead-sticky-buns-600x900.jpg",
            text:"SWEET ROLLS",
            title: "Maple Pecan Sticky Buns ",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/10/sweet-potato-dinner-rolls-600x900.jpg",
            text:"BREAD",
            title: "Sweet Potato Dinner Rolls",
            comments: "895 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/09/easy-asiago-bread-600x900.jpg",
            text:"BREAD",
            title: "Asiago-Crusted Skillet Bread (No Knead)",
            comments: "134 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/08/dutch-oven-cranberry-nut-bread-600x900.jpg",
            text:"BREAD",
            title: "Crusty Cranberry Nut No-Knead Bread",
            comments: "145 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/03/barbecue-bbq-chicken-pizza-3-600x900.jpg",
            text:"PIZZA",
            title: "Homemade BBQ Chicken Pizza",
            comments: "48 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/07/zucchini-cheese-biscuits-600x900.jpg",
            text:"QUICK BREAD",
            title: "Zucchini Biscuits (Parmesan Herb)",
            comments: "624 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/07/peanut-butter-chocolate-chip-zucchini-bread-2-600x900.jpg",
            text:"QUICK BREAD",
            title: "Peanut Butter Chocolate Chip Zucchini Bread",
            comments: "65 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/04/double-chocolate-banana-bread-photo-600x900.jpg",
            text:"QUICK BREAD",
            title: "Double Chocolate Banana Bread",
            comments: "235 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/04/pesto-bread-2-600x900.jpg",
            text:"BREAD",
            title: "Pesto Pull-Apart Bread ",
            comments: "623 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/01/cinnamon-swirl-bread-photo-2-600x900.jpg",
            text:"BREAD",
            title: "Homemade Cinnamon Swirl Bread",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/01/knead-dough-photo-600x900.jpg",
            text:"BAKING TIPS",
            title: "How to Knead Dough (Video)",
            comments: "454 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/10/jalapeno-cheddar-bread-1-600x900.jpg",
            text:"BREAD",
            title: "No Knead Jalapeno Cheddar Bread",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/01/whole-wheat-bread-picture-600x900.jpg",
            text:"BREAD",
            title: "Whole Wheat Bread (Soft & Hearty)",
            comments: "459 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2021/03/homemade-overnight-cinnamon-rolls-600x900.jpg",
            text:"SWEET ROLLS",
            title: "Homemade Overnight Cinnamon Rolls",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/06/cornbread-3-600x900.jpg",
            text:"DINNER & SIDES",
            title: "My Favorite Cornbread Recipe",
            comments: "913 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/09/birthday-funfetti-cake-cinnamon-rolls-600x900.jpg",
            TEXT:"SWEET ROLLS",
            title: "Birthday Cake Cinnamon Rolls (Funfetti)",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/08/jalapeno-cheddar-soft-pretzels-600x900.jpg",
            text:"APPETIZERS & SNACKS",
            title: "Jalapeno Cheddar Soft Pretzels",
            comments: "22 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/05/glazed-doughnuts-homemade-2-600x900.jpg",
            text:"DONUTS",
            title: "How to Make Homemade Glazed Doughnuts",
            comments: "597 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/07/homemade-doughnuts-frostings-2-600x900.jpg",
            text:"DONUTS",
            title: "Donut Frostings (Strawberry, Vanilla,& Chocolate)",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2012/12/raspberry-sweet-rolls-cream-cheese-icing-5-600x900.jpg",
            text:"SWEET ROLLS",
            title: "Raspberry Swirl Sweet Rolls",
            comments: "183 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/06/delicious-double-chocolate-zucchini-bread-recipe-600x900.jpg",
            text:"QUICK BREAD",
            title: "Double Chocolate Zucchini Bread ",
            comments: "756 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/06/cold-veggie-pizza-appetizer-600x900.jpg",
            text:"APPETIZERS & SNACKS",
            title: "Cold Veggie Pizza(Homemade Appetizer)",
            comments: "36 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/04/strawberry-bread-3-600x900.jpg",
            text:"QUICK BREAD",
            title: "Glazed Strawberry Bread",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/03/sweet-lemon-rolls-3-600x900.jpg",
            text:"SWEET ROLLS",
            title: "Soft & Fluffy Lemon Sweet Rolls",
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