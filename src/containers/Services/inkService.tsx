import { serviceArray } from "./data";

const InkService: React.FC = () => {
  return (
    <div className="my-4">
      <div className="flex flex-col items-center mx-5 gap-4 bg-yellow-50 md:mx-10 shadow-lg py-6 rounded-lg">
        <img
          src={serviceArray[0].icon}
          alt={serviceArray[0].title}
          className="h-14 w-14 md:h-20 md:w-20 object-cover"
        />
        <h2 className="text-center text-lg md:text-2xl uppercase font-bold text-[#FFD700]">
          {serviceArray[0].title}
        </h2>
        <div className="flex flex-wrap gap-6 px-4 md:px-8 md:justify-center">
          {serviceArray[0].list.map((lis) => (
            <li key={lis} className="text-sm md:text-base text-[#1B1B1B]">
              {lis}
            </li>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-8 gap-4 md:flex-row justify-center md:flex-wrap">
        {serviceArray.slice(1).map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center mx-5 gap-4 bg-[#1B1B1B] shadow-lg py-6 rounded-md md:w-[350px] lg:w-[400px]"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-10 w-10 object-cover"
            />
            <h2 className="text-center md:text-lg uppercase font-bold text-white">
              {item.title}
            </h2>
            <div className="flex flex-col gap-6 px-5 md:px-8 md:justify-center">
              {item.list.map((lis) => (
                <li key={lis} className="text-xs md:text-sm text-[#FFD700]">
                  {lis}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InkService;
