# 🚨 FORCE FIX - Vercel Deployment Error

## Error yang Muncul

```
error during build:
[vite]: Rollup failed to resolve import "figma:asset/24260d8aef2e8086a09f64ac0e634de86b72283f.png" from "/vercel/path0/src/app/components/Navbar.tsx".
```

## 🎯 Root Cause

Git repository masih menyimpan **cached version** dari file lama yang menggunakan `figma:asset` imports. Meskipun file di local sudah benar, Git belum meng-track perubahan tersebut.

## ✅ SOLUTION - Step by Step

### Step 1: Clear Git Cache (CRITICAL)

```bash
# 1. Remove all files from Git cache
git rm -r --cached .

# 2. Re-add all files with current state
git add .

# 3. Check what will be committed
git status
```

**Expected Output:**
```
Changes to be committed:
  modified:   .gitignore
  modified:   src/app/components/Navbar.tsx
  modified:   src/app/components/Footer.tsx
  modified:   src/app/pages/ProfilPage.tsx
  new file:   src/assets/logos.ts
```

### Step 2: Commit dengan Message Jelas

```bash
git commit -m "Fix: Force remove figma:asset imports - Clear Git cache"
```

### Step 3: Force Push (Aman)

```bash
# Use --force-with-lease untuk safety
git push origin main --force-with-lease
```

**IMPORTANT:** `--force-with-lease` lebih aman dari `--force` karena akan gagal jika ada perubahan di remote yang belum kita pull.

### Step 4: Clear Vercel Cache

**Via Vercel Dashboard:**

1. Login ke https://vercel.com
2. Pilih project **Yptkiasma**
3. Klik tab **Settings**
4. Scroll ke bagian **Build & Development Settings**
5. Klik button **Clear Build Cache**
6. Kembali ke tab **Deployments**
7. Klik **Redeploy** pada deployment terakhir
8. ⚠️ **UNCHECK** "Use existing Build Cache"
9. Klik **Redeploy**

**Via CLI (Alternative):**

```bash
# Install Vercel CLI jika belum
npm i -g vercel

# Login
vercel login

# Deploy tanpa cache
vercel --prod --force
```

## 🧪 Verification

### A. Local Build Test

```bash
# Clean everything
rm -rf node_modules package-lock.json dist

# Fresh install
npm install

# Build
npm run build
```

**Expected:** Build berhasil tanpa error

### B. Check Git Changes

```bash
# Pastikan tidak ada unstaged changes
git status

# Pastikan commit terakhir ada perubahan yang benar
git log -1 --stat
```

### C. Verify File Contents

```bash
# Check Navbar.tsx
grep "figma:asset" src/app/components/Navbar.tsx
# Expected: No output (not found)

# Check correct import
grep "from '../../assets/logos'" src/app/components/Navbar.tsx
# Expected: import { logoTPK, logoIASMA } from '../../assets/logos';
```

## 📋 Checklist Before Deploy

- [ ] ✅ Build berhasil di local (`npm run build`)
- [ ] ✅ No `figma:asset` di semua file
- [ ] ✅ Git cache sudah di-clear
- [ ] ✅ Commit sudah ter-push ke GitHub
- [ ] ✅ Vercel cache sudah di-clear
- [ ] ✅ Ready to redeploy

## 🔄 Alternative: Nuclear Option

Jika semua cara di atas masih gagal:

```bash
# 1. Backup semua perubahan
cp -r src/ ../src-backup/
cp package.json ../package-backup.json

# 2. Reset ke commit sebelumnya
git reset --hard HEAD~1

# 3. Restore backup
cp -r ../src-backup/* src/
cp ../package-backup.json package.json

# 4. Add dan commit sebagai perubahan baru
git add .
git commit -m "Fix: Complete removal of figma:asset imports"
git push origin main --force
```

## 🆘 If Still Failing

### Option 1: Create New Branch

```bash
# Create new branch
git checkout -b fix-figma-imports

# Push to new branch
git push origin fix-figma-imports

# Deploy from new branch di Vercel Dashboard:
# Settings > Git > Production Branch > fix-figma-imports
```

### Option 2: Fresh Repository

1. Create new repository di GitHub
2. Push code ke repository baru
3. Create new project di Vercel
4. Import dari repository baru

### Option 3: Manual File Upload

1. Build locally: `npm run build`
2. Di Vercel Dashboard > Settings > Build & Development
3. Output Directory: `dist`
4. Upload folder `dist/` manually

## 📊 Expected Success

Setelah fix berhasil, log akan tampil:

```
✓ vite v6.3.5 building for production...
✓ 9 modules transformed.
✓ built in 485ms

✓ Build Completed in /vercel/path0 [XX:XX]
```

## 🎉 After Successful Deploy

1. ✅ Verify website di URL production
2. ✅ Test semua halaman berfungsi
3. ✅ Check logo muncul di Navbar dan Footer
4. ✅ Replace dengan logo asli jika sudah punya (lihat DEPLOYMENT.md)

## 🔗 Related Docs

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Panduan deployment lengkap
- [VERCEL-FIX.md](./VERCEL-FIX.md) - Troubleshooting detail
- [README.md](./README.md) - Dokumentasi project

---

**Created:** Saturday, January 10, 2026  
**Status:** Ready to Execute ⚡
**Priority:** 🚨 CRITICAL
