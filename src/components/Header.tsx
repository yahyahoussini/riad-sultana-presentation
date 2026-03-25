import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Chambres & Suites", path: "/chambres" },
  { label: "Expériences", path: "/experiences" },
  { label: "À Propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6">
        <Link to="/" className="font-display text-xl md:text-2xl font-bold text-gold tracking-wider">
          Riad Sultana
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-ivory/80 hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex gold-gradient text-dark-soft font-bold text-sm tracking-wider uppercase px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
        >
          Réserver
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-ivory"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark border-t border-gold/20 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-widest uppercase py-2 ${
                    location.pathname === item.path
                      ? "text-gold"
                      : "text-ivory/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="gold-gradient text-dark-soft font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-sm text-center mt-2"
              >
                Réserver
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
