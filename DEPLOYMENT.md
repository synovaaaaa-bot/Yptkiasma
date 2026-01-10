# Deployment Guide - Yayasan TPK IASMA 1 Landbouw Bukittinggi

## Logo Replacement

The current website uses placeholder SVG logos for TPK and IASMA. Before deploying to production, you should replace these placeholders with the actual logo files.

### Current Placeholder Logos

The placeholder logos are defined in `/src/assets/logos.ts` as base64-encoded SVG data URIs:
- `logoTPK` - Circular logo with "TPK" text
- `logoIASMA` - Rectangular logo with "IASMA Landbouw" text

### How to Replace Logos

1. **Prepare your logo files**:
   - TPK logo: ideally PNG or SVG format
   - IASMA logo: ideally PNG or SVG format
   - Recommended size: 512x512px or higher for best quality
   - Recommended format: PNG with transparent background or SVG

2. **Option A: Using Image Files**
   - Place your logo files in `/public/logos/` directory:
     - `/public/logos/logo-tpk.png`
     - `/public/logos/logo-iasma.png`
   
   - Update `/src/assets/logos.ts`:
     ```typescript
     export const logoTPK = "/logos/logo-tpk.png";
     export const logoIASMA = "/logos/logo-iasma.png";
     ```

3. **Option B: Using Base64 Data URIs**
   - Convert your logos to base64 using an online tool or command line
   - Replace the content in `/src/assets/logos.ts` with your base64 strings
   
   Example:
   ```typescript
   export const logoTPK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...";
   export const logoIASMA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...";
   ```

4. **Option C: Importing Logo Files**
   - Place your logo files in `/src/assets/images/`:
     - `/src/assets/images/logo-tpk.png`
     - `/src/assets/images/logo-iasma.png`
   
   - Update `/src/assets/logos.ts`:
     ```typescript
     import logoTPKImage from './images/logo-tpk.png';
     import logoIASMAImage from './images/logo-iasma.png';
     
     export const logoTPK = logoTPKImage;
     export const logoIASMA = logoIASMAImage;
     ```

## Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (can sign up with GitHub)
- Repository pushed to GitHub

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Fix figma:asset imports for production"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Configure Build Settings** (usually auto-detected):
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a production URL like: `https://your-project.vercel.app`

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `tpkiasma.or.id`)
4. Follow DNS configuration instructions

## Environment Variables

If you add any environment variables in the future (e.g., API keys), add them in Vercel:
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add your variables

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Make sure there are no import errors

### Images Not Loading
- For images in `/public`, use absolute paths: `/images/photo.jpg`
- For imported images, use relative imports
- Check browser console for 404 errors

### Logo Issues
- Verify logo files exist at the specified paths
- Check file permissions
- Use browser DevTools to inspect image sources

## Contact Information to Update

Before going live, update these placeholder values:
- `/src/app/components/Footer.tsx` - Contact information
- `/src/globals/footer.ts` - Footer configuration
- Social media links (Facebook, Instagram, YouTube, WhatsApp)

## Performance Optimization

For production, consider:
1. Optimizing images (compress PNG files)
2. Using WebP format for images
3. Enabling Vercel's Image Optimization
4. Adding proper caching headers

## Post-Deployment Checklist

- [ ] Replace placeholder logos
- [ ] Update contact information
- [ ] Test all navigation links
- [ ] Verify forms work correctly
- [ ] Test on mobile devices
- [ ] Check page load speed
- [ ] Verify social media links
- [ ] Set up Google Analytics (optional)
- [ ] Add custom domain
- [ ] Test Jadwal Sholat functionality
- [ ] Verify all images load correctly
