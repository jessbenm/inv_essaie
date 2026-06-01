import { motion } from "motion/react";
import { useMemo } from "react";

export function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 2 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#D4AF37] opacity-20"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.3, 0.3, 0],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
