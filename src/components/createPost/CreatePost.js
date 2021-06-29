import { RiChatSmile3Fill } from "react-icons/ri";
import { BiSend } from "react-icons/bi";

import { Picker } from "emoji-mart";

import "emoji-mart/css/emoji-mart.css";
import "./CreatePost.scss";
import { useState } from "react";

const CreatePost = () => {
  const [postMessage, setPostMessage] = useState("");

  const [emoji, setEmoji] = useState(false);

  const addEmoji = (e) => {
    console.log(e);
    setPostMessage(postMessage.concat(e.native));
    console.log(postMessage);
  };
  const resetInput = () => {
    setPostMessage("");
    setEmoji(false);
  };
  return (
    <div>
      <div className="create-post">
        <textarea
          className="form-control"
          placeholder="what's your maind"
          value={postMessage}
        ></textarea>
        <div className="create-post__icons">
          <RiChatSmile3Fill size={25} onClick={() => setEmoji(!emoji)} />
          {emoji && <Picker onSelect={(e) => addEmoji(e)} />}
          <BiSend size={25} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
