import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "The Challenge", path: "/challenge" },
    { name: "Our Solution", path: "/solution" },
    { name: "Economic Impact", path: "/economic-impact" },
    { name: "Strategic Partnership", path: "/partnership" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 neomorph border-b border-[#42414A]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="CapeGo Logo"
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="brand-font text-3xl font-bold text-white">
              CapeGo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-[#EB5E1F] neomorph-inset"
                    : "text-[#B0CEE3] hover:text-white hover:neomorph-button"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden neomorph-button p-3 text-[#B0CEE3]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 neomorph p-4 rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-[#EB5E1F] neomorph-inset"
                    : "text-[#B0CEE3] hover:text-white hover:neomorph-button"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
