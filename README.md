# PulseFit — Dashboard Personal (React + Vite + Tailwind)

Hasil konversi desain `desain/dashboard_personal_pulsefit/code.html` menjadi project React-Vite.

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
    ├── App.jsx
    ├── data/dashboard.js   # data chart, target, badge, avatar, nav
    └── components/
        ├── Header.jsx
        ├── Greeting.jsx
        ├── StatCards.jsx
        ├── QuickActions.jsx
        ├── ActivityChart.jsx   # tooltip hover ala script asli (React state)
        ├── WeeklyTargets.jsx
        ├── Badges.jsx
        ├── Leaderboard.jsx
        ├── BodyMetrics.jsx
        ├── Footer.jsx
        └── WorkoutModal.jsx    # tambahan interaktif: form catat latihan + toast
```

## Menjalankan

```powershell
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build

```powershell
npm run build
npm run preview
```

## Catatan

- Seluruh token Tailwind (warna `surface-*`, `primary`, `secondary`, `tertiary`, dsb. + spacing `space-*`, `gutter`, `margin` + font Space Grotesk/Hanken Grotesk) dipindahkan ke `tailwind.config.js`, jadi class seperti `bg-surface-container`, `text-on-surface-variant`, `px-margin` tetap sama seperti HTML asli.
- Ikon `material-symbols-outlined` dimuat via Google Fonts di `index.html`.
- Gambar logo/avatar memakai URL asli dari desain.
- Chart tooltip yang semula memakai script DOM manual ditulis ulang sebagai React state (hover per bar).
- `WorkoutModal` adalah peningkatan fungsional: tombol "Mulai Latihan" / "+ Catat Latihan Baru" membuka modal pilihan tipe (Lari/Sepeda/Gym/Renang), durasi, jarak, estimasi kalori, lalu toast konfirmasi.
