import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    alt: "Moderner Herrenschnitt",
    category: "Herren",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    alt: "Elegantes Damen-Styling",
    category: "Damen",
  },
  {
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80",
    alt: "Fade Haarschnitt",
    category: "Herren",
  },
  {
    src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80",
    alt: "Balayage Coloring",
    category: "Damen",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
    alt: "Klassischer Schnitt",
    category: "Herren",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    alt: "Salon Atmosphäre",
    category: "Salon",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    alt: "Kreatives Styling",
    category: "Damen",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    alt: "Bartpflege",
    category: "Herren",
  },
];

const categories = ["Alle", "Herren", "Damen", "Salon"];

export function Gallery() {
  const { ref, inView } = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered =
    activeCategory === "Alle"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-salon-dark overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-gold-400 text-xs uppercase tracking-[0.2em] font-medium">Galerie</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-6">
            Unsere <span className="text-shimmer italic">Arbeiten</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Lassen Sie sich von unseren neuesten Kreationen inspirieren
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-gold-600 to-gold-500 text-salon-dark shadow-lg shadow-gold-500/20"
                  : "text-white/50 border border-white/10 hover:border-gold-500/30 hover:text-gold-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((image, i) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative cursor-pointer rounded-xl overflow-hidden ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-salon-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 text-gold-300" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 glass rounded-full text-gold-300 text-xs">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://www.instagram.com/artofhairbyameer/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-gold-500/30 text-gold-300 hover:bg-gold-500/10 transition-all duration-300 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="font-medium">Mehr auf Instagram entdecken</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Gallery fullscreen"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
