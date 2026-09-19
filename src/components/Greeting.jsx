export default function Greeting() {
  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
      <div className="space-y-space-xs">
        <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>Sesi Aktif • GPS Terhubung</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Semangat Pagi, Rian!{' '}
          <span className="inline-block hover:scale-125 transition-transform duration-200 cursor-default">🔥</span>{' '}
          <span className="text-primary">14 Hari</span> Berturut-turut
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Konsistensi Anda berada di level elit. Tinggal 2 sesi lagi untuk melampaui rekor mingguan Anda di bulan ini!
        </p>
      </div>
      <div className="flex items-center gap-space-sm self-start md:self-auto">
        <div className="bg-surface-container-high px-space-md py-space-sm rounded-xl flex items-center gap-space-sm shadow-md">
          <span className="material-symbols-outlined text-tertiary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            cloud_sync
          </span>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Sinkronisasi Terakhir</span>
            <span className="font-label-md text-label-md text-on-surface">Baru Saja • Garmin Pro</span>
          </div>
        </div>
      </div>
    </section>
  )
}
