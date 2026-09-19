import { DAILY_CALORIE_GOAL } from '../../data/logActivity.js'

export default function CalorieCard({ sportLabel, weight, durationLabel, calories, percent, pace }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest p-space-lg shadow-xl flex flex-col justify-between">
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/15 rounded-full blur-2xl pointer-events-none"></div>
      <div className="flex items-center justify-between z-10 mb-space-md">
        <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-wider">
          <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
          <span>Estimasi Kalori Terbakar</span>
        </div>
        <span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm">
          METrik Presisi
        </span>
      </div>

      <div className="flex flex-col z-10 my-space-sm">
        <div className="flex items-baseline gap-2">
          <span className="font-display-stat text-display-stat text-primary font-bold tracking-tight">
            ~{calories}
          </span>
          <span className="font-headline-md text-headline-md text-on-surface font-semibold">kkal</span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Dihitung real-time dari MET (<span>{sportLabel}</span>), berat badan{' '}
          <span className="text-on-surface font-semibold">{weight.toFixed(1)} kg</span>, dan durasi{' '}
          <span className="text-on-surface font-semibold">{durationLabel}</span>.
        </p>
      </div>

      <div className="w-full bg-surface-container-highest/60 rounded-full h-2.5 mt-space-md overflow-hidden z-10">
        <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase mt-2 z-10">
        <span>Target Harian: {DAILY_CALORIE_GOAL} kkal</span>
        <span className="text-primary font-bold">{percent}% Tercapai</span>
      </div>

      <div className="mt-space-md pt-space-sm flex items-center justify-between z-10">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[20px]">speed</span>
          <span className="font-body-md text-body-md text-on-surface-variant">Pace Rata-rata</span>
        </div>
        <span className="font-title-md text-title-md text-on-surface font-bold">{pace}</span>
      </div>
    </div>
  )
}
