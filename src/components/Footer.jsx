import React from "react";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-6 border-t-2">
      <p className="text-[#121212]">© copyright timbucloud 2024</p>
      <div className="flex gap-4">
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linkedin} alt="" />
      </div>
    </div>
  );
};

export default Footer;
