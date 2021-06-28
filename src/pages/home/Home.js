import { withAuthProtected } from "../../hoc";
import MiniUser from "../../components/mini-user/";

import CreatePost from "../../components/createPost";

import "./Home.scss";
import Post from "../../components/post";

const Home = () => {
  return (
    <div className="container home">
      <div className="home__section-one">
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
        <MiniUser />
      </div>
      <div className="home__section-two">
        <CreatePost />
        <Post />
      </div>
    </div>
  );
};

export default withAuthProtected(Home);
