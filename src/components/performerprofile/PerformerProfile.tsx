
import React, { useState } from "react";
import { FaUserCircle, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const PerformerProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followCount, setFollowCount] = useState(1000);
  const [followingCount, setFollowingCount] = useState(500);

  const handleFollow = () => {
    setIsFollowing(true);
    setFollowCount((prevCount) => prevCount + 1);
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    setFollowCount((prevCount) => prevCount - 1);
  };

  return (
    <div className=" w-full col-span-2 bg-white p-4 shadow-md rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src= "https://source.unsplash.com/random/100x100"
          alt="Performer Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <p className="text-lg font-semibold">Performer Name</p>
          <p className="text-sm">Talent: Performer's Talent</p>
          <p className="text-sm">Location: City, Country</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        {isFollowing ? (
          <button
            className="flex items-center text-red-500 hover:text-red-600 focus:outline-none"
            onClick={handleUnfollow}
          >
            <FaHeart className="mr-2" />
            Unfollow
          </button>
        ) : (
          <button
            className="flex items-center text-gray-500 hover:text-red-600 focus:outline-none"
            onClick={handleFollow}
          >
            <FaHeart className="mr-2" />
            Follow
          </button>
        )}
        <div className="ml-4">
          <p className="text-sm">Admirers: {followCount}</p>
          <p className="text-sm">Admiring: {followingCount}</p>
        </div>
      </div>
      <p className="mb-4">
        Description of the performer's talent Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis orci
        et diam scelerisque lobortis. Nulla in turpis eget lacus euismod semper eu in nisi. Sed sollicitudin ipsum eget
        lectus rutrum, ut tristique odio cursus. Sed finibus arcu non pharetra viverra. Quisque dapibus ultrices sapien,
        non bibendum lacus finibus sit amet. Morbi feugiat lobortis nisl a laoreet.
      </p>
    
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

export default PerformerProfile;
