import { motion } from "framer-motion";
import { ChevronDown, Scissors, Star } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-salon-dark/80 via-salon-dark/60 to-salon-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-salon-dark/50 to-transparent" />
        <div className="absolute inset-0 pattern-overlay" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 left-10 w-24 h-24 border border-gold-500/20 rounded-full"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 border border-gold-500/10 rounded-full"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-24 hidden lg:block"
        animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Scissors className="text-gold-500/20 w-12 h-12" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
            <span className="text-gold-300 text-xs sm:text-sm font-medium tracking-widest uppercase">
              Premium Friseursalon in Aachen
            </span>
            <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
          </div>
        </motion.div>

        <motion.h1
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="block">Art of</span>
          <span className="text-shimmer italic">Hair</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-4"
        >
          <p className="font-cormorant text-gold-300 text-xl sm:text-2xl md:text-3xl italic tracking-wide">
            by Ameer
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold-500" />
          <Scissors className="w-5 h-5 text-gold-400 rotate-90" />
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold-500" />
        </motion.div>

        <motion.p
          className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          Wo Handwerkskunst auf Stil trifft. Erleben Sie erstklassige Haarpflege
          und individuelle Beratung in elegantem Ambiente.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <a
            href="#contact"
            className="group relative px-10 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-salon-dark font-semibold rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/30 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Termin vereinbaren
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-white/20 text-white rounded-full hover:border-gold-400/50 hover:bg-white/5 transition-all duration-300 font-medium"
          >
            Unsere Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-gold-400/50 hover:text-gold-400 transition-colors">
          <ChevronDown size={28} />
        </a>
      </motion.div>

      {/* Side Text */}
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2">
        <p className="text-white/10 text-xs tracking-[0.5em] uppercase" style={{ writingMode: "vertical-rl" }}>
          Established in Aachen — Premium Hair Design
        </p>
      </div>
    </section>
  );
}
