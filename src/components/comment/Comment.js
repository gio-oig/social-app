import PropTypes from "prop-types";
import UnknownUser from "../../assets/unknown.jpg";

import "./Comment.scss";

const Comment = ({ comment }) => {
  const { author, content, createdAt, post } = comment;

  const userImgPath = author.image
    ? `https://arcane-bayou-45011.herokuapp.com/uploads/images/${author.image}`
    : UnknownUser;

  return (
    <div className="comment">
      <div className="comment__authtor-img">
        <img src={userImgPath} alt="" />
      </div>
      <div>
        <h3 className="comment__author-name">{author.name}</h3>
        <p className="comment__text">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
