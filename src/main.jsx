import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AllRecipes from "./components/AllRecipes";
import BreadN from "./components/BreadN";
import Delicious from "./components/Delicious";
import Cakes from "./components/Cakes";
import CookiesN from "./components/CookiesN";
import Dessert from "./components/Dessert";
import Pies from "./components/Pies";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
        <Navbar1 />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-recipes" element={<AllRecipes />} />
          <Route path="/breadN" element={<BreadN />} />
          <Route path="/breakfast" element={<Delicious />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/CookiesN" element={<CookiesN />} />
          <Route path="/Dessert" element={<Dessert />} />
          <Route path="/Pies" element={<Pies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
);

