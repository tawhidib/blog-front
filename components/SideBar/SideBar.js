import React from "react";
import profile from "../../public/images/profile.webp";
import SidebarSocialIcons from "./SidebarSocialIcons";

function SideBar() {
  return (
    <div className="px-6">
      <div className="">
        <h4 className="text-lg font-semibold leading-10 border-y-2 text-center">
          About Me
        </h4>
        <img src={profile.src} className="w-60 h-60" />
        <p className="my-4 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </p>
      </div>

      <div className="my-6">
        <h4 className="text-lg font-semibold leading-10 border-y-2 text-center">
          Categories
        </h4>
        <ul className="ml-12 mt-6 ">
          <li className="text-sky-500 cursor-pointer w-[50%] inline-block mt-4">
            Life
          </li>
          <li className="text-sky-500 cursor-pointer w-[50%] inline-block mt-4">
            Social
          </li>
          <li className="text-sky-500 cursor-pointer w-[50%] inline-block mt-4">
            Sports
          </li>
          <li className="text-sky-500 cursor-pointer w-[50%] inline-block mt-4">
            Technology
          </li>
          <li className="text-sky-500 cursor-pointer w-[50%] inline-block mt-4">
            Health
          </li>
          <li className="text-sky-500 cursor-pointer w-[50%] inline-block mt-4">
            Style
          </li>
        </ul>
      </div>

      <div className="my-6">
        <h4 className="text-lg font-semibold leading-10 border-y-2 text-center">
          Social Links
        </h4>
        <div className="py-6">
          <SidebarSocialIcons />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
