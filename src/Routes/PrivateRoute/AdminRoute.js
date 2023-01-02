import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../assets/components/Context/AuthProvider";
import useAdmin from "../../Pages/Dashboard/Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();

  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.uid && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
