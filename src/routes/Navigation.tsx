import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logo from "../02-component-patterns/assets/react.svg";
import { ShoppingPage } from "../02-component-patterns/pages";


export const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt='react-logo' style={{ marginTop:12 }} />
          <ul>
            <li>
              <NavLink className={({isActive})=> isActive ? 'nav-active':''}  to="/">Shopping Page</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> isActive ? 'nav-active':''}  to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> isActive ? 'nav-active':''}  to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element ={ <ShoppingPage/> }/>
            {/* <Route path="/" element={ <>Shopping Page</> } /> */}
            {/* <Route path="/lazy" element={ <>Users</> }/> */}
            {/* <Route path="/*" element={ <Navigate to="lazy-1" replace/> }/> */}
        </Routes>

      </div>
    </BrowserRouter>
  );
};
