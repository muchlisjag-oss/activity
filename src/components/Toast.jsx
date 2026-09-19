export default function Toast({ toast }) {
  const visible = Boolean(toast)
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 flex items-center gap-space-sm bg-surface-container-high text-on-surface px-space-lg py-space-md rounded-xl shadow-2xl ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <span
        className={`material-symbols-outlined text-[24px] ${
          !toast || toast.success ? 'text-primary' : 'text-secondary'
        }`}
      >
        {!toast || toast.success ? 'check_circle' : 'info'}
      </span>
      <div className="flex flex-col">
        <span className="font-title-md text-title-md">{toast?.title ?? ''}</span>
        <span className="font-body-md text-body-md text-on-surface-variant">{toast?.msg ?? ''}</span>
      </div>
    </div>
  )
}
