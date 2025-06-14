import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Optional icon lib

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only when page is not at the top
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
};
