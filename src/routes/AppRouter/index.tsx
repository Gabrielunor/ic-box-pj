import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import config from "../Routes/config";
import useHandleProtection from "../useHandleProtection";
import { useEffect } from "react";
import { injectScript } from "@/utils/injectScript";

const AppRouter = () => {
  const protectedElement = useHandleProtection();

  useEffect(() => {
    injectScript("dynatrace");
  }, []);

  return (
    <Router basename="/front-icbox-pj/">
      <Routes>
        {config.map((route, index) => {
          if ("protected" in route) {
            return (
              <Route key={index} path={route.path} element={protectedElement} />
            );
          } else {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          }
        })}
      </Routes>
    </Router>
  );
};

export default AppRouter;
