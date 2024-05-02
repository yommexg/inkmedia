import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const logoImg = new URL("../../assets/logo/inksLogo.png", import.meta.url).href;
const logoName = new URL("../../assets/logo/inksname.png", import.meta.url)
  .href;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuSlideIn = {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  };

  const menuSlideOut = {
    opacity: 0,
    x: 100,
    transition: { duration: 0.3 },
  };

  return (
    <header
      className={`bg-[#FFD700] shadow-lg fixed top-0 left-0 right-0 py-4 px-5 flex justify-between items-center overflow-hidden`}
    >
      <div className="md:flex md:items-center gap-5">
        <img src={logoImg} alt="Logo" className="w-12 h-12" />
        <img src={logoName} alt="sLogo" className="w-60 hidden md:block" />
      </div>
      <img src={logoName} alt="Logo" className="w-60 md:hidden" />

      {/* Mobile View */}
      <FaBars
        className="md:hidden cursor-pointer"
        size={27}
        onClick={toggleMenu}
      />
      <motion.nav
        initial={isMenuOpen ? menuSlideIn : menuSlideOut}
        animate={isMenuOpen ? menuSlideIn : menuSlideOut}
        variants={{ open: menuSlideIn, closed: menuSlideOut }}
        className={`fixed bg-yellow-100 font-bold top-0 z-50 right-0 px-8 py-14  md:hidden flex flex-col gap-10`}
      >
        <Link
          to="/"
          onClick={toggleMenu}
          className={
            location.pathname === "/"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={toggleMenu}
          className={
            location.pathname === "/about"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          About
        </Link>
        <Link
          to="/services"
          onClick={toggleMenu}
          className={
            location.pathname === "/services"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Services
        </Link>
        <Link
          to="/portfolio"
          onClick={toggleMenu}
          className={
            location.pathname === "/portfolio"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Portfolio
        </Link>
        <Link
          to="/blog"
          onClick={toggleMenu}
          className={
            location.pathname === "/blog"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Blog
        </Link>
        <Link
          to="/contact"
          onClick={toggleMenu}
          className={
            location.pathname === "/contact"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Contact
        </Link>
      </motion.nav>
    </header>
  );
};

export default Navbar;
