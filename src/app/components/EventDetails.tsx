import { motion } from "motion/react";
import { MapPin, Calendar, Clock } from "lucide-react";

export function EventDetails() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F2E6D8] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-6xl text-[#2F5D50] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Détails de l'Événement
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#D4AF37] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Date & Time */}
          <motion.div
            className="bg-white/70 backdrop-blur-md border-2 border-[#D4AF37] rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Calendar className="w-12 h-12 text-[#D4AF37] mb-4" />
            <h3
              className="text-2xl md:text-3xl text-[#2F5D50] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Date & Heure
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <p
                  className="text-lg text-[#5A7A6E]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Vendredi, 25 Juin 2025
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                <p
                  className="text-lg text-[#5A7A6E]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  De midi jusqu'à 20h
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="bg-white/70 backdrop-blur-md border-2 border-[#D4AF37] rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MapPin className="w-12 h-12 text-[#D4AF37] mb-4" />
            <h3
              className="text-2xl md:text-3xl text-[#2F5D50] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Lieu
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <p
                  className="text-lg text-[#5A7A6E]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Oran
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <p
                  className="text-base text-[#5A7A6E]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Algerie
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="relative h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8438101810048!2d-0.6099031243973824!3d35.680847672587326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e890078700abb%3A0xf84b94ed8fc4e5f8!2sSalle%20des%20f%C3%AAtes%20Zenith!5e0!3m2!1sfr!2sdz!4v1780354521761!5m2!1sfr!2sdz"
           width="100%"
           height="500"
           style={{ border: 0 }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
           title="Carte de l'événement"
         />
          {/* Decorative overlay */}
          <div className="absolute inset-0 border-8 border-[#D4AF37]/20 pointer-events-none" />
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p
            className="text-lg text-[#5A7A6E] italic"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Nous serons ravis de vous accueillir
          </p>
        </motion.div>
      </div>
    </section>
  );
}
