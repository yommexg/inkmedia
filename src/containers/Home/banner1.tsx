import { FaServicestack } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const bannerImg = new URL(
  "../../assets/banner/digitalBanner.jpg",
  import.meta.url
).href;

const Banner1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relatives bg-cover h-[700px] py-10"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center lg:px-20 h-[763px]">
        <div className="flex flex-col items-center gap-10 justify-center px-2">
          <h2 className="text-white font-mono font-bold text-3xl md:text-5xl text-center">
            Grow your brand faster with proven media and online marketing
            solutions
          </h2>
          <p className="text-white text-center text-lg md:text-3xl"></p>
          <div>
            <button
              onClick={() => navigate("/services")}
              className="flex items-center justify-center gap-2 bg-white rounded-md p-3 text-lg font-serif cursor-pointer z-10 text-red-600"
              type="button"
            >
              <FaServicestack color="orange" />
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
