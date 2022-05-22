import { About } from "../pages/About/About";
import { Blogs } from "../pages/Blogs/Blogs";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound/NotFound";
import { Products } from "../pages/Products/Products";
import { Purchase } from "../pages/Purchase/Purchase";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/products", name: "Products", Component: Products },
  { path: "/purchase", name: "Purchase", Component: Purchase },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/about", name: "About", Component: About },
  { path: "/login", name: "Login", Component: Login },
  { path: "*", name: "NotFound", Component: NotFound },
];