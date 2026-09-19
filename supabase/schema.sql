-- =====================================================================
-- PulseFit — skema database Supabase
-- Jalankan di: Supabase Dashboard > SQL Editor > New query > Run
-- =====================================================================

-- 1) Tabel utama aktivitas latihan
create table if not exists public.activities (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),

  -- Form "Catat Aktivitas"
  session_name     text not null default 'Sesi Latihan',
  sport_id         text not null,              -- lari | bersepeda | renang | gym | yoga | hiit | badminton | lainnya
  sport_label      text not null,              -- "Lari", "Gym / Beban", ...
  session_date     date not null,              -- tanggal pelaksanaan
  start_time       time,                       -- jam mulai (nullable)
  duration_hours   integer not null default 0 check (duration_hours >= 0),
  duration_minutes integer not null default 0 check (duration_minutes >= 0 and duration_minutes < 60),
  total_minutes    integer generated always as (duration_hours * 60 + duration_minutes) stored,
  distance_km      numeric(6,2) not null default 0 check (distance_km >= 0),
  intensity_id     text not null default 'moderate',  -- light | moderate | heavy
  mood_id          text not null default 'energetic', -- energetic | tired | satisfied
  notes            text not null default '',

  -- Biometrik saat sesi dicatat
  weight_kg        numeric(5,2) not null,
  height_cm        numeric(5,2) not null,
  age              integer not null check (age >= 5 and age <= 120),
  gender           text not null default 'male' check (gender in ('male','female')),

  -- Hasil kalkulasi (MET formula, pace, BMI, BMR)
  met              numeric(5,2) not null,
  calories         integer not null default 0 check (calories >= 0),
  pace             text not null default '-',
  bmi              numeric(4,2),
  bmr              integer
);

-- 2) Index untuk riwayat terbaru & filter
create index if not exists activities_created_at_idx on public.activities (created_at desc);
create index if not exists activities_sport_id_idx    on public.activities (sport_id);
create index if not exists activities_session_date_idx on public.activities (session_date desc);

-- 3) Row Level Security: demo satu user (anon key) boleh baca/tulis/hapus.
--    Untuk produksi multi-user, ganti dengan policy berbasis auth.uid().
alter table public.activities enable row level security;

drop policy if exists "activities_select_all" on public.activities;
create policy "activities_select_all"
  on public.activities for select
  using (true);

drop policy if exists "activities_insert_all" on public.activities;
create policy "activities_insert_all"
  on public.activities for insert
  with check (true);

drop policy if exists "activities_delete_all" on public.activities;
create policy "activities_delete_all"
  on public.activities for delete
  using (true);

-- 4) Contoh insert (opsional, untuk tes cepat)
-- insert into public.activities
--   (session_name, sport_id, sport_label, session_date, start_time,
--    duration_hours, duration_minutes, distance_km, intensity_id, mood_id,
--    notes, weight_kg, height_cm, age, gender, met, calories, pace, bmi, bmr)
-- values
--   ('Lari Sore Keliling Kompleks', 'lari', 'Lari', current_date, '16:45',
--    0, 45, 5.20, 'moderate', 'energetic',
--    'Rute datar, pace stabil.', 68.5, 175, 26, 'male', 9.80, 380, '08''39" / km', 22.37, 1650);
