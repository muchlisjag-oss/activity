import { useCallback, useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import LogActivityPage from './pages/LogActivityPage.jsx'
import { ROUTES, useRouter } from './hooks/useRouter.js'

export default function App() {
  const { path, go } = useRouter()
  const [toast, setToast] = useState(null)
  const timer = useRef(null)

  const showToast = useCallback((title, msg, success = true) => {
    setToast({ title, msg, success })
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setToast(null), 3500)
  }, [])

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current)
  }, [])

  const isLogPage = path === ROUTES.logActivity

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface min-h-screen antialiased selection:bg-primary selection:text-on-primary">
      <Header
        onStartWorkout={() => go(ROUTES.logActivity)}
        onSoon={(label) => showToast('Segera Hadir', `Halaman "${label}" belum tersedia di versi ini.`, false)}
      />

      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {isLogPage ? (
            <LogActivityPage showToast={showToast} />
          ) : (
            <DashboardPage onLogActivity={() => go(ROUTES.logActivity)} />
          )}
        </div>
      </main>

      <Footer />
      <Toast toast={toast} />
    </div>
  )
}

