import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { popularProducts } from "../data";

const Home = () => {
  return (
    <div>
      {/* <Announcement /> */}

      <Slider />
      <div className="categories">Categories</div>
      <Categories />
      <div className="categories">Products</div>
      <Products items={popularProducts} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
