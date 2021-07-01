import { useState, useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { userIdSelector } from "../../redux/selectors/index";

import PostComments from "../postComments";
import { postApi } from "../../services/post";
import { Context } from "../../context/context";
import UnknownUser from "../../assets/unknown.jpg";

import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { BiRepost } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";

import "./Post.scss";
import CreateComment from "../createComment";
import { formatDate } from "../../utils/formatTime";

const Post = ({ post }) => {
  const { likes, comments, author, content, createdAt } = post;

  const [dropdownState, setDropdownState] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const loggedInUserId = useSelector(userIdSelector);

  const { setPosts } = useContext(Context);
  const userId = useSelector(userIdSelector);

  const toggleDropdown = () => {
    setDropdownState(!dropdownState);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handlePostDelete = async () => {
    const res = await postApi.delete(post.id);
    if (res.status === 200) {
      const { data } = await postApi.getAllPosts();
      setPosts(data);
    }
    console.log(res);
  };

  const handleLike = async () => {
    const resp = await postApi.like(userId, post.id);
    if (resp.status === 200) {
      const { data } = await postApi.getAllPosts();
      setPosts(data);
    }
  };

  const isLikedPost = () => {
    return isLiked ? (
      <RiHeart3Fill size={20} fill="red" onClick={handleLike} />
    ) : (
      <RiHeart3Line size={20} onClick={handleLike} />
    );
  };

  const isLiked = post.likes.includes(userId);
  console.log(isLiked);

  const userImgPath = author.image
    ? `https://react-social-back.herokuapp.com/uploads/images/${author.image}`
    : UnknownUser;

  const loggedInUsersPost = loggedInUserId === author.id;

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
              {isLikedPost()}
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
            {loggedInUsersPost && <li onClick={handlePostDelete}>delete</li>}
          </ul>
          {formatDate(post.createdAt)}
        </div>
      </div>
      <div className={classNames("comments", { active: showComments })}>
        <PostComments comments={comments} />
        <div className="create-comment-container">
          <CreateComment postId={post.id} />
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
