import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, UtensilsCrossed, Compass } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import spaImg from "@/assets/spa-hammam.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import excursionsImg from "@/assets/excursions.jpg";

const experiences = [
  {
    icon: Sparkles,
    title: "Spa & Hammam",
    desc: "Plongez dans un rituel ancestral de bien-être. Notre hammam traditionnel, suivi d'un massage aux huiles d'argan, vous transporte dans un univers de sérénité absolue. Gommage au savon noir, enveloppement au ghassoul et soins signature vous attendent.",
    img: spaImg,
    highlights: ["Hammam traditionnel", "Massage à l'huile d'argan", "Soins du visage", "Bain aux roses"],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Gastronomique",
    desc: "Notre chef revisit la cuisine marocaine avec créativité et raffinement. Sur la terrasse panoramique, savourez des tagines d'exception, des pastillas délicates et des pâtisseries aux mille saveurs, accompagnés de thé à la menthe ou de vins marocains.",
    img: restaurantImg,
    highlights: ["Terrasse panoramique", "Cuisine marocaine raffinée", "Cours de cuisine", "Petit-déjeuner royal"],
  },
  {
    icon: Compass,
    title: "Excursions & Découvertes",
    desc: "Explorez les trésors cachés de Marrakech et ses environs. Des souks animés de la médina aux sommets enneigés de l'Atlas, en passant par les palmeraies dorées, chaque excursion est une aventure unique organisée par nos guides experts.",
    img: excursionsImg,
    highlights: ["Visite guidée de la médina", "Excursion Atlas", "Balade en dromadaire", "Jardins secrets"],
  },
];

const Experiences = () => (
  <div className="pt-20">
    <section className="section-padding bg-dark zellige-pattern text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl md:text-5xl text-ivory"
      >
        Nos Expériences
      </motion.h1>
      <p className="text-ivory/60 font-body mt-4 max-w-xl mx-auto">
        Des moments d'exception pour un séjour inoubliable.
      </p>
      <div className="w-16 h-0.5 gold-gradient mx-auto mt-6" />
    </section>

    <section className="section-padding">
      <div className="container mx-auto space-y-24">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img
                src={exp.img}
                alt={exp.title}
                className="w-full h-80 lg:h-[28rem] object-cover rounded-sm shadow-lg"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <exp.icon size={40} className="text-gold mb-4" />
              <h3 className="font-display text-3xl mb-4">{exp.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">{exp.desc}</p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block gold-gradient text-dark-soft font-bold text-sm tracking-wider uppercase px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
              >
                Réserver cette expérience
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Experiences;
