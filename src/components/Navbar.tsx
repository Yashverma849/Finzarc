import { Link } from "react-router-dom";
import { Zap, Cpu, Globe, BarChart3 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import React, { useState, useRef } from "react";

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const openTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" }
  ];

  const serviceCards = [
    {
      title: "AI Automation",
      icon: <Cpu className="w-10 h-10 mx-auto mb-4" />,
      summary: "Intelligent automation solutions that streamline operations, reduce costs, and improve efficiency across your business.",
      link: "/services/ai-automation"
    },
    {
      title: "Finzarc WebCraft",
      icon: <Globe className="w-10 h-10 mx-auto mb-4" />,
      summary: "Modern web development for scalable, high-performance digital experiences.",
      link: "/services/web-app"
    },
    {
      title: "Finzarc Data Science",
      icon: <BarChart3 className="w-10 h-10 mx-auto mb-4" />,
      summary: "Data analytics and insights to drive smarter business decisions and growth.",
      link: "/services/data-science"
    }
  ];

  // Hover delay handlers
  const handleServicesMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    openTimeout.current = setTimeout(() => setServicesOpen(true), 400);
  };
  const handleServicesMouseLeave = () => {
    if (openTimeout.current) clearTimeout(openTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false);
      setHoveredCard(null);
    }, 400);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 backdrop-blur-lg bg-white/10 border border-white/20 px-8 py-3 transition-all duration-300 rounded-full shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-black" />
          <span className="font-manrope text-sm text-black uppercase tracking-widest font-bold">
            FINZARC
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              className="font-manrope text-black hover:text-[#00bfa6] text-sm font-bold flex items-center gap-1 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
            </button>
            {/* Dropdown */}
            {servicesOpen && (
              <div className="absolute left-0 mt-4 bg-white dark:bg-black/95 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col lg:flex-row gap-4 px-6 py-6 z-50 max-w-[95vw] transition-all duration-200">
                {/* Service Cards Only */}
                {serviceCards.map((card, idx) => (
                  <div
                    key={card.title}
                    className={`group bg-white dark:bg-black rounded-xl p-6 w-64 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 border border-transparent hover:border-[#00bfa6] ${hoveredCard === idx ? "ring-2 ring-[#00bfa6]" : ""}`}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {card.icon}
                    <div className="font-manrope text-lg font-bold text-black dark:text-white text-center mb-2">{card.title}</div>
                    {/* Show summary and link on hover (desktop) or always (mobile) */}
                    <div className={`mt-2 text-center transition-all duration-200 ${hoveredCard === idx ? "opacity-100 max-h-40" : "opacity-0 max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-40"} overflow-hidden`}>
                      <div className="text-gray-700 dark:text-white/80 text-sm mb-2">{card.summary}</div>
                      <Link
                        to={card.link}
                        className="text-[#00bfa6] font-bold flex items-center gap-1 hover:underline"
                      >
                        Learn more <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Other Nav Links */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-manrope text-black hover:text-gray-600 transition-colors duration-300 text-sm font-bold"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
}