import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAdmin } from "./Authentication/RequireAdmin";
import { RequireAuth } from "./Authentication/RequireAuth";
import { Navbar } from "./components/Navbar";
import { AddAdmin } from "./pages/Dashboard/AddAdmin";
import { AddService } from "./pages/Dashboard/AddService";
import { Dashboard } from "./pages/Dashboard/Dashboard";
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
          <Route element={<RequireAdmin/>}>
              <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="add-service" element={<AddService/>}/>
                <Route path="add-admin" element={<AddAdmin/>}/>
              </Route>
          </Route>
  
        </Routes>
      </Navbar>
    </div>
  );
}
export default App;
