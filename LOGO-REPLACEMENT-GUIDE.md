# 🎨 Logo Replacement Guide

## Current Status

✅ **Deployment Error Fixed!** 
Your website is now ready to deploy, but using placeholder SVG logos.

❗ **Action Required:** Replace placeholder logos with actual TPK and IASMA logos before final launch.

---

## 📍 Where Logos Appear

Your logos will be displayed in these locations:

1. **Navbar** (Top of every page)
   - Logo TPK: 56x56 pixels
   - Logo IASMA: 56x56 pixels
   - Position: Top-left corner

2. **Footer** (Bottom of every page)
   - Logo TPK: 48x48 pixels
   - Logo IASMA: 48x48 pixels
   - Position: Footer left section

3. **Profil Page Hero**
   - Logo TPK: 96x96 pixels (desktop), 80x80 pixels (mobile)
   - Logo IASMA: 96x96 pixels (desktop), 80x80 pixels (mobile)
   - Position: Center of hero section

---

## 🎯 Method 1: Using Image Files (Recommended)

### Step 1: Prepare Your Logos

**Requirements:**
- File format: PNG or SVG
- Background: Transparent (for PNG)
- Recommended size: **512x512 pixels** or larger
- Quality: High resolution (300 DPI for best quality)
- File names: 
  - `logo-tpk.png` or `logo-tpk.svg`
  - `logo-iasma.png` or `logo-iasma.svg`

**Tips:**
- Use PNG if your logo has transparent background
- Use SVG for best scalability and smallest file size
- Keep file size under 500KB for fast loading

### Step 2: Create Public Folder

```bash
# In your project root directory:
mkdir -p public/logos
```

### Step 3: Add Your Logo Files

Copy your logo files to the `public/logos/` directory:

```
/public/
  └── logos/
      ├── logo-tpk.png      ← Your TPK logo here
      └── logo-iasma.png    ← Your IASMA logo here
```

### Step 4: Update Logo Configuration

Edit the file: `/src/assets/logos.ts`

**Replace this:**
```typescript
// Logo placeholders for TPK and IASMA
// In production, replace these with actual logo files

export const logoTPK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'...";

export const logoIASMA = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'...";
```

**With this:**
```typescript
// TPK and IASMA Logos
export const logoTPK = "/logos/logo-tpk.png";
export const logoIASMA = "/logos/logo-iasma.png";
```

### Step 5: Test Locally

```bash
# Run development server
npm run dev

# Open browser at http://localhost:5173
# Check if logos appear correctly
```

### Step 6: Deploy

```bash
git add .
git commit -m "Update with actual logos"
git push origin main
```

---

## 🎯 Method 2: Using Base64 (Alternative)

Use this method if you want to embed logos directly in the code.

### Step 1: Convert Logo to Base64

**Online Tools:**
- https://base64.guru/converter/encode/image
- https://www.base64-image.de/
- https://codebeautify.org/image-to-base64-converter

**Or using Command Line:**
```bash
# On Mac/Linux:
base64 -i logo-tpk.png -o logo-tpk.txt
base64 -i logo-iasma.png -o logo-iasma.txt
```

### Step 2: Update Logo Configuration

Edit `/src/assets/logos.ts`:

```typescript
// TPK and IASMA Logos (Base64)
export const logoTPK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...YOUR_BASE64_HERE";

export const logoIASMA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...YOUR_BASE64_HERE";
```

**Note:** Replace `YOUR_BASE64_HERE` with your actual base64 string.

### Step 3: Test and Deploy

Same as Method 1, Step 5 and 6.

---

## 🎯 Method 3: Using Asset Imports (Advanced)

### Step 1: Create Assets Folder

```bash
mkdir -p src/assets/images
```

### Step 2: Add Logo Files

```
/src/
  └── assets/
      ├── logos.ts
      └── images/
          ├── logo-tpk.png
          └── logo-iasma.png
```

### Step 3: Update Logo Configuration

Edit `/src/assets/logos.ts`:

```typescript
// Import logo images
import logoTPKImage from './images/logo-tpk.png';
import logoIASMAImage from './images/logo-iasma.png';

// Export logos
export const logoTPK = logoTPKImage;
export const logoIASMA = logoIASMAImage;
```

---

## 🧪 Testing Checklist

After replacing logos, check:

- [ ] Navbar logo appears on all pages
- [ ] Footer logo appears on all pages
- [ ] Profil page hero logos appear correctly
- [ ] Logos are clear and not blurry
- [ ] Logos have correct aspect ratio
- [ ] Logos look good on mobile
- [ ] Page loads fast (logos not too large)
- [ ] Transparent background works (if PNG)

---

## 🐛 Troubleshooting

### Logo Not Showing

**Problem:** Logo doesn't appear after replacement

**Solutions:**
1. Check file path is correct
   ```typescript
   // ✅ Correct:
   export const logoTPK = "/logos/logo-tpk.png";
   
   // ❌ Wrong:
   export const logoTPK = "logos/logo-tpk.png";  // Missing leading slash
   ```

2. Check file exists in correct location
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Restart development server

### Logo is Blurry

**Problem:** Logo appears blurry or pixelated

**Solutions:**
1. Use larger source image (512x512px minimum)
2. Use SVG format instead of PNG
3. Use 2x or 3x resolution PNG

### File Size Too Large

**Problem:** Logo file is too big, slow to load

**Solutions:**
1. Compress PNG:
   - Use https://tinypng.com/
   - Use https://squoosh.app/
   
2. Convert to SVG (vector format)

3. Use WebP format (modern browsers):
   ```typescript
   export const logoTPK = "/logos/logo-tpk.webp";
   ```

### Wrong Aspect Ratio

**Problem:** Logo looks stretched or squashed

**Solutions:**
1. Ensure original logo has 1:1 aspect ratio (square)
2. Edit logo to be square before importing
3. Adjust CSS if needed (contact support)

---

## 📊 Logo Specifications Summary

| Location | Size (px) | Format | Background |
|----------|-----------|--------|------------|
| Navbar | 56x56 | PNG/SVG | Transparent |
| Footer | 48x48 | PNG/SVG | Transparent |
| Profil Hero (Desktop) | 96x96 | PNG/SVG | Transparent |
| Profil Hero (Mobile) | 80x80 | PNG/SVG | Transparent |
| Source File | 512x512+ | PNG/SVG | Transparent |

---

## ✅ After Logo Replacement

Once logos are updated:

1. **Test locally** - Make sure everything looks good
2. **Commit changes** - Save to git
3. **Push to GitHub** - Deploy to Vercel
4. **Verify production** - Check live site
5. **Done!** ✨

---

## 📞 Need Help?

If you encounter issues:
1. Check the [README.md](./README.md)
2. Check the [DEPLOYMENT.md](./DEPLOYMENT.md)
3. Review browser console for errors (F12)
4. Contact: info@tpkiasma.or.id

---

**🎨 Good luck with your logo update!**
