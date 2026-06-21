import { motion } from "framer-motion";
import { ArrowRight, PartyPopper } from "lucide-react";
import { destinations } from "../data/destinations";
import DestinationCard from "./DestinationCard";

// Fase 3: Ucapan terima kasih + pilihan destinasi (pilih salah satu).
export default function DestinationChoice({ selected, onSelect, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
      className="w-full max-w-2xl rounded-3xl bg-white/70 p-6 text-center shadow-xl shadow-rose-200/50 backdrop-blur-md sm:p-8"
    >
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-500">
        <PartyPopper size={28} />
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
        Terima kasih telah menerima permintaan saya!
      </h1>
      <p className="mt-2 text-gray-500">
        Sekarang, pilih satu tempat yang ingin kita kunjungi bersama ✨
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {destinations.map((d) => (
          <DestinationCard
            key={d.id}
            destination={d}
            selected={selected?.id === d.id}
            onSelect={onSelect}
          />
        ))}
      </div>

      <motion.button
        type="button"
        onClick={onNext}
        disabled={!selected}
        whileHover={selected ? { scale: 1.04 } : undefined}
        whileTap={selected ? { scale: 0.97 } : undefined}
        className={`mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-lg font-semibold transition-all ${
          selected
            ? "cursor-pointer bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-400/40"
            : "cursor-not-allowed bg-gray-200 text-gray-400"
        }`}
      >
        Lanjut
        <ArrowRight size={20} />
      </motion.button>
    </motion.div>
  );
}
