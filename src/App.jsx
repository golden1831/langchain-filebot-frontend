import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import {routes, privateRoutes} from "./routes";
import { tokens } from "./utils/token";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="mx-auto fixed z-50 bg-white w-full">
        {location.pathname.includes("/chat/") ? "" : <Navbar routes={tokens.get() ? privateRoutes : routes} />}
      </div>
      <div className={location.pathname.includes("/chat/") ? "" : "pt-[80px]"}>
        <Routes>
          {
            tokens.get() ? 
              privateRoutes.map(({ path, element, auth }, key) => {
                return (<Route key={key} exact path={path} element={element} />)
              }) : 
              routes.map(({ path, element, auth }, key) => {
                return (<Route key={key} exact path={path} element={element} />)
              })
          }
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
