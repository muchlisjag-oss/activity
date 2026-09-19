export const DAILY_CALORIE_GOAL = 650

export const SPORTS = [
  { id: 'lari', label: 'Lari', icon: 'directions_run', met: 9.8, hasDistance: true },
  { id: 'bersepeda', label: 'Bersepeda', icon: 'directions_bike', met: 7.5, hasDistance: true },
  { id: 'renang', label: 'Renang', icon: 'pool', met: 8.0, hasDistance: true },
  { id: 'gym', label: 'Gym / Beban', icon: 'exercise', met: 5.0, hasDistance: false },
  { id: 'yoga', label: 'Yoga', icon: 'self_improvement', met: 3.0, hasDistance: false },
  { id: 'hiit', label: 'HIIT / Kardio', icon: 'bolt', met: 10.5, hasDistance: false },
  { id: 'badminton', label: 'Badminton', icon: 'sports_tennis', met: 6.8, hasDistance: false },
  { id: 'lainnya', label: 'Lainnya', icon: 'more_horiz', met: 6.0, hasDistance: true },
]

export const INTENSITIES = [
  {
    id: 'light',
    title: 'Ringan',
    desc: 'Denyut santai, pemulihan aktif.',
    dot: 'bg-tertiary',
    multiplier: 0.8,
  },
  {
    id: 'moderate',
    title: 'Sedang',
    desc: 'Mulai berkeringat & terengah stabil.',
    dot: 'bg-primary',
    multiplier: 1.0,
  },
  {
    id: 'heavy',
    title: 'Berat',
    desc: 'Maksimal / HIIT, batas anaerobik.',
    dot: 'bg-error',
    multiplier: 1.3,
  },
]

export const MOODS = [
  { id: 'energetic', emoji: '⚡', label: 'Energetik' },
  { id: 'tired', emoji: '😮‍💨', label: 'Lelah' },
  { id: 'satisfied', emoji: '🔥', label: 'Puas' },
]

export const TIPS_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAPyScp3bJAoWchypc_7-9XKfVRqGDm08aj4PxAd63uHcbiUyPpasbBAdmvR3rwjYJM3wB336g3drQuu4zv1YF8p2CFguhxU2mwmQswScyLLHfMtsxoCkrOX9qp510gliy2XTxWMUd89ayXVMXWdqULoRWeDNlQ1ongC2uNzzyzYSR5_cz_ToWlb6YQl4gmoiysfluprm8WmMrqMF2PVihYfjE4sZJJIsavVAdiwACJt51jMXFnV_Wz'

export const RECORD_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCbDwb7FqcVx_CsyoV9Ojw1MSxzPAfRITWhnYkIF0D3Q-YTxXh3onnnHSWp2cBAJJS5-wH3i68AvFfgbqzYKvkSI8AH0wkc2_PePnPeFJsGfWajexYFA3yM5P9jKZ-feSYwd-K0WJm-jpB_Rj1wNOjNbkMf4o4AnA_6tmOLckTLa9TbB0v49S-9YVVj1bL0SZ456zYU4aeglRMjzWJZpyRjB2Ik_T9fCoXKl0_9Q4eAS2MS1gLf0Cft'
