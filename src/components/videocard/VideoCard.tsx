import { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface VideoCardProps {
  video: {
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
  };
}
const VideoCard = ({ video }: VideoCardProps) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(video.comments);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [goldenBuzzerCount, setGoldenBuzzerCount] = useState(video.buzzers);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  const handleLike = () => {
    // If already liked, remove the like
    if (liked) {
      setLiked(false);
      // Decrease the like count
      // You can also update your backend here
      video.likes -= 1;
    } else {
      // If not liked, add the like
      setLiked(true);
      // Increase the like count
      // You can also update your backend here
      video.likes += 1;

      // If already disliked, remove the dislike
      if (disliked) {
        setDisliked(false);
        // Decrease the dislike count
        // You can also update your backend here
        video.dislikes -= 1;
      }
    }
  };

  const handleDislike = () => {
    // If already disliked, remove the dislike
    if (disliked) {
      setDisliked(false);
      // Decrease the dislike count
      // You can also update your backend here
      video.dislikes -= 1;
    } else {
      // If not disliked, add the dislike
      setDisliked(true);
      // Increase the dislike count
      // You can also update your backend here
      video.dislikes += 1;

      // If already liked, remove the like
      if (liked) {
        setLiked(false);
        // Decrease the like count
        // You can also update your backend here
        video.likes -= 1;
      }
    }
  };

  const handleGoldenBuzzer = () => {
    // Open the payment modal
    setPaymentModalOpen(true);
  };

  const handlePayment = () => {
    // Process the payment
    // After successful payment, increment the golden buzzer count
    setGoldenBuzzerCount(goldenBuzzerCount + 1);
    // Close the payment modal
    setPaymentModalOpen(false);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const isCommentEmpty = newComment.trim() === "";

  return (
    <div className="relative w-full flex">
      <div className="relative w-[65%]">
    
        <div className="pb-[56.25%] ">
     
          <iframe
            src={video.videoUrl}
            title={video.title}
            className="absolute inset-0 w-full h-full"
          />
      
        </div>
     
        <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-90 rounded-b-none">
          <div className="flex items-center justify-center space-x-20">
           {/* Likes */}
          <div className="flex items-center">
            <span className="text-gray-400 text-sm mr-1">{video.likes}</span>
            <button
              className={`text-xl hover:text-green-300 ${
                liked ? "text-green-500" : "text-gray-500"
              }`}
              onClick={handleLike}
            >
              <FaThumbsUp />
            </button>
          </div>
          {/* Dislikes */}
          <div className="flex items-center">
            <span className="text-gray-400 text-sm mr-1">{video.dislikes}</span>
            <button
              className={`text-xl hover:text-red-300 ${
                disliked ? "text-red-500" : "text-gray-500"
              }`}
              onClick={handleDislike}
            >
              <FaThumbsDown />
            </button>
          </div>
          {/* Golden Buzzers */}
          <div className="flex items-center">
            <span className="text-gray-400 text-sm mr-1">
              {goldenBuzzerCount}
            </span>
            <button
              className="text-xl text-yellow-400 hover:text-yellow-300"
              onClick={handleGoldenBuzzer}
            >
              <FaStar />
            </button>
            </div>
     {/* Golden Buzzer Payment Modal */}
     {paymentModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold">Pay to Send Golden Buzzer</h2>
            <p className="mb-4 text-gray-600">Pay $10 to send a Golden Buzzer.</p>
            <div className="flex justify-end">
              <button
                className="px-3 py-1 text-xs bg-yellow-500 text-white rounded-sm hover:bg-yellow-600"
                onClick={handlePayment}
              >
                Pay $10
              </button>
              <button
                className="ml-2 px-3 py-1 text-xs text-gray-500 hover:text-gray-700"
                onClick={() => setPaymentModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
          </div>
        </div>
      </div>
      <div className="relative flex-grow mt-4 md:mt-0">
        <div className="flex flex-col justify-between h-full p-5 bg-gray-100 rounded-t-none">
        
            <div className="flex items-center space-x-2 mb-4">
              {/* User Profile */}
              <Link to="onelive">
              <img
                src="https://source.unsplash.com/random/102x102"
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
              </Link>
                <Link to='performer'>
              <div>
                <p className="text-sm text-gray-700">{video.performer}</p>
                <p className="text-xs text-gray-400">#Performer's Talent</p>
                <p className="text-xs text-gray-400">{video.date}</p>
              </div>
              </Link>
            </div>
        
          <p className="text-black text-sm font-bold">{video.title}</p>
          <p className="text-sm text-gray-700">{video.description}</p>
          {/* Comment Section */}
          <div className="mt-4 max-h-32 overflow-y-auto">
            {comments.map((comment, index) => (
              <div key={index} className="flex items-start space-x-2 mb-2">
                <img
                  src="https://source.unsplash.com/random/32x32"
                  alt="User Profile"
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <p className="text-xs text-gray-400">Username</p>
                  <p className="text-sm">{comment}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Add Comment Form */}
          <form className="mt-4" onSubmit={handleCommentSubmit}>
            <div className="flex">
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
      </div>
    </div>
  );
};

export default VideoCard;
