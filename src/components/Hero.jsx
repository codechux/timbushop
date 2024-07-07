import React from "react";
import { useLocation } from "react-router-dom";
import HeroImg from "../assets/heroTable-removebg-preview.png";
import ProductDetailImg from "../assets/productdetail.png";

const Hero = () => {
  const location = useLocation();

  const isProductDetailPage = location.pathname.includes("/product");

  return (
    <section className="h-[240px] bg-[#EDEDEF] flex items-center justify-between">
      <div>
        <h2 className="text-4xl font-semibold pl-6">
          {isProductDetailPage ? "Product Detail" : "Product Catalog"}
        </h2>
        <p className="pl-8">
          Home/{isProductDetailPage ? "Product Detail" : "Catalog"}
        </p>
      </div>
      <div>
        <img
          src={isProductDetailPage ? ProductDetailImg : HeroImg}
          alt=""
          className="h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
