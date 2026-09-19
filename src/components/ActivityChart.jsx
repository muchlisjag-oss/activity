import { useState } from 'react'
import { WEEKLY_CHART } from '../data/dashboard.js'

const FILTERS = [
  { label: 'Semua', active: true },
  { label: 'Lari', dot: 'bg-primary' },
  { label: 'Sepeda', dot: 'bg-secondary' },
  { label: 'Gym', dot: 'bg-tertiary' },
]

export default function ActivityChart() {
  const [filter, setFilter] = useState('Semua')
  const [tooltip, setTooltip] = useState(null)

  return (
    <div className="bg-surface-container rounded-xl p-space-md md:p-space-lg shadow-md space-y-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[20px]">monitoring</span>
            <h3 className="font-headline-md text-headline-md text-on-surface">Tren Aktivitas Mingguan</h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Perbandingan volume kalori harian dan total menit latihan aktif
          </p>
        </div>
        <div className="flex items-center gap-space-xs bg-surface-container-low p-1 rounded-xl self-start">
          {FILTERS.map((f) => (
            <button
              key={f.label}
              type="button"
              onClick={() => setFilter(f.label)}
              className={
                filter === f.label
                  ? 'px-space-sm py-1 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md transition-colors flex items-center gap-1'
                  : 'px-space-sm py-1 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1'
              }
            >
              {f.dot && <span className={`w-2 h-2 rounded-full ${f.dot}`}></span>}
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full pt-4" onMouseLeave={() => setTooltip(null)}>
        {tooltip && (
          <div
            className="absolute bg-surface-container-highest/95 backdrop-blur-md px-space-sm py-space-xs rounded-lg shadow-xl pointer-events-none text-left z-20"
            style={{ left: tooltip.x, top: 0 }}
          >
            <span className="font-label-sm text-label-sm text-primary block">{tooltip.day}</span>
            <span className="font-title-md text-title-md text-on-surface font-bold">{tooltip.cal}</span>
            <span className="font-body-md text-label-sm text-on-surface-variant block">{tooltip.min}</span>
          </div>
        )}

        <div className="w-full h-64 flex items-end justify-between gap-2 sm:gap-4 px-2 pt-6 pb-2">
          {WEEKLY_CHART.map((d) => (
            <div
              key={d.short}
              className="flex-1 flex flex-col items-center gap-2 cursor-pointer"
              onMouseEnter={(e) => {
                const parent = e.currentTarget.closest('.relative').getBoundingClientRect()
                const rect = e.currentTarget.getBoundingClientRect()
                setTooltip({
                  day: d.day,
                  cal: d.cal,
                  min: d.min,
                  x: Math.max(0, rect.left - parent.left + rect.width / 2 - 60),
                })
              }}
            >
              <div
                className={`w-full flex items-end justify-center gap-1 h-48 rounded-t-lg p-1 transition-colors hover:bg-surface-container-high ${
                  d.today ? 'bg-surface-container-high/60 ring-1 ring-primary/40' : 'bg-surface-container-low/40'
                }`}
              >
                <div
                  className={`w-full max-w-[16px] rounded-t-sm bg-primary transition-all duration-300 hover:brightness-125 ${
                    d.glowStrong
                      ? 'shadow-[0_0_12px_rgba(158,233,57,0.8)]'
                      : d.glow
                        ? 'shadow-[0_0_8px_rgba(158,233,57,0.5)]'
                        : ''
                  }`}
                  style={{ height: d.primaryH }}
                ></div>
                <div
                  className={`w-full max-w-[16px] rounded-t-sm transition-all duration-300 opacity-70 ${d.secondaryColor}`}
                  style={{ height: d.secondaryH }}
                ></div>
              </div>
              <span
                className={
                  d.highlight
                    ? 'font-label-sm text-label-sm text-primary font-bold'
                    : 'font-label-sm text-label-sm text-on-surface-variant'
                }
              >
                {d.short}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-space-lg pt-space-sm border-t border-surface-container-high text-label-sm">
          <div className="flex items-center gap-space-xs">
            <div className="w-3 h-3 rounded-sm bg-primary"></div>
            <span className="text-on-surface-variant">Kalori Terbakar (kkal)</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <div className="w-3 h-3 rounded-sm bg-secondary"></div>
            <span className="text-on-surface-variant">Waktu Aktif (Menit)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
