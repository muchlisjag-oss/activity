import { SPORTS } from '../../data/logActivity.js'

export default function SportSelector({ sportId, onSelect }) {
  const selected = SPORTS.find((s) => s.id === sportId)
  return (
    <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
        <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[16px] text-primary">fitness_center</span>
          <span>Pilih Jenis Olahraga</span>
        </span>
        <span className="font-label-sm text-label-sm text-primary uppercase">{selected?.label} (Terpilih)</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs">
        {SPORTS.map((s) => {
          const active = s.id === sportId
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelect(s.id)}
              className={
                active
                  ? 'flex flex-col items-center justify-center p-space-sm rounded-xl bg-primary text-on-primary font-title-md text-title-md transition-all'
                  : 'flex flex-col items-center justify-center p-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-title-md text-title-md transition-all'
              }
            >
              <span className="material-symbols-outlined text-[24px] mb-1">{s.icon}</span>
              <span className="font-label-md text-label-md text-center">{s.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
