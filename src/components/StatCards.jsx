const CARDS = [
  {
    topLine: 'from-primary to-transparent opacity-80',
    label: 'Kalori Terbakar Hari Ini',
    icon: 'local_fire_department',
    iconColor: 'text-primary group-hover:bg-primary group-hover:text-on-primary',
  },
  {
    topLine: 'from-secondary to-transparent opacity-50',
    label: 'Durasi Latihan Minggu Ini',
    icon: 'timer',
    iconColor: 'text-secondary group-hover:bg-secondary group-hover:text-on-secondary',
  },
  {
    topLine: 'from-tertiary to-transparent opacity-50',
    label: 'Jarak Kardio Minggu Ini',
    icon: 'directions_run',
    iconColor: 'text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary',
  },
  {
    topLine: 'from-primary-fixed-dim to-transparent opacity-50',
    label: 'Streak Aktif',
    icon: 'bolt',
    iconColor: 'text-primary-fixed group-hover:bg-primary-fixed group-hover:text-on-primary-fixed',
  },
]

function CardShell({ index, children }) {
  const card = CARDS[index]
  return (
    <div className="group relative bg-surface-container rounded-xl p-space-md shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${card.topLine}`}></div>
      <div>
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{card.label}</span>
          <div className={`w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center transition-colors ${card.iconColor}`}>
            <span className="material-symbols-outlined text-[18px]">{card.icon}</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default function StatCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
      <CardShell index={0}>
        <div className="flex items-baseline gap-space-xs">
          <span className="font-display-stat text-display-stat text-on-surface tracking-tighter">640</span>
          <span className="font-headline-sm text-headline-sm text-on-surface-variant">/ 800</span>
          <span className="font-label-md text-label-md text-primary font-bold ml-space-xs">kkal</span>
        </div>
        <div className="mt-space-md space-y-space-xs">
          <div className="flex justify-between items-center font-label-sm text-label-sm text-on-surface-variant">
            <span>Progress Target Harian</span>
            <span className="text-primary font-bold">80%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all duration-1000 shadow-[0_0_12px_rgba(158,233,57,0.8)]" style={{ width: '80%' }}></div>
          </div>
        </div>
      </CardShell>

      <CardShell index={1}>
        <div className="flex items-baseline gap-space-xs">
          <span className="font-display-stat text-display-stat text-on-surface tracking-tighter">
            4<span className="text-headline-sm">j</span> 45<span className="text-headline-sm">m</span>
          </span>
        </div>
        <div className="mt-space-md flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[16px]">trending_up</span>
          <span className="font-label-md text-label-md text-secondary font-bold">+15%</span>
          <span className="font-body-md text-label-sm text-on-surface-variant">dibanding minggu lalu</span>
        </div>
      </CardShell>

      <CardShell index={2}>
        <div className="flex items-baseline gap-space-xs">
          <span className="font-display-stat text-display-stat text-on-surface tracking-tighter">24.8</span>
          <span className="font-headline-sm text-headline-sm text-on-surface-variant">km</span>
        </div>
        <div className="mt-space-md space-y-space-xs">
          <div className="flex justify-between items-center font-label-sm text-label-sm text-on-surface-variant">
            <span>Sasaran: 30 km</span>
            <span className="text-tertiary font-bold">Sisa 5.2 km</span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
            <div className="h-full rounded-full bg-tertiary transition-all duration-1000 shadow-[0_0_12px_rgba(116,227,255,0.7)]" style={{ width: '82.6%' }}></div>
          </div>
        </div>
      </CardShell>

      <CardShell index={3}>
        <div className="flex items-baseline gap-space-xs">
          <span className="font-display-stat text-display-stat text-primary tracking-tighter">14</span>
          <span className="font-headline-sm text-headline-sm text-on-surface">Hari</span>
        </div>
        <div className="mt-space-md flex items-center justify-between pt-space-xs">
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-primary">military_tech</span>
            <span>
              Rekor Pribadi: <strong className="text-on-surface">21 Hari</strong>
            </span>
          </div>
          <span className="font-label-sm text-label-sm bg-surface-container-high px-space-xs py-0.5 rounded text-primary">Level 4</span>
        </div>
      </CardShell>
    </section>
  )
}
