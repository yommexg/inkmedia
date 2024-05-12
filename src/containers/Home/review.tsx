import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { useState, useEffect, useRef } from "react";

interface Review {
  name: string;
  title: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Academia",
    title: "Blog writer",
    text: "Amazing quality! Will buy again.",
  },
  {
    name: "Mirald",
    title: "Youtube Script Writer",
    text: "Superb service and quick delivery.",
  },
  {
    name: "Stephen Akintayo Consulting",
    title: "Copywriter",
    text: "Impressed with the product's durability.",
  },
  {
    name: "Harvesters Church",
    title: "Copywriter",
    text: "Excellent value for the price.",
  },
  {
    name: "Truckers Finders",
    title: "Social Media Manager",
    text: "Amazing quality! Will buy again.",
  },
  {
    name: "Canwest",
    title: "Digital Marketer",
    text: "Top-notch customer support.",
  },
];

const Reviews: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      setSwiper(swiperRef.current.swiper);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [swiper]);

  return (
    <div className={`px-4 py-20 bg-[#1B1B1B]`}>
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        REVIEWS & FEEDBACKS
      </h2>

      <Swiper ref={swiperRef} spaceBetween={40} slidesPerView={1} loop={true}>
        {reviews.map(({ name, text, title }, index) => (
          <SwiperSlide
            key={index}
            className="bg-gradient-to-b from-[#FFD700] to-red-900 p-8 rounded-lg shadow-md"
          >
            <div className="text-center">
              <h3 className="text-xl text-slate-200 flex flex-col items-center font-bold mb-2">
                {name}
                <small className="text-sm text-yellow-400 italic">
                  {title}
                </small>
              </h3>
              <p className="font-semibold font-serif">{text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
