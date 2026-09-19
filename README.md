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

## Supabase (Catat Aktivitas → database)

1. Di Supabase Dashboard → **SQL Editor → New query**, jalankan isi file
   `supabase/schema.sql` (membuat tabel `public.activities` + RLS policy demo).
2. Pastikan `.env` berisi (sudah ada di project ini):
   ```env
   VITE_SUPABASE_URL=https://tnhufzjhfsqehelljjei.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
   ```
   Contoh tanpa secret: lihat `.env.example`.
3. Install dependency baru lalu jalankan:
   ```cmd
   npm.cmd install
   npm.cmd run dev
   ```
4. Buka `#/catat-aktivitas`:
   - **Simpan Aktivitas Latihan** → insert ke tabel `activities` (dengan hasil
     kalkulasi kalori/pace/BMI/BMR), tombol berubah menjadi
     “Menyimpan ke Supabase...” saat proses berjalan.
   - **Riwayat Aktivitas Tersimpan** di bawah formulir menampilkan 50 sesi
     terbaru dari Supabase (nama, olahraga, tanggal, durasi, jarak, intensitas,
     mood, catatan, kkal, pace) + total sesi/kkal, tombol **Muat Ulang** dan
     **hapus** per baris.
   - Jika tabel belum dibuat / RLS menolak / env kosong, muncul banner error
     yang menjelaskan penyebabnya.

## Skema database (`supabase/schema.sql`)

```sql
create table public.activities (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_name text not null default 'Sesi Latihan',
  sport_id text not null,
  sport_label text not null,
  session_date date not null,
  start_time time,
  duration_hours int not null default 0,
  duration_minutes int not null default 0,
  total_minutes int generated always as (duration_hours*60+duration_minutes) stored,
  distance_km numeric(6,2) not null default 0,
  intensity_id text not null default 'moderate',
  mood_id text not null default 'energetic',
  notes text not null default '',
  weight_kg numeric(5,2) not null,
  height_cm numeric(5,2) not null,
  age int not null,
  gender text not null default 'male',
  met numeric(5,2) not null,
  calories int not null default 0,
  pace text not null default '-',
  bmi numeric(4,2),
  bmr int
);
-- + index created_at/sport_id/session_date
-- + RLS enable + policy select/insert/delete untuk demo anon key
```

File terkait: `src/lib/supabaseClient.js`, `src/hooks/useActivities.js`
(fetch/insert/delete + status koneksi), `src/components/log/ActivityHistory.jsx`
(+ `HistoryRow.jsx`, `HistoryStatus.jsx`, `historyHelpers.js`).

## Logika (port 1:1 dari `<script>` desain catat-aktivitas)

- Kalori: `MET × intensitas × 3.5 × BB / 200 × menit`, progress vs target harian 650 kkal.
- Pace: `menit / km` → `MM'SS" / km`, `-` bila jarak/durasi nol.
- BMI: `BB / (TB_m)²` + badge Kurang/Ideal/Berlebih/Obesitas.
- BMR Mifflin-St Jeor: pria `10·BB + 6.25·TB − 5·usia + 5`, wanita `− 161`.
- Olahraga tanpa jarak (Gym/Yoga/HIIT/Badminton) menonaktifkan input jarak & mereset ke 0.
- Tombol Simpan / Reset / Tarik Data memicu toast kanan-bawah seperti desain asli.

