"use client";

import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-40">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "blur(20px) saturate(150%)",
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 24px",
          transition:
            "background-color 380ms, border-color 380ms, box-shadow 380ms, backdrop-filter 380ms",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex items-center h-20">
        <a
          className="flex items-center gap-3 flex-shrink-0 relative z-10 active:opacity-80 transition-opacity"
          href="/"
        >
          <img
            alt="Open Water Rx"
            width={110}
            height={29}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="object-contain flex-shrink-0"
            src="/images/how-it-works-00-open-water-rx.png"
            style={{
              width: "110px",
              height: "29px",
              maxWidth: "110px",
              maxHeight: "29px",
              objectFit: "contain",
            }}
          />
          <span
            className="hidden md:block font-bold text-lg tracking-tight transition-colors duration-200 whitespace-nowrap text-[#0B7A8C]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Open Water Rx
          </span>
        </a>
        <a
          className="md:hidden absolute inset-0 z-0 flex items-center justify-center cursor-pointer active:opacity-80 transition-opacity"
          aria-label="Go to homepage"
          href="/"
        >
          <span
            className="font-bold text-lg tracking-tight transition-colors duration-200 whitespace-nowrap text-[#0B7A8C]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Open Water Rx
          </span>
        </a>
        <div className="flex-1"></div>
        <nav
          className="hidden md:flex flex-shrink-0 items-center gap-7"
          aria-label="Main navigation"
        >
          <a
            className="text-sm font-medium transition-colors duration-200 whitespace-nowrap active:opacity-80 text-gray-600 hover:text-[#0B7A8C]"
            href="/"
          >
            Home
          </a>
          <a
            className="text-sm font-medium transition-colors duration-200 whitespace-nowrap active:opacity-80 text-[#0B7A8C]"
            href="/how-it-works"
          >
            How It Works
          </a>
          <a
            className="text-sm font-medium transition-colors duration-200 whitespace-nowrap active:opacity-80 text-gray-600 hover:text-[#0B7A8C]"
            href="/programs"
          >
            Programs
          </a>
          <a
            className="text-sm font-medium transition-colors duration-200 whitespace-nowrap active:opacity-80 text-gray-600 hover:text-[#0B7A8C]"
            href="/faq"
          >
            FAQ
          </a>
          <a
            className="text-sm font-medium transition-colors duration-200 whitespace-nowrap active:opacity-80 text-gray-600 hover:text-[#0B7A8C]"
            href="/about"
          >
            About
          </a>
          <a
            className="text-sm font-medium transition-colors duration-200 whitespace-nowrap active:opacity-80 text-gray-600 hover:text-[#0B7A8C]"
            href="/contact"
          >
            Contact
          </a>
        </nav>
        <div className="hidden md:block flex-1"></div>
        <div
          className="hidden md:flex flex-shrink-0 items-center justify-end"
          style={{ width: "188px" }}
        >
          <a
            href="https://openwaterrx.l.openloop.ai/login?returnUrl=%2Fpatient-portal"
            target="_blank"
            rel="noopener noreferrer"
            data-clarity-tag="header-patient-portal"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap cursor-pointer transition-all duration-200 active:scale-[0.98] bg-[#0B7A8C] text-white hover:bg-[#096878]"
          >
            <i className="ri-user-line text-sm"></i>Patient Portal
          </a>
        </div>
        <button
          className="md:hidden relative z-10 w-12 h-12 flex items-center justify-center cursor-pointer touch-manipulation active:scale-90 transition-transform text-gray-700"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label="Open navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <i className="text-xl ri-menu-line" aria-hidden="true"></i>
        </button>
      </div>
      <div
        id="mobile-nav-menu"
        className={`absolute top-full left-0 right-0 z-10 md:hidden bg-white border-t border-gray-100 overflow-y-auto transition-all duration-300 shadow-lg ${
          isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
        role="region"
        aria-label="Mobile navigation"
      >
        <div className="px-6 py-3 flex flex-col">
          <a
            className="text-sm font-medium w-full min-h-[48px] flex items-center py-3 transition-colors active:bg-gray-50 touch-manipulation cursor-pointer text-gray-700 border-b border-gray-100"
            href="/"
          >
            Home
          </a>
          <a
            className="text-sm font-medium w-full min-h-[48px] flex items-center py-3 transition-colors active:bg-gray-50 touch-manipulation cursor-pointer text-[#0B7A8C] border-b border-gray-100"
            href="/how-it-works"
          >
            How It Works
          </a>
          <a
            className="text-sm font-medium w-full min-h-[48px] flex items-center py-3 transition-colors active:bg-gray-50 touch-manipulation cursor-pointer text-gray-700 border-b border-gray-100"
            href="/programs"
          >
            Programs
          </a>
          <a
            className="text-sm font-medium w-full min-h-[48px] flex items-center py-3 transition-colors active:bg-gray-50 touch-manipulation cursor-pointer text-gray-700 border-b border-gray-100"
            href="/faq"
          >
            FAQ
          </a>
          <a
            className="text-sm font-medium w-full min-h-[48px] flex items-center py-3 transition-colors active:bg-gray-50 touch-manipulation cursor-pointer text-gray-700 border-b border-gray-100"
            href="/about"
          >
            About
          </a>
          <a
            className="text-sm font-medium w-full min-h-[48px] flex items-center py-3 transition-colors active:bg-gray-50 touch-manipulation cursor-pointer text-gray-700 "
            href="/contact"
          >
            Contact
          </a>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="https://openwaterrx.l.openloop.ai/login?returnUrl=%2Fpatient-portal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium py-3 rounded-full text-sm whitespace-nowrap cursor-pointer hover:bg-gray-50 active:scale-[0.98] transition-transform touch-manipulation"
            >
              <i className="ri-user-line text-sm" aria-hidden="true"></i>Patient
              Portal
            </a>
            <a
              data-clarity-tag="header-mobile-start"
              className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#E8A923] text-white font-semibold py-3 rounded-full text-sm whitespace-nowrap cursor-pointer active:scale-[0.98] transition-transform touch-manipulation"
              href="/programs"
            >
              <i className="ri-file-list-3-line text-sm" aria-hidden="true"></i>
              Explore Programs
            </a>
            <a
              data-clarity-tag="header-mobile-eligibility"
              className="w-full min-h-[48px] flex items-center justify-center gap-2 border border-[#0B7A8C] text-[#0B7A8C] font-semibold py-3 rounded-full text-sm whitespace-nowrap cursor-pointer active:scale-[0.98] transition-transform touch-manipulation"
              href="/eligibility"
            >
              <i className="ri-checkbox-circle-line text-sm" aria-hidden="true"></i>
              Check Eligibility
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
