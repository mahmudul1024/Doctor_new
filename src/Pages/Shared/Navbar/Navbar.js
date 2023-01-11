import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../assets/components/Context/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("aqua");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (event) => {
    // setTheme(theme === "dark" ? "light" : "dark");
    const themeSelected = event.target.value;
    setTheme(themeSelected);
  };
  const handleLogout = () => {
    LogOut()
      .then(() => {})
      .catch((er) => console.log(er.message));
  };
  const navelements = (
    <React.Fragment>
      <li>
        <Link className=" font-googFont3  text-xl" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className=" font-googFont3  text-xl" to="/appointment">
          Appointment
        </Link>
      </li>
      <li>
        <Link className=" font-googFont3  text-xl" to="/about">
          About
        </Link>
      </li>
      <li>
        <select
          onClick={handleToggle}
          className="btn btn-ghost  font-normal font-googFont3  text-xl px-0 "
        >
          <option value="">Toggle Theme</option>
          <option value="light">Light</option>
          <option value="retro">Retro</option>
          <option value="aqua">Aqua</option>
          <option value="dark">Dark</option>
        </select>
      </li>

      {user?.uid ? (
        <>
          <li>
            <Link className=" font-googFont3  text-xl" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <button className="">
              <Link
                className=" font-googFont3  text-xl"
                onClick={handleLogout}
                to="/"
              >
                Logout
              </Link>
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className=" font-googFont3  text-xl" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div data-theme="light" className="">
      <div className="navbar bg-base-100 flex justify-between ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navelements}
            </ul>
          </div>
          <Link
            to="/"
            className="font-googFont3  text-3xl text-green-600 shadow-2xl rounded"
          >
            Doctors Praxis
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navelements}</ul>
        </div>
        <label
          htmlFor="dashboard_drawer"
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
