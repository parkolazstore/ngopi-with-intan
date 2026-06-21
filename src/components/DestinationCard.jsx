import { motion } from "framer-motion";
import { Check, Mountain, Waves } from "lucide-react";

const ICONS = { mountain: Mountain, waves: Waves };

// Kartu satu destinasi. Di-highlight saat dipilih.
export default function DestinationCard({ destination, selected, onSelect }) {
  const Icon = ICONS[destination.icon] ?? Mountain;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(destination)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl text-left shadow-lg transition-all duration-300 ${
        selected
          ? "ring-4 ring-rose-400 ring-offset-2 ring-offset-pink-50"
          : "ring-1 ring-black/5"
      }`}
    >
      {/* Gambar */}
      <div className="relative h-40 w-full overflow-hidden sm:h-44">
        <img
          src={destination.image}
          alt={destination.name}
          crossOrigin="anonymous"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} mix-blend-multiply`}
        />
        <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow">
          <Icon size={20} />
        </div>

        {/* Tanda terpilih */}
        {selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg"
          >
            <Check size={18} strokeWidth={3} />
          </motion.div>
        )}
      </div>

      {/* Konten */}
      <div className="bg-white p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {destination.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{destination.tagline}</p>
      </div>
    </motion.button>
  );
}
