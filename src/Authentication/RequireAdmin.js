import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from "../hooks/useAdmin";

export const RequireAdmin = () => {
  // const location = useLocation();
  const [admin] = useAdmin();
  if (!admin) {
    return <Navigate to="/"/>;
  }
  return <Outlet />;
};
