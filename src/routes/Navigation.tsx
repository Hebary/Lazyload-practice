import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import logo from "../assets/react.svg";
import { Spinner } from "../lazy/components";
import { LazyOne, LazyThree, LazyTwo } from "../routes/routes";
import { routes } from "./routes";

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
                    <Link to={to}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
             <Route path={routes[0].path} element ={ <LazyOne/> }/>
            <Route path={routes[1].path} element={ <LazyTwo /> } />
            <Route path={routes[2].path} element={ <LazyThree/> }/>
            <Route path="/*" element={<Navigate to="lazy-1" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
