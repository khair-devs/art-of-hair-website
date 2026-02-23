import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Award, Heart, Sparkles, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Zufriedene Kunden" },
  { icon: Award, value: "15+", label: "Jahre Erfahrung" },
  { icon: Heart, value: "4.9", label: "Google Bewertung" },
  { icon: Sparkles, value: "100%", label: "Leidenschaft" },
];

export function About() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-salon-dark overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative img-zoom rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80"
                  alt="Ameer - Art of Hair"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-salon-dark/60 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 lg:-right-10 glass rounded-2xl p-6 max-w-[200px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-gold-400 font-playfair text-4xl font-bold">15+</p>
                  <p className="text-white/60 text-sm mt-1">Jahre Erfahrung</p>
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Corner decoration */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold-500/30 rounded-tl-2xl" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <span className="text-gold-400 text-xs uppercase tracking-[0.2em] font-medium">Über Uns</span>
            </div>

            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
              Mehr als nur ein{" "}
              <span className="text-shimmer italic">Haarschnitt</span>
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed mb-10">
              <p>
                Willkommen bei <strong className="text-gold-300">Art of Hair by Ameer</strong> — Ihrem
                exklusiven Friseursalon im Herzen von Aachen. Mit über 15 Jahren
                Erfahrung und einer tiefen Leidenschaft für die Kunst des Haarstylings
                bietet Ameer Ihnen ein unvergleichliches Erlebnis.
              </p>
              <p>
                Jeder Besuch bei uns ist mehr als nur ein Termin — es ist ein Erlebnis.
                Wir kombinieren modernste Techniken mit persönlicher Beratung, um Ihren
                individuellen Stil perfekt zur Geltung zu bringen. Von klassischen
                Herrenschnitten bis zu kreativen Damen-Stylings.
              </p>
              <p>
                Unser Salon vereint elegantes Design mit einer warmen, einladenden
                Atmosphäre, in der Sie sich vom ersten Moment an wohlfühlen werden.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold-500/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                >
                  <stat.icon className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                  <p className="text-gold-300 font-playfair text-2xl font-bold">{stat.value}</p>
                  <p className="text-white/40 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
