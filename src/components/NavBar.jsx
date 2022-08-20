import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <Link to="/">Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Login </Link>
        <Link to="/events"> Events </Link>
        <Link to="/connect"> Connect </Link>
        <input type="text" id="search" name="search" placeholder="Search"/>
  </nav>
);

export default NavBar;