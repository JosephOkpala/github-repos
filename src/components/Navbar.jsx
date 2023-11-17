import { NavLink } from "react-router-dom";
import logo from "../assets/github.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} class="logo" alt="logo" />
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/repos">Repos</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
