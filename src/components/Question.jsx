import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// Fase 2: Pertanyaan ajakan. Tombol "Tidak" kabur saat didekati kursor.
export default function Question({ onYes }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [dodged, setDodged] = useState(0);

  const dodge = () => {
    // Pindahkan tombol ke posisi acak di sekitar area.
    const range = 140;
    const x = (Math.random() - 0.5) * range * 2;
    const y = (Math.random() - 0.5) * range;
    setNoPos({ x, y });
    setDodged((d) => d + 1);
  };

  const teasers = [
    "Yakin? Coba lagi 😜",
    "Hampir kena! 😆",
    "Tombolnya malu-malu 🙈",
    "Nggak akan bisa diklik~",
    "Pilih 'Ya' aja yuk 💕",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
      className="w-full max-w-lg rounded-3xl bg-white/70 p-8 text-center shadow-xl shadow-rose-200/50 backdrop-blur-md sm:p-10"
    >
      <motion.div
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Heart size={32} fill="currentColor" />
      </motion.div>

      <h1 className="mb-2 text-2xl font-semibold text-gray-800 sm:text-3xl">
        Apakah kamu ingin bermain bersama saya?
      </h1>
      <p className="mb-10 text-gray-500">Jawab dengan jujur ya 😊</p>

      <div className="relative flex items-center justify-center gap-4">
        <motion.button
          type="button"
          onClick={onYes}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="z-10 cursor-pointer rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-10 py-3.5 text-lg font-semibold text-white shadow-lg shadow-rose-400/40 transition-shadow hover:shadow-xl"
        >
          Ya 💖
        </motion.button>

        <motion.button
          type="button"
          onMouseEnter={dodge}
          onClick={dodge}
          animate={{ x: noPos.x, y: noPos.y }}
          transition={{ type: "spring", stiffness: 500, damping: 18 }}
          className="cursor-pointer rounded-full border border-gray-200 bg-white px-10 py-3.5 text-lg font-semibold text-gray-500 shadow-md"
        >
          Tidak
        </motion.button>
      </div>

      {dodged > 0 && (
        <motion.p
          key={dodged}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-sm font-medium text-rose-500"
        >
          {teasers[Math.min(dodged - 1, teasers.length - 1)]}
        </motion.p>
      )}
    </motion.div>
  );
}
