import React from "react";
import Logo from "../assets/Logo.png";
import Profile from "../assets/profile.png";
import Search from "../assets/search.png";
import Cart from "../assets/cart.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-10 px-6  text-[#121212]">
      <div className="flex-shrink-0 cursor-pointer">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
      </div>

      <nav className="hidden md:flex space-x-4">
        <li className="list-none hover:text-[#355ADF] cursor-pointer">Home</li>
        <li className="list-none hover:text-[#355ADF] cursor-pointer">
          Catalog
        </li>
        <li className="list-none hover:text-[#355ADF] cursor-pointer">About</li>
        <li className="list-none hover:text-[#355ADF] cursor-pointer">
          Contact Us
        </li>
      </nav>

      <div className="flex space-x-4">
        <div className="flex-shrink-0 cursor-pointer">
          <img src={Profile} alt="Profile" className="h-6 w-6 md:h-8 md:w-8" />
        </div>
        <div className="flex-shrink-0 cursor-pointer">
          <img src={Search} alt="Search" className="h-6 w-6 md:h-8 md:w-8" />
        </div>
        <div className="flex-shrink-0 cursor-pointer">
          <img src={Cart} alt="Cart" className="h-6 w-6 md:h-8 md:w-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
