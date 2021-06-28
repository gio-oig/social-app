import UnknownUser from "../../assets/unknown.jpg";

import "./MiniUser.scss";

const MiniUser = () => {
  return (
    <div className="mini-user-container">
      <div className="img-container">
        <img src={UnknownUser} alt="" />
        <div class="active-user-sign"></div>
      </div>
      <div>giorgi</div>
    </div>
  );
};

export default MiniUser;
