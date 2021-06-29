import { withAuthProtected } from "../../hoc";
import UsersSidebar from "../../components/usersSidebar";

import CreatePost from "../../components/createPost";

import UsersPosts from "../../components/usersPosts";
import { socket } from "../../services/socket";

import "./Home.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userIdSelector, userSelector } from "../../redux/selectors";

const Home = () => {
  const userId = useSelector(userIdSelector);
  console.log(userId);
  useEffect(() => {
    if (userId) {
      socket.emit("join", { userId: userId });
    }
  }, [userId]);
  return (
    <div className="container home">
      <div className="home__section-one">
        <UsersSidebar />
      </div>
      <div className="home__section-two">
        <CreatePost />
        <UsersPosts />
      </div>
    </div>
  );
};

export default withAuthProtected(Home);
