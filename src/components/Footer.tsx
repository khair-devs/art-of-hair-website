import { Scissors, Heart, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-salon-darker border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-gold-400 flex items-center justify-center">
                <span className="font-playfair text-gold-400 text-lg font-bold">A</span>
              </div>
              <div>
                <h3 className="font-playfair text-white text-lg font-semibold leading-tight">Art of Hair</h3>
                <p className="text-gold-400 text-[10px] uppercase tracking-[0.3em]">by Ameer</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Premium Friseursalon im Herzen von Aachen. Wo Handwerkskunst auf
              Stil trifft.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/artofhairbyameer/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/30 transition-all"
              >
                <Instagram className="w-4 h-4 text-white/50" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5">
              {["Home", "Über Uns", "Services", "Galerie", "Bewertungen", "Kontakt"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === "Home" ? "home" : link === "Über Uns" ? "about" : link.toLowerCase()}`}
                    className="text-white/40 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {["Herrenschnitt", "Damenschnitt", "Färbung & Balayage", "Bart-Styling", "Haarbehandlung", "Braut-Styling"].map(
                (s) => (
                  <li key={s}>
                    <a href="#services" className="text-white/40 text-sm hover:text-gold-400 transition-colors flex items-center gap-2">
                      <Scissors className="w-3 h-3 text-gold-500/30" />
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500/50 mt-0.5 shrink-0" />
                <span className="text-white/40 text-sm">
                  Jülicher Str. 7<br />52070 Aachen
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500/50 shrink-0" />
                <a href="tel:+492419579308" className="text-white/40 text-sm hover:text-gold-400 transition-colors">
                  +49 241 9579 3083
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Art of Hair by Ameer. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500/40 fill-red-500/40" /> in Aachen
          </p>
        </div>
      </div>
    </footer>
  );
}
