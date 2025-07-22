import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];

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
          {navLinks.map((link) => (
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