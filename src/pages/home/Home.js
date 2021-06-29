import { withAuthProtected } from "../../hoc";
import UsersSidebar from "../../components/usersSidebar";

import CreatePost from "../../components/createPost";

import "./Home.scss";
import UsersPosts from "../../components/usersPosts";

const Home = () => {
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
