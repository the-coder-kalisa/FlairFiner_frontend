import React from 'react';
import VideoCard from '../videocard/VideoCard';

interface VideoGridProps {
  videos: {
    id: number;
    title: string;
    views: number;
    likes: number;
    dislikes: number;
    buzzers: number;
    videoUrl: string;
    performer: string;
    description: string;
    date: string;
    comments: string[];
  }[];
}

const VideoGrid = ({ videos }: VideoGridProps) => {
  return (
    <div className="w-[60%]  grid col-span-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 overscroll-contain h-[80vh] mt-12">
      {videos.map((video) => (
        <div key={video.id} className="relative">
  
          <div className="bg-gray-200 rounded-lg p-4 w-full">
            <VideoCard video={video} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;