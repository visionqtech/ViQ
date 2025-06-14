import React, { useState, useEffect } from "react";
import slide1 from '../assets/images/slide1.jpg';
// import slide2 from '../assets/images/slide2.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';
import slide5 from '../assets/images/slide5.jpg';
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: slide1,
    title: "Welcome to VisionQ Technology",
    description: "At VisionQ Technology, we deliver innovative solutions in AI/ML, Data Science, UI/UX Design, Cloud, and Mobile App Development. From smart analytics to user-friendly mobile apps, we create custom tech solutions to drive your business forward.",
  },
  {
    image: slide2,
    title: "AI, ML, & Software Excellence",
    description: "Intelligent solutions with precision, scalability, and seamless integration.",
  },
  {
    image: slide3,
    title: "Crafting #Software Experience",
    description: "We deliver the software you need, no more no less.",
  },
  {
    image: slide4,
    title: <>We Care About <span className="text-red-500x font-semibold">#GEN-NEXT</span></>,
    description: 'Step to make a better world',
  },
  {
    image: slide5,
    title: <>Intelligent <span className="text-blue-500x font-semibold">#Cyber Security</span> Solution for Every Business Model</>,
    description: 'Perfect solution backed with AI and ML',
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slide Image */}
      <img
        src={slides[current].image}
        alt="slide"
        className="w-full h-[100vh] object-cover transition duration-700 ease-in-out"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center px-8 md:px-20">
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 max-w-4xl">{slides[current].title}</h2>
        <p className="text-md md:text-lg text-white/90 max-w-3xl">{slides[current].description}</p>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default ImageSlider;