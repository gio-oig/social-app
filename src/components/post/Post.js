import { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import UnknownUser from "../../assets/unknown.jpg";

import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { BiRepost } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";
import { BiSend } from "react-icons/bi";

import Comment from "../comment";
import { useSelector } from "react-redux";
import { userIdSelector } from "../../redux/selectors/index";

import "./Post.scss";
import PostComments from "../postComments";

const Post = ({ post }) => {
  const { likes, comments, author, content } = post;

  const [dropdownState, setDropdownState] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const loggedInUserId = useSelector(userIdSelector);

  const toggleDropdown = () => {
    setDropdownState(!dropdownState);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const userImgPath = author.image
    ? `https://arcane-bayou-45011.herokuapp.com/uploads/images/${author.image}`
    : UnknownUser;

  const loggedInUsersPost = loggedInUserId === author.id;
  // console.log(loggedInUsersPost);

  return (
    <div className="post">
      <div className="inner-post">
        <div className="post__author-img">
          <img src={userImgPath} alt="" />
        </div>
        <div className="post__content">
          <div className="post__content__author">{author.name}</div>
          <div className="post__content__text">{content}</div>
          <div className="post__content__reactions">
            <div>
              <RiHeart3Fill size={20} fill="red" />
              {/* <RiHeart3Line size={20} /> */}
              {likes.length > 0 ? likes.length : ""}
            </div>
            <div>
              <BiRepost onClick={toggleComments} size={20} />
              {comments.length > 0 ? comments.length : ""}
            </div>
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
            {loggedInUsersPost && <li>delete</li>}
          </ul>
        </div>
      </div>
      <div className={classNames("comments", { active: showComments })}>
        <PostComments comments={comments} />
        <div className="create-comment-container">
          <input placeholder="write a comment" />
          <BiSend size={20} />
        </div>
      </div>
    </div>
  );
};

// Post.propTypes = {
//   post: {
//     likes: PropTypes.array,
//     comments: PropTypes.array,
//     author: {
//       image: PropTypes.string,
//       name: PropTypes.string,
//       id: PropTypes.string,
//     },
//     createdAt: PropTypes.string,
//     id: PropTypes.string,
//   },
// };

export default Post;
