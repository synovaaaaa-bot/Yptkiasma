# 🌟 YTPK IASMA 1 Landbouw Bukittinggi

Website resmi Yayasan TPK IASMA 1 Landbouw Bukittinggi - Platform modern untuk informasi yayasan, program sosial, dan sistem donasi online.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-cyan)

## 📖 Tentang Project

Website ini dibangun untuk memfasilitasi kegiatan Yayasan TPK IASMA 1 Landbouw dalam:
- 📢 Publikasi program dan kegiatan yayasan
- 💰 Penerimaan donasi online dengan validasi manual
- 📰 Berita dan artikel terkini
- 🖼️ Galeri dokumentasi kegiatan
- 📞 Sistem kontak dan pesan
- 👨‍💼 Admin dashboard untuk manajemen konten

## ✨ Fitur Utama

### Public Website
- ✅ **Landing Page** - Informasi lengkap tentang yayasan
- ✅ **Program** - Daftar program sosial dan kemanusiaan
- ✅ **Kegiatan** - Dokumentasi kegiatan yang telah dilaksanakan
- ✅ **Berita** - Artikel dan berita terbaru
- ✅ **Galeri** - Foto-foto kegiatan
- ✅ **Donasi** - Form donasi online dengan upload bukti transfer
- ✅ **Al-Quran** - Pembaca Al-Quran digital
- ✅ **Kalkulator Zakat** - Hitung zakat fitrah dan maal
- ✅ **Kalkulator Hewan Qurban** - Estimasi kebutuhan qurban

### Admin Dashboard
- ✅ **Dashboard** - Overview statistik
- ✅ **Kelola Program** - CRUD program sosial
- ✅ **Kelola Kegiatan** - CRUD kegiatan yayasan
- ✅ **Kelola Berita** - CRUD berita dan artikel
- ✅ **Validasi Donasi** - Review dan approve/reject donasi
- ✅ **Kelola Galeri** - Upload dan manage foto
- ✅ **Pesan Kontak** - View pesan dari pengunjung
- ✅ **Upload Image** - Supabase Storage integration

### Sistem Donasi
- ✅ Upload bukti transfer
- ✅ Validasi manual oleh admin
- ✅ Status: Pending → Approved/Rejected
- ✅ Notifikasi status
- ✅ Rekening tujuan: **BSI - 7270313307** (a.n. Yayasan TPK Iasma satu Landbouw)

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 6.3.5** - Build tool & dev server
- **React Router DOM 7.1.3** - Routing
- **Tailwind CSS 3.4.1** - Styling
- **Lucide React** - Icons

### Backend & Database
- **Supabase** - Backend as a Service
  - PostgreSQL database
  - Storage for images
  - Authentication (ready for future implementation)
- **Drizzle ORM** - Type-safe database access
- **Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Type checking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn
- Akun Supabase (gratis)

### 1. Clone Repository
```bash
git clone <repository-url>
cd Yptkiasma
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Buat file `.env` di root folder:
```env
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-ID].supabase.co:5432/postgres

VITE_SUPABASE_URL=https://[PROJECT-ID].supabase.co
VITE_SUPABASE_ANON_KEY=[YOUR-ANON-KEY]
```

> ⚠️ Ganti `[YOUR-PASSWORD]`, `[PROJECT-ID]`, dan `[YOUR-ANON-KEY]` dengan credentials Supabase Anda

### 4. Setup Database
```bash
# Push schema ke Supabase
npx drizzle-kit push
```

### 5. Apply Row Level Security Policies (CRITICAL)
**PENTING**: RLS policies wajib diterapkan untuk keamanan database!

Di **Supabase SQL Editor**, jalankan file:
```bash
drizzle/0001_rls_policies.sql
```

Ini akan:
- Enable RLS pada semua tables
- Protect data dari unauthorized access
- Public hanya bisa lihat published content
- Admin operations require authentication

### 6. Create Admin User
Di **Supabase Dashboard** > **Authentication** > **Users**:
1. Click "Add user"
2. Email: `yptkiasma@admin.com`
3. Password: `yptkiasma` (ganti setelah login)
4. Enable "Auto Confirm User"
5. Click "Create user"

Atau jalankan SQL di **Supabase SQL Editor**:
```bash
drizzle/create-admin-user.sql
```

### 7. Setup Supabase Storage

**PENTING**: Bucket 'images' harus dibuat sebelum bisa upload gambar!

**Cara 1: Via Supabase Dashboard (Recommended)**
1. Buka Supabase Dashboard: https://supabase.com/dashboard
2. Pilih project Anda
3. Pergi ke **Storage** → **Buckets**
4. Klik **"New bucket"**
5. Isi:
   - **Name**: `images`
   - **Public bucket**: ✅ (centang untuk akses public)
6. Klik **"Create bucket"**
7. Setelah bucket dibuat, buat policies:
   - Pergi ke **Storage** → **Policies**
   - Tambahkan policies untuk bucket 'images' (lihat file SQL di bawah)

**Cara 2: Via SQL (Lebih Cepat)**
Jalankan file SQL ini di **Supabase SQL Editor**:
```
drizzle/0002_storage_bucket.sql
```

File ini akan membuat bucket dan semua policies yang diperlukan secara otomatis.

### 8. Run Development Server
```bash
npm run dev
```

Buka browser: **http://localhost:5173**

## 👨‍💼 Admin Access

### Login Credentials
```
URL: http://localhost:5173/admin/login
Email: yptkiasma@admin.com
Password: yptkiasma
```

> ⚠️ **PENTING**: 
> - Authentication menggunakan Supabase Auth (secure & encrypted)
> - Ganti password setelah login pertama
> - Admin users dikelola di Supabase Dashboard > Authentication

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Database
npx drizzle-kit push     # Push schema to database
npx drizzle-kit studio   # Open Drizzle Studio
npm run db:seed          # Seed initial data

# Code Quality
npm run lint             # Run ESLint
```

## 📂 Project Structure

```
Yptkiasma/
├── src/
│   ├── app/
│   │   ├── components/      # React components
│   │   │   ├── admin/       # Admin-only components
│   │   │   └── ui/          # Reusable UI components
│   │   └── pages/           # Page components
│   │       ├── admin/       # Admin pages
│   │       └── *.tsx        # Public pages
│   ├── api/                 # API layer (Supabase)
│   │   ├── supabase-db.ts   # CRUD operations
│   │   ├── donations-api.ts # Donation operations
│   │   └── *.ts
│   ├── db/                  # Database
│   │   ├── schema.ts        # Drizzle schema
│   │   ├── index.ts         # DB connection
│   │   └── seed.ts          # Seed script
│   ├── lib/                 # Utilities
│   │   ├── supabase.ts      # Supabase client
│   │   └── supabase-storage.ts # Storage helpers
│   ├── contexts/            # React contexts
│   ├── collections/         # Static data (fallback)
│   ├── types/               # TypeScript types
│   └── styles/              # CSS files
├── drizzle/                 # Database migrations
├── public/                  # Static assets
├── .env                     # Environment variables
├── drizzle.config.ts        # Drizzle configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

## 🗄️ Database Schema

### Tables
- **admin_users** - Admin metadata (auth via Supabase Auth)
- **programs** - Program sosial yayasan
- **activities** - Kegiatan yang dilaksanakan
- **posts** - Berita dan artikel
- **donations** - Donasi dengan validasi
- **albums** - Album galeri
- **photos** - Foto dalam album
- **contact_messages** - Pesan dari form kontak

## 🎨 Customization

### Logo & Branding
Logo terletak di `src/assets/logos.ts`. Update dengan logo yayasan Anda.

### Colors
Edit `tailwind.config.js` untuk mengubah color scheme:
```js
colors: {
  primary: '#2d5a3d',    // Hijau utama
  secondary: '#1e3a2b',  // Hijau gelap
  accent: '#fbbf24',     // Kuning aksen
}
```

### Bank Account
Update nomor rekening di `src/app/pages/DonasiPage.tsx`:
```tsx
BSI - 7270313307
a.n. Yayasan TPK Iasma satu Landbouw
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy!

### Environment Variables di Vercel
```
DATABASE_URL=postgresql://...
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_ANON_KEY=...
```

## 🔒 Security

### ✅ Security Features Implemented
- ✅ **Supabase Auth** - JWT-based authentication
- ✅ **Password Hashing** - Bcrypt via Supabase Auth
- ✅ **RLS Policies** - Database-level access control (apply via SQL)
- ✅ **Protected APIs** - All admin operations require auth
- ✅ **Secure File Uploads** - Authentication + validation required
- ✅ **Environment Variables** - No credentials in source code

### Production Deployment Checklist
- [ ] Apply RLS policies: `drizzle/0001_rls_policies.sql`
- [ ] Create admin user via Supabase Auth
- [ ] Set environment variables in hosting platform
- [ ] Ganti admin password default
- [ ] Enable HTTPS (auto di Vercel)
- [ ] Setup database backups di Supabase
- [ ] Monitor auth logs untuk suspicious activity

## 📸 Screenshots

### Public Website
- Landing Page dengan hero section modern
- Program cards dengan kategori
- Kegiatan grid dengan filter
- Form donasi dengan upload bukti

### Admin Dashboard
- Statistics dashboard
- CRUD tables dengan search & filter
- Image upload preview
- Donation validation interface

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:
1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Copyright © 2024 Yayasan TPK IASMA 1 Landbouw Bukittinggi

## 👥 Contact

**Yayasan TPK IASMA 1 Landbouw**
- 📍 Bukittinggi, Sumatera Barat
- 📧 Email: (update dengan email yayasan)
- 🌐 Website: (update setelah deploy)
- 📱 Instagram: [@iasma1bukittinggi](https://www.instagram.com/iasma1bukittinggi/)

## 🙏 Acknowledgments

- React Team
- Supabase Team
- Vercel
- Tailwind CSS
- Lucide Icons
- Semua kontributor open source

---

**Made with ❤️ for YTPK IASMA 1 Landbouw Bukittinggi**
