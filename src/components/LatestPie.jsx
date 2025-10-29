import React from "react";
import { GiKnifeFork, GiFlowerEmblem } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";

export default function LatestPie() {
  return (
    <div className="bg-white p-4">
      {/* Heading */}
      <h1 className="text-4xl flex pt-6 px-15 ">
        Latest in Pies, Crisps, & Tarts
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
           text:"PIES, CRISPS,& TARTS",
            title: "Brown Butter Pecan Pie Bars",
            comments: "396 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/06/blueberry-peach-pie-with-lattice-top-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Blueberry Peach Pie",
            comments: "19 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/05/fresh-fruit-tart-2-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Fresh Fruit Tart with Vanilla Mascarpone Cream",
            comments: "108 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2022/08/cheesecake-pie-with-raspberry-sauce-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "20+ Delicious Summer Pie Recipes",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2025/06/peanut-butter-pie-picture-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Unbelievable Peanut Butter Pie",
            comments: "450 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/butterscotch-pie-2-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Butterscotch Pie",
            comments: "393 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/vegetarian-shepherds-pie-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Vegetarian Shepherd’s Pie (Hearty & Flavorful)",
            comments: "97 Comment",
          },
          {
            img: "http://sallysbakingaddiction.com/wp-content/uploads/2024/11/apple-cranberry-crumble-pie-3-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Apple Cranberry Crumble Pie",
            comments: "457 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/pumpkin-hand-pies-1-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Pumpkin Hand Pies",
            comments: "25 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/11/pear-tarte-tatin-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Pear Tarte Tatin (Made Simple)",
            comments: "13 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/09/lattice-pie-crust-tutorial-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "How to Lattice Pie Crust",
            comments: "987 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/10/best-pie-tools-600x900.jpg",
            text:"PIES, CRISPS,& TARTS TIPS",
            title: "10 Best Tools for Baking Pies",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/09/homemade-apple-turnovers-2-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Apple Turnovers (Puff Pastry)",
            comments: "895 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/08/apple-cobber-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "The Best Apple Cobbler I’ve Ever Had",
            comments: "134 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/09/poptarts-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Homemade Frosted Brown Sugar Cinnamon Pop Tarts",
            comments: "145 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/08/blueberry-galette-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Simple Blueberry Galette",
            comments: "48 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/08/blueberry-peach-crisp-brown-butter-topping-2-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Brown Butter Blueberry Peach Crisp",
            comments: "624 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/07/cherry-cobbler-photo-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Easy Cherry Cobbler",
            comments: "65 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/06/triple-berry-pie-2-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Triple Berry Pie",
            comments: "235 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/04/berry-galette-3-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Berry Galette (Buttermilk Cornmeal Crust)",
            comments: "623 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2024/01/chicken-pot-pie-photo-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Chicken Pot Pie Recipe",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/07/salted-caramel-apple-pie-slice-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Salted Caramel Apple Pie",
            comments: "454 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/11/cranberry-frangipane-tart-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Cranberry Frangipane Tart (GF)",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/11/flaky-mushroom-puff-pastry-tarts-2-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Mushroom Puff Pastry Tarts",
            comments: "459 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/11/biscoff-cookie-crumb-crust-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "How to Make a Biscoff Pie Crust",
            comments: "456 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/11/pumpkin-cheesecake-pie.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Pumpkin Cheesecake Pie",
            comments: "913 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/11/chocolate-pudding-pie-with-mocha-whipped-cream-600x900.jpg",
            TEXT:"PIES, CRISPS,& TARTS",
            title: "Mocha Chocolate Pudding Pie",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/11/mini-pecan-pies-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Mini Pecan Pies",
            comments: "22 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/07/slice-of-apple-pie-2-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "My Favorite Apple Pie Recipe",
            comments: "597 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/09/latticed-crimped-fluted-apple-pies-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "How to Crimp & Flute Pie Crust (Video)",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2019/11/pecan-pie-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "My Favorite Pecan Pie Recipe",
            comments: "183 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2023/09/homemade-apple-galette-recipe-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Easy Apple Galette Recipe",
            comments: "756 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2014/11/easy-gluten-free-apple-crisp-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Gluten Free Apple Crisp",
            comments: "36 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2016/08/delicious-peach-cobbler-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Peach Cobbler Recipe",
            comments: "45 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2015/07/peach-crisp-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Perfect Peach Crisp: So Easy!",
            comments: "145 Comment",
          },
          {
            img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/peanut-butter-ice-cream-pie-3-600x900.jpg",
            text:"PIES, CRISPS,& TARTS",
            title: "Peanut Butter Ice Cream Pie",
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