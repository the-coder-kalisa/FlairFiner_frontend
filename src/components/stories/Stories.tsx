import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes, FaUpload } from "react-icons/fa";
import CatgModal from "../modals/CatgModal";
const Stories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const stories = [
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
      name: "Jade",
      image: "https://source.unsplash.com/random/103x103",
      viewed: false,
    },
    {
      id: 5,
      name: "Adda",
      image: "https://source.unsplash.com/random/104x104",
      viewed: false,
    },
    {
      id: 6,
      name: "Khan",
      image: "https://source.unsplash.com/random/105x105",
      viewed: false,
    },
    {
      id: 7,
      name: "Luke",
      image: "https://source.unsplash.com/random/106x106",
      viewed: false,
    },
  ];


  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 5 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === stories.length - 5 ? 0 : prevIndex + 1
    );
  };

  const handleStoryClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleUpload = () => {
    // Handle upload functionality here
  };

  return (
    <div className="mt-20 col-span-2 w-full grid place-items-center ">
      <h2>Stories</h2>
      <br />
      <div className="flex justify-start items-center gap-5">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 cursor-pointer">
          <FaChevronLeft
            className="text-xl text-gray-600"
            onClick={handlePrev}
          />
        </div>
        {stories.slice(activeIndex, activeIndex + 5).map((story) => (
          <div
            key={story.id}
            className="bg-cover bg-no-repeat w-32 h-28 relative rounded-xl p-3 to-pink-500 shadow cursor-pointer"
            style={{
              backgroundImage: `url(${story.image})`,
            }}
            onClick={handleStoryClick}
          >
            <div className="absolute bottom-20 right-0 ">
              <img
                src={story.image}
                className="w-10 h-10 rounded-full border-2"
                alt="story"
              />
            </div>
            <div className="absolute text-center" style={{ bottom: "5%" }}>
              <p className="text-white font-semibold">{story.name}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 cursor-pointer">
          <FaChevronRight
            className="text-xl text-gray-600"
            onClick={handleNext}
          />
        </div>
      </div>
      <CatgModal isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default Stories;
