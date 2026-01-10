# 🚀 Quick Start Guide - Deployment Fix

## ✅ Problem Solved

Error build di Vercel karena `figma:asset` imports sudah diperbaiki!

## 🔧 What Was Fixed

1. ✅ Removed all `figma:asset` imports
2. ✅ Created placeholder SVG logos in `/src/assets/logos.ts`
3. ✅ Updated all components to use new logo system:
   - Navbar.tsx
   - Footer.tsx
   - ProfilPage.tsx
   - header.ts (global)
   - footer.ts (global)

## 📋 Next Steps

### 1️⃣ Replace Placeholder Logos (IMPORTANT!)

**Current Status**: Using placeholder SVG logos with text "TPK" and "IASMA Landbouw"

**What to do**:

Option A - Using Image Files (Easiest):
```bash
# 1. Create public folder
mkdir -p public/logos

# 2. Add your logo files:
#    - public/logos/logo-tpk.png
#    - public/logos/logo-iasma.png

# 3. Edit /src/assets/logos.ts:
export const logoTPK = "/logos/logo-tpk.png";
export const logoIASMA = "/logos/logo-iasma.png";
```

Option B - Using Base64 (Alternative):
```typescript
// Edit /src/assets/logos.ts directly with your base64 strings
export const logoTPK = "data:image/png;base64,iVBORw0...";
export const logoIASMA = "data:image/png;base64,iVBORw0...";
```

### 2️⃣ Deploy to Vercel

```bash
# Commit changes
git add .
git commit -m "Fix figma:asset imports for production"
git push origin main

# Then go to vercel.com:
# 1. Import your GitHub repository
# 2. Click Deploy
# 3. Done! ✨
```

### 3️⃣ Update Contact Information

Edit these files before going live:

**Footer Contact**:
- File: `/src/app/components/Footer.tsx`
- File: `/src/globals/footer.ts`

**Social Media Links**:
- File: `/src/globals/footer.ts`
```typescript
socialLinks: [
  { platform: 'facebook', url: 'https://facebook.com/YOUR_PAGE' },
  { platform: 'instagram', url: 'https://instagram.com/YOUR_ACCOUNT' },
  { platform: 'youtube', url: 'https://youtube.com/@YOUR_CHANNEL' },
  { platform: 'whatsapp', url: 'https://wa.me/YOUR_NUMBER' },
]
```

## 🎨 Logo Guidelines

**Recommended Specifications**:
- Format: PNG (transparent background) or SVG
- Size: 512x512px minimum
- Resolution: 72 DPI for web
- Color: Original logo colors (will be displayed as-is)

**Where Logos Appear**:
- ✓ Navbar (top-left, 56x56px)
- ✓ Footer (48x48px)
- ✓ Profil Page Hero (96x96px on desktop, 80x80px on mobile)

## 📝 Pre-Launch Checklist

- [ ] Replace placeholder logos with actual logos
- [ ] Update footer contact information
- [ ] Update social media links
- [ ] Test all pages on desktop
- [ ] Test all pages on mobile
- [ ] Test contact form
- [ ] Test donation flow
- [ ] Verify jadwal sholat works
- [ ] Check all images load correctly
- [ ] Set up custom domain (optional)

## 🆘 Troubleshooting

**Build still fails?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Logo not showing?**
- Check file path is correct
- Verify file exists in correct location
- Check browser console for 404 errors
- Make sure file extension is correct (.png, .svg, etc.)

**Need help?**
- Check `/README.md` for full documentation
- Check `/DEPLOYMENT.md` for detailed deployment guide
- Check console logs in browser DevTools

## 🎯 What's Working Now

✅ All pages render correctly
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations
✅ Interactive components
✅ Jadwal sholat dengan timezone detection
✅ Al-Quran digital
✅ Kalkulator zakat
✅ Gallery lightbox
✅ Forms and modals

## 📦 Production Build Test

Test locally before deploying:
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Open browser at http://localhost:4173
```

## 🌐 After Deployment

Once deployed to Vercel:

1. **Test Everything**: Click through all pages
2. **Mobile Test**: Use your phone to test
3. **Speed Test**: Use PageSpeed Insights
4. **Custom Domain**: Add your domain in Vercel settings
5. **SSL**: Vercel provides free SSL automatically

---

**Ready to deploy? Let's go! 🚀**

Need more details? Check:
- 📖 [README.md](./README.md) - Full documentation
- 🚢 [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
