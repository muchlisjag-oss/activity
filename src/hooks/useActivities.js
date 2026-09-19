import { useCallback, useEffect, useState } from 'react'
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient.js'

export const ACTIVITIES_TABLE = 'activities'

/**
 * Bentuk baris tabel `activities` (lihat supabase/schema.sql):
 * id, created_at, session_name, sport_id, sport_label, session_date,
 * start_time, duration_hours, duration_minutes, total_minutes,
 * distance_km, intensity_id, mood_id, notes,
 * weight_kg, height_cm, age, gender,
 * met, calories, pace, bmi, bmr
 */
export function useActivities() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [connectionOk, setConnectionOk] = useState(null)

  const fetchActivities = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setError('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY di .env.')
      setLoading(false)
      setConnectionOk(false)
      return
    }
    setLoading(true)
    setError('')
    const { data, error: err } = await supabase
      .from(ACTIVITIES_TABLE)
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)
    if (err) {
      setError(`Gagal memuat aktivitas: ${err.message}`)
      setConnectionOk(false)
    } else {
      setItems(data ?? [])
      setConnectionOk(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchActivities()
  }, [fetchActivities])

  const saveActivity = useCallback(
    async (payload) => {
      if (!isSupabaseConfigured) {
        return { ok: false, message: 'Supabase belum dikonfigurasi (.env).' }
      }
      setSaving(true)
      const { data, error: err } = await supabase
        .from(ACTIVITIES_TABLE)
        .insert(payload)
        .select()
        .single()
      setSaving(false)
      if (err) {
        return { ok: false, message: err.message }
      }
      setItems((prev) => [data, ...prev].slice(0, 50))
      return { ok: true, row: data }
    },
    [],
  )

  const deleteActivity = useCallback(async (id) => {
    if (!isSupabaseConfigured) return { ok: false, message: 'Supabase belum dikonfigurasi (.env).' }
    const { error: err } = await supabase.from(ACTIVITIES_TABLE).delete().eq('id', id)
    if (err) return { ok: false, message: err.message }
    setItems((prev) => prev.filter((row) => row.id !== id))
    return { ok: true }
  }, [])

  return { items, loading, saving, error, connectionOk, refresh: fetchActivities, saveActivity, deleteActivity }
}
