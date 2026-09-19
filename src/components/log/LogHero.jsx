export default function LogHero() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md md:p-space-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-space-md">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex flex-col gap-space-xs z-10">
        <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md tracking-wider uppercase">
          <span className="material-symbols-outlined text-[16px]">edit_calendar</span>
          <span>Log Telemetri Atlet</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
          Catat Aktivitas Olahraga Baru
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Masukkan detail sesi latihan Anda untuk menghitung pembakaran kalori dan memperbarui statistik.
        </p>
      </div>
      <div className="flex items-center gap-space-sm z-10 self-stretch md:self-auto justify-between md:justify-end">
        <div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-xl bg-surface-container text-on-surface font-label-md text-label-md">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span>GPS Ready: Jakarta Pusat</span>
        </div>
      </div>
    </section>
  )
}
