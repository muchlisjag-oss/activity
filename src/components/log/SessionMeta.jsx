export default function SessionMeta({ sessionName, onSessionName, date, onDate, time, onTime }) {
  return (
    <>
      <div className="flex flex-col gap-space-sm">
        <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="session-name">
          Nama Sesi
        </label>
        <div className="relative">
          <input
            id="session-name"
            type="text"
            value={sessionName}
            onChange={(e) => onSessionName(e.target.value)}
            placeholder="e.g. Lari Sore Keliling Kompleks"
            className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl focus:outline-none focus:bg-surface-container font-title-md text-title-md placeholder:text-on-surface-variant/40 transition-colors"
          />
          <span className="absolute right-3 top-2.5 text-on-surface-variant/50 material-symbols-outlined text-[20px]">edit</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-space-sm">
          <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="session-date">
            Tanggal Pelaksanaan
          </label>
          <input
            id="session-date"
            type="date"
            value={date}
            onChange={(e) => onDate(e.target.value)}
            className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl focus:outline-none focus:bg-surface-container font-body-md text-body-md"
          />
        </div>
        <div className="flex flex-col gap-space-sm">
          <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="session-time">
            Jam Mulai
          </label>
          <input
            id="session-time"
            type="time"
            value={time}
            onChange={(e) => onTime(e.target.value)}
            className="w-full bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl focus:outline-none focus:bg-surface-container font-body-md text-body-md"
          />
        </div>
      </div>
    </>
  )
}
