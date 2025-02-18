import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex gap-4">
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/matches">Matcher</Link></li>
        <li><Link to="/players">Spelare</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
