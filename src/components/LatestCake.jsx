import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";

export default function LatestCake() {
  return (
    <div className="bg-white p-4">
      {/* Heading */}
      <h1 className="text-4xl flex pt-6 px-15 ">
        Latest in Cake
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
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/09/easy-super-moist-spice-cake-600x900.jpg",
           text:"CAKE",
            title: "Super Moist Spice Cake",
            comments: "396 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/06/chocolate-chip-cookie-pizza-600x900.jpg",
            text:"CAKE",
            title: "Chocolate Chip Cookie Pizza",
            comments: "19 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/10/glazed-apple-crumb-cake-600x900.jpg",
            text:"CAKE",
            title: "Marble Loaf Cake (Updated!)",
            comments: "108 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/04/chocolate-vanilla-marble-loaf-cake-600x900.jpg",
            text:"CAKE",
            title: "How to Freeze Cakes (Video)",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/02/how-to-assemble-a-layer-cake-2-600x900.jpg",
            text:"CAKE",
            title: "Cinnamon Swirl Cheesecake ",
            comments: "450 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/05/cinnamon-roll-cheesecake-600x900.jpg",
            text:"CAKE",
            title: "How to Assemble a Layer Cake (Video)",
            comments: "393 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/03/layer-cake-tutorial-600x900.jpg",
            text:"CAKE",
            title: "Lemon Blueberry Layer Cake",
            comments: "97 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/02/frosted-lemon-blueberry-cake-2-600x900.jpg",
            text:"CAKE",
            title: "Chocolate Chip Cake with Ganache Drip",
            comments: "457 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/01/chocolate-chip-layer-cake-ganache-chocolate-drip-600x900.jpg",
            text:"CAKE",
            title: "Cranberry Orange Bundt Cake",
            comments: "25 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/12/cranberry-orange-bundt-cake-recipe-3-600x900.jpg",
            text:"CAKE",
            title: "Pumpkin Cream Cheese Bundt Cake",
            comments: "13 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/10/pumpkin-cream-cheese-bundt-cake-with-salted-caramel-2-600x900.jpg",
            text:"CAKE",
            title: "Peach Bundt Cake with Brown Butter Icing",
            comments: "987 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/07/peach-Bundt-600x900.jpg",
            text:"CAKE",
            title: "10 Essential Cake Baking & Decorating Tools ",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/08/cake-baking-tools-600x900.jpg",
            text:"CAKE",
            title: "The Perfect White Cake",
            comments: "895 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/08/white-cake-photo-600x900.jpg",
            text:"CAKE",
            title: "Chocolate Cake Roll (Swiss Roll)",
            comments: "134 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/05/homemade-swiss-chocolate-cake-roll-600x900.jpg",
            text:"CAKE",
            title: "Chocolate Cake Pops (Recipe + Video)",
            comments: "145 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2018/02/chocolate-cake-pops-recipe-600x900.jpg",
            text:"CAKE",
            title: "Ice Cream Cake (Choose Your Flavor)",
            comments: "48 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/05/ice-cream-cake-slice-600x900.jpg",
            text:"CAKE",
            title: "Homemade Cake Pops",
            comments: "624 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/07/cake-pops-recipe-600x900.jpg",
            text:"CAKE",
            title: "Hummingbird Bundt Cake",
            comments: "65 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/02/hummingbird-bundt-cake-600x900.jpg",
            text:"CAKE",
            title: "Date Night Chocolate Fudge Cakes for 2",
            comments: "235 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/01/date-night-two-chocolate-fudge-cakes-600x900.jpg",
            text:"CAKE",
            title: "Iced Lemon Pound Cake",
            comments: "623 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/01/lemon-loaf-pound-cake-4-600x900.jpg",
            text:"CAKE",
            title: "Spiced Gingerbread Cake (Many Sizes)",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/12/gingerbread-600x900.jpg",
            text:"CAKE",
            title: "Pumpkin Bundt Cake",
            comments: "454 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/11/pumpkin-bundt-cake-600x900.jpg",
            text:"CAKE",
            title: "Fresh Peach Cake (Extra Peaches!)",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/07/easy-peach-cake-1-600x900.jpg",
            text:"CAKE",
            title: "Easy Berry Icebox Cake",
            comments: "459 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/06/berry-icebox-cake-1-600x900.jpg",
            text:"CAKE",
            title: "Easy & Flavorful Zucchini Cake",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/04/zucchini-cake-2-600x900.jpg",
            text:"CAKE",
            title: "Easter Cake Recipe",
            comments: "913 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/03/easter-cake-600x900.jpg",
            TEXT:"CAKE",
            title: "Guinness Chocolate Cake",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/02/guinness-chocolate-cake-600x900.jpg",
            text:"CAKE",
            title: "Chocolate Raspberry Cake",
            comments: "22 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/chocolate-raspberry-cake-2-600x900.jpg",
            text:"CAKE",
            title: "Sour Cream Coffee Cake (with Crumb Topping)",
            comments: "597 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/05/crumb-coffee-cake-2-600x900.jpg",
            text:"CAKE",
            title: "Parchment Paper Rounds for Cakes (Video)",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/09/peeling-parchment-off-round-pan-600x900.jpg",
            text:"CAKE",
            title: "Pumpkin Roll Recipe",
            comments: "183 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/10/pumpkin-roll-cream-cheese-frosting-600x900.jpg",
            text:"CAKE",
            title: "Cake Pan Sizes & Conversions ",
            comments: "756 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2020/01/cake-pan-sizes-2-600x900.jpg",
            text:"CAKE",
            title: "Confetti Layer Cake (Funfetti)",
            comments: "36 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/05/funfetti-layer-cake-3-1-600x900.jpg",
            text:"CAKE",
            title: "Easy Apple Cake Recipe",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/09/fresh-apple-cake-2-600x900.jpg",
            text:"CAKE",
            title: "Dark Chocolate Peanut Butter Cake",
            comments: "145 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/07/chocolate-and-peanut-butter-cake-600x900.jpg",
            text:"CAKE",
            title: "Sweet Chocolate Cake",
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