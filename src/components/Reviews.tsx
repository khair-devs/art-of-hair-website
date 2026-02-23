import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "Absolut fantastischer Salon! Ameer hat meine Haare perfekt geschnitten und gefärbt. Die Beratung war erstklassig und das Ergebnis hat alle meine Erwartungen übertroffen. Ich komme definitiv wieder!",
    rating: 5,
    date: "vor 2 Wochen",
    service: "Balayage & Schnitt",
  },
  {
    name: "Thomas K.",
    text: "Bester Friseur in Aachen! Ameer nimmt sich wirklich Zeit und geht auf jeden Wunsch ein. Die Atmosphäre im Salon ist super angenehm. Der Fade-Schnitt war perfekt!",
    rating: 5,
    date: "vor 1 Monat",
    service: "Herrenschnitt & Bart",
  },
  {
    name: "Lisa W.",
    text: "Ich bin begeistert! Nach vielen Friseurbesuchen woanders habe ich endlich meinen Stamm-Salon gefunden. Ameer versteht genau was man möchte und setzt es perfekt um.",
    rating: 5,
    date: "vor 3 Wochen",
    service: "Damenschnitt",
  },
  {
    name: "Michael R.",
    text: "Top Qualität, faire Preise und eine unglaublich freundliche Atmosphäre. Ameer ist ein wahrer Künstler. Der Name 'Art of Hair' ist absolut verdient!",
    rating: 5,
    date: "vor 1 Monat",
    service: "Herrenschnitt",
  },
  {
    name: "Anna B.",
    text: "Mein Braut-Styling war einfach traumhaft! Ameer hat genau das umgesetzt, was ich mir vorgestellt habe. Alle Gäste waren begeistert. Vielen Dank für diesen besonderen Tag!",
    rating: 5,
    date: "vor 2 Monaten",
    service: "Braut-Styling",
  },
  {
    name: "David L.",
    text: "Sehr professioneller Service. Die Online-Terminbuchung ist super praktisch. Der Salon ist modern und sauber. Ameer arbeitet sehr präzise und schnell. Klare Empfehlung!",
    rating: 5,
    date: "vor 3 Wochen",
    service: "Herrenschnitt",
  },
];

export function Reviews() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="reviews" className="relative py-24 lg:py-32 bg-salon-darker overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pattern-overlay" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/3 rounded-full blur-3xl" />

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
            <span className="text-gold-400 text-xs uppercase tracking-[0.2em] font-medium">Bewertungen</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-6">
            Was unsere Kunden <span className="text-shimmer italic">sagen</span>
          </h2>

          {/* Google Rating Summary */}
          <div className="inline-flex items-center gap-4 px-6 py-3 glass rounded-full mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="text-left">
              <span className="text-white font-bold text-lg">4.9</span>
              <span className="text-white/40 text-sm ml-1">/ 5.0</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <span className="text-white/50 text-sm">Google Bewertungen</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="group relative p-6 rounded-2xl bg-salon-charcoal/50 border border-white/5 hover:border-gold-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-500/10 group-hover:text-gold-500/20 transition-colors" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{review.name}</p>
                    <p className="text-white/30 text-xs">{review.date}</p>
                  </div>
                </div>
                <span className="text-gold-500/40 text-xs border border-gold-500/10 px-2 py-1 rounded-full">
                  {review.service}
                </span>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-gold-500/5 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://www.google.com/maps/place/Art+of+hair+by+Ameer/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm"
          >
            <span>Alle Bewertungen auf Google ansehen</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
