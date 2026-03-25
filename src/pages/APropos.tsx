import { motion } from "framer-motion";
import { Heart, Shield, Leaf, Star } from "lucide-react";
import heroImg from "@/assets/hero-riad.jpg";
import SectionTitle from "@/components/SectionTitle";

const values = [
  { icon: Heart, title: "Hospitalité", desc: "L'accueil marocain dans sa plus belle expression, chaleureux et attentionné." },
  { icon: Shield, title: "Authenticité", desc: "Chaque détail architectural préserve l'âme et l'artisanat traditionnel du Maroc." },
  { icon: Leaf, title: "Durabilité", desc: "Engagement éco-responsable avec des produits locaux et des pratiques respectueuses." },
  { icon: Star, title: "Excellence", desc: "Un service irréprochable pour une expérience qui dépasse toutes les attentes." },
];

const APropos = () => (
  <div className="pt-20">
    <section className="section-padding bg-dark zellige-pattern text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl md:text-5xl text-ivory"
      >
        Notre Histoire
      </motion.h1>
      <p className="text-ivory/60 font-body mt-4 max-w-xl mx-auto">
        Un riad chargé d'histoire au cœur de la cité ocre.
      </p>
      <div className="w-16 h-0.5 gold-gradient mx-auto mt-6" />
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={heroImg}
          alt="Riad Sultana"
          className="w-full h-96 lg:h-[30rem] object-cover rounded-sm shadow-lg"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-body">Depuis 1920</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-6">Un Héritage de Splendeur</h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              Niché au cœur de la médina de Marrakech, le Riad Sultana est un joyau architectural du début du XXe siècle. Ancienne demeure d'une famille de marchands, il a été méticuleusement restauré pour préserver son authenticité tout en offrant le confort contemporain le plus raffiné.
            </p>
            <p>
              Chaque arc, chaque zellige, chaque fontaine raconte une histoire. Nos artisans maîtres ont travaillé pendant trois ans pour redonner vie aux stucs ciselés, aux boiseries en cèdre et aux mosaïques géométriques qui font la renommée de l'art marocain.
            </p>
            <p>
              Aujourd'hui, le Riad Sultana accueille les voyageurs du monde entier dans un cadre d'exception où le temps semble suspendu, entre le murmure de la fontaine et le chant des oiseaux dans le jardin intérieur.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-secondary zellige-pattern">
      <SectionTitle subtitle="Nos Valeurs" title="Ce Qui Nous Anime" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card p-8 rounded-sm text-center shadow-sm"
          >
            <v.icon size={36} className="text-gold mx-auto mb-4" />
            <h3 className="font-display text-xl mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm font-body">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default APropos;
