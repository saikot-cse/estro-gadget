import React from "react";
import Helmet from "react-helmet";
import { Outlet } from "react-router-dom";
import { DashboardSideBar } from "../../components/DashboardSideBar";

export const Dashboard = () => {
  return (
    <>
    <Helmet>
    <title>Dashboard | Estro Gadget</title>
    </Helmet>
      <DashboardSideBar>
        <Outlet />
      </DashboardSideBar>
    </>
  );
};
