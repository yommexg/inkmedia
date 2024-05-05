import { FaSortDown } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const whatWeDoArray = [
  {
    icon: <SiMarketo />,
    title: "Market Knowledge",
    desc: "We research your industry first, even before you pay us",
  },
  {
    icon: <SiMarketo />,
    title: "Strategy and Planning",
    desc: "Our strategies help reduce our clients advertisment cost by 40%",
  },
  {
    icon: <SiMarketo />,
    title: "Project Execution",
    desc: "We handle your project from A to Z without outsourcing.",
  },
  {
    icon: <SiMarketo />,
    title: "Humanistic Marketing",
    desc: "We use ethical digital marketing tactics for your business.",
  },
];

const Banner2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFD700] py-10 lg:px-32 h-[1200px] place-content-center md:h-[600px]">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10">
        <h2 className="text-2xl text-center font-bold">
          Collaborate with the leading digital marketing agency in Ibadan.
        </h2>
        <p
          className="flex text-xl cursor-pointer font-semibold gap-1"
          onClick={() => navigate("/services")}
        >
          Check services <FaSortDown />
        </p>
      </div>
      <div className="mt-16 flex flex-col items-center my-8 gap-10 md:flex-row px-2 md:justify-center lg:px-4">
        {whatWeDoArray.map((item, index) => (
          <div
            key={item.title + index}
            className="flex border-black border w-[300px] flex-col  px-2 py-4 items-center gap-5"
          >
            {item.icon}
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner2;
