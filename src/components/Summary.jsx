import { useRef, useState } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas-pro";
import {
  CalendarHeart,
  Download,
  Heart,
  MapPin,
  MessageCircleHeart,
  RotateCcw,
} from "lucide-react";

// Format tanggal "2026-06-21" -> "Minggu, 21 Juni 2026"
function formatTanggal(value) {
  if (!value) return "-";
  const d = new Date(value + "T00:00:00");
  return d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Fase 5: Kartu rekapitulasi + tombol simpan sebagai gambar.
export default function Summary({ destination, date, message, onReset }) {
  const cardRef = useRef(null);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!cardRef.current) return;
    setSaving(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });
      const link = document.createElement("a");
      link.download = "rencana-liburan-intan.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Gagal menyimpan gambar:", err);
      alert("Maaf, gagal menyimpan gambar. Coba lagi ya.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      className="flex w-full max-w-md flex-col items-center"
    >
      {/* Kartu Rekapitulasi (elemen yang di-screenshot) */}
      <div
        ref={cardRef}
        className="w-full overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 to-pink-100 p-1 shadow-2xl shadow-rose-300/40"
      >
        <div className="rounded-[1.35rem] bg-white/80 p-6 backdrop-blur-sm sm:p-8">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-500">
              <Heart size={28} fill="currentColor" />
            </div>
            <p className="font-script text-3xl text-rose-500">
              Rencana Liburan Kita
            </p>
            <p className="mt-1 text-sm text-gray-400">Spesial untuk Intan</p>
          </div>

          {/* Gambar destinasi */}
          {destination && (
            <div className="mt-5 overflow-hidden rounded-2xl">
              <img
                src={destination.image}
                alt={destination.name}
                crossOrigin="anonymous"
                className="h-40 w-full object-cover"
              />
            </div>
          )}

          {/* Detail */}
          <div className="mt-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-rose-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Destinasi
                </p>
                <p className="font-semibold text-gray-800">
                  {destination?.name ?? "-"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-rose-500">
                <CalendarHeart size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Tanggal
                </p>
                <p className="font-semibold text-gray-800">
                  {formatTanggal(date)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-rose-500">
                <MessageCircleHeart size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Pesan
                </p>
                <p className="whitespace-pre-wrap font-medium italic text-gray-700">
                  "{message || "-"}"
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center font-script text-xl text-rose-400">
            Sampai jumpa di sana, ya! 💕
          </p>
        </div>
      </div>

      {/* Tombol aksi (tidak ikut ter-screenshot) */}
      <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
        <motion.button
          type="button"
          onClick={handleSave}
          disabled={saving}
          whileHover={{ scale: saving ? 1 : 1.03 }}
          whileTap={{ scale: saving ? 1 : 0.97 }}
          className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-rose-400/40 disabled:opacity-70"
        >
          <Download size={20} />
          {saving ? "Menyimpan..." : "Simpan sebagai Gambar"}
        </motion.button>

        <motion.button
          type="button"
          onClick={onReset}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-gray-600 shadow-md ring-1 ring-black/5"
        >
          <RotateCcw size={18} />
          Ulangi
        </motion.button>
      </div>
    </motion.div>
  );
}
