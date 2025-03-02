import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const clicked = () => {
    setIsLiked(!isLiked); // Toggle the "liked" state
  };

  return (
    <div onClick={clicked} className="cursor-pointer">
      {/* Conditional rendering of the heart icon */}
      {isLiked ? (
        <i className="fa-solid fa-heart text-red-800 text-2xl"></i> // Solid heart when liked
      ) : (
        <i className="fa-regular fa-heart text-white text-2xl"></i> // Outline heart when not liked
      )}
    </div>
  );
}
