import { NavLink } from "react-router-dom";

export const DashboardSideBar = ({ children }) => {
  return (
    <div className="drawer drawer-mobile mt-16 bg-neutral">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-white flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
          {/* <!-- Sidebar content here --> */}
          <li className="mb-3">
            <NavLink to="/dashboard/add-service">Add Service</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-admin">Add Admin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
