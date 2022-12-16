import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "../assets/react.svg";

export const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt='react-logo' style={{marginTop:12}} />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  );
};
