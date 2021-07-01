import PropTypes from "prop-types";
import UnknownUser from "../../assets/unknown.jpg";
import { formatDate } from "../../utils/formatTime";

import "./Comment.scss";

const Comment = ({ comment }) => {
  const { author, content, createdAt } = comment;

  const userImgPath = author.image
    ? `https://react-social-back.herokuapp.com/uploads/images/${author.image}`
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
      <div className="comment__date">
        <p>{formatDate(createdAt)}</p>
      </div>
    </div>
  );
};

export default Comment;
