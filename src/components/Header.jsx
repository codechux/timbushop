import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Profile from "../assets/profile.png";
import Search from "../assets/search.png";
import Cart from "../assets/cart.png";
import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "../assets/Hamburger.png";
import CloseMenu from "../assets/X.png";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="hidden md:flex justify-between items-center py-10 px-6 text-[#121212]">
        <Link to="/">
          <div className="flex-shrink-0 cursor-pointer">
            <img src={Logo} alt="Logo" className="h-20 w-auto" />
          </div>
        </Link>

        <nav className="hidden md:flex space-x-4 font-semibold">
          <li className="list-none hover:text-[#355ADF] cursor-pointer">
            Home
          </li>
          <li className="list-none hover:text-[#355ADF] cursor-pointer text-[#355ADF] pb-2 border-b-2 border-[#355ADF]">
            <Link to="/">Catalog</Link>
          </li>
          <li className="list-none hover:text-[#355ADF] cursor-pointer">
            About
          </li>
          <li className="list-none hover:text-[#355ADF] cursor-pointer">
            Contact Us
          </li>
        </nav>

        <div className="flex space-x-4">
          <div className="flex-shrink-0 cursor-pointer">
            <img
              src={Profile}
              alt="Profile"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </div>
          <div className="flex-shrink-0 cursor-pointer">
            <img src={Search} alt="Search" className="h-6 w-6 md:h-8 md:w-8" />
          </div>
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/cart">
              <img src={Cart} alt="Cart" className="h-6 w-6 md:h-8 md:w-8" />
            </Link>
          </div>
        </div>
      </header>

      {/* mobile view */}
      <header className="md:hidden flex items-center justify-between">
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <img
              src={isOpen ? CloseMenu : HamburgerMenu}
              alt="Menu"
              className="h-14 w-14"
            />
          </button>
        </div>

        <Link to="/" className="flex-shrink-0 mx-auto md:mx-0">
          <div className="cursor-pointer">
            <img src={Logo} alt="Logo" className="h-16 w-auto md:h-20" />
          </div>
        </Link>

        <div className="flex-shrink-0 cursor-pointer md:hidden">
          <Link to="/cart">
            <img src={Cart} alt="Cart" className="h-14 w-14" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
