# Security Setup Guide

This guide outlines the steps required to securely deploy the admin dashboard with Supabase.

## ⚠️ CRITICAL: Required Actions Before Deployment

The following security measures **MUST** be completed before deploying to production. Failure to do so will leave your application vulnerable to unauthorized access.

---

## 1. Environment Variables Setup

### Step 1.1: Create `.env` File

Copy `env.example` to `.env`:

```bash
cp env.example .env
```

### Step 1.2: Configure Supabase Credentials

Get your credentials from [Supabase Dashboard](https://supabase.com/dashboard) > Your Project > Settings > API

Update `.env` with your actual values:

```env
# Replace [YOUR-PROJECT-REF] with your Supabase project reference
VITE_SUPABASE_URL=https://your-project-ref.supabase.co

# Replace with your actual anon/public key
VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here

# Database URL (for migrations)
DATABASE_URL=postgresql://postgres:your-password@db.your-project-ref.supabase.co:5432/postgres
```

⚠️ **IMPORTANT**: 
- Never commit `.env` to version control
- Never share these credentials publicly
- `.env` is already in `.gitignore`

---

## 2. Database Setup & Migrations

### Step 2.1: Run Initial Schema Migration

```bash
npm run db:push
```

This creates all necessary tables in your Supabase database.

### Step 2.2: Apply Row Level Security (RLS) Policies

**CRITICAL**: RLS policies protect your data from unauthorized access.

Run the RLS migration in Supabase SQL Editor:

1. Go to Supabase Dashboard > SQL Editor
2. Copy the contents of `drizzle/0001_rls_policies.sql`
3. Paste and execute in SQL Editor

Or use the Supabase CLI:

```bash
supabase db reset
```

### Step 2.3: Verify RLS is Enabled

Check that RLS is enabled on all tables:

```sql
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('programs', 'activities', 'posts', 'albums', 'photos', 'donations', 'contact_messages', 'admin_users');
```

All tables should show `rowsecurity = true`.

---

## 3. Authentication Setup

### Step 3.1: Create Admin User in Supabase Auth

**Option A: Via Supabase Dashboard (Recommended)**

1. Go to Supabase Dashboard > Authentication > Users
2. Click "Add user"
3. Enter admin email: `admin@yourorganization.com`
4. Set a **strong password** (min 12 characters, mixed case, numbers, symbols)
5. Enable "Auto Confirm User"
6. Click "Create user"

**Option B: Via SQL**

```sql
-- This creates a user in Supabase Auth
-- Replace with your actual email and a strong password
SELECT auth.create_user(
  'admin@yourorganization.com',
  'your-strong-password-here'
);
```

⚠️ **IMPORTANT**: 
- Use a strong, unique password
- Store credentials in a secure password manager
- Enable 2FA in Supabase Dashboard > Authentication > Providers > Email

### Step 3.2: Configure Email Provider (Optional)

For production, configure email provider for password resets:

1. Go to Supabase Dashboard > Authentication > Providers
2. Configure Email provider or use custom SMTP
3. Enable email confirmations and password recovery

---

## 4. Storage Bucket Setup

### Step 4.1: Create Storage Bucket

1. Go to Supabase Dashboard > Storage
2. Click "New bucket"
3. Name: `images`
4. Toggle "Public bucket" **ON** (for public image access)
5. Click "Create bucket"

### Step 4.2: Configure Bucket Policies

Apply these policies in Supabase Dashboard > Storage > images > Policies:

**Policy 1: Public Read Access**
```sql
CREATE POLICY "Public can view images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'images');
```

**Policy 2: Authenticated Upload**
```sql
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'images');
```

**Policy 3: Authenticated Update**
```sql
CREATE POLICY "Authenticated users can update images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'images');
```

**Policy 4: Authenticated Delete**
```sql
CREATE POLICY "Authenticated users can delete images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'images');
```

### Step 4.3: Configure CORS (if needed)

If accessing from different domains, configure CORS in Supabase Dashboard > Storage > Configuration.

---

## 5. Security Verification Checklist

Before going live, verify all security measures:

- [ ] **Environment Variables**
  - [ ] `.env` file created and configured
  - [ ] `.env` is in `.gitignore`
  - [ ] No credentials in source code
  - [ ] Supabase credentials are from your project (not example values)

- [ ] **Database Security**
  - [ ] All tables have RLS enabled
  - [ ] RLS policies are applied and tested
  - [ ] Database password is strong and secure
  - [ ] No direct database access from client

- [ ] **Authentication**
  - [ ] Admin user created in Supabase Auth
  - [ ] Strong password used (12+ characters)
  - [ ] No hardcoded credentials in code
  - [ ] Session persistence working
  - [ ] Auth state properly managed

- [ ] **Storage Security**
  - [ ] Storage bucket created
  - [ ] Bucket policies applied
  - [ ] File upload requires authentication
  - [ ] File type validation implemented
  - [ ] File size limits enforced

- [ ] **API Security**
  - [ ] All admin operations require authentication
  - [ ] Auth checks in place (programs, activities, posts, donations)
  - [ ] File operations are protected
  - [ ] Donation approval/rejection requires auth

---

## 6. Testing Authentication

### Test Admin Login

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:5173/admin/login`

3. Login with your admin credentials

4. Verify you can access the dashboard

### Test API Protection

Try accessing admin operations without authentication - they should fail with authentication errors.

### Test RLS Policies

1. Try accessing data via Supabase client without auth
2. Should only see public data (approved donations, published posts, etc.)
3. Admin operations should be blocked

---

## 7. Production Deployment

### Before Deploying:

1. **Rotate Exposed Credentials**: If you've previously committed credentials to git:
   - Generate new Supabase anon key
   - Reset database password
   - Update all environment variables

2. **Update Environment Variables** in your hosting platform:
   - Vercel: Project Settings > Environment Variables
   - Netlify: Site Settings > Build & Deploy > Environment
   - Other platforms: Check their documentation

3. **Enable HTTPS** (usually automatic with modern hosting)

4. **Set up monitoring** for failed auth attempts

### Deployment Steps:

```bash
# Build for production
npm run build

# Test production build locally
npm run preview

# Deploy to your hosting platform
# (Vercel, Netlify, etc.)
```

---

## 8. Ongoing Security Maintenance

### Regular Tasks:

1. **Update Dependencies**: Run `npm update` regularly
2. **Monitor Logs**: Check Supabase logs for suspicious activity
3. **Review Access**: Audit who has admin access
4. **Backup Database**: Regular backups via Supabase Dashboard
5. **Update Passwords**: Change admin passwords every 90 days

### Security Monitoring:

- Monitor failed login attempts in Supabase Dashboard > Authentication > Logs
- Check API usage in Supabase Dashboard > Database > API Logs
- Review storage usage for unauthorized uploads

---

## 9. Troubleshooting

### "Missing VITE_SUPABASE_URL environment variable"

- Ensure `.env` file exists in project root
- Verify environment variables are set correctly
- Restart development server after changing `.env`

### "Authentication required" errors

- Check that admin user is created in Supabase Auth
- Verify you're logged in
- Clear browser cache and cookies
- Check browser console for auth errors

### RLS policy errors

- Verify policies are applied: Check Supabase Dashboard > Database > Policies
- Test policies in SQL Editor
- Ensure user is authenticated (has valid session)

### File upload fails

- Check storage bucket exists and is named `images`
- Verify bucket policies are applied
- Ensure you're authenticated
- Check file size (max 5MB) and type (images only)

---

## 10. Emergency Response

### If Credentials Are Exposed:

1. **Immediately** go to Supabase Dashboard > Settings > API
2. Click "Reset anon key" or "Reset service role key"
3. Update all environment variables
4. Force logout all users
5. Review logs for unauthorized access
6. Notify users if data breach suspected

### If Unauthorized Access Detected:

1. Check Supabase Dashboard > Authentication > Users
2. Remove unauthorized users
3. Reset all admin passwords
4. Review and tighten RLS policies
5. Check database logs for suspicious queries
6. Review storage for unauthorized uploads

---

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase Storage Guide](https://supabase.com/docs/guides/storage)

---

## Support

For security concerns or questions:
1. Check this documentation first
2. Review Supabase documentation
3. Contact your development team
4. For critical security issues, contact immediately

**Remember**: Security is not a one-time setup. Regular monitoring and maintenance are essential for keeping your application secure.
