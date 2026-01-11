#!/bin/bash

# 🚨 QUICK FIX untuk Vercel Build Error
# Run: chmod +x QUICK-FIX.sh && ./QUICK-FIX.sh

set -e  # Exit on error

echo "🚨 Starting FORCE FIX for Vercel Build Error..."
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Step 1: Clear Git Cache
echo -e "${BLUE}📦 Step 1/5: Clearing Git cache...${NC}"
git rm -r --cached . 2>/dev/null || true
echo -e "${GREEN}✅ Git cache cleared${NC}"
echo ""

# Step 2: Re-add all files
echo -e "${BLUE}📁 Step 2/5: Re-adding all files...${NC}"
git add .
echo -e "${GREEN}✅ Files re-added${NC}"
echo ""

# Step 3: Show status
echo -e "${BLUE}📋 Step 3/5: Checking changes...${NC}"
git status
echo ""

# Step 4: Clean build
echo -e "${BLUE}🧹 Step 4/5: Testing build...${NC}"
rm -rf node_modules package-lock.json dist
npm install
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful!${NC}"
else
    echo -e "${RED}❌ Build failed! Check errors above.${NC}"
    exit 1
fi
echo ""

# Step 5: Commit and push instructions
echo -e "${BLUE}✍️  Step 5/5: Ready to commit${NC}"
echo ""
echo -e "${YELLOW}Run these commands to deploy:${NC}"
echo ""
echo -e "${GREEN}git commit -m \"Fix: Force remove figma:asset imports - Clear Git cache\"${NC}"
echo -e "${GREEN}git push origin main --force-with-lease${NC}"
echo ""
echo -e "${YELLOW}Then go to Vercel Dashboard and:${NC}"
echo "  1. Settings > Build & Development > Clear Build Cache"
echo "  2. Deployments > Latest > Redeploy (uncheck 'Use existing Build Cache')"
echo ""
echo -e "${GREEN}🎉 All checks passed! Ready to deploy.${NC}"
