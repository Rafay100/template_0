// import Link from "next/link";
// import React from "react";
// import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className=" bg-[#FBEBB5] px-4 py-4 shadow-md w-full " >
//       <div className=" max-w-6xl mx-auto  flex justify-between items-center">
//         {/* Left Section - Logo */}
//         <div></div>

//         {/* Center Section - Links */}
//         <ul className="hidden md:flex space-x-8 text-black font-medium">
//           <li className="hover:text-gray-600 cursor-pointer"><Link href="/">Home</Link></li>
//           <li className="hover:text-gray-600 cursor-pointer"><Link href="./shop">Shop</Link></li>
//           <li className="hover:text-gray-600 cursor-pointer"><Link href="/about">About</Link></li>
//           <li className="hover:text-gray-600 cursor-pointer"><Link href="./contact">Contact</Link></li>
//         </ul>

//         {/* Right Section - Icons */}
//         <div className="flex space-x-6 text-black">
//         <Link href="./home">
//           <FaUser className="text-lg cursor-pointer hover:text-gray-600" /></Link>
//           <Link href="./shop">
//           <FaSearch className="text-lg cursor-pointer hover:text-gray-600" /></Link>
//           <Link href="./about">
//           <FaHeart className="text-lg cursor-pointer hover:text-gray-600" /></Link>
//           <Link href="./contact">
//           <FaHeart className="text-lg cursor-pointer hover:text-gray-600" /></Link>
//           <Link href="./cart">
//           <FaShoppingCart className="text-lg cursor-pointer hover:text-gray-600" /></Link>
//         </div>
//       </div>

//       {/* Mobile Menu - Only Visible on Small Screens */}
//       <div className="block md:hidden mt-4">
//         <ul className="flex flex-col items-center space-y-4 text-black font-medium">
//           <li className="hover:text-gray-600 cursor-pointer">Home</li>
//           <li className="hover:text-gray-600 cursor-pointer">Shop</li>
//           <li className="hover:text-gray-600 cursor-pointer">About</li>
//           <li className="hover:text-gray-600 cursor-pointer">Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client"

import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FBEBB5] px-4 py-4 shadow-md w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">MyStore</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li className="hover:text-gray-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex space-x-6 text-black">
          <Link href="/profile">
            <FaUser className="text-lg cursor-pointer hover:text-gray-600" />
          </Link>
          <Link href="/searchBar">
            <FaSearch className="text-lg cursor-pointer hover:text-gray-600" />
          </Link>
          <Link href="/wishlist">
            <FaHeart className="text-lg cursor-pointer hover:text-gray-600" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="text-lg cursor-pointer hover:text-gray-600" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4 text-black font-medium">
            <li className="hover:text-gray-600">
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="/shop" onClick={toggleMenu}>Shop</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


