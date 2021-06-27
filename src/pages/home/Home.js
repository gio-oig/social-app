import { withAuthProtected } from "../../hoc";

const Home = () => {
  return <div>Home, this means, that you are loggled in now</div>;
};

export default withAuthProtected(Home);
