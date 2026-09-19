import { useState } from 'react'
import HistoryRow from './HistoryRow.jsx'
import HistoryStatus from './HistoryStatus.jsx'

export default function ActivityHistory({ items, loading, error, connectionOk, onRefresh, onDelete, showToast }) {
  const [deletingId, setDeletingId] = useState(null)
  const total = items.reduce((s, r) => s + (Number(r.calories) || 0), 0)

  const askDelete = async (row) => {
    if (!window.confirm(`Hapus "${row.session_name}" dari Supabase?`)) return
    setDeletingId(row.id)
    const res = await onDelete(row.id)
    setDeletingId(null)
    if (res?.ok) showToast('Aktivitas Dihapus', `"${row.session_name}" terhapus dari Supabase.`, true)
    else showToast('Gagal Menghapus', res?.message ?? 'Terjadi kesalahan.', false)
  }

  return (
    <div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl p-space-md md:p-space-lg shadow-xl flex flex-col gap-space-md">
      <div className="flex flex-wrap items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs text-on-surface font-title-md text-title-md">
          <span className="material-symbols-outlined text-primary text-[22px]">history</span>
          <span>Riwayat Aktivitas Tersimpan</span>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-tertiary uppercase">
            {items.length} sesi • {total.toLocaleString('id-ID')} kkal
          </span>
          <button type="button" onClick={onRefresh} className="px-space-sm py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors">
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            Muat Ulang
          </button>
        </div>
      </div>
      <HistoryStatus loading={loading} error={error} connectionOk={connectionOk} empty={items.length === 0} />
      <div className="flex flex-col gap-space-xs">
        {items.map((row) => (
          <HistoryRow key={row.id} row={row} deleting={deletingId === row.id} onDelete={() => askDelete(row)} />
        ))}
      </div>
    </div>
  )
}
