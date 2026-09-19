import { SPORTS } from '../../data/logActivity.js'

export function sportIcon(sportId) {
  return SPORTS.find((s) => s.id === sportId)?.icon ?? 'fitness_center'
}

export function formatDate(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(`${dateStr}T00:00:00`)
  if (Number.isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
}

export function shortTime(t) {
  return t ? String(t).slice(0, 5) : ''
}
