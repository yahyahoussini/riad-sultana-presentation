import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  className?: string;
}

const SectionTitle = ({ subtitle, title, className = "" }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className={`text-center mb-12 ${className}`}
  >
    {subtitle && (
      <span className="text-gold uppercase tracking-[0.3em] text-sm font-body">{subtitle}</span>
    )}
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2">{title}</h2>
    <div className="w-16 h-0.5 gold-gradient mx-auto mt-4" />
  </motion.div>
);

export default SectionTitle;
