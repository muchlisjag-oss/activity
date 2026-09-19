import { WEEKLY_TARGETS } from '../data/dashboard.js'

export default function WeeklyTargets() {
  return (
    <div className="bg-surface-container rounded-xl p-space-md md:p-space-lg shadow-md space-y-space-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-headline-md text-headline-md text-on-surface">Target Mingguan</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Pantau capaian target siklus 7 hari berjalan</p>
        </div>
        <span className="font-label-sm text-label-sm bg-surface-container-high text-primary px-space-sm py-space-xs rounded-full">
          3 Sasaran Aktif
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {WEEKLY_TARGETS.map((g) => (
          <div key={g.title} className="bg-surface-container-low p-space-md rounded-xl space-y-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{g.tag}</span>
              <span className={`material-symbols-outlined text-[20px] ${g.iconColor}`}>{g.icon}</span>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">{g.title}</h4>
              <p className="font-body-md text-label-sm text-on-surface-variant">
                {g.before}
                <span className="text-on-surface font-bold">{g.bold}</span>
                {g.after}
              </p>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
              <div className={`h-full rounded-full ${g.barColor}`} style={{ width: g.bar }}></div>
            </div>
            <span className={`font-label-sm text-label-sm block ${g.footColor}`}>{g.foot}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
