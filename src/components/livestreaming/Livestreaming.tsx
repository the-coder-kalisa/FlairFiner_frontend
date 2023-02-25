import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

type Performer = {
  name: string;
  profileImageUrl: string;
  videoUrl: string;
}

type Props = {
  performers: Performer[];
}

const PerformerCard = ({ performer }: { performer: Performer }) => {
  return (
    <div className="border-2 rounded-xl w-56 h-56 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-gray-900 to-transparent">
        <h3 className="text-lg font-semibold mb-2">{performer.name}</h3>
        <button className="flex items-center">
          <FaPlayCircle className="mr-2" />
          Watch Now
        </button>
      </div>
      <img src={performer.profileImageUrl} alt={`Profile of ${performer.name}`} className="object-cover w-full h-full" />
    </div>
  );
}

const PerformersList = ({ performers }: Props) => {
  return (
    <div className="flex flex-wrap justify-around mt-8">
      {performers.map((performer, index) => (
        <PerformerCard key={index} performer={performer} />
      ))}
    </div>
  );
}

const Livestreaming = () => {
  const performers: Performer[] = [
    {
      name: 'Performer 1',
      profileImageUrl: 'https://picsum.photos/id/10/300/300',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      name: 'Performer 2',
      profileImageUrl: 'https://picsum.photos/id/20/300/300',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      name: 'Performer 3',
      profileImageUrl: 'https://picsum.photos/id/30/300/300',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <PerformersList performers={performers} />
    </div>
  );
}

export default Livestreaming;