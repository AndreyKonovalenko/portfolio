import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <Link to="/">About</Link>
    <Link to="/work">Work</Link>
    <Link to="/contacts">Contacts</Link>
  </div>
  );

}

export default Navbar;
