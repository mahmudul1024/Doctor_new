import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../assets/components/Context/AuthProvider";
import ThreeDImage from "../../ThreeDImage";
import useToken from "../Dashboard/Hooks/useToken";

const Login = () => {
  const [userError, setUserError] = useState(null);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [loginUserToken, setLoginUserToken] = useState("");
  const [token] = useToken(loginUserToken);

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (data) => {
    console.log(data);
    setUserError(" ");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserToken(data.email);
      })
      .catch((er) => {
        setUserError(er.message);
        // console.log(er.message);
      });
  };

  const handleGoogleSignIn = () => {
    setUserError(" ");
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Additional logic after successful Google sign-in
      })
      .catch((er) => {
        setUserError(er.message);
        // console.log(er.message);
      });
  };

  return (
    <div className="my-16 flex justify-center  font-googFont2 text-xl mt-24">
      <ThreeDImage></ThreeDImage>

      <div className="w-96 p-7 ">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email address is required" })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "password is required",
                pattern: {
                  value: /[A-Za-z]{8}/,
                  message: "Provide a Strong Password",
                },
                minLength: {
                  value: 6,
                  message: "password must be 6 characters or longer",
                },
              })}
            />
            <div>
              {userError && <p className="text-red-600">{userError}</p>}
            </div>

            <label className="label">
              <span className="label-text">Forgot password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn bg-green-700 text-xl  w-full border-0"
            value="Login"
            type="submit"
          />
        </form>
        <p className="mt-2 text-sm">
          New to Doctors Praxis{" "}
          <Link className="text-green-400 " to="/signup">
            Create new Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full" onClick={handleGoogleSignIn}>
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
