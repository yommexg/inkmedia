import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: AiFillInstagram, url: "https://www.instagram.com/inksmedia" },
    { icon: AiFillYoutube, url: "https://www.youtube.com/channel/inksmedia" },
  ];

  return (
    <footer className="py-4 flex flex-col items-center bg-[#FFD700]">
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <p className="text-sm font-bold">
          © 2024 InksMedia Creatives. All rights reserved.
        </p>
        <ul className="flex justify-center items-center ml-4 space-x-4">
          {socialLinks.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-white transition duration-300 ease-in-out"
              >
                {React.createElement(link.icon, { size: 24 })}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

