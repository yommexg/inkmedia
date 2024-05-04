import { FaMessage, FaServicestack } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const bannerImg = new URL(
  "../../assets/banner/digitalBanner.jpg",
  import.meta.url
).href;

const Banner1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relatives bg-cover"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center lg:px-20">
        <div className="flex flex-col items-center gap-10 justify-center px-2">
          <h2 className="text-white font-mono font-bold text-3xl md:text-5xl text-center">
            Ibadan's Leading Results-Oriented Digital Marketing Agency
          </h2>
          <p className="text-white text-center text-lg md:text-3xl">
            At Inkmedia, we provide the quickest and most budget-friendly path
            to expanding your business through effective digital marketing
            strategies. We're more than just a digital marketing agency; we're
            your strategic ally, committed to championing your brand."
          </p>
          <div className="flex flex-col gap-5 md:flex-row md:gap-10">
            <button
              onClick={() => navigate("/services")}
              className="flex justify-center items-center gap-4 bg-red-700 rounded-md p-4 font-serif font-bold text-whit cursor-pointer z-10 text-white"
              type="button"
            >
              <FaServicestack />
              The services we offer in marketing.
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center gap-4 bg-white rounded-md p-4 text-lg font-serif font-bold cursor-pointer z-10 text-black"
              type="button"
            >
              <FaMessage color="orange" />
              Send us a Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
