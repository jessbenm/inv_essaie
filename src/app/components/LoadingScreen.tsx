import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#2F5D50] via-[#3a6b5a] to-[#2F5D50]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="text-5xl md:text-7xl mb-4 text-[#F2E6D8]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            W & S
          </h1>
          <motion.div
            className="h-1 w-32 mx-auto bg-[#D4AF37] rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"
              style={{ width: `${progress}%` }}
            />
          </motion.div>
          <motion.p
            className="mt-4 text-[#F2E6D8] tracking-widest"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress}%
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
