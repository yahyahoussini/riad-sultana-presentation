import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark text-ivory/80">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl text-gold mb-4">Riad Sultana</h3>
          <p className="text-sm leading-relaxed font-body">
            Un havre de paix au cœur de la médina de Marrakech. Laissez-vous envoûter par l'authenticité marocaine mêlée au luxe contemporain.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-gold mb-4">Navigation</h4>
          <nav className="flex flex-col gap-2 text-sm font-body">
            <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
            <Link to="/chambres" className="hover:text-gold transition-colors">Chambres & Suites</Link>
            <Link to="/experiences" className="hover:text-gold transition-colors">Expériences</Link>
            <Link to="/a-propos" className="hover:text-gold transition-colors">À Propos</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg text-gold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm font-body">
            <span className="flex items-center gap-2"><MapPin size={16} className="text-gold" /> 12 Derb Sidi Bouloukat, Médina, Marrakech</span>
            <span className="flex items-center gap-2"><Phone size={16} className="text-gold" /> +212 5 24 38 76 00</span>
            <span className="flex items-center gap-2"><Mail size={16} className="text-gold" /> contact@riadsultana.com</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/20 mt-12 pt-8 text-center text-xs text-ivory/50 font-body">
        © 2026 Riad Sultana. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
