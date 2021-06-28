import UnknownUser from "../../assets/unknown.jpg";

import "./Comment.scss";

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__authtor-img">
        <img src={UnknownUser} alt="" />
      </div>
      <div>
        <h3 className="comment__author-name">Saba</h3>
        <p className="comment__text">contenta contenta contentacontenta</p>
      </div>
    </div>
  );
};

export default Comment;
