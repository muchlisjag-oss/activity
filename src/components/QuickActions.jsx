export default function QuickActions({ onStartWorkout }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div className="md:col-span-5 bg-gradient-to-br from-surface-container to-surface-container-high p-space-md rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden">
        <div className="space-y-space-xs relative z-10">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Mulai Berolahraga</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Siap Membakar Kalori Sekarang?</h3>
          <p className="font-body-md text-body-md text-on-surface-variant text-xs">
            Pilih mode sensor detak jantung atau rekam rute GPS terkini.
          </p>
        </div>
        <button
          type="button"
          onClick={onStartWorkout}
          className="mt-space-md flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-fixed-dim text-on-primary font-headline-sm text-title-md py-space-sm px-space-md rounded-xl shadow-[0_0_20px_rgba(158,233,57,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10"
        >
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
          <span>+ Catat Latihan Baru</span>
        </button>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-primary/10 blur-xl"></div>
      </div>

      <div className="md:col-span-7 bg-surface-container p-space-md rounded-xl shadow-md flex flex-col justify-between">
        <div className="flex items-center justify-between mb-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Sesi Terakhir Tercatat</span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Tadi Pagi • 06:15 WIB</span>
        </div>
        <div className="flex items-center justify-between my-space-xs">
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Lari Pagi Gelora</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">Rute Jalur Hijau Senayan</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">sprint</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-space-xs pt-space-sm bg-surface-container-low/60 rounded-lg p-space-sm">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Jarak</span>
            <span className="font-headline-sm text-headline-sm text-on-surface">
              5.2 <span className="text-xs font-normal text-on-surface-variant">km</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Energi</span>
            <span className="font-headline-sm text-headline-sm text-primary">
              320 <span className="text-xs font-normal text-on-surface-variant">kkal</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Durasi</span>
            <span className="font-headline-sm text-headline-sm text-tertiary">
              28 <span className="text-xs font-normal text-on-surface-variant">mnt</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
