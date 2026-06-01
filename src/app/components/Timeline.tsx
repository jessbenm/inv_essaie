import { motion } from "motion/react";
import { Heart, Sparkles, Star } from "lucide-react";

export function Timeline() {
  const events = [
    {
      icon: Heart,
      title: "Les Familles Benmrah & Bouchikh",
      date: "Une Union",
      description: "Deux familles qui se rencontrent pour célébrer l'amour",
    },
    {
      icon: Sparkles,
      title: "Traditions Kabyles - Tlemcen",
      date: "Héritage",
      description: "Dans le respect de nos traditions et de notre culture",
    },
    {
      icon: Star,
      title: "Les Fiançailles",
      date: "26 Juin 2026",
      description: "Le début d'une belle aventure ensemble",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#F2E6D8] to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-6xl text-[#2F5D50] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            L'Union de Deux Familles
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#D4AF37] rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {events.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`flex items-center gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    className="bg-white/80 backdrop-blur-md border-2 border-[#D4AF37] rounded-2xl p-6 shadow-xl"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(47, 93, 80, 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                      <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
                      <p
                        className="text-lg text-[#D4AF37]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {event.date}
                      </p>
                    </div>
                    <h3
                      className="text-2xl text-[#2F5D50] mb-2"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="text-[#5A7A6E] italic"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center icon */}
                <div className="relative shrink-0">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#2F5D50] to-[#D4AF37] rounded-full flex items-center justify-center shadow-xl relative z-10"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#2F5D50] to-[#D4AF37] rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
