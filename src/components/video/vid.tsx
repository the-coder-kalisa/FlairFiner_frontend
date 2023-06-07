import { lineHeight } from "@mui/system";
import React, { useState } from "react";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaComment,
  FaCommentDots,
  FaTelegram,
} from "react-icons/fa";

interface Comment {
  id: number;
  name: string;
  likes: number;
  days: number;
  reply: string;
  text: string;
  image: string;
}
const Vid: React.FC = () => {
  const [showComments, setShowComments] = useState(true);

  const toggleComments = () => {
    setShowComments(!showComments);
  };
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const comment: Comment = {
        id: Date.now(),
        text: newComment,
        image: "https://source.unsplash.com/random/32x32", // Replace with desired image URL
        name: "Claire",
        reply: "Reply",
        likes: 878,
        days: 1,
      };
      setComments((prevComments) => [...prevComments, comment]);
      setNewComment("");
    }
  };

  return (
    <div className="w-screen flex flex-row lg:justify-between">
      <div className={`h-3/4 w-${showComments ? "full" : "full"} `}>
        {/* <video
          src="/theguy.mp4"
          className={`h-${showComments ? "1/3" : "1/3"} w-full `}
          controls
        >helloooo</video>  https://youtu.be/jhuvnB1JXV0 */}

        <iframe
          src="https://www.youtube.com/embed/jhuvnB1JXV0/controls=0"
          className={`h-${showComments ? "full" : "full"} w-full`}
        >
        </iframe>
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

      <div
        className={`flex flex-row  w-${showComments ? "1/4" : "1/11"} h-3/4`}
      >
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
            
            <div className="flex flex-col justify-between">
              {comments.length==0 ?(<div className="m-auto">Be the first to comment</div>) :(
              <div className="flex flex-col justify-between w-full h-fit pt-2">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex flex-row">
                    <div className="image pb-3">
                      <img
                        src={comment.image}
                        alt=""
                        className="rounded-full w-12 h-12 object-cover"
                      />
                    </div>
                    <div className="details w-3/4   ">
                      <section className="px-4 flex flex-row ">
                        <div className="font-semibold w-fit ">
                          {comment.name}
                        </div>
                        <div className="font-thin">&nbsp; {comment.text}</div>
                      </section>
                      <div className="smaller text-xs flex flex-row justify-around ">
                        <span className="underline hover:text-slate-500 cursor-pointer">
                          {comment.days}d
                        </span>
                        <span className=" hover:text-slate-500 cursor-pointer">
                          {comment.likes} likes
                        </span>
                        <span className=" hover:text-slate-500 cursor-pointer hover:underline">
                          {comment.reply}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>)}
              <div className="flex flex-row ">
                <input
                  type="text"
                  value={newComment}
                  onChange={handleInputChange}
                  className="w-52 border-solid border-gray-200 border-2 focus:outline-none text-sm px-2"
                  placeholder="Comment  "
                />
                <button
                  onClick={handleAddComment}
                  className="focus:outline-none "
                >
                  <FaTelegram size={22} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Vid;
