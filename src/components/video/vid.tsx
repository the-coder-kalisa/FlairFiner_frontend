import { lineHeight } from "@mui/system";
import React, { useState } from "react";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaComment,
  FaCommentDots,
  FaTelegram,
} from "react-icons/fa";
// import deo from '../../../public/theguy.mp4'
const Vid = () => {
  const [showComments, setShowComments] = useState(true);

  const toggleComments = () => {
    setShowComments(!showComments);
  };
  return (
    <div className="w-screen flex flex-row lg:justify-between">
      <div className={`h-3/4 w-${showComments ? "3/5" : "full"} `}>
        <video
          src="/theguy.mp4"
          className={`h-${showComments ? "1/3" : "1/3"} w-full `}
          controls
        ></video>
        <div>likesss</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between">
            <div className="image ">
              <img
                src="https://source.unsplash.com/random/32x32"
                alt=""
                className="rounded-full w-12 h-12 object-cover"
              />
            </div>

            <div className="flex flex-col guy">
              <section className="px-3">the_guy_official</section>
              <div className="smaller text-sm px-3">
                <span className=" text-slate-500 cursor-pointer">#rizzer</span>
              </div>
            </div>
          </div>
          <section>
            <strong>32,877 views</strong>
          </section>
        </div>
        <div className="flex flex-col">
          <div className="py-4">
            <strong>About the_guy_official</strong>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            necessitatibus porro magni maxime atque, molestiae sed voluptatem a
            doloremque ratione blanditiis voluptates iure soluta consectetur
            deserunt laborum ad, ipsam fuga. Ex voluptatum fuga optio id est
            officia harum dolores assumenda neque repellat cumque, debitis sed
            dignissimos placeat mollitia dolore. Libero alias assumenda
            dignissimos ullam aperiam. Doloribus eveniet soluta atque qui.
            Fugiat nisi, optio esse expedita eveniet dolore commodi ullam
            repellat maxime, vel eum ad aspernatur alias illo tenetur
            exercitationem blanditiis architecto modi voluptate voluptatibus
            fugit cupiditate, officiis laboriosam. Voluptas, itaque.
          </div>
        </div>
      </div>
      
      <div className={`flex flex-row  w-${showComments ? "1/4" : "1/11"} h-3/4` }>
        <button
          className="text-gray-500 hover:text-red-600 focus:outline-none h-5 flex justify-start border-transparent"
          onClick={toggleComments}
        >
          {showComments ? (
            <FaArrowCircleRight size={20} className="" />
          ) : (
            <FaArrowCircleLeft size={20} />
          )}
        </button>
        {showComments && (
          <>
            <div className="w-full flex flex-col justify-between h-1/3">
              <div className="flex flex-col justify-around lg:h-72">
                <div className="user flex flex-row h-fit justify-start w-full">
                  <div className="image ">
                    <img
                      src="https://source.unsplash.com/random/32x32"
                      alt=""
                      className="rounded-full w-12 h-12 object-cover"
                    />
                  </div>
                  <div className="details w-3/4">
                    <section className="px-4">Claire</section>
                    <div className="smaller text-sm flex flex-row justify-around ">
                      <span className="underline hover:text-slate-500 cursor-pointer">
                        1d
                      </span>{" "}
                      <span className=" hover:text-slate-500 cursor-pointer">
                        878 likes
                      </span>{" "}
                      <span className=" hover:text-slate-500 cursor-pointer">
                        Reply
                      </span>
                    </div>
                  </div>
                </div>
                <div className="user flex flex-row h-fit justify-start w-full">
                  <div className="image ">
                    <img
                      src="https://source.unsplash.com/random/32x32"
                      alt=""
                      className="rounded-full w-12 h-12 object-cover"
                    />
                  </div>
                  <div className="details w-3/4">
                    <section className="px-4">Claire</section>
                    <div className="smaller text-sm flex flex-row justify-around ">
                      <span className="underline hover:text-slate-500 cursor-pointer">
                        1d
                      </span>{" "}
                      <span className=" hover:text-slate-500 cursor-pointer">
                        878 likes
                      </span>{" "}
                      <span className=" hover:text-slate-500 cursor-pointer">
                        Reply
                      </span>
                    </div>
                  </div>
                </div>
                <div className="user flex flex-row h-fit justify-start w-full">
                  <div className="image ">
                    <img
                      src="https://source.unsplash.com/random/32x32"
                      alt=""
                      className="rounded-full w-12 h-12 object-cover"
                    />
                  </div>
                  <div className="details w-3/4">
                    <section className="px-4">Claire</section>
                    <div className="smaller text-sm flex flex-row justify-around ">
                      <span className="underline hover:text-slate-500 cursor-pointer">
                        1d
                      </span>{" "}
                      <span className=" hover:text-slate-500 cursor-pointer">
                        878 likes
                      </span>{" "}
                      <span className=" hover:text-slate-500 cursor-pointer">
                        Reply
                      </span>
                    </div>
                  </div>
                </div>
                <div className="user flex flex-row h-fit justify-start w-full">
                  <div className="image ">
                    <img
                      src="https://source.unsplash.com/random/32x32"
                      alt=""
                      className="rounded-full w-12 h-12 object-cover"
                    />
                  </div>
                  <div className="details w-3/4">
                    <section className="px-4">Claire</section>
                    <div className="smaller text-sm flex flex-row justify-around ">
                      <span className="underline hover:text-slate-500 cursor-pointer">
                        1d
                      </span>{" "}
                      <span className=" hover:text-slate-500 cursor-pointer">
                        878 likes
                      </span>{" "}
                      <span className=" hover:text-slate-500 cursor-pointer">
                        Reply
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="commenting pr-4 w-56" >
                <section className="text-sm">
                  <strong>View 37 comments</strong>
                </section>
                <div className="flex flex-row justify-around w-full">
                  <input
                    type="text"
                    className="h-11 w-[13em] rounded-12 border-x-stone-300 border-2 focus:outline-none p-2 text-sm"
                    placeholder="comment"
                  />
                  <div className="flex items-center justify-center ">
                    <FaTelegram size={21} className="" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Vid;
