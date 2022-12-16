import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import logo from "../assets/react.svg";

import { 
    LazyPageOne, 
    LazyPageTwo, 
    LazyPageThree 
} from "../lazy/pages";



export const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt='react-logo' style={{marginTop:12}} />
          <ul>
            <li>
              <Link to="/lazy-1">Lazy Load 1</Link>
            </li>
            <li>
              <Link to="/lazy-2">Lazy Load 2</Link>
            </li>
            <li>
              <Link to="/lazy-3">Lazy Load 3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/lazy-1" element ={ <LazyPageOne/> }/>
            <Route path="/lazy-2" element={ <LazyPageTwo/> } />
            <Route path="/lazy-3" element={ <LazyPageThree/> }/>
            <Route path="/*" element={ <Navigate to="home" replace/> }/>
        </Routes>

      </div>
    </BrowserRouter>
  );
};
