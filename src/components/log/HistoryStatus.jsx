export default function HistoryStatus({ loading, error, connectionOk, empty }) {
  if (loading) {
    return (
      <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-lowest text-on-surface-variant font-body-md text-body-md">
        <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
        Memuat data dari Supabase...
      </div>
    )
  }
  if (error) {
    return (
      <div className="p-space-md rounded-xl bg-error/10 border border-error/30 text-error font-body-md text-body-md">
        {error}
        <span className="block text-on-surface-variant text-label-sm mt-1">
          Pastikan supabase/schema.sql sudah dijalankan di SQL Editor dan .env terisi benar.
        </span>
      </div>
    )
  }
  if (empty) {
    return (
      <div className="p-space-md rounded-xl bg-surface-container-lowest text-center">
        <p className="font-title-md text-title-md text-on-surface">Belum ada aktivitas tersimpan</p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Isi formulir lalu tekan “Simpan Aktivitas Latihan” — data akan muncul di sini.
        </p>
      </div>
    )
  }
  return (
    <p className="font-label-sm text-label-sm text-secondary uppercase flex items-center gap-1">
      <span className={`w-1.5 h-1.5 rounded-full ${connectionOk ? 'bg-secondary' : 'bg-error'}`}></span>
      {connectionOk ? 'Supabase terhubung — 50 sesi terbaru' : 'Status koneksi belum pasti'}
    </p>
  )
}
