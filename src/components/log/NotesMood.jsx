import { MOODS } from '../../data/logActivity.js'

export default function NotesMood({ notes, onNotes, mood, onMood }) {
  return (
    <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
        <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="session-notes">
          Catatan Tambahan &amp; Mood Latihan
        </label>
        <div className="flex items-center gap-space-xs">
          {MOODS.map((m) => {
            const active = m.id === mood
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => onMood(m.id)}
                className={
                  active
                    ? 'px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md flex items-center gap-1 transition-all'
                    : 'px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1 transition-all'
                }
              >
                <span>{m.emoji}</span>
                <span>{m.label}</span>
              </button>
            )
          })}
        </div>
      </div>
      <textarea
        id="session-notes"
        rows={3}
        value={notes}
        onChange={(e) => onNotes(e.target.value)}
        placeholder="Ceritakan bagaimana performa lari hari ini, rute tanjakan, atau target repetisi..."
        className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl focus:outline-none focus:bg-surface-container font-body-md text-body-md placeholder:text-on-surface-variant/40"
      ></textarea>
    </div>
  )
}
