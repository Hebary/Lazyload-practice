import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";
import { routes } from "./routes";
import { Spinner } from "../lazy/components";
import logo from "../assets/react.svg";

export const Navigation: React.FC = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo" style={{ marginTop: 12 }} />
            <ul>
              {routes.map(({ to, name }) => {
                return (
                  <li key={to}>
                    <NavLink className={({isActive})=>isActive ? 'nav-active' : '' } to={to}>{name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
              {
                routes.map(({ to, Component }) => (
                    <Route key={to} path={to} element={<Component/>}/>
                ))
              }
            <Route path="/*" element={<Navigate to="lazy-1" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
