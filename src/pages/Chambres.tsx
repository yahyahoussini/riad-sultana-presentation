import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Maximize, Wifi, Wind } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import suiteRoyale from "@/assets/suite-royale.jpg";
import chambreJardin from "@/assets/chambre-jardin.jpg";
import suitePiscine from "@/assets/suite-piscine.jpg";
import chambreTraditionnelle from "@/assets/chambre-traditionnelle.jpg";
import spaHammam from "@/assets/spa-hammam.jpg";
import heroImg from "@/assets/hero-riad.jpg";

const rooms = [
  {
    name: "Suite Royale",
    price: "2 800",
    img: suiteRoyale,
    desc: "Un écrin de luxe avec salon privé, cheminée et vue panoramique sur les toits de la médina.",
    surface: "65 m²",
    guests: "2 adultes",
  },
  {
    name: "Chambre Jardin",
    price: "1 200",
    img: chambreJardin,
    desc: "Ouverte sur le jardin intérieur, baignée de lumière naturelle et de verdure luxuriante.",
    surface: "35 m²",
    guests: "2 adultes",
  },
  {
    name: "Suite Piscine",
    price: "3 500",
    img: suitePiscine,
    desc: "Suite exclusive avec piscine privée sur la terrasse et vue imprenable sur l'Atlas.",
    surface: "80 m²",
    guests: "2 adultes + 1 enfant",
  },
  {
    name: "Chambre Traditionnelle",
    price: "900",
    img: chambreTraditionnelle,
    desc: "Plafond peint à la main, zellige authentique et charme d'antan pour un séjour inoubliable.",
    surface: "28 m²",
    guests: "2 adultes",
  },
  {
    name: "Suite Hammam",
    price: "3 200",
    img: spaHammam,
    desc: "Suite avec hammam privé intégré, un sanctuaire de bien-être au cœur du riad.",
    surface: "70 m²",
    guests: "2 adultes",
  },
  {
    name: "Chambre Patio",
    price: "1 400",
    img: heroImg,
    desc: "Donnant directement sur le patio central et sa fontaine, ambiance paisible garantie.",
    surface: "40 m²",
    guests: "2 adultes",
  },
];

const Chambres = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-dark zellige-pattern text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl text-ivory"
        >
          Chambres & Suites
        </motion.h1>
        <p className="text-ivory/60 font-body mt-4 max-w-xl mx-auto">
          Chaque chambre est une œuvre d'art, mêlant artisanat marocain et confort moderne.
        </p>
        <div className="w-16 h-0.5 gold-gradient mx-auto mt-6" />
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-sm overflow-hidden shadow-md group"
            >
              <div className="relative overflow-hidden cursor-pointer" onClick={() => setLightbox(room.img)}>
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors flex items-center justify-center">
                  <span className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-wider uppercase font-body">
                    Agrandir
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl">{room.name}</h3>
                  <span className="text-gold font-display text-lg">{room.price} MAD</span>
                </div>
                <p className="text-muted-foreground text-sm font-body mb-4">{room.desc}</p>
                <div className="flex gap-4 text-xs text-muted-foreground font-body mb-4">
                  <span className="flex items-center gap-1"><Maximize size={14} /> {room.surface}</span>
                  <span className="flex items-center gap-1"><Users size={14} /> {room.guests}</span>
                  <span className="flex items-center gap-1"><Wifi size={14} /> WiFi</span>
                  <span className="flex items-center gap-1"><Wind size={14} /> Clim</span>
                </div>
                <Link
                  to="/contact"
                  className="block text-center gold-gradient text-dark-soft font-bold text-sm tracking-wider uppercase py-2.5 rounded-sm hover:opacity-90 transition-opacity"
                >
                  Réserver
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-ivory" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Chambre"
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chambres;
