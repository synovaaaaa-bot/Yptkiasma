import { supabase } from './supabase';
import { requireAuth } from './auth-helpers';

const BUCKET_NAME = 'images'; // Nama bucket di Supabase Storage

// Allowed image MIME types
const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml'
];

/**
 * Check if the storage bucket exists
 * @returns true if bucket exists, false otherwise
 */
export async function checkBucketExists(): Promise<boolean> {
  try {
    const { data, error } = await supabase.storage.listBuckets();
    if (error) {
      console.error('Error checking buckets:', error);
      return false;
    }
    return data?.some(bucket => bucket.id === BUCKET_NAME) ?? false;
  } catch (error) {
    console.error('Error checking bucket existence:', error);
    return false;
  }
}

/**
 * Get setup instructions for creating the bucket
 */
function getBucketSetupInstructions(): string {
  return `
🚨 BUCKET TIDAK DITEMUKAN!

Bucket '${BUCKET_NAME}' belum dibuat di Supabase Storage.

CARA SETUP:
1. Buka Supabase Dashboard: https://supabase.com/dashboard
2. Pilih project Anda
3. Pergi ke Storage > Buckets
4. Klik "New bucket"
5. Isi:
   - Name: ${BUCKET_NAME}
   - Public bucket: ✅ (centang)
6. Klik "Create bucket"

ATAU jalankan SQL di Supabase SQL Editor:
File: drizzle/0002_storage_bucket.sql

Setelah bucket dibuat, coba upload lagi.
  `.trim();
}

/**
 * Upload image to Supabase Storage
 * @param file - File object dari input
 * @param folder - Folder name (programs, activities, posts, etc)
 * @returns Public URL of uploaded image
 */
export async function uploadImage(file: File, folder: string): Promise<string> {
  try {
    // SECURITY: Require authentication for uploads
    await requireAuth();
    
    // Validate file
    if (!file) {
      throw new Error('No file provided');
    }

    // Validate file type (strict check)
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      throw new Error(`Invalid file type. Allowed types: ${ALLOWED_IMAGE_TYPES.join(', ')}`);
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      throw new Error('File size must be less than 5MB');
    }

    // Validate folder name (prevent path traversal)
    const allowedFolders = ['programs', 'activities', 'posts', 'albums', 'donations'];
    if (!allowedFolders.includes(folder)) {
      throw new Error(`Invalid folder. Allowed folders: ${allowedFolders.join(', ')}`);
    }

    // Generate unique filename with sanitization
    const fileExt = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(7);
    const fileName = `${timestamp}-${randomStr}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    // Check if bucket exists first (optional check, but helpful for debugging)
    const bucketExists = await checkBucketExists();
    if (!bucketExists) {
      console.warn(`Bucket '${BUCKET_NAME}' tidak ditemukan saat pengecekan. Mencoba upload anyway...`);
    }

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      // Log full error for debugging
      console.error('Supabase Storage Error:', {
        message: error.message,
        error: error,
      });

      // Check for various bucket-related errors
      const errorMessage = (error.message || '').toLowerCase();
      
      if (errorMessage.includes('bucket not found') || 
          errorMessage.includes('does not exist') ||
          errorMessage.includes('not found')) {
        const setupInstructions = getBucketSetupInstructions();
        console.error(setupInstructions);
        throw new Error(`Bucket '${BUCKET_NAME}' tidak ditemukan atau tidak dapat diakses.\n\nError detail: ${error.message}\n\n${setupInstructions}`);
      }

      // Check for permission errors
      if (errorMessage.includes('permission') || 
          errorMessage.includes('policy') ||
          errorMessage.includes('unauthorized') ||
          errorMessage.includes('forbidden') ||
          errorMessage.includes('access denied')) {
        throw new Error(`Tidak memiliki izin untuk upload ke bucket '${BUCKET_NAME}'.\n\nPastikan:\n1. Anda sudah login sebagai admin\n2. Storage policies sudah diatur dengan benar\n3. Jalankan SQL: drizzle/0002_storage_bucket.sql\n\nError: ${error.message}`);
      }

      // Generic error - show actual error message
      throw new Error(`Gagal upload image: ${error.message || 'Unknown error'}`);
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

/**
 * Delete image from Supabase Storage
 * @param imageUrl - Full URL of image to delete
 */
export async function deleteImage(imageUrl: string): Promise<void> {
  try {
    // SECURITY: Require authentication for deletions
    await requireAuth();
    
    // Extract file path from URL
    const urlParts = imageUrl.split('/');
    const bucketIndex = urlParts.indexOf(BUCKET_NAME);
    if (bucketIndex === -1) {
      console.warn('Bucket name not found in URL, skipping deletion');
      return;
    }

    const filePath = urlParts.slice(bucketIndex + 1).join('/');

    // Validate file path (prevent deletion outside allowed folders)
    const allowedFolders = ['programs', 'activities', 'posts', 'albums', 'donations'];
    const folder = filePath.split('/')[0];
    if (!allowedFolders.includes(folder)) {
      console.warn('Invalid file path, skipping deletion');
      return;
    }

    // Delete from storage
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([filePath]);

    if (error) {
      // Handle bucket not found or file not found errors gracefully
      const errorMessage = error.message || '';
      if (errorMessage.includes('Bucket not found') || 
          errorMessage.includes('bucket not found') ||
          errorMessage.includes('not found')) {
        console.warn('Bucket or file not found, skipping deletion:', errorMessage);
        return;
      }
      console.error('Delete error:', error);
      throw error;
    }
  } catch (error: any) {
    // Handle bucket not found errors gracefully
    const errorMessage = error?.message || '';
    if (errorMessage.includes('Bucket not found') || 
        errorMessage.includes('bucket not found') ||
        errorMessage.includes('not found')) {
      console.warn('Bucket not found, skipping deletion:', errorMessage);
      console.warn(getBucketSetupInstructions());
      return;
    }
    console.error('Delete error:', error);
    throw error;
  }
}

/**
 * Update image: delete old and upload new
 */
export async function updateImage(
  oldImageUrl: string | null,
  newFile: File,
  folder: string
): Promise<string> {
  // SECURITY: Authentication checked in uploadImage and deleteImage
  
  // Delete old image if exists
  if (oldImageUrl) {
    try {
      await deleteImage(oldImageUrl);
    } catch (error) {
      // Log error but don't fail if old image deletion fails
      console.warn('Failed to delete old image:', error);
    }
  }

  // Upload new image
  return await uploadImage(newFile, folder);
}
