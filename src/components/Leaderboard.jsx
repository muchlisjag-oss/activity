import { AVATAR_RIAN, AVATAR_SARAH, AVATAR_DIMAS } from '../data/dashboard.js'

export default function Leaderboard() {
  return (
    <div className="bg-surface-container rounded-xl p-space-md shadow-md space-y-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[20px]">leaderboard</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Klasemen Teman</h3>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">Minggu Ini</span>
      </div>

      <div className="space-y-space-xs">
        <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
          <div className="flex items-center gap-space-sm">
            <span className="w-5 font-display-stat text-title-md text-primary font-bold">1</span>
            <img className="w-9 h-9 rounded-full object-cover" alt="Sarah Amanda" src={AVATAR_SARAH} />
            <div className="flex flex-col">
              <span className="font-title-md text-body-md text-on-surface font-semibold">Sarah Amanda</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">6 Sesi Latihan</span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-title-md text-body-md text-primary font-bold">3,400</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant block">kkal</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-space-sm rounded-xl bg-primary/10 border-l-4 border-primary hover:bg-primary/20 transition-colors shadow-sm">
          <div className="flex items-center gap-space-sm">
            <span className="w-5 font-display-stat text-title-md text-primary font-bold">2</span>
            <img alt="Profile Rian" className="w-9 h-9 rounded-full object-cover" src={AVATAR_RIAN} />
            <div className="flex flex-col">
              <span className="font-title-md text-body-md text-on-surface font-bold flex items-center gap-1">
                Rian Pratama
                <span className="bg-primary text-on-primary text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                  Anda
                </span>
              </span>
              <span className="font-label-sm text-label-sm text-primary">5 Sesi Latihan</span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-title-md text-body-md text-primary font-bold">3,100</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant block">kkal</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
          <div className="flex items-center gap-space-sm">
            <span className="w-5 font-display-stat text-title-md text-on-surface-variant font-bold">3</span>
            <img className="w-9 h-9 rounded-full object-cover" alt="Dimas Setiawan" src={AVATAR_DIMAS} />
            <div className="flex flex-col">
              <span className="font-title-md text-body-md text-on-surface font-semibold">Dimas Setiawan</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">4 Sesi Latihan</span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-title-md text-body-md text-on-surface font-bold">2,850</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant block">kkal</span>
          </div>
        </div>
      </div>

      <div className="pt-space-xs text-center">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          Selisih <span className="text-primary font-bold">300 kkal</span> untuk memimpin posisi pertama!
        </p>
      </div>
    </div>
  )
}
