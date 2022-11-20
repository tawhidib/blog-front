import Posts from "../components/Posts/Posts";
import SideBar from "../components/SideBar/SideBar";
import header_img from "../public/images/header_img.webp";

export default function Home() {
  return (
    <div className=" mt-16">
      <div className="font-lora text-center text-[#444] text-5xl my-4 absolute top-[75px] left-1/2 font-medium italic">
        Blog
      </div>
      <img className="h-[450px] w-full object-cover" src={header_img.src} />

      <div className="grid grid-cols-4 mt-12">
        <div className="col-span-3">
          <Posts />
        </div>
        <div className="col-span-1">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
