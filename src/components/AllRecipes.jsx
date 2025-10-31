import React, { useState } from "react";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import Icons from "./Icons";
import SignUp from "./SignUp";
import Classic from "./Classic";

export default function AllRecipes() {

  const [openFilter, setOpenFilter] = useState(null);

  const filters = [
    "Type",
    "Dietary",
    "Ingredients",
    "Occasion",
    "Seasonal",
    "Skill-Level",
    "Other",
  ];

  const recipes = [
    {
      id: 1,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2017/10/dark-chocolate-peanut-butter-cupcakes-600x900.jpg",
      title: "Dark Chocolate Cupcakes with Creamy Peanut Butter Frosting",
      comments: 20,
    },
    {
      id: 2,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2015/09/bbq-meatballs-2-600x900.jpg",
      title: "Slow Cooker BBQ Meatballs",
      comments: 15,
    },
    {
      id: 3,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2021/10/decorated-halloween-cookies-600x900.jpg",
      title: "Easy Halloween Dessert Recipes",
      comments: 19,
    },
    {
      id: 4,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2013/11/candy-bar-blondies-1-600x900.jpg",
      title: "Thick & Chewy Candy Bar Blondies",
      comments: 18,
    },
    {
      id: 5,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/10/black-velvet-cupcakes-3-600x900.jpg",
      title: "Black Velvet Cupcake",
      comments: 25,
    },
    {
      id: 6,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2017/11/pumpkin-bundt-cake-600x900.jpg",
      title: "30+ Fall Cake Recipes ideas",
      comments:35,
    },
    {
      id: 7,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/10/warm-brussels-sprouts-bacon-apple-salad-600x900.jpg",
      title: "Warm Burssels Sprouts Salad with Bacon and Apple",
      comments: 55,
    },
    {
      id: 8,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2013/11/butterscotch-filled-brown-sugar-cupcakes-2-600x900.jpg",
      title: "Brown Sugar Butterscotch Cupcakes",
      comments: 50,
    },
    {
      id: 9,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2024/10/apple-cider-chicken-fall-dinner-2-600x900.jpg",
      title: "30 Delicious Fall Dinner Recipe Ideas",
      comments: 45,
    },
    {
      id: 10,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/09/pizza-bread-no-knead-3-600x900.jpg",
      title: "Crusty No-Knead Pizza Bread",
      comments: 35,
    },
    {
      id: 11,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/09/easy-super-moist-spice-cake-600x900.jpg",
      title: "Super Moist Spice Cake",
      comments: 65,
    },
    {
      id: 12,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/09/how-to-make-brown-butter-cream-cheese-frosting-600x900.jpg",
      title: "Brown Butter Cream Cheese Frosting",
      comments: 14,
    },
    {
      id: 13,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2014/10/pumpkin-smoothie-2-600x900.jpg",
      title: "Pumpkin Pie Smoothie",
      comments: 56,
    },
    {
      id: 14,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2023/11/pumpkin-cheesecake-pie-2-600x900.jpg",
      title: "Recipes to Make with Leftover Pumpkin Puree",
      comments: 45,
    },
    {
      id: 15,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2016/06/chocolate-chip-cookie-pizza-600x900.jpg",
      title: "Chocolate Chip Cookie Pizza",
      comments: 151,
    },
    {
      id: 16,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/09/pumpkin-crumb-cake-cookies-3-600x900.jpg",
      title: "Pumpkin Crumb Cake Cookies",
      comments: 76,
    },
    {
      id: 17,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2017/10/glazed-apple-crumb-cake-600x900.jpg",
      title: "Apple Crumb Cake",
      comments: 409,
    },
    {
      id: 18,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2019/10/easy-baked-pumpkin-donuts-2-600x900.jpg",
      title: "Baked Pumpkin Donuts",
      comments: 194,
    },
    {
      id: 19,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/apple-cranberry-crumble-pie-600x900.jpg",
      title: "Here Are the Best Apples for Baking",
      comments: 49,
    },
    {
      id: 20,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2015/09/homemade-apple-cider-1-600x900.jpg",
      title: "Homemade Apple Cider",
      comments: 107,
    },
    {
      id: 21,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2016/02/baked-honey-bbq-chicken-bites-2-600x900.jpg",
      title: "Baked Honey BBQ Chicken Bites",
      comments: 100,
    },
    {
      id: 22,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/08/apple-cider-spice-muffins-600x900.jpg",
      title: "Apple Cider Spice Muffins",
      comments: 925,
    },
    {
      id: 23,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2017/04/ultimate-muffins-recipe-600x900.jpg",
      title: "10 Weekday Breakfasts You Can Bake Ahead",
      comments: 5,
    },
    {
      id: 24,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2016/10/apple-cinnamon-cookies-600x900.jpg",
      title: "Apple Cinnamon Oatmeal Cookies",
      comments: 94,
    },
    {
      id: 25,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/08/homemade-maple-chicken-breakfast-sausage-600x900.jpg",
      title: "Maple Chicken Breakfast Sausage",
      comments: 45,
    },
    {
      id: 26,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/08/brioche-bread-600x900.jpg",
      title: "Homemade Brioche",
      comments: 66,
    },
    {
      id: 27,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2019/07/rice-krispie-treats-2-600x900.jpg",
      title: "9 One-Bowl Baking Recipes to Make Before School Starts",
      comments: 3,
    },
    {
      id: 28,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2016/01/healthy-whole-wheat-apple-muffins-600x900.jpg",
      title: "25 Back-to-School Recipes",
      comments: 5,
    },
    {
      id: 29,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/08/apple-zucchini-bread-600x900.jpg",
      title: "Apple Zucchini Bread",
      comments: 107,
    },
    {
      id: 30,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2023/07/roasted-lemon-garlic-zucchini-600x900.jpg",
      title: "20 sweet & Savory Zucchini Recipes",
      comments: 7,
    },
    {
      id: 31,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2023/09/funfetti-birthday-cake-cinnamon-rolls-3-600x900.jpg",
      title: "15 Birthday Desserts (That Aren't Cake!)",
      comments: 1,
    },
    {
      id: 32,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2022/04/chocolate-vanilla-marble-loaf-cake-600x900.jpg",
      title: "Marble Loaf Cake (Updated!)",
      comments: 60,
    },
    {
      id: 33,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2017/09/banana-cupcakes-600x900.jpg",
      title: "My Best Banana Cupcakes",
      comments: 160,
    },
    {
      id: 34,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/07/homemade-flatbread-style-crackers-600x900.jpg",
      title: "Homemade Artisan Crackers (4 Flavors)",
      comments: 327,
    },
    {
      id: 35,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/cookies-cream-oreo-cupcakes-600x900.jpg",
      title: "Cookies & Cream Oreo Cupcakes",
      comments: 29,
    },
    {
      id: 36,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/06/how-to-cream-butter-and-sugar-2-600x900.jpg",
      title: "How to Cream Butter & Sugar (Video)",
      comments: 20,
    },
    {
      id: 37,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2014/06/blueberry-peach-pie-with-lattice-top-600x900.jpg",
      title: "Blueberry Peach Pie",
      comments: 55,
    },
    {
      id: 38,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2012/09/homemade-cookie-dough-truffles-600x900.jpg",
      title: "Cookie Dough Truffles",
      comments: 35,
    },
    {
      id: 39,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2025/06/banana-baked-oatmeal-4-600x900.jpg",
      title: "Banana Baked Oatmeal",
      comments: 31,
    },
    {
      id: 40,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2013/06/blueberry-lemon-sweet-rolls-600x900.jpg",
      title: "Blueberry Lemon Sweet Rolls",
      comments: 35,
    },

  ];

  return (
    <div>
      <div className="bg-[#fffaf7] text-black px-4 sm:px-8 md:px-20 py-10">
      {/* Small top title */}
      <p className="text-sm font-medium text-black mb-1">Recipe Index</p>

      {/* Main heading */}
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">Recipe Index</h1>

      {/* Description */}
      <p className="text-black text-base sm:text-lg max-w-7xl">
        Use the drop down menu on this page to filter 1,200+ recipes based on
        what you’re looking for, including dietary, skill level, ingredient, and
        more.
      </p>

      {/* Dotted colored underline */}
      <div className="mt-6 border-b-4 border-dotted border-[#d46c63]" />
    </div>
      <div className="flex flex-col md:flex-row bg-[#fffaf7] p-4 md:p-8">
      
      {/* Left Sidebar Filters */}
      <aside className="w-full md:w-1/4 md:pr-6 px-9 mb-8 md:mb-0">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="border-b border-[#F2D6D0] py-3 cursor-pointer"
          >
            <button
              onClick={() => setOpenFilter(openFilter === index ? null : index)}
              className="flex justify-between cursor-pointer items-center w-full text-left text-gray-800 font-semibold"
            >
              {filter}
              <FaChevronDown
                className={`transition-transform ${
                  openFilter === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openFilter === index && (
              <div className="mt-2 text-sm text-black pl-2">
                <p>Bread</p>
                <p>Breakfast</p>
                <p>Brownies & Bars</p>
                <p>Cake</p>
                <p>Candy</p>
                <p>Cookies</p>
                <p>Cupcakes</p>
                <p>Frosting</p>
                <p>Pastries</p>
                <p>Savory</p>
                <p>Topping & Sauces</p>
              </div>
            )}
          </div>
        ))}
        <div className="pt-6 pl-3">
          <button
            className="flex items-center justify-center gap-2 bg-[#F2D6D0] text-black 
                       w-48 px-7 py-3 rounded-full mx-3 mt-3 sm:mt-0 
                       hover:bg-[#CE7C77] hover:text-black 
                       transition-all duration-300 text-sm 
                       shadow-md shadow-black/40"
          >
            RESET FILTERS
          </button>
        </div>
      </aside>

      {/* Right Recipe Grid */}
      <section className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-[#F5F3F2] shadow-sm hover:shadow-md transition rounded-sm"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-gray-900 text-lg mb-2">
                {recipe.title}
              </h2>
              <div className="flex items-center text-gray-600 text-sm">
                <BiSolidMessageRounded className="text-[#CE7C77] mr-1" />
                <span>{recipe.comments} Comments</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
    <Icons/>
    <SignUp/>
    <Classic/>
    </div>
  );
}

