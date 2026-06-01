import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="floral" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="30" fill="#2F5D50" opacity="0.1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#floral)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Animated ornament top */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="w-24 h-24 border-2 border-[#D4AF37] rounded-full flex items-center justify-center relative">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-10 h-10 text-[#D4AF37] fill-[#D4AF37]" />
            </motion.div>
            <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-full animate-ping opacity-20" />
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl mb-6 text-[#2F5D50]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Wafaa <span className="text-[#D4AF37]">&</span> Sofiane
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <p
              className="text-xl md:text-2xl text-[#2F5D50] tracking-wide"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Fiançailles
            </p>
            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <motion.p
            className="text-2xl md:text-4xl text-[#5A7A6E] italic mb-8"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            Deux cœurs, une promesse éternelle
          </motion.p>

          <motion.div
            className="inline-block px-8 py-4 border-2 border-[#D4AF37] rounded-lg backdrop-blur-sm bg-white/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
          >
            <p
              className="text-3xl md:text-5xl text-[#2F5D50]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              26 Juin 2026
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative bottom */}
        <motion.div
          className="mt-12 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#D4AF37]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
