# Help, Pendaki

Aplikasi PWA untuk pendaki gunung Indonesia.

## Fitur

- Direktori gunung dan jalur pendakian
- Informasi status jalur (buka/tutup/terbatas)
- Peta rute dengan GPX
- Kalkulator logistik
- Checklist perlengkapan
- Informasi cuaca
- Mode offline

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)
- Dexie.js (IndexedDB)
- Serwist (PWA)

## Struktur Folder

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Beranda
│   ├── gunung/[slug]/     # Detail gunung
│   ├── offline/           # Halaman offline
│   ├── layout.tsx         # Layout utama
│   ├── manifest.ts        # PWA manifest
│   └── sw.ts              # Service worker
├── components/
│   └── mountain/
│       └── MountainCard.tsx
├── lib/
│   ├── supabase/          # Koneksi Supabase
│   │   ├── client.ts
│   │   └── server.ts
│   └── offline/           # Database offline
│       └── db.ts
├── types/
│   └── database.ts        # Tipe TypeScript
└── app/globals.css        # Tailwind CSS

supabase/
├── migrations/
│   └── 0001_init.sql      # Skema database
└── seed/
    └── seed.sql            # Data awal
```

## Setup Development

1. Clone repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` ke `.env.local` dan isi dengan kredensial Supabase
4. Jalankan migrasi database di Supabase Dashboard
5. Jalankan seed data
6. Start development server:
   ```bash
   npm run dev
   ```

## Deploy

1. Push ke GitHub
2. Import ke Vercel
3. Tambahkan environment variables
4. Deploy

## Roadmap

### Fase 1 (Kerangka) ✅
- [x] Setup project
- [x] Database schema
- [x] Halaman beranda
- [x] Halaman detail gunung
- [x] PWA configuration
- [x] Offline database

### Fase 2 (Fitur Inti)
- [ ] Kalkulator logistik
- [ ] Checklist perlengkapan
- [ ] Upload dan parse GPX
- [ ] Peta dengan MapLibre

### Fase 3 (Komunitas)
- [ ] Autentikasi
- [ ] Ulasan
- [ ] Komparasi rute

## Lisensi

MIT
