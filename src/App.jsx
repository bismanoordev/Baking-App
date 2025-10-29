import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
// import Animations from "./components/Animations";
// import Movies from "./components/Movies";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Service from "./components/Service";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Portfolio from "./components/Portfolio"; 
// import Contact from "./components/Contact";

function App() {


  return (
    
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Animations" element={<Animations />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Login" element={<Login />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      
    
  );
}

export default App;
