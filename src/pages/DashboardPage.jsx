import Greeting from '../components/Greeting.jsx'
import StatCards from '../components/StatCards.jsx'
import QuickActions from '../components/QuickActions.jsx'
import ActivityChart from '../components/ActivityChart.jsx'
import WeeklyTargets from '../components/WeeklyTargets.jsx'
import Badges from '../components/Badges.jsx'
import Leaderboard from '../components/Leaderboard.jsx'
import BodyMetrics from '../components/BodyMetrics.jsx'

export default function DashboardPage({ onLogActivity }) {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin pt-space-md md:pt-space-lg pb-space-xl">
      <div className="absolute -top-12 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <Greeting />
      <StatCards />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-8 space-y-gutter">
          <QuickActions onStartWorkout={onLogActivity} />
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
  )
}

