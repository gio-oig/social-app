import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logOutAction } from "../../redux/actions/auth-actions";
import { AUTH_TOKEN } from "../../utils/constants";
import { SIGN_IN_PATH } from "../../utils/routePath";
import UnknownUser from "./../../assets/unknown.jpg";

import "./Navigation.scss";

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

  const [dropdownSatate, setDropdownSatate] = useState(false);

  const toggleDropdown = () => {
    setDropdownSatate(!dropdownSatate);
  };

  const handleLogOut = () => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch(logOutAction);
    history.push(SIGN_IN_PATH);
  };

  return (
    <header>
      <nav className="nav container">
        <h1>OPESPACE</h1>
        {user && (
          <div
            className={classNames("nav__profile", { active: dropdownSatate })}
            onClick={toggleDropdown}
          >
            {user.image ? (
              <img
                src={`http://localhost:5000/uploads/images/${user.image}`}
                alt=""
              />
            ) : (
              <img src={UnknownUser} alt="" />
            )}
            <ul className="nav__profile__dropdown">
              <li onClick={handleLogOut}>logout</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
