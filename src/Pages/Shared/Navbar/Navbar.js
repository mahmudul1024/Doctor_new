import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../assets/components/Context/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handleLogout = () => {
    LogOut()
      .then(() => {})
      .catch((er) => console.log(er.message));
  };
  const navelements = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button className="btn btn-primary">
              <Link onClick={handleLogout} to="/">
                Logout
              </Link>
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div data-theme="dark">
      <div className="navbar bg-base-100 flex justify-between">
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
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Doctors Praxis
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navelements}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
