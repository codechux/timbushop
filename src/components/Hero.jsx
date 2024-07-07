import React from "react";
import HeroImg from "../assets/heroTable-removebg-preview.png";

const Hero = () => {
  return (
    <section className="h-[240px] bg-[#EDEDEF] flex items-center justify-between">
      <div>
        <h2 className="text-4xl fon font-semibold pl-6">Product Catalog</h2>
        <p className="pl-8">Home/Catalog</p>
      </div>
      <div>
        <img src={HeroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
