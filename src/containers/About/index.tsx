import { aboutArray } from "./data";

const About: React.FC = () => {
  return (
    <div className="bg-[#1B1B1B] py-5 px-10 md:px-24 lg:px-44">
      <h2 className="text-[#FFD700] text-center font-semibold text-lg mb-5 md:mb-6 md:text-3xl">
        About Us
      </h2>
      <div>
        {aboutArray.map((item, index) => (
          <div
            key={item.title + index}
            className={`text-white flex flex-col items-center md:items-start mb-16 md:mb-32 md:gap-20 ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="md:w-[40%]">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg h-[300px] md:h-[400px] md:object-cover"
              />
              <p className="text-yellow-300 italic mt-2 font-thin text-sm font-serif text-center md:text-left">
                {item.name}
              </p>
            </div>
            <div className="mt-8 md:w-[60%]">
              <h2 className="text-center mb-4 text-lg font-bold md:text-xl lg:text-3xl">
                {item.title}
              </h2>
              <p className="text-sm font-light md:text-base lg:text-xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
