import UnknownUser from "../../assets/unknown.jpg";

import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { BiRepost } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";
import { BiSend } from "react-icons/bi";

import "./Post.scss";
import { useState } from "react";
import classNames from "classnames";
import Comment from "../comment";

const Post = () => {
  const [dropdownState, setDropdownState] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const toggleDropdown = () => {
    setDropdownState(!dropdownState);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="post">
      <div className="inner-post">
        <div className="post__author-img">
          <img src={UnknownUser} alt="" />
        </div>
        <div className="post__content">
          <div className="post__content__author">Giorgi</div>
          <div className="post__content__text">
            ratatuiratatuiratatuiratatui ratatuiratatuiratatui ratatuiratatui
            ratatuiratat iratatuiratatui ratatuiratatuiratatui ratatuiratatui
          </div>
          <div className="post__content__reactions">
            <RiHeart3Fill size={20} fill="red" />
            <RiHeart3Line size={20} />
            <BiRepost onClick={toggleComments} size={20} />
          </div>
        </div>
        <div className="post__contol">
          <div className="post__contol__btn">
            <CgMenuLeft onClick={toggleDropdown} />
          </div>
          <ul
            className={classNames("post__contol__dropdown", {
              active: dropdownState,
            })}
          >
            <li>delete</li>
          </ul>
        </div>
      </div>
      <div className={classNames("comments", { active: showComments })}>
        <Comment />
        <Comment />
        <div className="create-comment-container">
          <input placeholder="write a comment" />
          <BiSend size={20} />
        </div>
      </div>
    </div>
  );
};

export default Post;
