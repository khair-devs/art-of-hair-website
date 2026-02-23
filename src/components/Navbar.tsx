import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Clock, Instagram } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Über Uns", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Galerie", href: "#gallery" },
  { name: "Bewertungen", href: "#reviews" },
  { name: "Kontakt", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-salon-darker text-white/60 text-xs border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-gold-400" />
              Aachen, Deutschland
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-gold-400" />
              Mo-Sa: 09:00 - 19:00 Uhr
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+4924112345" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
              <Phone size={12} className="text-gold-400" />
              +49 241 9579 3083
            </a>
            <a href="https://www.instagram.com/artofhairbyameer/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
              <Instagram size={12} className="text-gold-400" />
              @artofhairbyameer
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-salon-dark/95 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-gold-500/10"
            : "bg-transparent"
        }`}
        style={{ top: scrolled ? 0 : undefined }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 rounded-full border-2 border-gold-400 flex items-center justify-center group-hover:border-gold-300 transition-colors">
                  <span className="font-playfair text-gold-400 text-lg font-bold group-hover:text-gold-300 transition-colors">A</span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-playfair text-white text-lg font-semibold leading-tight tracking-wide">
                  Art of Hair
                </h1>
                <p className="text-gold-400 text-[10px] uppercase tracking-[0.3em] font-inter">
                  by Ameer
                </p>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white/70 hover:text-gold-300 text-sm font-medium tracking-wide transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-salon-dark text-sm font-semibold rounded-full hover:from-gold-500 hover:to-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
              >
                Termin buchen
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-salon-dark/98 backdrop-blur-2xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-2xl font-playfair tracking-wide hover:text-gold-400 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-salon-dark font-semibold rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Termin buchen
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
