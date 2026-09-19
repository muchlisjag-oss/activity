import { TIPS_IMG } from '../../data/logActivity.js'

export function FormActions({ onSubmit, onReset, saving }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
      <button
        type="button"
        onClick={onSubmit}
        disabled={saving}
        className="w-full sm:flex-1 bg-primary hover:bg-primary-fixed-dim disabled:opacity-60 text-on-primary py-space-md rounded-xl font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs shadow-lg transition-transform active:scale-[0.99]"
      >
        <span className="material-symbols-outlined text-[22px]">{saving ? 'progress_activity' : 'save'}</span>
        <span>{saving ? 'Menyimpan ke Supabase...' : 'Simpan Aktivitas Latihan'}</span>
      </button>
      <button
        type="button"
        onClick={onReset}
        className="w-full sm:w-auto px-space-lg py-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-title-md text-title-md transition-colors flex items-center justify-center gap-space-xs"
      >
        <span className="material-symbols-outlined text-[20px]">restart_alt</span>
        <span>Reset Form</span>
      </button>
    </div>
  )
}

export function TipsCard() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md flex items-center gap-space-md">
      <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden relative">
        <img className="w-full h-full object-cover" alt="Pelari berlatih" src={TIPS_IMG} />
      </div>
      <div className="flex flex-col gap-space-xs min-w-0">
        <span className="font-label-sm text-label-sm text-secondary uppercase">Tips Performa Hari Ini</span>
        <p className="font-title-md text-title-md text-on-surface truncate">Pertahankan Ritme Zona 2</p>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
          Latihan aerobik sedang selama 45 menit mempercepat oksidasi lemak tubuh hingga 18% lebih optimal tanpa stres
          kortisol berlebih.
        </p>
      </div>
    </div>
  )
}
