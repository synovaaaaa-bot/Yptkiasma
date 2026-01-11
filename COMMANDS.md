# 🚀 Quick Command Reference

Kumpulan command yang sering digunakan untuk project ini.

---

## 🔧 FIX VERCEL BUILD ERROR (PRIORITAS UTAMA!)

### Option 1: Automated (RECOMMENDED)
```bash
chmod +x QUICK-FIX.sh
./QUICK-FIX.sh

# Setelah script selesai, commit dan push:
git commit -m "Fix: Force remove figma:asset imports"
git push origin main --force-with-lease
```

### Option 2: Manual Steps
```bash
# 1. Clear Git cache
git rm -r --cached .

# 2. Re-add semua files
git add .

# 3. Commit
git commit -m "Fix: Force remove figma:asset imports - Clear Git cache"

# 4. Push dengan force-with-lease
git push origin main --force-with-lease
```

### Verify Build
```bash
chmod +x verify-build.sh
./verify-build.sh
```

---

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Clean install (jika ada masalah)
rm -rf node_modules package-lock.json
npm install
```

---

## 💻 Development

```bash
# Start development server
npm run dev

# Development server akan berjalan di:
# http://localhost:5173
```

---

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Clean build (dari awal)
rm -rf dist
npm run build
```

---

## 🔍 Verification & Testing

```bash
# Check for figma:asset imports (should return nothing)
grep -r "figma:asset" src/

# Test build
npm run build

# Check build output
ls -la dist/
```

---

## 📤 Git Commands

### Standard Workflow
```bash
# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "Your commit message"

# Push to main branch
git push origin main
```

### Force Update (untuk fix cache)
```bash
# Safe force push (recommended)
git push origin main --force-with-lease

# Nuclear option (use with caution!)
git push origin main --force
```

### Check History
```bash
# View commit history
git log --oneline

# View last commit details
git log -1 --stat

# View diff of last commit
git show
```

---

## 🚀 Vercel Deployment

### Via CLI
```bash
# Install Vercel CLI (global)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Deploy without cache
vercel --prod --force
```

### Via Git Push
```bash
# Simply push to main branch
git push origin main

# Vercel auto-deploy akan triggered
```

---

## 🖼️ Logo Management

### Check Current Logos
```bash
# View logos.ts
cat src/assets/logos.ts

# Check if logos are imported correctly
grep -r "from.*logos" src/app/components/
```

### Test Logo Files (jika menggunakan file logo)
```bash
# Check if public/logos exists
ls -la public/logos/

# Check file sizes
du -h public/logos/*
```

---

## 🧹 Cleanup Commands

```bash
# Remove node_modules
rm -rf node_modules

# Remove build output
rm -rf dist

# Remove lock file
rm package-lock.json

# Full cleanup
rm -rf node_modules package-lock.json dist

# Git cleanup
git clean -fdx  # ⚠️ WARNING: Removes all untracked files!
```

---

## 📊 Project Info

```bash
# Check package.json
cat package.json

# List all npm scripts
npm run

# Check installed packages
npm list --depth=0

# Check for outdated packages
npm outdated
```

---

## 🔍 File Search

```bash
# Find all .tsx files
find src -name "*.tsx"

# Find all component files
find src/app/components -name "*.tsx"

# Search for text in files
grep -r "text to find" src/

# Search with context (2 lines before/after)
grep -r -C 2 "text to find" src/
```

---

## 🐛 Debugging

```bash
# Check Node version
node --version

# Check npm version
npm --version

# Check Git version
git --version

# Verify Vite installation
npx vite --version

# Test TypeScript compilation
npx tsc --noEmit
```

---

## 📝 Quick Checks Before Deploy

```bash
# 1. Build test
npm run build

# 2. Check for figma:asset
grep -r "figma:asset" src/ || echo "✅ No figma:asset found"

# 3. Verify logos exist
test -f src/assets/logos.ts && echo "✅ logos.ts exists" || echo "❌ logos.ts missing"

# 4. Check Git status
git status

# 5. Verify package.json
cat package.json | grep "name"
```

---

## 🔄 Common Workflows

### Complete Development Cycle
```bash
# 1. Pull latest changes
git pull origin main

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Make changes...

# 5. Test build
npm run build

# 6. Commit changes
git add .
git commit -m "Description of changes"

# 7. Push to deploy
git push origin main
```

### Fix and Redeploy
```bash
# 1. Run fix script
chmod +x QUICK-FIX.sh
./QUICK-FIX.sh

# 2. Commit
git commit -m "Fix: Remove figma:asset imports"

# 3. Force push
git push origin main --force-with-lease

# 4. Monitor Vercel deployment at:
# https://vercel.com/dashboard
```

### Update Logo
```bash
# 1. Edit logos.ts
nano src/assets/logos.ts

# 2. Test locally
npm run dev

# 3. Build test
npm run build

# 4. Deploy
git add src/assets/logos.ts
git commit -m "Update logos"
git push origin main
```

---

## 🆘 Emergency Commands

### If Build Fails Completely
```bash
# Nuclear reset
rm -rf node_modules package-lock.json dist
git checkout package.json
npm install
npm run build
```

### If Git is Messed Up
```bash
# See what you're about to reset to
git log --oneline -5

# Reset to previous commit (keeps changes)
git reset --soft HEAD~1

# Reset to previous commit (discards changes) ⚠️
git reset --hard HEAD~1

# Restore specific file
git checkout HEAD -- path/to/file
```

### If Vercel Won't Deploy
```bash
# 1. Clear local
rm -rf node_modules dist

# 2. Fresh install
npm install

# 3. Test build
npm run build

# 4. If success, force update Git
git add .
git commit --amend --no-edit
git push origin main --force-with-lease
```

---

## 💡 Pro Tips

### Aliases (tambahkan ke ~/.bashrc atau ~/.zshrc)
```bash
# Quick commands
alias dev="npm run dev"
alias build="npm run build"
alias deploy="git push origin main"

# Git shortcuts
alias gs="git status"
alias ga="git add ."
alias gc="git commit -m"
alias gp="git push origin main"

# Project specific
alias fix-vercel="chmod +x QUICK-FIX.sh && ./QUICK-FIX.sh"
alias check-build="chmod +x verify-build.sh && ./verify-build.sh"
```

### Watch for Changes
```bash
# Auto-build on file change
npm run build -- --watch

# Monitor Git status continuously
watch -n 1 git status
```

---

## 📚 Documentation References

- **Fix Build Error**: [SOLUTION-SUMMARY.md](./SOLUTION-SUMMARY.md)
- **Quick Fix Script**: [QUICK-FIX.sh](./QUICK-FIX.sh)
- **Detailed Fix**: [FORCE-FIX.md](./FORCE-FIX.md)
- **Deployment Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **All Docs**: [DOCS-INDEX.md](./DOCS-INDEX.md)

---

**Last Updated**: Saturday, January 10, 2026  
**Tip**: Bookmark this file for quick reference! 🔖
