import React, { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaUpload } from "react-icons/fa";

interface CatgModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CatgModal: React.FC<CatgModalProps> = ({ isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = [
    {
      id: 1,
      type: "image",
      content: "https://source.unsplash.com/random/600x400", // Replace with the URL of the image
      comments: [
        { id: 1, user: "User1", text: "This is awesome!" },
        { id: 2, user: "User2", text: "Nice picture!" },
      ],
    },
    {
      id: 2,
      type: "video",
      content: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with the URL of the video
      comments: [
        { id: 1, user: "User3", text: "Cool video!" },
        { id: 2, user: "User4", text: "I love this song!" },
      ],
    },
    // Add more story objects...
  ];

 
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === stories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleUpload = () => {
    // Handle upload functionality here
  };

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(stories[activeIndex].comments);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, { id: Date.now(), user: "User", text: newComment }]);
      setNewComment("");
    }
  };

  const isCommentEmpty = newComment.trim() === "";

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white w-[80%] max-w-[800px] rounded-lg p-4 flex gap-4">
            <div className="flex flex-col w-[60%]">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <FaChevronLeft
                    className="text-xl text-gray-600 cursor-pointer"
                    onClick={handlePrev}
                  />
                  {stories[activeIndex].type === "image" ? (
                    <img
                      src={stories[activeIndex].content}
                      alt="Story Content"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <iframe
                      title="Story Video"
                      src={stories[activeIndex].content}
                      className="w-16 h-16 rounded-lg"
                      allowFullScreen
                    ></iframe>
                  )}
                  <FaChevronRight
                    className="text-xl text-gray-600 cursor-pointer"
                    onClick={handleNext}
                  />
                </div>
                <FaTimes
                  className="text-xl text-white opacity-80 cursor-pointer absolute top-2 left-2"
                  onClick={onClose}
                />
              </div>
              <div className="mb-4">
                {/* Display the content (image or video) of the clicked story */}
                {stories[activeIndex].type === "image" ? (
                  <img
                    src={stories[activeIndex].content}
                    alt="Story Content"
                    className="w-full h-80 object-cover"
                  />
                ) : (
                  <iframe
                    title="Story Video"
                    src={stories[activeIndex].content}
                    className="w-full h-80 rounded-lg"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="mt-4 max-h-32 overflow-y-auto">
                {/* Display comments for the current story */}
                {comments.map((comment) => (
                  <div key={comment.id} className="flex items-start space-x-2 mb-2">
                    <img
                      src="https://source.unsplash.com/random/32x32"
                      alt="User Profile"
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-xs text-gray-400">{comment.user}</p>
                      <p className="text-sm">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form className="mt-4" onSubmit={handleCommentSubmit}>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={handleCommentChange}
                    className="w-full px-2 py-1 text-xs rounded-b border-b border-gray-300 focus:outline-none"
                  />
                  {!isCommentEmpty && (
                    <button
                      type="submit"
                      className="ml-2 px-3 py-1 text-xs bg-yellow-500 text-white rounded-sm hover:bg-yellow-600"
                    >
                      Save
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div className="w-[40%] flex flex-col gap-4">
            <div className="flex items-center justify-center">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FaUpload className="text-xl text-gray-600" />
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleUpload}
                />
                <p className="text-sm text-gray-600 ml-2">Upload</p>
              </div>
              <p className="text-sm text-gray-600 text-center">Share Your Story</p>
              {/* Additional performers' profiles */}
              <div className=" flex flex-col gap-4 ml-24 mt-3 ">

              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/random/32x32"
                  alt="Performer 1"
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-sm text-gray-600">Performer 1</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/random/32x32"
                  alt="Performer 2"
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-sm text-gray-600">Performer 2</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/random/32x32"
                  alt="Performer 3"
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-sm text-gray-600">Performer 3</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/random/32x32"
                  alt="Performer 4"
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-sm text-gray-600">Performer 4</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/random/32x32"
                  alt="Performer 5"
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-sm text-gray-600">Performer 5</p>
              </div>
              {/* End of additional performers' profiles */}
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatgModal;