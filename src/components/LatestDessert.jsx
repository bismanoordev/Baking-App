import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";

export default function LatestDessert() {
  return (
    <div className="bg-white p-4">
      {/* Heading */}
      <h1 className="text-4xl flex pt-6 px-15 ">
        Latest in Dessert
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
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/11/pecan-pie-bars-600x900.jpg",
           text:"DESSERT",
            title: "Brown Butter Pecan Pie Bars",
            comments: "396 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/10/dark-chocolate-peanut-butter-cupcakes-600x900.jpg",
            text:"DESSERT",
            title: "Dark Chocolate Cupcakes with Creamy Peanut Butter Frosting",
            comments: "19 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/11/candy-bar-blondies-1-600x900.jpg",
            text:"DESSERT",
            title: "Thick & Chewy Candy Bar Blondies",
            comments: "108 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/10/black-velvet-cupcakes-3-600x900.jpg",
            text:"DESSERT",
            title: "Black Velvet Cupcakes",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/11/butterscotch-filled-brown-sugar-cupcakes-2-600x900.jpg",
            text:"DESSERT",
            title: "Brown Sugar Butterscotch Cupcakes",
            comments: "450 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/09/easy-super-moist-spice-cake-600x900.jpg",
            text:"DESSERT",
            title: "Super Moist Spice Cake",
            comments: "393 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/09/how-to-make-brown-butter-cream-cheese-frosting-600x900.jpg",
            text:"DESSERT",
            title: "Brown Butter Cream Cheese Frosting",
            comments: "97 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/06/chocolate-chip-cookie-pizza-600x900.jpg",
            text:"DESSERT",
            title: "Chocolate Chip Cookie Pizza",
            comments: "457 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/09/pumpkin-crumb-cake-cookies-3-600x900.jpg",
            text:"DESSERT",
            title: "Pumpkin Crumb Cake Cookies",
            comments: "25 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/10/glazed-apple-crumb-cake-600x900.jpg",
            text:"DESSERT",
            title: "Apple Crumb Cake",
            comments: "13 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/10/apple-cinnamon-cookies-600x900.jpg",
            text:"DESSERT",
            title: "Apple Cinnamon Oatmeal Cookies",
            comments: "987 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/04/chocolate-vanilla-marble-loaf-cake-600x900.jpg",
            text:"DESSERT",
            title: "Marble Loaf Cake (Updated!)",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/09/banana-cupcakes-600x900.jpg",
            text:"DESSERT",
            title: "My Best Banana Cupcakes",
            comments: "895 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/cookies-cream-oreo-cupcakes-600x900.jpg",
            text:"DESSERT",
            title: "Cookies & Cream Oreo Cupcakes",
            comments: "134 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/06/blueberry-peach-pie-with-lattice-top-600x900.jpg",
            text:"DESSERT",
            title: "Blueberry Peach Pie",
            comments: "145 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2012/09/homemade-cookie-dough-truffles-600x900.jpg",
            text:"DESSERT",
            title: "Cookie Dough Truffles",
            comments: "48 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/05/fresh-fruit-tart-2-600x900.jpg",
            text:"DESSERT",
            title: "Fresh Fruit Tart with Vanilla Mascarpone Cream",
            comments: "624 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/04/strawberry-cupcakes-with-strawberry-buttercream-frosting-2-600x900.jpg",
            text:"DESSERT",
            title: "Strawberry Cupcakes with Strawberry Buttercream",
            comments: "65 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/08/cheesecake-pie-with-raspberry-sauce-600x900.jpg",
            text:"DESSERT",
            title: "20+ Delicious Summer Pie Recipes",
            comments: "235 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/06/homemade-pistachio-ice-cream-600x900.jpg",
            text:"DESSERT",
            title: "Chocolate Swirl Pistachio Ice Cream",
            comments: "623 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/06/peanut-butter-pie-picture-600x900.jpg",
            text:"DESSERT",
            title: "Unbelievable Peanut Butter Pie",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/01/oatmeal-cream-pies-600x900.jpg",
            text:"DESSERT",
            title: "Homemade Oatmeal Cream Pies",
            comments: "454 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/02/how-to-assemble-a-layer-cake-2-600x900.jpg",
            text:"DESSERT",
            title: "How to Freeze Cakes (Video)",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/05/muffin-pan-mini-cheesecakes-600x900.jpg",
            text:"DESSERT",
            title: "Mini Cheesecakes (in a Standard Muffin Pan)",
            comments: "459 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/05/big-peanut-butter-monster-cookies-600x900.jpg",
            text:"DESSERT",
            title: "Big Giant Monster Cookies",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/02/pistachio-cupcake-600x900.jpg",
            text:"DESSERT",
            title: "Pistachio Cupcakes with Strawberry Buttercream",
            comments: "913 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/05/cinnamon-roll-cheesecake-600x900.jpg",
            TEXT:"DESSERT",
            title: "Cinnamon Swirl Cheesecake",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/04/peanut-butter-and-chocolate-swirl-cookies-600x900.jpg",
            text:"DESSERT",
            title: "Peanut Butter Chocolate Swirl Cookies",
            comments: "22 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/04/blueberry-cupcakes-600x900.jpg",
            text:"DESSERT",
            title: "Blueberry Cream Cupcakes",
            comments: "597 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/03/salted-caramel-coconut-macaroon-thumbprints-600x900.jpg",
            text:"DESSERT",
            title: "Caramel Coconut Macaroon Thumbprints",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/05/soft-chocolate-chip-cookie-bars-600x900.jpg",
            text:"DESSERT",
            title: "Soft & Chewy Chocolate Chip Cookie Bars",
            comments: "183 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/04/lavender-cake-600x900.jpg",
            text:"DESSERT",
            title: "Favorite Spring Dessert Recipes",
            comments: "756 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/03/layer-cake-tutorial-600x900.jpg",
            text:"DESSERT",
            title: "How to Assemble a Layer Cake (Video)",
            comments: "36 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/02/frosted-lemon-blueberry-cake-2-600x900.jpg",
            text:"DESSERT",
            title: "Lemon Blueberry Layer Cake",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2021/02/naturally-flavored-raspberry-sugar-cookies-600x900.jpg",
            text:"DESSERT",
            title: "Raspberry Sugar Cookies (Real Flavor)",
            comments: "145 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/02/peanut-butter-valentines-day-cookies-2-600x900.jpg",
            text:"DESSERT",
            title: "Peanut Butter Valentine’s Day Cookies",
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