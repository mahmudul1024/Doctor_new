import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../assets/components/Context/AuthProvider";
import useToken from "../Dashboard/Hooks/useToken";

const SignUp = () => {
  const [signupError, setSignupError] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate("/");
  }
  const { createUser, updateUser } = useContext(AuthContext);

  const handleSignup = (data) => {
    setSignupError(" ");
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User has been Created Successfully");
        const userInfoss = { displayName: data.name };

        updateUser(userInfoss)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch(() => {});
      })
      .catch((er) => {
        console.error(er.message);
        setSignupError(er.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctor-praxis-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user data", data);
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: "Name  is required" })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
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
                  value: /[A-Za-z]{6}/,
                  message: "Provide a Strong Password",
                },
                minLength: {
                  value: 6,

                  message: "password must be 6 characters or longer",
                },
              })}
            />
            <label className="label">
              <span className="label-text">Forgot password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <div>
            {signupError && <p className="text-red-600">{signupError}</p>}
          </div>
          <input
            className="btn btn-accent w-full"
            value="Sign Up"
            type="submit"
          />
        </form>
        <p>
          Already Registered{" "}
          <Link className="text-secondary " to="/login">
            goto Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
