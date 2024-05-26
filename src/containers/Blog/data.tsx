import { FaCalendar } from "react-icons/fa";

interface BlogPost {
  title: string;
  desc: string;
  datePosted: string;
  category: string;
  linkImage: string;
}

const blogData: BlogPost[] = [
  {
    title: "Exploring the Beauty of Nigerian Landscapes",
    desc: "Nigeria boasts a diverse range of breathtaking landscapes, from the lush rainforests of the south to the sweeping savannahs of the north. This blog delves into the must-see natural wonders of this vibrant country.",
    datePosted: "May 26, 2024",
    category: "Travel",
    linkImage: "https://picsum.photos/id/1076/400/300?grayscale&blur=2",
  },
  {
    title: "Exploring the Beauty of Nigerian Landscapes",
    desc: "Nigeria boasts a diverse range of breathtaking landscapes, from the lush rainforests of the south to the sweeping savannahs of the north. This blog delves into the must-see natural wonders of this vibrant country.",
    datePosted: "May 26, 2024",
    category: "Travel",
    linkImage: "https://picsum.photos/id/1076/400/300?grayscale&blur=2",
  },
  {
    title: "Exploring the Beauty of Nigerian Landscapes",
    desc: "Nigeria boasts a diverse range of breathtaking landscapes, from the lush rainforests of the south to the sweeping savannahs of the north. This blog delves into the must-see natural wonders of this vibrant country.",
    datePosted: "May 26, 2024",
    category: "Travel",
    linkImage: "https://picsum.photos/id/1076/400/300?grayscale&blur=2",
  },
  {
    title: "Exploring the Beauty of Nigerian Landscapes",
    desc: "Nigeria boasts a diverse range of breathtaking landscapes, from the lush rainforests of the south to the sweeping savannahs of the north. This blog delves into the must-see natural wonders of this vibrant country.",
    datePosted: "May 26, 2024",
    category: "Travel",
    linkImage: "https://picsum.photos/id/1076/400/300?grayscale&blur=2",
  },
  {
    title: "Exploring the Beauty of Nigerian Landscapes",
    desc: "Nigeria boasts a diverse range of breathtaking landscapes, from the lush rainforests of the south to the sweeping savannahs of the north. This blog delves into the must-see natural wonders of this vibrant country.",
    datePosted: "May 26, 2024",
    category: "Travel",
    linkImage: "https://picsum.photos/id/1076/400/300?grayscale&blur=2",
  },
];
const BlogData: React.FC = () => {
  return (
    <div className="flex flex-col my-2 items-center justify-center md:flex-row md:flex-wrap gap-5 md:gap-10">
      {blogData.map((post, index) => (
        <div key={post.datePosted + index} className="bg-[#1B1B1B]">
          <img
            src={post.linkImage}
            alt={post.title}
            className="w-[250px] md:w-[300px]"
          />
          <div className="w-[250px] md:w-[300px] px-6 mt-4">
            <div className="flex gap-2 items-center">
              <p className="flex items-center text-[10px] gap-1 text-pink-500">
                <FaCalendar /> {post.datePosted}
              </p>
              <div className="h-[10px] bg-white border-l border-white" />
              <p className="text-[10px] text-white">{post.category}</p>
            </div>
            <h2 className="text-[#FDD700] font-semibold text-lg my-4 capitalize">
              {post.title}
            </h2>
            <p className="text-white text-sm mb-4">{post.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogData;
