import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { publicRoute } from "./routes/publicRoute";

function App() {
  return (
    <div className="mt-16">
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </Navbar>
    </div>
  );
}
export default App;
