import { motion } from "motion/react";
import { useState } from "react";
import { Send, Check } from "lucide-react";

export function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    attendance: "yes",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("RSVP submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#2F5D50] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h3
              className="text-3xl md:text-4xl text-[#2F5D50] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Merci pour votre confirmation !
            </h3>
            <p
              className="text-xl text-[#5A7A6E]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Nous avons hâte de célébrer avec vous
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#D4AF37] rounded-full opacity-10" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-[#2F5D50] rounded-full opacity-10" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-6xl text-[#2F5D50] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Confirmez Votre Présence
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#D4AF37] rounded-full mb-6" />
          <p
            className="text-xl text-[#5A7A6E] italic"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Nous serons ravis de vous accueillir
          </p>
        </motion.div>

        <motion.form
          className="bg-white/80 backdrop-blur-md border-2 border-[#D4AF37] rounded-2xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-[#2F5D50] mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/60 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>

            {/* Attendance */}
            <div>
              <label
                htmlFor="attendance"
                className="block text-[#2F5D50] mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Présence *
              </label>
              <select
                id="attendance"
                name="attendance"
                required
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/60 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
              >
                <option value="yes">Je serai présent(e)</option>
                <option value="no">Je ne pourrai pas assister</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-[#2F5D50] mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Message (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/60 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                placeholder="Vos meilleurs vœux pour les futurs mariés..."
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#2F5D50] to-[#3a6b5a] text-white py-4 rounded-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              Envoyer ma réponse
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
