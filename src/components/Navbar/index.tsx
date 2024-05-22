import { Link, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { scrollToTop } from "../../utils/scrollToTop";

const logoImg = new URL("../../assets/logo/inksLogo.png", import.meta.url).href;
const logoName = new URL("../../assets/logo/inksname.png", import.meta.url)
  .href;

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header
      className={`bg-[#FFD700] shadow-lg fixed top-0 left-0 right-0 py-4 md:px-8 px-4 flex justify-between items-center md:flex-wrap overflow-hidden md:gap-4 lg:px-10 z-50`}
    >
      <div className="md:flex md:items-center gap-5">
        <img src={logoImg} alt="Logo" className="h-9 w-9" />
        <img src={logoName} alt="sLogo" className="w-48 hidden md:block" />
      </div>
      <img src={logoName} alt="Logo" className="w-40 md:hidden" />

      {/* Mobile View */}
      <Sidebar />

      {/* Desktop View */}
      <div className="hidden md:flex md:gap-10 ">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
          onClick={() => scrollToTop()}
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
          onClick={() => scrollToTop()}
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
          onClick={() => scrollToTop()}
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
          onClick={() => scrollToTop()}
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
          onClick={() => scrollToTop()}
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
          onClick={() => scrollToTop()}
        >
          Contact
        </Link>

        <div className="hidden lg:flex gap-5">
          <div className="border-r border-gray-200 hidden lg:block"></div>
          <div className="flex items-center gap-3">
            <AiOutlineMail color="orange" size={23} />
            <a href="mailto:info@thecopywritinghub.com" className="font-bold">
              Info@thecopywritinghub.com
            </a>
          </div>
          <div className="border-r border-gray-200 hidden lg:block"></div>
          <div className="flex items-center gap-2">
            <FaPhone color="red" />
            <a href="tel:+2349035065950" className="font-bold">
              +2349035065950
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
