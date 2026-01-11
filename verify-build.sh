#!/bin/bash

# Verification Script untuk Build Readiness
# Run: chmod +x verify-build.sh && ./verify-build.sh

echo "🔍 Verifying Build Readiness..."
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check counter
ERRORS=0

# 1. Check for figma:asset imports
echo "1️⃣  Checking for figma:asset imports..."
if grep -r "figma:asset" src/ 2>/dev/null; then
    echo -e "${RED}❌ FOUND figma:asset imports!${NC}"
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ No figma:asset imports found${NC}"
fi
echo ""

# 2. Check logos.ts exists
echo "2️⃣  Checking logos.ts..."
if [ -f "src/assets/logos.ts" ]; then
    echo -e "${GREEN}✅ logos.ts exists${NC}"
else
    echo -e "${RED}❌ logos.ts NOT FOUND!${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 3. Check Navbar.tsx
echo "3️⃣  Checking Navbar.tsx imports..."
if grep -q "from '../../assets/logos'" src/app/components/Navbar.tsx 2>/dev/null; then
    echo -e "${GREEN}✅ Navbar.tsx using correct import${NC}"
else
    echo -e "${RED}❌ Navbar.tsx import incorrect!${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 4. Check Footer.tsx
echo "4️⃣  Checking Footer.tsx imports..."
if grep -q "from '../../assets/logos'" src/app/components/Footer.tsx 2>/dev/null; then
    echo -e "${GREEN}✅ Footer.tsx using correct import${NC}"
else
    echo -e "${RED}❌ Footer.tsx import incorrect!${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 5. Check .gitignore
echo "5️⃣  Checking .gitignore..."
if [ -f ".gitignore" ]; then
    echo -e "${GREEN}✅ .gitignore exists${NC}"
else
    echo -e "${YELLOW}⚠️  .gitignore not found (recommended)${NC}"
fi
echo ""

# 6. Try build
echo "6️⃣  Testing build..."
if npm run build 2>/dev/null; then
    echo -e "${GREEN}✅ Build successful!${NC}"
else
    echo -e "${RED}❌ Build FAILED!${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL CHECKS PASSED!${NC}"
    echo -e "${GREEN}✅ Ready to deploy to Vercel${NC}"
    echo ""
    echo "Next steps:"
    echo "  1. git add ."
    echo "  2. git commit -m 'Fix: Remove figma:asset imports'"
    echo "  3. git push origin main"
else
    echo -e "${RED}❌ FOUND $ERRORS ERROR(S)${NC}"
    echo -e "${RED}⚠️  NOT ready to deploy${NC}"
    echo ""
    echo "Please fix the errors above before deploying."
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
