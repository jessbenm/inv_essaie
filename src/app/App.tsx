import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { FloatingParticles } from "./components/FloatingParticles";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { PhotoGallery } from "./components/PhotoGallery";
import { EventDetails } from "./components/EventDetails";
import { Timeline } from "./components/Timeline";
import { Quote } from "./components/Quote";
import { RSVPForm } from "./components/RSVPForm";
import { MusicControl } from "./components/MusicControl";

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#F2E6D8] overflow-x-hidden"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <AnimatePresence mode="wait">
        {!loadingComplete && (
          <LoadingScreen onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>

      {loadingComplete && (
        <>
          <FloatingParticles />
          <MusicControl />

          <main>
            <Hero />
            <Countdown />
            <Quote />
            <PhotoGallery />
            <Timeline />
            <EventDetails />
            <RSVPForm />
          </main>

          <footer className="bg-gradient-to-br from-[#2F5D50] to-[#1F3D33] py-12 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h3
                className="text-3xl md:text-4xl text-[#F2E6D8] mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Selma & Nadir
              </h3>
              <div className="h-px w-24 bg-[#D4AF37] mx-auto mb-4" />
              <p
                className="text-[#F2E6D8]/80 text-lg mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                09 Septembre 2026 • Oran, Algérie
              </p>
              <p
                className="text-[#F2E6D8]/70 text-base mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Familles Benamar & Bouzid
              </p>
              <p className="text-[#F2E6D8]/60 text-sm mt-6">
                Avec tout notre amour
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
