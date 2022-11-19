import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

function SidebarSocialIcons() {
  return (
    <div className="flex justify-center">
      <FaFacebookSquare className="text-gray-500 mx-2 cursor-pointer text-xl" />
      <FaTwitterSquare className="text-gray-500 mx-2 cursor-pointer text-xl" />
      <FaInstagramSquare className="text-gray-500 mx-2 cursor-pointer text-xl" />
      <FaWhatsappSquare className="text-gray-500 mx-2 cursor-pointer text-xl" />
    </div>
  );
}

export default SidebarSocialIcons;
