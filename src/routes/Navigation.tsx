import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { Spinner } from "../lazy/components";
import { routes } from "./routes";

export const Navigation: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo" style={{ marginTop: 12 }} />
            <ul>
              {routes.map(({ to, name }) => {
                return (
                  <li key={to}>
                    <NavLink className={({isActive})=> isActive ? 'nav-active' : ''} to={to}>{name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
              {
                routes.map(({ path, Component }) => ( 
                  <Route key={path} path={path} element={<Component/>} />
                ))
              }
              <Route path="/*" element={<Navigate to={routes[1].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
