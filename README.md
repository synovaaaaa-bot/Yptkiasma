# 🕌 Website YTPK Iasma I Landbouw Bukittinggi

Website resmi **YTPK Iasma I Landbouw Bukittinggi** - Sejak 2009, mewadahi kepedulian alumni dalam memberdayakan masyarakat melalui program pendidikan, sosial, dan kesehatan.

[![Built with React](https://img.shields.io/badge/React-18-61dafb?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646cff?logo=vite)](https://vitejs.dev/)

---

## 🌟 Highlights

- ✨ **Modern Islamic Design** - Tema Islamic yang tenang dengan primary color hijau tua (#0F766E), secondary tosca (#5EEAD4), accent emas (#FACC15)
- 🎨 **Fully Responsive** - Optimal di semua devices (Mobile, Tablet, Desktop)
- ⚡ **Blazing Fast** - Built with Vite & optimized performance
- 📱 **CMS-Ready Structure** - Payload CMS compatible data models
- 🔄 **Real Data Collections** - 7 Programs, 11 Activities, 11 News Articles, 6 Gallery Albums
- 🔗 **Social Media Integration** - Direct links ke dokumentasi Instagram/Facebook/Threads
- 🎯 **SEO Optimized** - Meta tags & semantic HTML

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/ytpk-website.git
cd ytpk-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka browser di **`http://localhost:5173`**

### Build for Production

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
ytpk-website/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/              # Base UI components (shadcn-inspired)
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ArticleDetailModal.tsx
│   │   │   └── ...
│   │   └── pages/               # Page components
│   │       ├── HomePage.tsx
│   │       ├── ProfilPage.tsx
│   │       ├── ProgramPage.tsx
│   │       ├── KegiatanPage.tsx
│   │       ├── BeritaPage.tsx
│   │       ├── GaleriPage.tsx
│   │       ├── DonasiPage.tsx
│   │       └── KontakPage.tsx
│   ├── collections/             # Data Collections (Payload CMS ready)
│   │   ├── programs.ts          # 7 Programs YTPK
│   │   ├── activities.ts        # 11 Real Activities
│   │   ├── posts.ts             # 11 News Articles
│   │   └── albums.ts            # 6 Gallery Albums
│   ├── globals/                 # Global Configurations
│   │   ├── header.ts
│   │   ├── footer.ts
│   │   └── site-settings.ts
│   ├── types/                   # TypeScript Type Definitions
│   │   └── collections.ts       # All collection types
│   ├── styles/                  # Global Styles
│   │   ├── globals.css
│   │   ├── theme.css            # Design tokens & CSS variables
│   │   └── fonts.css
│   └── assets/
│       └── logos.ts             # Logo configurations
├── public/                      # Static assets
├── package.json
└── README.md
```

---

## 🏠 Pages & Features

### Main Pages

| Page | Route | Description |
|------|-------|-------------|
| **Beranda** | `/` | Hero section, featured programs, statistics, upcoming events |
| **Profil** | `/profil` | Tentang yayasan, visi misi, timeline sejak 2009, struktur organisasi |
| **Program** | `/program` | 7 Program YTPK (Sosial, Kesehatan, Pendidikan) |
| **Kegiatan** | `/kegiatan` | 11 Kegiatan riil dengan social media links |
| **Berita** | `/berita` | 11 Artikel berita dengan source links ke sosmed |
| **Galeri** | `/galeri` | 6 Album dokumentasi dengan lightbox viewer |
| **Donasi** | `/donasi` | Informasi donasi dan rekening yayasan |
| **Kontak** | `/kontak` | Form kontak, maps, dan info lokasi |

### Special Features

- 🎯 **Featured Programs Carousel** - Auto-rotate showcase
- 📅 **Activities Calendar** - Interactive calendar dengan filter kategori
- 🖼️ **Gallery Lightbox** - Full-screen photo viewer
- 🔍 **Search & Filter** - Di halaman Berita dan Kegiatan
- 📱 **Social Media Links** - Direct links ke Instagram/Facebook/Threads di setiap berita
- 🎨 **Smooth Animations** - Motion animations untuk better UX
- 🌐 **Responsive Design** - Mobile-first approach

---

## 📊 Data Collections

### Programs (7 Programs)

```typescript
// /src/collections/programs.ts
1. Sebar Qurban ke Daerah Terpencil
2. Bantuan Bencana
3. Operasi Bibir Sumbing Gratis
4. Operasi Katarak Gratis
5. Pembagian Takjil dan Sembako di Bulan Ramadhan
6. Go Clean Mushalla dan Mesjid
7. Waqaf Al-Qur'an
```

### Activities (11 Real Activities)

```typescript
// /src/collections/activities.ts
- Bantuan Bencana: Malalo, #PrayforSumbar, Jorong Pauh
- Bantuan Air Bersih: Filter Air Maninjau, Update Filter Air
- Donasi & Santunan: Penyaluran Donasi, Donasi Uda Uni Bukittinggi
- Program Pendidikan: Pendataan Siswa Kurang Mampu
- Bantuan Material: BSPS Material untuk Masyarakat
- Majelis Taklim: Undangan Majelis Taklim
- Komunitas Alumni: Baksos & Pertemuan Alumni
```

### Posts/News (11 Articles)

```typescript
// /src/collections/posts.ts
- Konten lengkap dengan paragraf 3-5
- Source links ke Instagram/Facebook/Threads
- Kategori: bantuan-bencana, bantuan-air-bersih, donasi-santunan, program-pendidikan, dll
- Featured flag untuk highlight articles
```

### Albums (6 Gallery Albums)

```typescript
// /src/collections/albums.ts
- Bantuan Bencana Alam Malalo
- Program Bantuan Air Bersih
- Penyaluran Donasi & Santunan
- Pendataan Siswa Kurang Mampu
- Bantuan Material & Infrastruktur
- Kegiatan Majelis Taklim
```

---

## 🎨 Design System

### Color Palette

```css
/* Islamic Theme Colors */
--primary: #0F766E;        /* Hijau Tua (Teal 700) */
--secondary: #5EEAD4;      /* Tosca (Teal 300) */
--accent: #FACC15;         /* Emas (Yellow 400) */

/* Semantic Colors */
--background: #FFFFFF;
--foreground: #0A0A0A;
--muted: #F5F5F5;
--muted-foreground: #737373;
--border: #E5E5E5;
```

### Typography

- **Font Family**: System fonts (sans-serif)
- **Headings**: Bold, modern Islamic style
- **Body**: Readable, clean sans-serif

### Components

Built with **shadcn/ui** inspired components:
- `Button`, `Card`, `Badge`, `Dialog/Modal`
- `Input`, `Select`, `Checkbox`
- Custom components: `ArticleDetailModal`, `ProgramDetailModal`, `GalleryLightbox`

---

## 🔗 Social Media Integration

### Article Detail Modal dengan Source Links

Setiap artikel berita di halaman **Berita** dilengkapi dengan button source yang langsung link ke sosmed:

```typescript
// Automatic platform detection
- 🟣 Instagram button (pink)
- 🔵 Facebook button (blue)  
- ⚫ Threads button (gray)
```

**Features:**
- Auto-extract links dari markdown content
- Platform-specific icon & color
- Open in new tab
- ExternalLink indicator

**Example:**
```
Sumber & Dokumentasi
[📷 Instagram ↗] [📘 Facebook ↗]
```

---

## ⚙️ Configuration

### Update Branding

Edit `/src/globals/site-settings.ts`:

```typescript
export const siteSettings = {
  name: 'YTPK IASMA 1 Landbouw',
  description: 'Yayasan TPK Ikatan Alumni SMA 1 Landbouw Bukittinggi',
  tagline: 'Sejak 2009 - Berbakti untuk Umat',
  // ...
}
```

### Update Contact Info

Edit `/src/globals/footer.ts`:

```typescript
contactInfo: {
  address: 'Jl. Sudirman No. 123, Bukittinggi',
  phone: '+62 812 3456 7890',
  email: 'info@ytpk-iasma.or.id',
  whatsapp: '+62 812 3456 7890',
}
```

### Update Social Media

Edit `/src/globals/footer.ts`:

```typescript
socialLinks: [
  { platform: 'facebook', url: 'https://facebook.com/ytpk.iasma' },
  { platform: 'instagram', url: 'https://instagram.com/ytpk_iasma' },
  { platform: 'youtube', url: 'https://youtube.com/@ytpk-iasma' },
  { platform: 'whatsapp', url: 'https://wa.me/6281234567890' },
]
```

---

## 🌐 Deployment

### Deploy ke Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy di Vercel:**
   - Login ke [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository
   - Vercel auto-detect Vite config
   - Click "Deploy"

3. **Custom Domain:**
   - Project Settings → Domains
   - Add your domain (e.g., `ytpk-iasma.or.id`)
   - Follow DNS configuration instructions

### Environment Variables (if needed)

Create `.env` file:

```bash
VITE_SITE_NAME=YTPK IASMA 1 Landbouw
VITE_API_URL=https://api.example.com
```

Access in code:
```typescript
const siteName = import.meta.env.VITE_SITE_NAME;
```

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **TypeScript** | 5.x | Type Safety |
| **Vite** | 6.x | Build Tool & Dev Server |
| **Tailwind CSS** | 4.x | Utility-first CSS |
| **React Router** | 7.x | Client-side Routing |
| **Motion** | Latest | Smooth Animations |
| **Lucide React** | Latest | Icon Library |
| **Embla Carousel** | Latest | Carousel Component |
| **Sonner** | Latest | Toast Notifications |

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Lint code
npm run lint
```

### Adding New Page

1. Create page component:
```typescript
// /src/app/pages/NewPage.tsx
export default function NewPage() {
  return <div>New Page</div>;
}
```

2. Add route in `/src/app/App.tsx`:
```typescript
import NewPage from './pages/NewPage';

<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation in `/src/app/components/Navbar.tsx`:
```typescript
{ to: '/new-page', label: 'New Page' }
```

### Adding New Collection

1. Define type in `/src/types/collections.ts`:
```typescript
export interface NewCollection {
  id: string;
  title: string;
  // ...
}
```

2. Create collection file `/src/collections/new-collection.ts`:
```typescript
import { NewCollection } from '../types/collections';

export const newCollection: NewCollection[] = [
  // data...
];
```

3. Import & use in pages:
```typescript
import { newCollection } from '@/collections/new-collection';
```

---

## 🐛 Troubleshooting

### Build Errors

**Issue: TypeScript errors**
```bash
npm run type-check
```

**Issue: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling Issues

**Issue: Tailwind classes not working**
- Check `/src/styles/globals.css` imports
- Verify Tailwind v4 setup
- Clear browser cache

### Performance

**Issue: Slow page load**
- Optimize images (use WebP format)
- Lazy load components with `React.lazy()`
- Check Network tab in DevTools

---

## 📝 Checklist Before Launch

- [ ] Update all placeholder text dengan data riil
- [ ] Replace logo placeholders (jika ada)
- [ ] Verify semua contact information
- [ ] Test all social media links
- [ ] Test forms (kontak, donasi)
- [ ] Test di berbagai devices (mobile, tablet, desktop)
- [ ] Test di berbagai browsers (Chrome, Firefox, Safari)
- [ ] Optimize all images
- [ ] Setup custom domain
- [ ] Add Google Analytics (optional)
- [ ] Setup SSL certificate
- [ ] Test production build locally
- [ ] Backup database collections

---

## 🤝 Contributing

Untuk update dan maintenance website:

1. Fork repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open Pull Request

---

## 📞 Support & Contact

**Yayasan YTPK IASMA 1 Landbouw Bukittinggi**

- 📧 Email: info@ytpk-iasma.or.id
- 📱 WhatsApp: +62 812 3456 7890
- 📍 Alamat: Bukittinggi, Sumatera Barat
- 🌐 Website: https://ytpk-iasma.or.id

**Social Media:**
- Instagram: [@ytpk_iasma](https://instagram.com/ytpk_iasma)
- Facebook: [YTPK IASMA](https://facebook.com/ytpk.iasma)
- YouTube: [@ytpk-iasma](https://youtube.com/@ytpk-iasma)

---

## 📄 License

© 2025 Yayasan YTPK Ikatan Alumni SMA 1 Landbouw Bukittinggi. All rights reserved.

**Sejak 2009** - Berbakti untuk Umat

---

## 🙏 Credits

Built with ❤️ by alumni SMA 1 Landbouw Bukittinggi for the community.

**Powered by:**
- React & TypeScript
- Tailwind CSS v4
- Vite
- Vercel

---

<div align="center">

### ✨ Berkah untuk Umat, Manfaat untuk Sesama ✨

**YTPK IASMA 1 Landbouw Bukittinggi** | Est. 2009

</div>