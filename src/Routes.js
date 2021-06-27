import { Route, Switch } from "react-router";
import AuthPage from "./pages/auth";
import Home from "./pages/home";
import * as routePath from "./utils/routePath";

const Routes = () => {
  return (
    <Switch>
      <Route path={routePath.AUTH_PATH}>
        <AuthPage />
      </Route>
      <Route path={routePath.HOME_PATH}>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
