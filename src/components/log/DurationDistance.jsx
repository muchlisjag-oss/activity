export default function DurationDistance({ hours, minutes, onHours, onMinutes, distance, onDistance, disabled }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
      <div className="flex flex-col gap-space-sm">
        <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Durasi Latihan</span>
        <div className="flex items-center gap-space-xs">
          <div className="flex-1 flex items-center bg-surface-container-lowest rounded-xl px-space-sm py-space-xs">
            <input
              type="number"
              min={0}
              max={23}
              value={hours}
              onChange={(e) => onHours(Number(e.target.value))}
              className="w-full bg-transparent text-center font-display-stat text-headline-sm text-primary focus:outline-none"
            />
            <span className="text-on-surface-variant font-label-sm text-label-sm pr-1">JAM</span>
          </div>
          <div className="flex-1 flex items-center bg-surface-container-lowest rounded-xl px-space-sm py-space-xs">
            <input
              type="number"
              min={0}
              max={59}
              value={minutes}
              onChange={(e) => onMinutes(Number(e.target.value))}
              className="w-full bg-transparent text-center font-display-stat text-headline-sm text-primary focus:outline-none"
            />
            <span className="text-on-surface-variant font-label-sm text-label-sm pr-1">MENIT</span>
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-space-sm ${disabled ? 'opacity-40 pointer-events-none' : ''}`}>
        <div className="flex items-center justify-between">
          <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="distance-input">
            Jarak Tempuh
          </label>
          <span className="font-label-sm text-label-sm text-secondary uppercase">GPS Terlacak</span>
        </div>
        <div className="relative flex items-center">
          <input
            id="distance-input"
            type="number"
            step="0.1"
            value={distance}
            onChange={(e) => onDistance(Number(e.target.value))}
            className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl focus:outline-none focus:bg-surface-container font-display-stat text-headline-sm text-on-surface transition-colors"
          />
          <span className="absolute right-4 text-on-surface-variant font-headline-sm text-headline-sm">KM</span>
        </div>
      </div>
    </div>
  )
}
