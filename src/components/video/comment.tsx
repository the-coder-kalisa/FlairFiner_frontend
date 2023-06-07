import React, { useState } from 'react';

interface Comment {
    id: number;
    name: string;
    likes: number;
    days:number;
    reply: string;
    text: string;
    image: string,
  }

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const comment: Comment = {
        id: Date.now(),
        text: newComment,
        image: 'https://source.unsplash.com/random/32x32', // Replace with desired image URL
        name: "Claire",
        reply: "Reply",
        likes: 878,
        days:1,
      };
      setComments((prevComments) => [...prevComments, comment]);
      setNewComment('');
    }
  };

  return (
    <div>
      {comments.length === 0 ? (
        <div>No comments yet.</div>
      ) : (
        <div className="flex flex-col justify-between">
          {comments.map((comment) => (
            <div key={comment.id} className="flex flex-row">
              <div className="image pb-2">
                <img
                  src={comment.image}
                  alt=""
                  className="rounded-full w-12 h-12 object-cover"
                />
              </div>
              {comment.text}
            </div>
          ))}
        </div>
      )}
      <div>
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
