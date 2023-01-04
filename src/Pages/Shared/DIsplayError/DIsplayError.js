import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../assets/components/Context/AuthProvider";

const DIsplayError = () => {
  const navigate = useNavigate();
  const { LogOut } = useContext(AuthContext);
  const handleLogout = () => {
    LogOut()
      .then(() => {
        navigate("/login");
      })
      .catch((er) => console.log(er.message));
  };
  const error = useRouteError();

  return (
    <div>
      <h2 className=" text-error text-3xl">Sorry for the inconvinience</h2>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <button className="">
        <Link onClick={handleLogout} to="/">
          Logout
        </Link>
      </button>
    </div>
  );
};

export default DIsplayError;
