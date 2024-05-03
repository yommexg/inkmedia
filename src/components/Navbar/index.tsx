import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

const logoImg = new URL("../../assets/logo/inksLogo.png", import.meta.url).href;
const logoName = new URL("../../assets/logo/inksname.png", import.meta.url)
  .href;

const Navbar: React.FC = () => {
  return (
    <header
      className={`bg-[#FFD700] shadow-lg fixed top-0 left-0 right-0 py-4 md:px-8 px-4 flex justify-between items-center overflow-hidden`}
    >
      <div className="md:flex md:items-center gap-5">
        <img src={logoImg} alt="Logo" className="h-9 w-9" />
        <img src={logoName} alt="sLogo" className="w-48 hidden md:block" />
      </div>
      <img src={logoName} alt="Logo" className="w-40 md:hidden" />

      {/* Mobile View */}
      <Sidebar />

      {/* Desktop View */}
      <div className="hidden md:flex md:gap-10">
        <Link
          to="/"
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
          className={
            location.pathname === "/contact"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Contact
        </Link>
        <div className="border-r-2 border-black"></div>

        <div className="hidden lg:block">Email</div>
      </div>
    </header>
  );
};

export default Navbar;
