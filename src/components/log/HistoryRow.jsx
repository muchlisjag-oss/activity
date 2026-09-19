import { formatDate, shortTime, sportIcon } from './historyHelpers.js'

export default function HistoryRow({ row, deleting, onDelete }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-colors">
      <div className="flex items-center gap-space-sm min-w-0">
        <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[22px]">{sportIcon(row.sport_id)}</span>
        </div>
        <div className="min-w-0">
          <p className="font-title-md text-title-md text-on-surface font-semibold truncate">
            {row.session_name}
            <span className="ml-2 font-label-sm text-label-sm text-primary uppercase">{row.sport_label}</span>
          </p>
          <p className="font-body-md text-label-sm text-on-surface-variant truncate">
            {formatDate(row.session_date)}
            {row.start_time ? ` • ${shortTime(row.start_time)}` : ''} •{' '}
            {row.duration_hours > 0 ? `${row.duration_hours}j ` : ''}
            {row.duration_minutes}mnt
            {Number(row.distance_km) > 0 ? ` • ${Number(row.distance_km)} km` : ''} • {row.intensity_id} • {row.mood_id}
          </p>
          {row.notes && <p className="font-body-md text-label-sm text-on-surface-variant/80 truncate">“{row.notes}”</p>}
        </div>
      </div>
      <div className="flex items-center gap-space-sm shrink-0">
        <div className="text-right">
          <span className="font-title-md text-body-md text-primary font-bold">
            {Number(row.calories).toLocaleString('id-ID')}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant block">kkal • {row.pace}</span>
        </div>
        <button type="button" disabled={deleting} onClick={onDelete} aria-label={`Hapus ${row.session_name}`} className="w-9 h-9 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-error hover:bg-error/10 flex items-center justify-center transition-colors disabled:opacity-50">
          <span className="material-symbols-outlined text-[18px]">delete</span>
        </button>
      </div>
    </div>
  )
}
