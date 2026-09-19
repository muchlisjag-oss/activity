import { BADGES } from '../data/dashboard.js'

export default function Badges() {
  return (
    <div className="bg-surface-container rounded-xl p-space-md shadow-md space-y-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">military_tech</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Pencapaian Terbaru</h3>
        </div>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="font-label-sm text-label-sm text-primary hover:underline uppercase"
        >
          Lihat Semua
        </a>
      </div>
      <div className="space-y-space-sm">
        {BADGES.map((b) => (
          <div
            key={b.title}
            className="flex items-center gap-space-md p-space-sm bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${b.gradient} flex items-center justify-center shrink-0 ${b.color} ${b.glow}`}
            >
              <span className="material-symbols-outlined text-[26px]">{b.icon}</span>
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-title-md text-body-md text-on-surface font-bold truncate">{b.title}</h4>
              <p className="font-body-md text-label-sm text-on-surface-variant truncate">{b.desc}</p>
              <span className={`font-label-sm text-[10px] ${b.metaColor}`}>{b.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
