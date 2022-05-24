import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardSideBar } from "../../components/DashboardSideBar";

export const Dashboard = () => {
  return (
    <>
      <DashboardSideBar>
        <Outlet />
      </DashboardSideBar>
      
    </>
  );
};
