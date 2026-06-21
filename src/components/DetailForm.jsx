import { motion } from "framer-motion";
import { ArrowLeft, CalendarHeart, MapPin, MessageCircleHeart } from "lucide-react";

// Fase 4: Form detail (tanggal + pesan) untuk destinasi yang dipilih.
export default function DetailForm({
  destination,
  date,
  setDate,
  message,
  setMessage,
  onSubmit,
  onBack,
}) {
  const canSubmit = date && message.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) onSubmit();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
      className="w-full max-w-lg rounded-3xl bg-white/70 p-6 shadow-xl shadow-rose-200/50 backdrop-blur-md sm:p-8"
    >
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-rose-500"
      >
        <ArrowLeft size={16} />
        Ganti destinasi
      </button>

      <h1 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
        Atur rencananya yuk 🗓️
      </h1>

      {/* Ringkasan destinasi terpilih */}
      {destination && (
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-rose-50 p-3">
          <img
            src={destination.image}
            alt={destination.name}
            crossOrigin="anonymous"
            className="h-14 w-14 rounded-xl object-cover"
          />
          <div className="flex items-center gap-1.5 text-left">
            <MapPin size={16} className="text-rose-500" />
            <div>
              <p className="text-xs text-gray-400">Destinasi pilihanmu</p>
              <p className="font-semibold text-gray-800">{destination.name}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tanggal */}
      <div className="mt-6 text-left">
        <label
          htmlFor="tanggal"
          className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700"
        >
          <CalendarHeart size={16} className="text-rose-500" />
          Kapan kita pergi?
        </label>
        <input
          id="tanggal"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition-colors focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
        />
      </div>

      {/* Pesan */}
      <div className="mt-5 text-left">
        <label
          htmlFor="pesan"
          className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700"
        >
          <MessageCircleHeart size={16} className="text-rose-500" />
          Pesan untuk saya
        </label>
        <textarea
          id="pesan"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis sesuatu yang manis di sini..."
          className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition-colors placeholder:text-gray-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
        />
      </div>

      <motion.button
        type="submit"
        disabled={!canSubmit}
        whileHover={canSubmit ? { scale: 1.03 } : undefined}
        whileTap={canSubmit ? { scale: 0.97 } : undefined}
        className={`mt-7 w-full rounded-full py-3.5 text-lg font-semibold transition-all ${
          canSubmit
            ? "cursor-pointer bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-400/40"
            : "cursor-not-allowed bg-gray-200 text-gray-400"
        }`}
      >
        Selesai 🎉
      </motion.button>
    </motion.form>
  );
}
