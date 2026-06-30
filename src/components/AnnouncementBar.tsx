"use client";

import { useState } from "react";

export function AnnouncementBar() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <div className="relative z-[70]">
      <div className="relative z-[80] bg-gradient-to-r from-[#1565C0] via-[#2EA8F7] to-[#1565C0]">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-center gap-3 py-2.5 sm:py-2"
          style={{ marginTop: "0px" }}
        >
          <a
            className="flex items-center gap-2 text-white text-xs sm:text-sm font-semibold hover:underline cursor-pointer whitespace-nowrap"
            href="/start-your-program"
          >
            <i className="ri-shield-check-line text-sm sm:text-base flex-shrink-0"></i>
            <span className="hidden sm:inline">
              Personalized wellness, guided by licensed providers —{" "}
              <strong className="font-black">start your free evaluation</strong>
            </span>
            <span className="sm:hidden">
              <strong>Start your free evaluation</strong>
            </span>
            <i className="ri-arrow-right-line text-xs"></i>
          </a>
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors cursor-pointer touch-manipulation"
            aria-label="Dismiss summer sale banner"
          >
            <i className="ri-close-line text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
