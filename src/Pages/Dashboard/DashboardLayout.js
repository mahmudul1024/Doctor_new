import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../assets/components/Context/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

import useAdmin from "./Hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard_drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard_drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link className="font-bold  " to="/dashboard">
                My Appointments
              </Link>
            </li>
            {isAdmin && (
              <>
                {" "}
                <li>
                  <Link className="font-bold " to="/dashboard/allusers">
                    All Users
                  </Link>
                </li>
                <li>
                  <Link className="font-bold " to="/dashboard/adddoctors">
                    Add A Doctor
                  </Link>
                </li>
                <li>
                  <Link className="font-bold " to="/dashboard/managedoctors">
                    Manage Doctors
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
