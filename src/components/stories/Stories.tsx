import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Livestreaming from "../livestreaming/Livestreaming";

const Stories = () => {
  const Stories = [
    {
      id: 1,
      name: "John",
      image: "https://source.unsplash.com/random/100x100",
      viewed: false,
    },
    {
      id: 2,
      name: "Jane",
      image: "https://source.unsplash.com/random/101x101",
      viewed: true,
    },
    {
      id: 3,
      name: "Jack",
      image: "https://source.unsplash.com/random/102x102",
      viewed: false,
    },
    {
      id: 4,
      name: "Jack",
      image: "https://source.unsplash.com/random/102x102",
      viewed: false,
    },
    {
      id: 5,
      name: "Jack",
      image: "https://source.unsplash.com/random/102x102",
      viewed: false,
    },
  ];
  return (
    <div className="   col-span-2 col-start-2">
      <h2>Announcement</h2>
      <br />
      <div className="flex justify-start gap-5">
      {Stories.map((story)=>(
         <div
         className="bg-cover bg-no-repeat w-32 h-28 relative rounded-xl p-3 to-pink-500 shadow cursor-pointer"
         style={{
           backgroundImage: `url(${story.image})`,
         }}
       >
         <div className="absolute bottom-20 right-0 ">
           <img
             src="https://source.unsplash.com/random/101x101"
             className="w-10 h-10 rounded-full border-2"
             alt="story"
           />
         </div>
         <div className="absolute text-center" style={{ bottom: "5%" }}>
           <p className="text-white font-semibold">{story.name}</p>
         </div>
       </div>

      ))}
      </div>     
    </div>
  );
};
export default Stories;