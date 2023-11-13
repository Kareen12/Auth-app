import { Link, useLocation } from "react-router-dom";
import logo from "./shoppinglogoo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const location = useLocation();

  const hideNavbarRoutes = ["/Forgotpass"];

  const isNavHidden = hideNavbarRoutes.includes(location.pathname);

  if (isNavHidden) {
    return null;
  }

  return (
    <nav className=" p-1 bg-slate-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          <img id="myimg" src={logo} alt="logo"></img>
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          {menuOpen ? (
            <FaTimes className="text-white text-2xl" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-white text-2xl" onClick={toggleMenu} />
          )}
        </div>
        {/* Navigation Links */}
        {/* div -className="flex space-x-4" */}
        <div
          className={`lg:flex space-x-4 ${
            menuOpen ? "flex flex-col gap-4" : "hidden"
          }`}
        >
          <Link to="/" className="text-white py-1">
            Home
          </Link>
          <Link to="/about" className="text-white py-1">
            About
          </Link>
          {isLoggedIn ? (
            <Link onClick={onLogout} to="/" className="text-white">
              <button className="bg-[#f0c113] text-slate-800 px-3 py-1 rounded">
                Logout
              </button>
            </Link>
          ) : (
            <>
              <Link onClick={onLogin} to="/login" className="text-white">
                <button className="bg-[#f0c113] text-slate-800 px-3 py-1 rounded">
                  Login
                </button>
              </Link>
              <Link onClick={onLogin} to="/signup" className="text-white">
                <button className="bg-[#f0c113] text-slate-800 px-3 py-1 rounded">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
