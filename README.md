# PulseFit — Dashboard Personal + Catat Aktivitas (React + Vite + Tailwind)

Hasil konversi desain `desain/dashboard_personal_pulsefit/code.html` dan
`desain/catat_aktivitas_pulsefit/code.html` menjadi project React-Vite dengan routing hash.

## Rute

| Hash | Halaman |
|---|---|
| `#/` | Dashboard (`src/pages/DashboardPage.jsx`) |
| `#/catat-aktivitas` | Catat Aktivitas (`src/pages/LogActivityPage.jsx`) |

Klik nav header "Dashboard" / "Catat Aktivitas", tombol "Mulai Latihan", atau
"+ Catat Latihan Baru" untuk pindah halaman. Nav "Riwayat Latihan" dan
"Komunitas & Target" menampilkan toast "Segera Hadir".

## Struktur

```
activity/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js      # token warna/spasi/font dari desain asli
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx             # router hash + Header + Footer + Toast global
    ├── data/
    │   ├── dashboard.js    # data chart, target, badge, avatar, nav
    │   └── logActivity.js  # SPORTS/MET, INTENSITIES, MOODS, gambar, target harian
    ├── hooks/
    │   ├── useRouter.js        # router hash (#/ , #/catat-aktivitas)
    │   └── useLogCalculations.js # kalori MET, pace, BMI, BMR (port script asli)
    ├── pages/
    │   ├── DashboardPage.jsx
    │   └── LogActivityPage.jsx   # state form + kalkulasi real-time + toast
    └── components/
        ├── Header.jsx      # nav aktif mengikuti rute
        ├── Footer.jsx
        ├── Toast.jsx       # toast kanan-bawah ala desain catat-aktivitas
        ├── Greeting.jsx / StatCards.jsx / QuickActions.jsx / ...
        ├── WorkoutModal.jsx
        └── log/
            ├── LogHero.jsx         # hero "Catat Aktivitas Olahraga Baru" + GPS Ready
            ├── SportSelector.jsx   # 8 olahraga + MET + label terpilih
            ├── SessionMeta.jsx     # nama sesi + tanggal + jam
            ├── DurationDistance.jsx# jam/menit + jarak (disable utk gym/yoga/HIIT/badminton)
            ├── IntensitySelector.jsx
            ├── NotesMood.jsx
            ├── FormActions.jsx     # Simpan + Reset + TipsCard Zona 2
            ├── CalorieCard.jsx     # estimasi kkal + progress 650 kkal + pace
            ├── BiometricsCard.jsx  # gender + slider BB/TB/usia + BMI + BMR
            └── SyncCard.jsx        # toggle Strava/Google Fit + Tarik Data + banner PB 5K
```

## Menjalankan

```powershell
npm install
npm run dev
```

Buka `http://localhost:5173` (Dashboard) lalu ke `http://localhost:5173/#/catat-aktivitas`.

> Jika PowerShell memblokir `npm.ps1` (`running scripts is disabled`), jalankan via `cmd.exe`:
> ```cmd
> cd /d "c:\Data Muchlis\Vibe-Coding-Project\activity"
> npm.cmd install --no-audit --no-fund
> npm.cmd run dev
> ```

## Build

```powershell
npm run build
npm run preview
```

## Logika (port 1:1 dari `<script>` desain catat-aktivitas)

- Kalori: `MET × intensitas × 3.5 × BB / 200 × menit`, progress vs target harian 650 kkal.
- Pace: `menit / km` → `MM'SS" / km`, `-` bila jarak/durasi nol.
- BMI: `BB / (TB_m)²` + badge Kurang/Ideal/Berlebih/Obesitas.
- BMR Mifflin-St Jeor: pria `10·BB + 6.25·TB − 5·usia + 5`, wanita `− 161`.
- Olahraga tanpa jarak (Gym/Yoga/HIIT/Badminton) menonaktifkan input jarak & mereset ke 0.
- Tombol Simpan / Reset / Tarik Data memicu toast kanan-bawah seperti desain asli.

