import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAdmin } from "./Authentication/RequireAdmin";
import { RequireAuth } from "./Authentication/RequireAuth";
import { Navbar } from "./components/Navbar";
import { AddProducts } from "./pages/Dashboard/AddProducts";
import { AddReview } from "./pages/Dashboard/AddReview";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { MakeAdmin } from "./pages/Dashboard/MakeAdmin";
import { ManageOrders } from "./pages/Dashboard/ManageOrders";
import { ManageProducts } from "./pages/Dashboard/ManageProducts";
import { MyOrders } from "./pages/Dashboard/MyOrders";
import { MyProfile } from "./pages/Dashboard/MyProfile";
import { UpdateProducts } from "./pages/Dashboard/UpdateProducts";

import { privateRoutes } from "./routes/privateRoutes";
import { publicRoute } from "./routes/publicRoute";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<RequireAuth />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route path="update-products/:id" element={<UpdateProducts />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="add-review" element={<AddReview />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="my-profile" element={<MyProfile />} />
            
            <Route element={<RequireAdmin />}>
              <Route path="add-products" element={<AddProducts />} />
              <Route path="add-admin" element={<MakeAdmin />} />
              <Route path="manage-orders" element={<ManageOrders />} />
              <Route path="manage-products" element={<ManageProducts />} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}
export default App;
