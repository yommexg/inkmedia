const bannerImg = new URL(
  "../../assets/banner/digitalBanner.jpg",
  import.meta.url
).href;

const Banner1: React.FC = () => {
  return (
    <div
      className="relative h-[650px] lg:h-[800px] bg-cover"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-90 flex items-center justify-center lg:px-20">
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
        </div>
      </div>
    </div>
  );
};

export default Banner1;
