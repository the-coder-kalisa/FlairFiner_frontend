import React from "react";
import { FaUser, FaHeart } from "react-icons/fa";
import Navbar from "../navbar/Navbar";

interface UserProfileProps {
  profilePictureUrl: string;
  bio: string;
  admirers: number;
  admiring: number;
  posts: number;
  saved: number;
}

const UserProfile: React.FC<UserProfileProps> = ({
  profilePictureUrl,
  bio,
  admirers,
  admiring,
  posts,
  saved,
}) => {
  return (
    <div className="w-full col-span-2 flex flex-col items-center bg-gray-100 py-6">
      <div className="w-[80%] h-fit flex flex-col items-center justify-center gap-2 border-b border-b-3 pb-8 ">
        <img
          src={profilePictureUrl}
          alt="Profile Picture"
          className="rounded-full w-24 h-24 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold">Benitha</h1>
        <p className="text-gray-500 text-sm mb-4">{bio}</p>
        <div className="flex justify-between w-1/2">
          <div className="flex flex-col items-center">
            <p className="text-gray-500 font-semibold">Admirers</p>
            <div className="flex items-center">
              <FaHeart className="mr-2" />
              <p>{admirers}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-500 font-semibold">Admiring</p>
            <div className="flex items-center">
              <FaHeart className="mr-2" />
              <p>{admiring}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-500 font-semibold">Posts</p>
            <p>{posts}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-500 font-semibold">Saved</p>
            <p>{saved}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Performance Video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Performance Video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Performance Video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Performance Video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Performance Video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Performance Video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Performance Video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Performance Video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
