import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="w-full h-[50px] bg-white sticky top-[0] flex items-center text-xl z-50">
      <div className="w-[20%] flex justify-center">
        <FaFacebookSquare className="text-gray-500 mx-2 cursor-pointer" />
        <FaTwitterSquare className="text-gray-500 mx-2 cursor-pointer" />
        <FaInstagramSquare className="text-gray-500 mx-2 cursor-pointer" />
        <FaWhatsappSquare className="text-gray-500 mx-2 cursor-pointer" />
      </div>
      <div className="w-[60%]">
        <ul className="flex justify-between mx-8">
          <li className="uppercase font-light cursor-pointer text-gray-500">
            home
          </li>
          <li className="uppercase font-light cursor-pointer text-gray-500">
            about
          </li>
          <li className="uppercase font-light cursor-pointer text-gray-500">
            contact
          </li>
          <li className="uppercase font-light cursor-pointer text-gray-500">
            write
          </li>
          <li className="uppercase font-light cursor-pointer text-gray-500">
            logout
          </li>
        </ul>
      </div>
      <div className="w-[20%] flex justify-center">
        <FaUserCircle className="text-gray-500 mx-2 cursor-pointer" />
        <FaSearch className="text-gray-500 mx-2 cursor-pointer" />
      </div>
    </div>
  );
}

export default TopBar;
