import { useState } from 'react'

const WORKOUT_TYPES = [
  { icon: 'directions_run', label: 'Lari', desc: 'GPS + HR sensor' },
  { icon: 'directions_bike', label: 'Sepeda', desc: 'GPS rute luar' },
  { icon: 'fitness_center', label: 'Gym', desc: 'Strength & otot' },
  { icon: 'pool', label: 'Renang', desc: 'Kolam / open water' },
]

export default function WorkoutModal({ open, onClose, onSave }) {
  const [type, setType] = useState('Lari')
  const [duration, setDuration] = useState(45)
  const [distance, setDistance] = useState(5.2)

  if (!open) return null
  const estCalories = Math.round(duration * 11.4)

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-surface-container rounded-xl p-space-lg shadow-2xl space-y-space-md">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Mulai Berolahraga</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Catat Latihan Baru</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Pilih mode sensor detak jantung atau rekam rute GPS terkini.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="w-9 h-9 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
          {WORKOUT_TYPES.map((t) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setType(t.label)}
              className={`p-space-sm rounded-xl border text-left transition-all ${
                type === t.label
                  ? 'bg-primary/10 border-primary'
                  : 'bg-surface-container-low border-transparent hover:bg-surface-container-high'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${type === t.label ? 'text-primary' : 'text-on-surface-variant'}`}>
                {t.icon}
              </span>
              <span className="block font-title-md text-body-md text-on-surface font-semibold mt-1">{t.label}</span>
              <span className="block font-label-sm text-label-sm text-on-surface-variant">{t.desc}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <label className="bg-surface-container-low p-space-sm rounded-xl block">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Durasi (menit)</span>
            <input
              type="number"
              min={5}
              max={300}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="mt-1 w-full bg-transparent font-headline-sm text-headline-sm text-on-surface outline-none"
            />
            <input
              type="range"
              min={5}
              max={180}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-[#9ee939]"
            />
          </label>
          <label className="bg-surface-container-low p-space-sm rounded-xl block">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Jarak (km)</span>
            <input
              type="number"
              step="0.1"
              min={0}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="mt-1 w-full bg-transparent font-headline-sm text-headline-sm text-on-surface outline-none"
            />
            <span className="font-body-md text-body-md text-on-surface-variant">
              Estimasi: <span className="text-primary font-bold">{estCalories} kkal</span>
            </span>
          </label>
        </div>

        <div className="flex items-center gap-space-sm">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-space-sm px-space-md rounded-xl bg-surface-container-high text-on-surface font-title-md hover:bg-surface-container-highest transition-colors"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={() => onSave({ type, duration, distance, calories: estCalories })}
            className="flex-1 py-space-sm px-space-md rounded-xl bg-primary text-on-primary font-title-md hover:bg-primary-fixed-dim transition-colors flex items-center justify-center gap-1"
          >
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            Simpan Latihan
          </button>
        </div>
      </div>
    </div>
  )
}
