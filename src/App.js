import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import Navigation from "./components/navigation";
import { autoLoginAction } from "./redux/actions/middleware-actions";
import Routes from "./Routes";

function App() {
  const dispatch = useDispatch();
  console.log("appRender");
  useEffect(() => {
    dispatch(autoLoginAction());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
