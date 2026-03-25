import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import SectionTitle from "@/components/SectionTitle";

const roomTypes = [
  "Suite Royale — 2 800 MAD",
  "Chambre Jardin — 1 200 MAD",
  "Suite Piscine — 3 500 MAD",
  "Chambre Traditionnelle — 900 MAD",
  "Suite Hammam — 3 200 MAD",
  "Chambre Patio — 1 400 MAD",
];

const Contact = () => {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    checkin: "",
    checkout: "",
    personnes: "2",
    chambre: roomTypes[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande envoyée avec succès ! Nous vous contacterons sous 24h.", {
      duration: 5000,
    });
    setForm({ nom: "", email: "", telephone: "", checkin: "", checkout: "", personnes: "2", chambre: roomTypes[0], message: "" });
  };

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="pt-20">
      <section className="section-padding bg-dark zellige-pattern text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl text-ivory"
        >
          Réservation & Contact
        </motion.h1>
        <p className="text-ivory/60 font-body mt-4 max-w-xl mx-auto">
          Réservez votre séjour d'exception ou contactez-nous pour toute demande.
        </p>
        <div className="w-16 h-0.5 gold-gradient mx-auto mt-6" />
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="font-display text-2xl mb-6">Formulaire de Réservation</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-body text-muted-foreground mb-1 block">Nom complet *</label>
                  <input
                    required
                    value={form.nom}
                    onChange={(e) => update("nom", e.target.value)}
                    className="w-full border border-border bg-card rounded-sm px-4 py-2.5 font-body text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-body text-muted-foreground mb-1 block">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full border border-border bg-card rounded-sm px-4 py-2.5 font-body text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-body text-muted-foreground mb-1 block">Téléphone</label>
                  <input
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    className="w-full border border-border bg-card rounded-sm px-4 py-2.5 font-body text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-body text-muted-foreground mb-1 block">Nombre de personnes *</label>
                  <select
                    required
                    value={form.personnes}
                    onChange={(e) => update("personnes", e.target.value)}
                    className="w-full border border-border bg-card rounded-sm px-4 py-2.5 font-body text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "personne" : "personnes"}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-body text-muted-foreground mb-1 block">Date d'arrivée *</label>
                  <input
                    required
                    type="date"
                    value={form.checkin}
                    onChange={(e) => update("checkin", e.target.value)}
                    className="w-full border border-border bg-card rounded-sm px-4 py-2.5 font-body text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-body text-muted-foreground mb-1 block">Date de départ *</label>
                  <input
                    required
                    type="date"
                    value={form.checkout}
                    onChange={(e) => update("checkout", e.target.value)}
                    className="w-full border border-border bg-card rounded-sm px-4 py-2.5 font-body text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-body text-muted-foreground mb-1 block">Type de chambre *</label>
                <select
                  required
                  value={form.chambre}
                  onChange={(e) => update("chambre", e.target.value)}
                  className="w-full border border-border bg-card rounded-sm px-4 py-2.5 font-body text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                >
                  {roomTypes.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-body text-muted-foreground mb-1 block">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full border border-border bg-card rounded-sm px-4 py-2.5 font-body text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none transition resize-none"
                  placeholder="Demandes spéciales, allergies, occasions..."
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-dark-soft font-bold text-sm tracking-wider uppercase py-3.5 rounded-sm hover:opacity-90 transition-opacity"
              >
                Envoyer la demande de réservation
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="font-display text-2xl mb-6">Informations</h2>
              <div className="space-y-4 font-body text-sm">
                <div className="flex gap-3">
                  <MapPin size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Adresse</p>
                    <p className="text-muted-foreground">12 Derb Sidi Bouloukat, Médina<br />Marrakech 40000, Maroc</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Téléphone</p>
                    <p className="text-muted-foreground">+212 5 24 38 76 00</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-muted-foreground">contact@riadsultana.com</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Réception</p>
                    <p className="text-muted-foreground">24h/24, 7j/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-sm overflow-hidden shadow-md">
              <iframe
                title="Riad Sultana Marrakech"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0!2d-7.9893!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzQ2LjIiTiA3wrA1OSczMy41Ilc!5e0!3m2!1sfr!2sma!4v1600000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
