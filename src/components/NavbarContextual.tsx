import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarContextualProps {
  variant?: "light" | "dark";
}

export function NavbarContextual({ variant = "dark" }: NavbarContextualProps) {
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];

  const isLight = variant === "light";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md px-8 py-4 transition-all duration-300 ${
      isLight 
        ? "bg-background/80 border-b border-border/50" 
        : "bg-white/10 border-b border-white/20"
    }`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Zap className={`h-6 w-6 ${isLight ? "text-foreground" : "text-white"}`} />
          <span className={`font-manrope text-sm uppercase tracking-widest font-medium ${
            isLight ? "text-foreground/90" : "text-white/90"
          }`}>
            FINZARC
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-manrope transition-colors duration-300 text-sm ${
                isLight 
                  ? "text-foreground/80 hover:text-foreground" 
                  : "text-white/80 hover:text-white"
              }`}
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