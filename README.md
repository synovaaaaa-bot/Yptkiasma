# Website Yayasan TPK IASMA 1 Landbouw Bukittinggi

Website resmi Yayasan TPK IASMA 1 Landbouw Bukittinggi yang dibangun dengan React, TypeScript, dan Tailwind CSS.

## 🎨 Design System

Website ini menggunakan tema warna Islamic modern:
- **Primary Color**: Hijau Tua (#0F766E)
- **Secondary Color**: Tosca (#5EEAD4)
- **Accent Color**: Emas (#FACC15)

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
