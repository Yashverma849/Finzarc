import React from "react";

export const Footer: React.FC = () => (
  <footer className="w-full bg-[#00bfa6] dark:bg-gray-900 pt-12 pb-4 px-4 mt-16 text-white font-manrope">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 items-start">
      {/* Brand and Tagline */}
      <div className="flex flex-col items-start pl-2">
        <div className="text-4xl font-extrabold mb-2 text-white">
          FINZARC
        </div>
        <p className="text-lg font-bold text-white mt-6 max-w-sm text-left">
          Empowering businesses with AI-driven solutions that transform operations and accelerate growth.
        </p>
      </div>
      {/* Solutions */}
      <div className="flex flex-col items-start">
        <div className="text-2xl font-bold mb-4 text-white">
          Solutions
        </div>
        <ul className="space-y-2 text-base">
          <li><a href="#" className="text-white hover:text-[#e66465] transition">Finzarc Automate</a></li>
          <li><a href="#" className="text-white hover:text-[#e66465] transition">Finzarc WebCraft</a></li>
          <li><a href="#" className="text-white hover:text-[#e66465] transition">Finzarc DataScience</a></li>
        </ul>
      </div>
      {/* Company */}
      <div className="flex flex-col items-start">
        <div className="text-2xl font-bold mb-4 text-white">
          Company
        </div>
        <ul className="space-y-2 text-base">
          <li><a href="#" className="text-white hover:text-[#5078f2] transition">About</a></li>
          <li><a href="#" className="text-white hover:text-[#5078f2] transition">Case Studies</a></li>
          <li><a href="#" className="text-white hover:text-[#5078f2] transition">Careers</a></li>
          <li><a href="#" className="text-white hover:text-[#5078f2] transition">Contact</a></li>
        </ul>
      </div>
    </div>
    {/* Divider */}
    <div className="w-full border-t border-white/10 my-8" />
    {/* Legal Row */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-manrope text-white/80 gap-4 px-1">
      <div className="text-left w-full md:w-auto">
        © 2025 Finzshark Softtech Private Limited. All rights reserved.
      </div>
      <div className="flex gap-6 w-full md:w-auto justify-end">
        <a href="#" className="text-white hover:text-[#00bfa6] transition">Privacy Policy</a>
        <a href="#" className="text-white hover:text-[#00bfa6] transition">Terms of Service</a>
      </div>
    </div>
  </footer>
); 