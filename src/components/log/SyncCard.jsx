import { RECORD_IMG } from '../../data/logActivity.js'

function ServiceRow({ initials, initialsClasses, title, subtitle, checked, onChange, toggleId }) {
  return (
    <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-lowest">
      <div className="flex items-center gap-space-sm">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${initialsClasses}`}>
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="font-title-md text-title-md text-on-surface leading-none">{title}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{subtitle}</span>
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input id={toggleId} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only peer" />
        <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-primary after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
    </div>
  )
}

export default function SyncCard({ strava, onStravaChange, googleFit, onGoogleFitChange, onSync }) {
  const activeCount = (strava ? 1 : 0) + (googleFit ? 1 : 0)
  return (
    <div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-md md:p-space-lg shadow-xl flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs font-title-md text-title-md text-on-surface">
          <span className="material-symbols-outlined text-secondary text-[22px]">sync</span>
          <span>Sinkronisasi Otomatis</span>
        </div>
        <span className="font-label-sm text-label-sm text-primary uppercase flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          {activeCount} Layanan Aktif
        </span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Tersambung ke Strava &amp; Google Fit untuk impor otomatis rute GPS, detak jantung sensor dada, dan cadence.
      </p>
      <div className="flex flex-col gap-space-xs">
        <ServiceRow
          initials="ST"
          initialsClasses="bg-orange-600/20 text-orange-400"
          title="Strava Athletics"
          subtitle="Terhubung: Rian_Pratama98"
          checked={strava}
          onChange={onStravaChange}
          toggleId="toggle-strava"
        />
        <ServiceRow
          initials="GF"
          initialsClasses="bg-blue-600/20 text-blue-400"
          title="Google Fit"
          subtitle="Heart Points Synced"
          checked={googleFit}
          onChange={onGoogleFitChange}
          toggleId="toggle-googlefit"
        />
      </div>
      <button
        type="button"
        onClick={onSync}
        className="w-full py-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-title-md text-title-md flex items-center justify-center gap-space-xs transition-colors"
      >
        <span className="material-symbols-outlined text-[18px]">cloud_download</span>
        <span>Tarik Data Otomatis</span>
      </button>
    </div>
  )
}

export function RecordBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl h-44 shadow-lg flex items-end p-space-md">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${RECORD_IMG}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/70 to-transparent"></div>
      <div className="relative z-10 flex items-center justify-between w-full">
        <div>
          <span className="font-label-sm text-label-sm uppercase text-primary">Rekor Pribadi Terakhir</span>
          <p className="font-headline-sm text-headline-sm text-on-surface font-bold">5K PB: 22m 14s</p>
        </div>
        <span className="material-symbols-outlined text-primary text-[28px]">military_tech</span>
      </div>
    </div>
  )
}
