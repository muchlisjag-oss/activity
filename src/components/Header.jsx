import { LOGO_URL, AVATAR_RIAN, NAV_LINKS } from '../data/dashboard.js'
import { useRouter } from '../hooks/useRouter.js'

export default function Header({ onStartWorkout, onNavigate, onSoon }) {
  const { path, go } = useRouter()

  const handleNav = (e, link) => {
    e.preventDefault()
    if (link.key === 'dashboard' || link.key === 'catat-aktivitas') {
      go(link.to)
      onNavigate?.(link.key)
    } else {
      onSoon?.(link.label)
    }
  }

  const isActive = (link) => {
    if (link.key === 'dashboard') return path === '/'
    if (link.key === 'catat-aktivitas') return path === '/catat-aktivitas'
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-lg shrink-0">
          <button
            type="button"
            onClick={() => {
              go('/')
              onNavigate?.('dashboard')
            }}
            className="flex items-center gap-space-sm"
            aria-label="PulseFit ke Dashboard"
          >
            <img alt="PulseFit Brand Logo" className="h-8 w-auto object-contain" src={LOGO_URL} />
            <span className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight">
              Pulse<span className="text-primary">Fit</span>
            </span>
          </button>
          <nav className="hidden xl:flex items-center gap-space-xs">
            {NAV_LINKS.map((link) => {
              const active = isActive(link)
              return (
                <a
                  key={link.key}
                  aria-current={active ? 'page' : undefined}
                  href={`#${link.to}`}
                  onClick={(e) => handleNav(e, link)}
                  className={
                    active
                      ? 'px-space-md py-space-sm rounded-xl transition-all bg-surface-container-high text-primary font-title-md'
                      : 'px-space-md py-space-sm rounded-xl font-title-md text-title-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all'
                  }
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-space-md shrink-0">
          <button
            type="button"
            onClick={onStartWorkout}
            className="flex items-center gap-space-xs bg-primary hover:bg-primary-fixed-dim text-on-primary px-space-md py-space-sm rounded-xl font-label-md text-label-md transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span className="hidden sm:inline">Mulai Latihan</span>
          </button>
          <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high text-primary-fixed font-label-md text-label-md">
            <span className="material-symbols-outlined text-[16px] text-primary">local_fire_department</span>
            <span>14 Hari</span>
          </div>
          <button
            type="button"
            aria-label="Notifikasi"
            className="relative w-10 h-10 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span>
          </button>
          <div className="flex items-center gap-space-sm pl-space-xs">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src={AVATAR_RIAN} />
            <div className="hidden md:flex flex-col">
              <span className="font-title-md text-body-md text-on-surface leading-tight">Rian Pratama</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Pro Athlete</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

