import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Mail,
  Navigation,
  ExternalLink,
} from "lucide-react";

const hours = [
  { day: "Montag", time: "09:00 – 19:00" },
  { day: "Dienstag", time: "09:00 – 19:00" },
  { day: "Mittwoch", time: "09:00 – 19:00" },
  { day: "Donnerstag", time: "09:00 – 19:00" },
  { day: "Freitag", time: "09:00 – 19:00" },
  { day: "Samstag", time: "09:00 – 16:00" },
  { day: "Sonntag", time: "Geschlossen", closed: true },
];

export function Contact() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-salon-dark overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-gold-400 text-xs uppercase tracking-[0.2em] font-medium">Kontakt</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-6">
            Besuchen Sie <span className="text-shimmer italic">uns</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Wir freuen uns auf Ihren Besuch. Vereinbaren Sie noch heute Ihren Termin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-salon-charcoal/50 border border-white/5 hover:border-gold-500/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Adresse</h3>
                  <p className="text-white/50 text-sm">
                    Jülicher Str. 7<br />
                    52070 Aachen<br />
                    Deutschland
                  </p>
                  <a
                    href="https://maps.google.com/?q=Art+of+hair+by+Ameer+Aachen"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-gold-400 text-xs mt-2 hover:text-gold-300 transition-colors"
                  >
                    <Navigation className="w-3 h-3" />
                    Route planen
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-salon-charcoal/50 border border-white/5 hover:border-gold-500/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Telefon</h3>
                  <a href="tel:+492419579308" className="text-white/50 text-sm hover:text-gold-300 transition-colors">
                    +49 241 9579 3083
                  </a>
                  <p className="text-white/30 text-xs mt-1">Auch per WhatsApp erreichbar</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-salon-charcoal/50 border border-white/5 hover:border-gold-500/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">Folgen Sie uns</h3>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.instagram.com/artofhairbyameer/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/30 transition-all"
                    >
                      <Instagram className="w-4 h-4 text-white/60 hover:text-gold-300" />
                    </a>
                    <a
                      href="https://www.google.com/maps/place/Art+of+hair+by+Ameer/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/30 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-white/60 hover:text-gold-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            className="p-8 rounded-2xl bg-salon-charcoal/50 border border-white/5 hover:border-gold-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="text-white font-playfair text-xl font-semibold">Öffnungszeiten</h3>
            </div>

            <div className="space-y-3">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className={`flex justify-between items-center py-2.5 border-b border-white/5 last:border-0 ${
                    h.closed ? "opacity-40" : ""
                  }`}
                >
                  <span className="text-white/70 text-sm">{h.day}</span>
                  <span className={`text-sm font-medium ${h.closed ? "text-red-400/60" : "text-gold-300"}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gold-500/5 border border-gold-500/10">
              <p className="text-gold-300/70 text-xs text-center">
                ✨ Termine auch außerhalb der Öffnungszeiten nach Vereinbarung möglich
              </p>
            </div>
          </motion.div>

          {/* Map / CTA */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/5 h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.5!2d6.0838!3d50.7753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0997bfbffffff%3A0x0!2sJ%C3%BClicher+Str.+7%2C+52070+Aachen!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.6)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Art of Hair by Ameer - Standort"
              />
            </div>

            {/* Book CTA */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-800/10 border border-gold-500/20 text-center">
              <h3 className="font-playfair text-2xl text-white font-semibold mb-3">
                Bereit für Ihren neuen Look?
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Rufen Sie uns an oder schreiben Sie uns auf WhatsApp
              </p>
              <a
                href="tel:+492419579308"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 text-salon-dark font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Jetzt anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
