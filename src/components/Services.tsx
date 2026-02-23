import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Scissors, Paintbrush, SprayCan, Sparkles, Crown, UserCheck } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Herrenschnitt",
    description: "Klassische und moderne Herrenfrisuren, perfekt auf Ihre Gesichtsform abgestimmt.",
    price: "ab 25€",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
  },
  {
    icon: Crown,
    title: "Damenschnitt",
    description: "Individuelle Schnitte und Stylings, die Ihre natürliche Schönheit unterstreichen.",
    price: "ab 35€",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
  },
  {
    icon: Paintbrush,
    title: "Färbung & Balayage",
    description: "Von natürlichen Highlights bis zu mutigen Farbveränderungen — wir verwirklichen Ihren Look.",
    price: "ab 60€",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80",
  },
  {
    icon: SprayCan,
    title: "Bart-Styling",
    description: "Professionelle Bartpflege und -formung für den perfekten Gentleman-Look.",
    price: "ab 15€",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
  },
  {
    icon: Sparkles,
    title: "Haarbehandlung",
    description: "Luxuriöse Pflegebehandlungen für gesundes, glänzendes und kräftiges Haar.",
    price: "ab 40€",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  },
  {
    icon: UserCheck,
    title: "Braut-Styling",
    description: "Machen Sie Ihren besonderen Tag unvergesslich mit unserem exklusiven Braut-Service.",
    price: "ab 80€",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
  },
];

export function Services() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-salon-darker overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pattern-overlay" />

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
            <span className="text-gold-400 text-xs uppercase tracking-[0.2em] font-medium">Unsere Services</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-6">
            Was wir <span className="text-shimmer italic">anbieten</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Entdecken Sie unser umfangreiches Angebot an erstklassigen
            Friseurdienstleistungen für Damen und Herren.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden bg-salon-charcoal border border-white/5 hover:border-gold-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-salon-charcoal via-salon-charcoal/30 to-transparent" />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 px-3 py-1.5 glass rounded-full">
                  <span className="text-gold-300 text-sm font-semibold">{service.price}</span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-gold-500/20 transition-colors">
                  <service.icon className="w-5 h-5 text-gold-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl text-white font-semibold mb-2 group-hover:text-gold-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-gold-500/5 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
