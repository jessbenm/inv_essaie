import { motion } from "motion/react";
import { Heart } from "lucide-react";
import salleImage from "../../imports/image.jpg";

export function PhotoGallery() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2F5D50] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-12 h-12 text-[#D4AF37] mx-auto mb-4 fill-[#D4AF37]" />
          <h2
            className="text-4xl md:text-6xl text-[#2F5D50] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Notre Salle de Réception
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#D4AF37] rounded-full" />
        </motion.div>

        <motion.div
          className="relative group max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-video bg-gradient-to-br from-[#2F5D50]/10 to-[#D4AF37]/10 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
            {/* Venue photo */}
            <img
              src={salleImage}
              alt="Salle de réception"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#2F5D50]/90 via-[#2F5D50]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8"
              initial={false}
            >
              <div className="text-center w-full">
                <p
                  className="text-white text-2xl md:text-3xl mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Un cadre élégant pour notre célébration
                </p>
                <p
                  className="text-[#F2E6D8] text-lg"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                   Oran
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative frame corners */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        <motion.p
          className="text-center mt-12 text-[#5A7A6E] text-lg italic"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Un lieu magique pour célébrer l'union de nos familles
        </motion.p>
      </div>
    </section>
  );
}
