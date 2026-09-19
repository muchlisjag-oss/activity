import { useState } from 'react'
import { INTENSITIES, SPORTS } from '../data/logActivity.js'
import { useLogCalculations } from '../hooks/useLogCalculations.js'
import LogHero from '../components/log/LogHero.jsx'
import SportSelector from '../components/log/SportSelector.jsx'
import SessionMeta from '../components/log/SessionMeta.jsx'
import DurationDistance from '../components/log/DurationDistance.jsx'
import IntensitySelector from '../components/log/IntensitySelector.jsx'
import NotesMood from '../components/log/NotesMood.jsx'
import CalorieCard from '../components/log/CalorieCard.jsx'
import BiometricsCard from '../components/log/BiometricsCard.jsx'
import SyncCard, { RecordBanner } from '../components/log/SyncCard.jsx'
import { FormActions, TipsCard } from '../components/log/FormActions.jsx'

const DEFAULTS = {
  sportId: 'lari',
  sessionName: 'Lari Sore Keliling Kompleks',
  date: '2024-10-28',
  time: '16:45',
  hours: 0,
  minutes: 45,
  distance: 5.2,
  intensityId: 'moderate',
  mood: 'energetic',
  notes: '',
  gender: 'male',
  weight: 68.5,
  height: 175,
  age: 26,
}

export default function LogActivityPage({ showToast }) {
  const [sportId, setSportId] = useState(DEFAULTS.sportId)
  const [sessionName, setSessionName] = useState(DEFAULTS.sessionName)
  const [date, setDate] = useState(DEFAULTS.date)
  const [time, setTime] = useState(DEFAULTS.time)
  const [hours, setHours] = useState(DEFAULTS.hours)
  const [minutes, setMinutes] = useState(DEFAULTS.minutes)
  const [distance, setDistance] = useState(DEFAULTS.distance)
  const [intensityId, setIntensityId] = useState(DEFAULTS.intensityId)
  const [mood, setMood] = useState(DEFAULTS.mood)
  const [notes, setNotes] = useState(DEFAULTS.notes)
  const [gender, setGender] = useState(DEFAULTS.gender)
  const [weight, setWeight] = useState(DEFAULTS.weight)
  const [height, setHeight] = useState(DEFAULTS.height)
  const [age, setAge] = useState(DEFAULTS.age)
  const [strava, setStrava] = useState(true)
  const [googleFit, setGoogleFit] = useState(true)

  const sport = SPORTS.find((s) => s.id === sportId) ?? SPORTS[0]
  const intensity = INTENSITIES.find((i) => i.id === intensityId) ?? INTENSITIES[1]
  const calc = useLogCalculations({ sport, intensity, weight, height, age, gender, hours, minutes, distance })

  const handleSelectSport = (id) => {
    setSportId(id)
    const next = SPORTS.find((s) => s.id === id)
    if (next && !next.hasDistance) setDistance(0)
    else if (Number(distance) === 0) setDistance(5.0)
  }

  const handleSubmit = () => {
    const name = sessionName.trim() || 'Sesi Latihan'
    showToast('Aktivitas Berhasil Dicatat!', `${name} (~${calc.calories}) tersimpan di rekam jejak PulseFit.`, true)
  }

  const handleReset = () => {
    setSportId(DEFAULTS.sportId)
    setSessionName(DEFAULTS.sessionName)
    setDate(DEFAULTS.date)
    setTime(DEFAULTS.time)
    setHours(DEFAULTS.hours)
    setMinutes(DEFAULTS.minutes)
    setDistance(DEFAULTS.distance)
    setIntensityId(DEFAULTS.intensityId)
    setMood(DEFAULTS.mood)
    setNotes('')
    showToast('Form Direset', 'Semua isian formulir telah dikembalikan ke standar.', false)
  }

  const handleSync = () => {
    showToast('Sinkronisasi Sukses', 'Mendapatkan 1 rute GPS baru dari Strava (5.2km).', true)
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin py-space-lg md:py-space-xl flex flex-col gap-space-lg">
      <LogHero />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <div className="bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-space-md md:p-space-lg shadow-xl flex flex-col gap-space-lg">
            <SportSelector sportId={sportId} onSelect={handleSelectSport} />
            <SessionMeta
              sessionName={sessionName}
              onSessionName={setSessionName}
              date={date}
              onDate={setDate}
              time={time}
              onTime={setTime}
            />
            <DurationDistance
              hours={hours}
              minutes={minutes}
              onHours={setHours}
              onMinutes={setMinutes}
              distance={distance}
              onDistance={setDistance}
              disabled={!sport.hasDistance}
            />
            <IntensitySelector intensityId={intensityId} onSelect={setIntensityId} />
            <NotesMood notes={notes} onNotes={setNotes} mood={mood} onMood={setMood} />
            <FormActions onSubmit={handleSubmit} onReset={handleReset} />
          </div>
          <TipsCard />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <CalorieCard
            sportLabel={sport.label}
            weight={weight}
            durationLabel={calc.label}
            calories={calc.calories}
            percent={calc.percent}
            pace={calc.pace}
          />
          <BiometricsCard
            gender={gender}
            onGenderChange={setGender}
            weight={weight}
            onWeightChange={setWeight}
            height={height}
            onHeightChange={setHeight}
            age={age}
            onAgeChange={setAge}
            bmi={calc.bmi}
            bmiBadge={calc.badge}
            bmr={calc.bmr}
          />
          <SyncCard
            strava={strava}
            onStravaChange={setStrava}
            googleFit={googleFit}
            onGoogleFitChange={setGoogleFit}
            onSync={handleSync}
          />
          <RecordBanner />
        </div>
      </div>
    </div>
  )
}
