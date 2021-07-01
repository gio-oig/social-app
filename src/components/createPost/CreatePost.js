import { Context } from "../../context/context";

import { postApi } from "../../services/post";

import { Picker } from "emoji-mart";

import { useContext, useState } from "react";
import { RiChatSmile3Fill } from "react-icons/ri";
import { BiSend } from "react-icons/bi";

import "emoji-mart/css/emoji-mart.css";
import "./CreatePost.scss";

const CreatePost = () => {
  const [postMessage, setPostMessage] = useState("");
  const { setPosts } = useContext(Context);

  const [emoji, setEmoji] = useState(false);

  const addEmoji = (e) => {
    setPostMessage(postMessage.concat(e.native));
    console.log(postMessage);
  };
  const resetInput = () => {
    setPostMessage("");
    setEmoji(false);
  };

  const handleSubmit = async () => {
    if (!postMessage.length) return;

    const newPost = await postApi.create(postMessage);

    if (newPost.status === 200) {
      setPosts((state) => {
        return [newPost.data, ...state];
      });
      resetInput();
    }
  };

  const handleEnter = (e) => {
    e.key === "Enter" && handleSubmit();
  };

  return (
    <div>
      <div className="create-post">
        <textarea
          className="form-control"
          placeholder="what's your maind"
          value={postMessage}
          onKeyDown={(e) => handleEnter(e)}
          onChange={(e) => setPostMessage(e.target.value)}
        ></textarea>
        <div className="create-post__icons">
          <RiChatSmile3Fill size={25} onClick={() => setEmoji(!emoji)} />
          {emoji && <Picker onSelect={(e) => addEmoji(e)} />}
          <BiSend size={25} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
