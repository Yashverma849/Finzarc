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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 px-8 py-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-white" />
          <span className="font-manrope text-sm text-white/90 uppercase tracking-widest font-medium">
            FINZARC
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-manrope text-white/80 hover:text-white transition-colors duration-300 text-sm"
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