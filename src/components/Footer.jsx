import { LOGO_URL } from '../data/dashboard.js'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest py-space-xl shadow-[0_-1px_8px_rgba(0,0,0,0.15)]">
      <div className="max-w-[1440px] mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-md text-body-md">
        <div className="flex items-center gap-space-sm">
          <img alt="PulseFit Brand Logo" className="h-6 w-auto object-contain grayscale opacity-60" src={LOGO_URL} />
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
            © 2024 PulseFit Performance Labs. Hak cipta dilindungi.
          </span>
        </div>
        <div className="flex items-center gap-space-lg font-label-md text-label-md text-on-surface-variant">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">
            Privasi
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">
            Syarat Layanan
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">
            Dukungan Sensor & GPS
          </a>
        </div>
      </div>
    </footer>
  )
}
