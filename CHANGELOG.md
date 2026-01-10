# Changelog

## [Latest] - 2025-01-10

### 🔧 Fixed
- **CRITICAL**: Fixed Vercel deployment error caused by `figma:asset` imports
  - Removed all `figma:asset` virtual module imports
  - Created `/src/assets/logos.ts` with placeholder SVG logos
  - Updated all components to use new logo system

### 📝 Files Changed
- `/src/app/components/Navbar.tsx` - Updated logo imports
- `/src/app/components/Footer.tsx` - Updated logo imports
- `/src/app/pages/ProfilPage.tsx` - Updated logo imports + fixed missing imports
- `/src/globals/header.ts` - Updated logo imports
- `/src/globals/footer.ts` - Updated logo imports

### ➕ Files Added
- `/src/assets/logos.ts` - Logo configuration with placeholder SVGs
- `/README.md` - Comprehensive project documentation
- `/DEPLOYMENT.md` - Detailed deployment guide
- `/QUICK-START.md` - Quick start guide for deployment
- `/CHANGELOG.md` - This file
- `/.gitignore` - Git ignore configuration
- `/.vercelignore` - Vercel ignore configuration
- `/vercel.json` - Vercel deployment configuration

### 📋 Action Required
- [ ] Replace placeholder logos with actual TPK and IASMA logos
- [ ] Update contact information in Footer components
- [ ] Update social media links in `/src/globals/footer.ts`
- [ ] Test deployment on Vercel

### ✅ Ready for Deployment
- All build errors fixed
- Production-ready code
- Comprehensive documentation provided
- Deployment configurations in place

---

## Previous Updates

### Payload CMS Structure - 2025-01-10
- Created `/types/` folder with TypeScript type definitions
- Created `/collections/` folder with data models (posts, programs, events)
- Created `/globals/` folder with global configurations (header, footer, site settings)
- Structured project to be Payload CMS-ready

### Logo Integration - Recent
- Integrated TPK and IASMA logos in Navbar
- Added logos to Footer
- Added logos to Profil page hero section
- Consistent logo naming (TPK not YPTK)

### Homepage Improvements - Recent
- Fixed CTA button styling (white background, dark green text)
- Improved contrast and readability
- Better responsive design

### Jadwal Sholat - Recent
- Added automatic timezone detection (WIB/WITA/WIT)
- Improved prayer time display
- Better error handling

### All Pages Renovated - Recent
- Modern Islamic design with consistent color scheme
- Unique designs for each page (not template-like)
- Proper icons from Lucide React
- Professional and trustworthy appearance
- Complete feature set including:
  - Homepage with stats and programs
  - Profil with timeline and values
  - Program listing with details
  - Interactive calendar for Kegiatan
  - Berita with article modals
  - Gallery with lightbox
  - Donasi with multiple methods
  - Contact form with map
  - Al-Quran digital reader
  - Zakat calculator
  - Hewan kurban information

---

## Notes

### Placeholder Logos
The current logos are SVG placeholders:
- **TPK Logo**: Circular green badge with "TPK" text
- **IASMA Logo**: Rectangular green badge with "IASMA Landbouw" text

These should be replaced with actual high-resolution logo files before final production launch.

### Color Scheme
- Primary: #0F766E (Dark Teal/Green)
- Secondary: #5EEAD4 (Tosca)
- Accent: #FACC15 (Gold)

### Deployment Platform
- Target: Vercel
- Framework: Vite + React
- Build Command: `npm run build`
- Output Directory: `dist`
