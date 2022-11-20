import Link from "next/link";
import React from "react";
import postImg from "../../public/images/post.jpg";
function Post() {
  return (
    <div className="py-6 rounded">
      {/* post image  */}
      <img className="rounded-lg w-full h-56 object-cover" src={postImg.src} />

      {/* post categories */}
      <div className="px-4 py-6 flex flex-col items-center">
        <div className="">
          <span className="font-varela text-[11px] text-[#be9656] leading-5 mt-4 mr-3 cursor-pointer">
            Music
          </span>
          <span className="font-varela text-[11px] text-[#be9656] leading-5 mt-4 mr-3 cursor-pointer">
            Life
          </span>
        </div>

        {/* post title */}
        <h4 className="font-josefin text-xl font-bold mt-4 cursor-pointer">
          <Link href={"/posts/" + 1}>Post Title</Link>
        </h4>

        <hr />

        {/* post time */}
        <div>
          <span className="font-lora text-xs text-gray-500 italic  mt-4">
            1 hour age
          </span>
        </div>
        {/* post content */}
        <p
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
          className="mt-4 font-varela leading-6 text-base overflow-hidden text-ellipsis "
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default Post;
