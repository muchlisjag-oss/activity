import { useCallback, useEffect, useState } from 'react'

export const ROUTES = {
  dashboard: '/',
  logActivity: '/catat-aktivitas',
}

function pathFromHash() {
  const raw = window.location.hash.replace(/^#/, '') || '/'
  return raw.split('?')[0] || '/'
}

export function navigate(to) {
  window.location.hash = `#${to}`
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function routeToLabel(path) {
  if (path === ROUTES.logActivity) return 'catat-aktivitas'
  return 'dashboard'
}

export function useRouter() {
  const [path, setPath] = useState(() => (typeof window === 'undefined' ? '/' : pathFromHash()))

  useEffect(() => {
    const onChange = () => setPath(pathFromHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const go = useCallback((to) => navigate(to), [])
  return { path, go, active: routeToLabel(path) }
}
