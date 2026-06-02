import { motion } from "motion/react";
import { Quote as QuoteIcon } from "lucide-react";

export function Quote() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#2F5D50] to-[#3a6b5a] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37] rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#F2E6D8] rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <QuoteIcon className="w-16 h-16 text-[#D4AF37] mx-auto mb-8 opacity-50" />

          <motion.blockquote
            className="text-2xl md:text-4xl lg:text-5xl text-[#F2E6D8] mb-8 leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            "L'amour ne se trouve pas, il se construit. Et nous construisons le nôtre,
            pierre par pierre, sourire par sourire, pour l'éternité."
          </motion.blockquote>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="h-px w-16 bg-[#D4AF37]" />
            <p
              className="text-[#D4AF37] tracking-widest text-lg"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              S & N
            </p>
            <div className="h-px w-16 bg-[#D4AF37]" />
          </motion.div>

          {/* Decorative hearts */}
          <motion.div
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#D4AF37] rounded-full"
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
        </motion.div>
      </div>
    </section>
  );
}
