import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "../assets/logo.webp";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "The Challenge", path: "/challenge" },
    { name: "Our Solution", path: "/solution" },
    { name: "Economic Impact", path: "/economic-impact" },
    { name: "Strategic Partnership", path: "/partnership" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="neomorph border-t border-[#42414A] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CapeGo Logo" className="h-12 w-12" />
              <span className="brand-font text-3xl font-bold text-white">
                CapeGo
              </span>
            </div>
            <p className="text-[#B0CEE3] text-sm leading-relaxed">
              A Safer Ride. A Fairer Journey. A Truly South African Service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#B0CEE3] hover:text-[#EB5E1F] transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#B0CEE3] text-sm">
                <Mail size={16} className="text-[#EB5E1F]" />
                <a
                  href="mailto:info@mylucidlife.app"
                  className="hover:text-white transition-colors"
                >
                  info@mylucidlife.app
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#B0CEE3] text-sm">
                <Phone size={16} className="text-[#EB5E1F]" />
                <a
                  href="tel:+27603158538"
                  className="hover:text-white transition-colors"
                >
                  +27 60 315 8538
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="neomorph-button p-3 text-[#B0CEE3] hover:text-[#EB5E1F] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="neomorph-button p-3 text-[#B0CEE3] hover:text-[#EB5E1F] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="neomorph-button p-3 text-[#B0CEE3] hover:text-[#EB5E1F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="neomorph-button p-3 text-[#B0CEE3] hover:text-[#EB5E1F] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#42414A] text-center">
          <p className="text-[#B0CEE3] text-sm">
            Founder and Developer:{" "}
            <span className="text-white font-semibold">Charles Duckitt</span>
          </p>
          <p className="text-[#B0CEE3] text-sm mt-2">
            © {new Date().getFullYear()} CapeGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
