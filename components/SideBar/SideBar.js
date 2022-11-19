import React from "react";
import profile from "../../public/images/profile.webp";
import SidebarSocialIcons from "./SidebarSocialIcons";

function SideBar() {
  return (
    <div className="px-6">
      <div className="">
        <h4 className="text-lg font-semibold">About Me</h4>
        <img src={profile.src} className="w-60 h-60" />
        <p className="my-4 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </p>
      </div>

      <div className="my-6">
        <h4 className="text-lg font-semibold">Categories</h4>
        <ul className="ml-10 list-disc">
          <li className="text-sky-500 cursor-pointer">Life</li>
          <li className="text-sky-500 cursor-pointer">Social</li>
          <li className="text-sky-500 cursor-pointer">Sports</li>
          <li className="text-sky-500 cursor-pointer">Technology</li>
          <li className="text-sky-500 cursor-pointer">Health</li>
          <li className="text-sky-500 cursor-pointer">Style</li>
        </ul>
      </div>

      <div className="my-6">
        <SidebarSocialIcons />
      </div>
    </div>
  );
}

export default SideBar;
