import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./Authentication/RequireAuth";
import { Navbar } from "./components/Navbar";
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
        </Routes>
      </Navbar>
    </div>
  );
}
export default App;
