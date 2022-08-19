import { useState } from "react";
// Decoration
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// App
const LikeButton = () => {
  const [likeClic, setLikeClic] = useState(false);

  const handleClick = (setClicker) => {
    setLikeClic(setClicker);
  };

  return (
    <>
      {likeClic === false ? (
        <AiOutlineHeart style={{ cursor: "pointer" }} onClick={() => handleClick(!likeClic)} />
      ) : (
        <AiFillHeart style={{ cursor: "pointer" }} onClick={() => handleClick(!likeClic)} />
      )}
    </>
  );
};

export default LikeButton;

// <AiOutlineHeart style={{ cursor: "pointer" }} onClick={() => handleClick(!likeClic)} />
