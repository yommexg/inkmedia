import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { scrollToTop } from "../../utils/scrollToTop";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <>
      <div onClick={toggleMenu} className="md:hidden z-50 cursor-pointer px-2">
        <FaBars size={22} />
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 md:hidden w-full h-full bg-black opacity-90 z-50"></div>
      )}

      <motion.nav
        initial={isMenuOpen ? menuSlideIn : menuSlideOut}
        animate={isMenuOpen ? menuSlideIn : menuSlideOut}
        variants={{ open: menuSlideIn, closed: menuSlideOut }}
        className={`fixed bg-yellow-100 font-bold top-0 z-50 right-0 p-6  md:hidden flex flex-col gap-5 rounded-lg`}
      >
        <p
          onClick={toggleMenu}
          className="cursor-pointer absolute top-0 right-0 text-3xl bg-white rounded-full px-2 pb-1"
        >
          x
        </p>
        <Link
          to="/"
          onClick={() => {
            toggleMenu();
            scrollToTop();
          }}
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
          onClick={() => {
            toggleMenu();
            scrollToTop();
          }}
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
          onClick={() => {
            toggleMenu();
            scrollToTop();
          }}
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
          onClick={() => {
            toggleMenu();
            scrollToTop();
          }}
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
          onClick={() => {
            toggleMenu();
            scrollToTop();
          }}
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
          onClick={() => {
            toggleMenu();
            scrollToTop();
          }}
          className={
            location.pathname === "/contact"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Contact
        </Link>
      </motion.nav>
    </>
  );
};

export default Sidebar;
