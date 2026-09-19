import { useState } from 'react'
import Header from './components/Header.jsx'
import Greeting from './components/Greeting.jsx'
import StatCards from './components/StatCards.jsx'
import QuickActions from './components/QuickActions.jsx'
import ActivityChart from './components/ActivityChart.jsx'
import WeeklyTargets from './components/WeeklyTargets.jsx'
import Badges from './components/Badges.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import BodyMetrics from './components/BodyMetrics.jsx'
import Footer from './components/Footer.jsx'
import WorkoutModal from './components/WorkoutModal.jsx'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState('')

  const handleSave = (workout) => {
    setModalOpen(false)
    setToast(`${workout.type} ${workout.duration} mnt • ${workout.distance} km • ±${workout.calories} kkal tersimpan!`)
    window.setTimeout(() => setToast(''), 3500)
  }

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface min-h-screen antialiased selection:bg-primary selection:text-on-primary">
      <Header onStartWorkout={() => setModalOpen(true)} />

      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin pt-space-md md:pt-space-lg pb-space-xl">
            <div className="absolute -top-12 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/3 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

            <Greeting />
            <StatCards />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              <div className="lg:col-span-8 space-y-gutter">
                <QuickActions onStartWorkout={() => setModalOpen(true)} />
                <ActivityChart />
                <WeeklyTargets />
              </div>
              <div className="lg:col-span-4 space-y-gutter">
                <Badges />
                <Leaderboard />
                <BodyMetrics />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WorkoutModal open={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} />

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] bg-primary text-on-primary font-title-md px-space-md py-space-sm rounded-xl shadow-2xl flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
          {toast}
        </div>
      )}
    </div>
  )
}
