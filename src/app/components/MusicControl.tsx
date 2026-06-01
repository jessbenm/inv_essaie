import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play on mount (with user interaction)
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Auto-play blocked, user will need to click
          setIsPlaying(false);
        });
      }
    };

    // Small delay to ensure everything is loaded
    setTimeout(playAudio, 1000);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Hidden audio element - User will add their music file */}
      <audio
        ref={audioRef}
        loop
        src="" // User will add their music file URL here
      />

      {/* Floating music control button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#2F5D50] to-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow"
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-white" />
        ) : (
          <VolumeX className="w-6 h-6 text-white" />
        )}

        {/* Pulsing ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 border-2 border-white rounded-full"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
      </motion.button>
    </>
  );
}
