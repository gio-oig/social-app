import { useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import { useSelector } from "react-redux";
import { userIdSelector } from "../../redux/selectors";
import { socket } from "../../services/socket";

const CreateComment = ({ postId }) => {
  const [postComment, setPostComment] = useState("");
  const messageInput = useRef(null);

  const userId = useSelector(userIdSelector);

  const handleCommentChange = (e) => {
    setPostComment(e.target.value);
  };

  const handleSubmit = () => {
    if (!postComment.length) return;

    const commentObj = {
      userId: userId,
      postId: postId,
      content: postComment,
    };

    socket.emit("createComment", commentObj);

    clearCommentInput();
    // console.log(postComment);
  };

  const handleEnter = (e) => {
    e.key === "Enter" && handleSubmit();
  };

  const clearCommentInput = () => {
    messageInput.current.value = "";
  };

  return (
    <>
      <input
        ref={messageInput}
        placeholder="write a comment"
        onChange={(e) => handleCommentChange(e)}
        onKeyDown={(e) => handleEnter(e)}
      />
      <BiSend size={20} onClick={handleSubmit} />
    </>
  );
};

export default CreateComment;
