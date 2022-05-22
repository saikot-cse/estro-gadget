import { NavLink } from "react-router-dom"

export const DashboardSideBar = ({children}) => {
  return (
    <div class="drawer drawer-mobile mt-16 bg-neutral">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content text-white flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
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
  )
}
