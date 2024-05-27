import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ContactForm from "./form";

const Contact: React.FC = () => {
  return (
    <div className="bg-[#1B1B1B] md:h-[100vh] px-4 flex flex-col items-center py-6 justify-center md:flex-row md:justify-between md:px-24 lg:px-[200px]">
      <div>
        <h2 className="text-2xl font-bold text-white text-center mb-4 md:text-left">
          Contact Us
        </h2>
        <div className="flex flex-col gap-5">
          <a
            href="mailto:info@thecopywritinghub.com"
            className="flex gap-2 items-center"
          >
            <AiOutlineMail color="white" size={23} />
            <p className="text-xs md:text-base text-yellow-300">
              info@thecopywritinghub.com
            </p>
          </a>
          <a href="tel:+2349035065950" className="flex gap-2 items-center">
            <FaPhone color="white" />
            <p className="text-xs md:text-base text-yellow-300">
              +2349035065950{" "}
            </p>
          </a>
        </div>
        <div className="hidden md:block">
          <h3 className="mt-8 text-white text-lg">Follow for more updates</h3>
          <div className="flex my-2 gap-5 items-center text-[#FDD700]">
            <FaFacebook size={23} className="cursor-pointer hover:opacity-45" />
            <FaWhatsapp size={23} className="cursor-pointer hover:opacity-45" />
            <FaTwitter size={23} className="cursor-pointer hover:opacity-45" />
            <FaInstagram
              size={23}
              className="cursor-pointer hover:opacity-45"
            />
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>

      <div className="md:hidden">
        <h3 className="mt-8 text-white text-lg">Follow for more updates</h3>
        <div className="flex my-2 gap-5 items-center justify-center text-[#FDD700]">
          <FaFacebook size={23} className="cursor-pointer hover:opacity-45" />
          <FaWhatsapp size={23} className="cursor-pointer hover:opacity-45" />
          <FaTwitter size={23} className="cursor-pointer hover:opacity-45" />
          <FaInstagram size={23} className="cursor-pointer hover:opacity-45" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
