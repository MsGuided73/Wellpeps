"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 400;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
      className={`hidden md:flex fixed right-8 z-[60] w-11 h-11 items-center justify-center rounded-full text-white cursor-pointer transition-all duration-300 hover:-translate-y-1 bottom-8 bg-[#0B7A8C] hover:bg-[#096b7a] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <i className="ri-arrow-up-line text-lg"></i>
    </button>
  );
}
