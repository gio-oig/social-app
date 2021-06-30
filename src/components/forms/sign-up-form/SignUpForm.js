import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import { userApi } from "../../../services/user";
import { SIGN_IN_PATH } from "../../../utils/routePath";

const SignUpForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await userApi.register(formData);

    if (res.status === 200) {
      history.push(SIGN_IN_PATH);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          {...register("name", { required: true })}
        />
        {errors.email && <div className="danger">Please Enter Name</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          {...register("email", { required: true })}
        />
        {errors.email && <div className="danger">Please Enter Email</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          {...register("password", { required: true })}
        />
        {errors.email && <div className="danger">Please Enter Password</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlFile1">Select Profile Image</label>
        <input
          name="image"
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
