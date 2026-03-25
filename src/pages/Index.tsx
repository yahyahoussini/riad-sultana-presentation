import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Waves, Sparkles, UtensilsCrossed, Building } from "lucide-react";
import heroImg from "@/assets/hero-riad.jpg";
import SectionTitle from "@/components/SectionTitle";
import suiteRoyale from "@/assets/suite-royale.jpg";
import chambreJardin from "@/assets/chambre-jardin.jpg";
import suitePiscine from "@/assets/suite-piscine.jpg";

const usps = [
  { icon: Waves, label: "Piscine privée" },
  { icon: Sparkles, label: "Spa hammam" },
  { icon: UtensilsCrossed, label: "Restaurant gastronomique" },
  { icon: Building, label: "Vue sur la médina" },
];

const featuredRooms = [
  { name: "Suite Royale", price: "2 800", img: suiteRoyale },
  { name: "Chambre Jardin", price: "1 200", img: chambreJardin },
  { name: "Suite Piscine", price: "3 500", img: suitePiscine },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Riad Sultana Marrakech" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 dark-overlay" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gold uppercase tracking-[0.4em] text-sm mb-4 font-body"
        >
          Marrakech, Maroc
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-ivory text-shadow-hero leading-tight"
        >
          Où le Maroc vous murmure ses secrets
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="gold-gradient text-dark-soft font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-sm hover:opacity-90 transition-opacity"
          >
            Réserver maintenant
          </Link>
          <Link
            to="/chambres"
            className="border border-gold/60 text-gold font-body text-sm tracking-wider uppercase px-8 py-3.5 rounded-sm hover:bg-gold/10 transition-colors"
          >
            Découvrir nos chambres
          </Link>
        </motion.div>
      </div>
    </section>

    {/* USPs */}
    <section className="section-padding zellige-pattern">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {usps.map((usp, i) => (
          <motion.div
            key={usp.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <usp.icon size={36} className="text-gold" />
            <span className="font-display text-lg">{usp.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Featured Rooms */}
    <section className="section-padding bg-secondary">
      <SectionTitle subtitle="Hébergement" title="Nos Chambres d'Exception" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredRooms.map((room, i) => (
          <motion.div
            key={room.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative overflow-hidden rounded-sm"
          >
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl text-ivory">{room.name}</h3>
              <p className="text-gold font-body text-sm mt-1">À partir de {room.price} MAD / nuit</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/chambres"
          className="inline-block border border-gold text-gold font-body text-sm tracking-wider uppercase px-8 py-3 rounded-sm hover:bg-gold hover:text-dark-soft transition-colors"
        >
          Voir toutes les chambres
        </Link>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 zellige-pattern opacity-30" />
      <div className="relative z-10 text-center px-6">
        <h2 className="font-display text-3xl md:text-5xl text-ivory mb-4">Vivez l'Expérience Sultana</h2>
        <p className="text-ivory/70 font-body max-w-xl mx-auto mb-8">
          Spa hammam, cuisine raffinée et excursions dans les terres ocres du Maroc. Chaque moment est une invitation au voyage.
        </p>
        <Link
          to="/experiences"
          className="gold-gradient text-dark-soft font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-sm hover:opacity-90 transition-opacity"
        >
          Nos Expériences
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
