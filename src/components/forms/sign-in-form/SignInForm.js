import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { logInUserAction } from "../../../redux/actions/auth-actions";

import { AUTH_TOKEN } from "../../../utils/constants";
import { HOME_PATH } from "../../../utils/routePath";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const onSubmit = async (data) => {
    dispatch(logInUserAction(data));
  };

  useEffect(() => {
    if (user.user && localStorage.getItem(AUTH_TOKEN)) {
      location.replace(HOME_PATH);
    }
  }, [user, location]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {user.error && <div className="danger">Invalid Credentials</div>}
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          defaultValue="giorgi@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && <div className="danger">Please Enter Email</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          defaultValue="giorgi"
          {...register("password", { required: true })}
        />
        {errors.password && <div className="danger">Please Enter Password</div>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignInForm;
