export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBTdMD7Je2fDvj5RiyHhQ6wh_aSVYyB_6uKiCxJWWzNUuO0nP3cP469suVMUECAfa3gLAz9ravOyh-C8cCfijLZh9zPoMbrIkq-6mT4ou_P0z2NG_2gwn9k70nHsDYDRtLG2K64-dBaqfzrSyx-V8WzKbeeu1b8X8AwfQwbJWEoweR45PN9CuAIDqfFfeoZjCL9fPHdoFdqqgZMh7C9JaNdr-OC5axqal0Kh3EV61jQuGDFJS3osWtY'

export const AVATAR_RIAN =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA6UVs3MXWQ8nGuHL_5ZcmG73KAE-fTEW_fmyus4llHehMulCZUxWkwT2ZYBety7B9yqppB-AUGeYk0aTKOlyPjuTzEfiDTUSloIDS1B5AuXWQo1JCx9vylXsxiQ45CoB8N9IyqZnjgdGuI2vbwqR_rcLRD1L7bu2tW26hyX7HzVNBNfzI51Vcc9P-6Ya3S08L6dEnMO15iuELuQxOjxnOJKr1weC7kaaavmiFoH6gwTalHKHp0V1u_'

export const AVATAR_SARAH =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAszXfv-XEodT-CxtxFZlrysJnehPWx5MKg3mnW7LcA-GzwwAseYtM1w_lTP9uDQRnYDtjEuovFl03kYr27hAcHdmKNrAQY20HrPaQb21NbUZu5azVE2bKJx-vWz7uRIWlbpxpofaBzI2FKWtey0Q_10j7BMUTDF2bIQ70bVw6s9oHimrqP6OfLQHkcJEZDdYawq8rt8M4LXImHpNhRcnD80H6wGm9BiXSTbQNaTvKyBynfK9BRVU4B'

export const AVATAR_DIMAS =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAwfnD3dTczM_J8Mxs7LYIY-PWW-4xuf5_t00Ck2ol0Mh-xSPn0TpxycHB8lGLxr06zBRjSDrMc6c0UvwXf5qnh1slnSiVrAFiGABlyJqbeljC5SpotEIi15JlhfWwfkf8PuIcsGV189kjr9VCNQgSVvFd1JfzCzubWxacVNK6eeWRlY5hQYSVFenKhmno4AymXRDRMQ725WCpTltDLxZgLDqiT4yeTL1biGoQKmIEo3r6NOy8UaqwF'

export const NAV_LINKS = [
  { label: 'Dashboard', key: 'dashboard', to: '/' },
  { label: 'Catat Aktivitas', key: 'catat-aktivitas', to: '/catat-aktivitas' },
  { label: 'Riwayat Latihan', key: 'riwayat-latihan', to: '/riwayat-latihan' },
  { label: 'Komunitas & Target', key: 'komunitas-target', to: '/komunitas-target' },
]

export const WEEKLY_CHART = [
  { short: 'SEN', day: 'Senin', cal: '520 kkal', min: '42 Menit (Lari & Gym)', primaryH: '65%', secondaryH: '40%', secondaryColor: 'bg-secondary' },
  { short: 'SEL', day: 'Selasa', cal: '680 kkal', min: '55 Menit (Sepeda Luar)', primaryH: '85%', secondaryH: '50%', secondaryColor: 'bg-tertiary' },
  { short: 'RAB', day: 'Rabu', cal: '450 kkal', min: '35 Menit (Strength Gym)', primaryH: '56%', secondaryH: '35%', secondaryColor: 'bg-secondary' },
  { short: 'KAM', day: 'Kamis', cal: '720 kkal', min: '60 Menit (Lari Tempo)', primaryH: '90%', secondaryH: '60%', secondaryColor: 'bg-secondary', glow: true },
  { short: 'JUM', day: 'Jumat', cal: '380 kkal', min: '30 Menit (Pemulihan Aktif)', primaryH: '45%', secondaryH: '25%', secondaryColor: 'bg-tertiary' },
  { short: 'SAB', day: 'Sabtu', cal: '820 kkal', min: '75 Menit (Long Run Akhir Pekan)', primaryH: '100%', secondaryH: '80%', secondaryColor: 'bg-secondary', highlight: true, glowStrong: true },
  { short: 'MIN', day: 'Minggu (Hari Ini)', cal: '640 kkal', min: '45 Menit (Sesi Berjalan)', primaryH: '78%', secondaryH: '45%', secondaryColor: 'bg-tertiary', today: true, highlight: true },
]

export const WEEKLY_TARGETS = [
  {
    tag: 'Kardio Lapangan',
    icon: 'directions_run',
    iconColor: 'text-primary',
    title: 'Lari 15 km',
    before: 'Tercapai ',
    bold: '12 km',
    after: ' (80%)',
    bar: '80%',
    barColor: 'bg-primary',
    foot: 'Sisa 3.0 km lagi',
    footColor: 'text-primary',
  },
  {
    tag: 'Beban & Otot',
    icon: 'fitness_center',
    iconColor: 'text-secondary',
    title: 'Gym 3x Seminggu',
    before: 'Selesai ',
    bold: '2/3 Sesi',
    after: ' (66%)',
    bar: '66%',
    barColor: 'bg-secondary',
    foot: '1 Sesi lagi dijadwalkan besok',
    footColor: 'text-secondary',
  },
  {
    tag: 'Target Total Energi',
    icon: 'whatshot',
    iconColor: 'text-tertiary',
    title: 'Target Kalori 3500 kkal',
    before: 'Tercapai ',
    bold: '3,100 kkal',
    after: ' (88%)',
    bar: '88.5%',
    barColor: 'bg-tertiary',
    foot: 'Hanya 400 kkal lagi tercapai!',
    footColor: 'text-tertiary',
  },
]

export const BADGES = [
  {
    icon: 'wb_twilight',
    color: 'text-primary',
    gradient: 'from-primary/30 to-primary/10',
    glow: 'shadow-[0_0_15px_rgba(158,233,57,0.2)]',
    title: 'Early Bird Runner',
    desc: 'Olahraga konsisten sebelum jam 06:00',
    meta: 'Baru Diperoleh Kemarin',
    metaColor: 'text-primary',
  },
  {
    icon: 'sports_kabaddi',
    color: 'text-secondary',
    gradient: 'from-secondary/30 to-secondary/10',
    glow: 'shadow-[0_0_15px_rgba(78,222,163,0.2)]',
    title: 'Weekend Warrior',
    desc: 'Dua sesi intensif di hari Sabtu & Minggu',
    meta: 'Terbuka 3 Hari Lalu',
    metaColor: 'text-secondary',
  },
  {
    icon: 'workspace_premium',
    color: 'text-tertiary',
    gradient: 'from-tertiary/30 to-tertiary/10',
    glow: 'shadow-[0_0_15px_rgba(116,227,255,0.2)]',
    title: 'Kalori Master 5K',
    desc: 'Akumulasi pembakaran 5,000 kkal aktif',
    meta: 'Level Emas Diraih',
    metaColor: 'text-tertiary',
  },
]
