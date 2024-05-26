const bannerImg = new URL("../../assets/blog/blogbg.jpg", import.meta.url).href;

const BlogBanner: React.FC = () => {
  return (
    <div
      className="relative bg-cover h-[120px]  md:h-[180px]  lg:h-[240px] py-10"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-[#1B1B1B]  md:h-[180px]  lg:h-[240px] opacity-70 flex flex-col items-center justify-center lg:px-20 h-[120px]">
        <h2 className="text-white text-2xl md:text-4xl font-semibold">
          Weclome to Inksmedia Blog
        </h2>
        <p className="text-xs md:text-sm mt-2 text-yellow-300 max-w-[280px] md:max-w-[400px] text-center">
          Spark your curiosity every day with surprising ideas and interesting
          stories about digital marketing
        </p>
      </div>
    </div>
  );
};

export default BlogBanner;
