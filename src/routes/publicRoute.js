
import { Blogs } from "../pages/Blogs/Blogs";
import { Contact } from "../pages/Contact/Contact";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound/NotFound";
import { Portfolio } from "../pages/Portfolio/Portfolio";
import { Products } from "../pages/Products/Products";
import { SignUp } from "../pages/SignUp/SignUp";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/products", name: "Products", Component: Products },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/portfolio", name: "Portfolio", Component: Portfolio },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "SignUp", Component: SignUp },
  { path: "*", name: "NotFound", Component: NotFound },
];