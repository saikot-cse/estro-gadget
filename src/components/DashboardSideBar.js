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
            <NavLink to="/dashboard/add-products">Add Products</NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/dashboard/add-admin">Make Admin</NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/dashboard/manage-orders">Manage All Orders</NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/dashboard/manage-products">Manage Products</NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/dashboard/my-orders">My Orders</NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/dashboard/add-review">Add Review</NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/dashboard/my-profile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
