const bannerImg = new URL("../../assets/services/banner.jpg", import.meta.url)
  .href;

const ServiceBanner: React.FC = () => {
  return (
    <div
      className="relative bg-cover h-[120px]  md:h-[180px] py-10"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-[#1B1B1B]  md:h-[180px] opacity-70 flex items-center justify-center lg:px-20 h-[120px]">
        <h2 className="text-white text-xl md:text-3xl font-semibold">
          Our Services
        </h2>
      </div>
    </div>
  );
};

export default ServiceBanner;
