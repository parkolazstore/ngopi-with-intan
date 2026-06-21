import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";

// Fase 1: Amplop tertutup. Diklik untuk membuka dan lanjut ke pertanyaan.
export default function Envelope({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      className="flex flex-col items-center text-center"
    >
      <motion.p
        className="mb-8 font-script text-3xl text-rose-500 sm:text-4xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Untuk Intan tersayang
      </motion.p>

      <motion.button
        type="button"
        onClick={onOpen}
        className="group relative cursor-pointer outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
        aria-label="Buka amplop"
      >
        {/* Badan amplop */}
        <div className="relative h-44 w-72 rounded-2xl bg-gradient-to-br from-rose-300 to-pink-400 shadow-2xl shadow-rose-300/50 sm:h-52 sm:w-96">
          {/* Lipatan bawah amplop */}
          <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-2xl">
            <div className="absolute -bottom-1/2 left-1/2 h-full w-[140%] -translate-x-1/2 rounded-t-[100%] bg-rose-200/40" />
          </div>
          {/* Tutup atas amplop (segitiga) */}
          <div
            className="absolute inset-x-0 top-0 h-1/2 origin-top transition-transform duration-500 group-hover:[transform:rotateX(25deg)]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: "linear-gradient(to bottom right, #fda4af, #f472b6)",
            }}
          />
          {/* Segel hati di tengah */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-rose-500 shadow-lg">
            <Heart size={26} fill="currentColor" />
          </div>
        </div>
      </motion.button>

      <motion.div
        className="mt-10 flex items-center gap-2 rounded-full bg-white/70 px-5 py-2.5 text-sm font-medium text-rose-600 shadow-sm backdrop-blur-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Mail size={18} />
        <span>Buka pesan ini dari saya</span>
      </motion.div>
    </motion.div>
  );
}
