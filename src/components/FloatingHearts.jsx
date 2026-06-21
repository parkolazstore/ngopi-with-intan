import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// Latar belakang dekoratif: hati-hati kecil yang melayang naik perlahan.
const HEARTS = [
  { left: "8%", size: 18, duration: 11, delay: 0, opacity: 0.5 },
  { left: "20%", size: 28, duration: 14, delay: 2, opacity: 0.35 },
  { left: "35%", size: 14, duration: 9, delay: 1, opacity: 0.45 },
  { left: "50%", size: 22, duration: 13, delay: 3, opacity: 0.3 },
  { left: "64%", size: 16, duration: 10, delay: 0.5, opacity: 0.5 },
  { left: "78%", size: 30, duration: 15, delay: 2.5, opacity: 0.3 },
  { left: "90%", size: 20, duration: 12, delay: 1.5, opacity: 0.4 },
];

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {HEARTS.map((h, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-40px] text-rose-400"
          style={{ left: h.left, opacity: h.opacity }}
          animate={{ y: ["0vh", "-110vh"], rotate: [0, 20, -20, 0] }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart size={h.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
