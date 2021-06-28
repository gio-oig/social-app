import classNames from "classnames";
import { Link, Redirect, Route, Switch, useLocation } from "react-router-dom";
import { withNoAuth } from "../../hoc";
import * as routePaths from "../../utils/routePath";
import SignIn from "./signIn";
import SignUp from "./SignUp";

const AuthPage = () => {
  const location = useLocation();

  return (
    <div className="d-flex justify-content-center py-5">
      <div className="col-4 mb-5">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              to={routePaths.SIGN_UP_PATH}
              className={classNames("nav-link", {
                active: location.pathname.includes(routePaths.SIGN_UP_PATH),
              })}
            >
              sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={routePaths.SIGN_IN_PATH}
              className={classNames("nav-link", {
                active: location.pathname.includes(routePaths.SIGN_IN_PATH),
              })}
            >
              sign in
            </Link>
          </li>
        </ul>
        <>
          <Switch>
            <Route path={routePaths.SIGN_IN_PATH}>
              <SignIn />
            </Route>
            <Route path={routePaths.SIGN_UP_PATH}>
              <SignUp />
            </Route>
            <Redirect to={routePaths.SIGN_UP_PATH} />
          </Switch>
        </>
      </div>
    </div>
  );
};

export default withNoAuth(AuthPage);
