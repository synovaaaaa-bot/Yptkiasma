# Website Yayasan TPK IASMA 1 Landbouw Bukittinggi

Website resmi Yayasan TPK IASMA 1 Landbouw Bukittinggi yang dibangun dengan React, TypeScript, dan Tailwind CSS.

## 🚨 CRITICAL: Vercel Build Error Fix

**Jika Anda mendapati error saat deploy di Vercel**, pilih salah satu:

### ⚡ Super Quick (Copy-Paste)
👉 **[FIX-NOW.md](./FIX-NOW.md)** - 3 commands to fix

### 🤖 Automated (Recommended)  
👉 **[START-HERE.md](./START-HERE.md)** - Run script & deploy

### 📚 Detailed Guide
👉 **[SOLUTION-SUMMARY.md](./SOLUTION-SUMMARY.md)** - Understanding & solution  
👉 **[FORCE-FIX.md](./FORCE-FIX.md)** - Manual step-by-step

**Quick Solution:**
```bash
# Run auto-fix script
chmod +x QUICK-FIX.sh
./QUICK-FIX.sh

# Then commit and push
git commit -m "Fix: Force remove figma:asset imports"
git push origin main --force-with-lease
```

**Root Cause:** Git cache masih menyimpan file lama dengan `figma:asset` imports.

**📖 All Documentation:** [INDEX.md](./INDEX.md) | [DOCS-INDEX.md](./DOCS-INDEX.md)

---

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Mode
```bash
npm run dev
```

Buka browser di `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   └── pages/           # Page components
│   │       ├── HomePage.tsx
│   │       ├── ProfilPage.tsx
│   │       └── ...
│   ├── assets/
│   │   └── logos.ts         # Logo configurations
│   ├── collections/         # Data models (Payload CMS ready)
│   ├── globals/            # Global configurations
│   ├── types/              # TypeScript type definitions
│   └── styles/             # Global styles and themes
├── DEPLOYMENT.md           # Deployment guide
└── package.json
```

## 🏠 Pages

- **Beranda** (`/`) - Homepage dengan hero section, program unggulan, dan statistik
- **Profil** (`/profil`) - Tentang yayasan, visi misi, timeline, dan struktur organisasi
- **Program** (`/program`) - Daftar program pendidikan dan sosial
- **Kegiatan** (`/kegiatan`) - Agenda dan jadwal kegiatan dengan kalender interaktif
- **Berita** (`/berita`) - Artikel dan berita terkini
- **Galeri** (`/galeri`) - Dokumentasi foto kegiatan dengan lightbox
- **Donasi** (`/donasi`) - Informasi donasi dan cara berkontribusi
- **Kontak** (`/kontak`) - Formulir kontak dan informasi lokasi

### Special Features

- **Jadwal Sholat** (di Homepage) - Otomatis detect timezone (WIB/WITA/WIT)
- **Al-Quran Digital** (`/al-quran`) - Baca Al-Quran online dengan terjemahan
- **Kalkulator Zakat** (`/zakat`) - Hitung zakat mal, fitrah, dan profesi
- **Kurban** (`/hewan`) - Informasi dan pendaftaran hewan kurban

## 🖼️ Logo Configuration

Website ini menggunakan placeholder SVG untuk logo TPK dan IASMA. Untuk mengganti dengan logo asli:

### Cara 1: Menggunakan File Logo (Recommended)

1. Siapkan file logo Anda:
   - Format: PNG atau SVG
   - Ukuran: 512x512px atau lebih besar
   - Background: Transparan (PNG) atau SVG

2. Buat folder `public/logos/` dan letakkan file logo:
   ```
   /public/logos/logo-tpk.png
   /public/logos/logo-iasma.png
   ```

3. Edit file `/src/assets/logos.ts`:
   ```typescript
   export const logoTPK = "/logos/logo-tpk.png";
   export const logoIASMA = "/logos/logo-iasma.png";
   ```

### Cara 2: Menggunakan Base64 (Alternative)

Jika Anda ingin embed logo langsung dalam kode:

1. Convert logo ke base64 menggunakan online tool
2. Replace isi file `/src/assets/logos.ts` dengan base64 string

Lihat [DEPLOYMENT.md](./DEPLOYMENT.md) untuk panduan lengkap.

## 📸 Update Gambar Kegiatan

Website ini sudah dilengkapi dengan 10+ kegiatan riil YTPK. Untuk mengganti placeholder dengan gambar asli dari Instagram/Facebook:

### Setup GitHub CDN (One-Time Setup)

1. **Buat Repository GitHub Baru:**
   ```bash
   # Buat repo "ytpk-assets" di GitHub
   # Clone ke komputer
   git clone https://github.com/synovaaaaa-bot/ytpk-assets.git
   cd ytpk-assets
   
   # Buat struktur folder
   mkdir -p assets/kegiatan
   ```

2. **Download & Upload Gambar:**
   
   Download screenshot/gambar dari Instagram/Facebook dengan nama file:
   - `2026-01-03_malalo_cover.jpg`
   - `2026-01-06_prayforsumbar_cover.jpg`
   - `2025-12-10_jorong-pauh_cover.jpg`
   - `2025-12-16_filter-air_maninjau_cover.jpg`
   - `2025-12-16_update-filter-air_cover.jpg`
   - `2025-12-12_penyaluran-donasi_cover.jpg`
   - `2025-12-04_donasi-uda-uni_cover.jpg`
   - `2025-12-15_pendataan-siswa_cover.jpg`
   - `2025-11-17_bsps_material_cover.jpg`
   - `2025-09-06_undangan-majelis-taklim_cover.jpg`
   
   Letakkan di folder `assets/kegiatan/`

3. **Push ke GitHub:**
   ```bash
   git add .
   git commit -m "Add kegiatan cover images"
   git push origin main
   ```

4. **Aktifkan Gambar di Website:**
   
   Edit file `/src/collections/activities.ts`, ubah fungsi `getImageUrl`:
   
   ```typescript
   const getImageUrl = (filename: string, category: string) => {
     // Aktifkan baris ini untuk production:
     return `${CDN_BASE_URL}/${filename}`;
     
     // Comment baris ini:
     // return FALLBACK_IMAGES[category as keyof typeof FALLBACK_IMAGES];
   };
   ```

5. **Commit & Deploy:**
   ```bash
   git add .
   git commit -m "Update: Use real activity images from GitHub CDN"
   git push origin main
   ```

### Menambah Kegiatan Baru

Untuk menambahkan kegiatan baru ke halaman Kegiatan:

1. Upload gambar baru ke `ytpk-assets/assets/kegiatan/` dengan format: `YYYY-MM-DD_nama-kegiatan_cover.jpg`
2. Edit `/src/collections/activities.ts` dan tambahkan entry baru:
   ```typescript
   {
     id: 'ytpk-2026-01-20-nama-kegiatan',
     title: 'Judul Kegiatan',
     slug: 'nama-kegiatan',
     description: 'Deskripsi singkat...',
     image: getImageUrl('2026-01-20_nama-kegiatan_cover.jpg', 'kategori'),
     category: 'bantuan-bencana', // pilih kategori
     date: '2026-01-20',
     location: 'Lokasi kegiatan',
     participants: 100,
     content: `Content lengkap kegiatan...`,
     socialLinks: [
       { platform: 'instagram', url: 'https://instagram.com/...' },
     ],
     featured: false, // true jika ingin di featured carousel
     _status: 'published',
     // ... dst
   }
   ```

3. Kategori yang tersedia:
   - `bantuan-bencana` - Bantuan Bencana & Kemanusiaan
   - `bantuan-air-bersih` - Bantuan Air Bersih
   - `donasi-santunan` - Penyaluran Donasi & Santunan
   - `program-pendidikan` - Program Pendidikan
   - `bantuan-material` - Bantuan Material & Infrastruktur
   - `majelis-taklim` - Majelis Taklim & Kajian
   - `komunitas-alumni` - Komunitas & Alumni

**Note:** Untuk sementara, website menggunakan placeholder images dari Unsplash. Gambar akan otomatis beralih ke GitHub CDN setelah Anda upload dan aktifkan.

## 🌐 Deployment ke Vercel

### Step 1: Push ke GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login
2. Click "New Project"
3. Import repository GitHub Anda
4. Vercel akan auto-detect Vite configuration
5. Click "Deploy"

Website Anda akan live di `https://your-project.vercel.app`

### Custom Domain

Untuk menggunakan domain sendiri (misal: `tpkiasma.or.id`):
1. Buka Project Settings di Vercel
2. Pilih "Domains"
3. Tambah domain Anda
4. Ikuti instruksi DNS configuration

## ⚙️ Configuration

### Update Informasi Kontak

Edit file berikut untuk update informasi kontak:

1. **Footer Component**: `/src/app/components/Footer.tsx`
2. **Footer Global**: `/src/globals/footer.ts`
3. **Kontak Page**: `/src/app/pages/KontakPage.tsx`

### Update Social Media

Edit `/src/globals/footer.ts`:
```typescript
socialLinks: [
  { platform: 'facebook', url: 'https://facebook.com/tpkiasma' },
  { platform: 'instagram', url: 'https://instagram.com/tpkiasma' },
  { platform: 'youtube', url: 'https://youtube.com/@tpkiasma' },
  { platform: 'whatsapp', url: 'https://wa.me/6281234567890' },
]
```

## 🎯 Features

- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Modern Islamic Theme dengan warna yang tenang
- ✅ Smooth Animations & Transitions
- ✅ Interactive Components (Modal, Lightbox, Calendar)
- ✅ SEO Ready
- ✅ Fast Performance
- ✅ Clean & Maintainable Code
- ✅ TypeScript for Type Safety
- ✅ Tailwind CSS v4
- ✅ Payload CMS Ready Structure

## 📦 Technologies

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build Tool
- **React Router** - Navigation
- **Lucide React** - Icons
- **Embla Carousel** - Carousel
- **Motion** - Animations
- **Sonner** - Toast Notifications
- **React Day Picker** - Date Picker

## 🐛 Troubleshooting

### Build Error di Vercel

Jika build gagal dengan error `figma:asset`:
- Pastikan semua import `figma:asset` sudah diganti dengan logo configuration baru
- Check file `/src/assets/logos.ts` sudah benar
- Hapus folder `node_modules` dan `package-lock.json`, lalu `npm install` lagi

### Logo Tidak Muncul

- Periksa path logo sudah benar
- Jika menggunakan `/public`, pastikan folder sudah dibuat
- Check browser console untuk error 404

### Jadwal Sholat Tidak Muncul

- Check koneksi internet (menggunakan API eksternal)
- Pastikan browser support geolocation
- Check console untuk error messages

## 📝 Before Going Live

Checklist sebelum launch:
- [ ] Replace placeholder logos dengan logo asli
- [ ] Update semua informasi kontak
- [ ] Verify social media links
- [ ] Test all pages dan navigation
- [ ] Test pada mobile devices
- [ ] Test forms (kontak, donasi, dll)
- [ ] Optimize images
- [ ] Setup custom domain
- [ ] Test jadwal sholat functionality
- [ ] Add Google Analytics (optional)

## 🤝 Support

Untuk bantuan lebih lanjut, hubungi:
- Email: info@tpkiasma.or.id
- WhatsApp: +62 812 3456 7890

## 📄 License

© 2025 Yayasan TPK IASMA 1 Landbouw Bukittinggi. All rights reserved.

---

**Built with ❤️ for Yayasan TPK IASMA 1 Landbouw Bukittinggi**