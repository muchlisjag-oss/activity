import { useMemo } from 'react'
import { DAILY_CALORIE_GOAL } from '../data/logActivity.js'

export function calcBmi(weight, heightCm) {
  const heightM = heightCm / 100
  if (!heightM) return 0
  return weight / (heightM * heightM)
}

export function bmiBadgeFor(bmi) {
  if (bmi < 18.5) return { label: 'Kurang', classes: 'bg-error/20 text-error' }
  if (bmi <= 24.9) return { label: 'Ideal', classes: 'bg-secondary/20 text-secondary' }
  if (bmi <= 29.9) return { label: 'Berlebih', classes: 'bg-primary/20 text-primary' }
  return { label: 'Obesitas', classes: 'bg-error/20 text-error' }
}

export function calcBmr(weight, heightCm, age, gender) {
  const base = 10 * weight + 6.25 * heightCm - 5 * age
  return gender === 'male' ? base + 5 : base - 161
}

export function calcCalories(met, intensityMult, weightKg, totalMinutes) {
  const adjusted = met * intensityMult
  return Math.max(0, Math.round(((adjusted * 3.5 * weightKg) / 200) * totalMinutes))
}

export function paceFor(totalMinutes, distanceKm) {
  if (!distanceKm || distanceKm <= 0 || !totalMinutes || totalMinutes <= 0) return '-'
  const pace = totalMinutes / distanceKm
  const pMin = Math.floor(pace)
  const pSec = Math.round((pace - pMin) * 60)
  return `${String(pMin).padStart(2, '0')}'${String(pSec).padStart(2, '0')}" / km`
}

export function durationLabel(hours, minutes) {
  return `${hours > 0 ? `${hours} jam ` : ''}${minutes} menit`
}

export function useLogCalculations({ sport, intensity, weight, height, age, gender, hours, minutes, distance }) {
  return useMemo(() => {
    const totalMinutes = (Number(hours) || 0) * 60 + (Number(minutes) || 0)
    const calories = calcCalories(sport.met, intensity.multiplier, weight, totalMinutes)
    const percent = Math.min(Math.round((calories / DAILY_CALORIE_GOAL) * 100), 100)
    const pace = paceFor(totalMinutes, Number(distance) || 0)
    const bmi = calcBmi(weight, height)
    const badge = bmiBadgeFor(bmi)
    const bmr = calcBmr(weight, height, age, gender)
    return {
      totalMinutes,
      calories,
      percent,
      pace,
      bmi,
      badge,
      bmr,
      label: durationLabel(Number(hours) || 0, Number(minutes) || 0),
    }
  }, [sport, intensity, weight, height, age, gender, hours, minutes, distance])
}
