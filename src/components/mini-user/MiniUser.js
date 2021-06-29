import PropTypes from "prop-types";
import UnknownUser from "../../assets/unknown.jpg";

import "./MiniUser.scss";

const MiniUser = ({ user }) => {
  const { image, name } = user;
  console.log(user);

  const userImgPath = image
    ? `https://arcane-bayou-45011.herokuapp.com/uploads/images/${image}`
    : UnknownUser;

  return (
    <div className="mini-user-container">
      <div className="img-container">
        <img src={userImgPath} alt="" />
        <div className="active-user-sign"></div>
      </div>
      <div>{name}</div>
    </div>
  );
};

MiniUser.propTypes = {
  user: {
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  },
};

export default MiniUser;
