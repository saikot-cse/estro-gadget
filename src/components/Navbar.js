import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = ({ children }) => {
  const [dark,setDark] = useState(false);
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <button onClick={()=>setDark(!dark)}>Theme</button>
      </li>
    </>
  );
  return (
    <div class="drawer drawer-end" data-theme={dark? "dark" : "corporate"}>
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar bg-base-100 px-20">
          <div class="flex-1 px-2 mx-2 text-primary font-bold text-2xl">Estro Gatget</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>

          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-x-2">
              {/* <!-- Navbar menu content here --> */}
              {menuItems}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 gap-x-2">
          {/* <!-- Sidebar content here --> */}
          {menuItems}
        </ul>
      </div>
    </div>
  );
};
