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

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      // Provide more helpful error message for bucket not found
      if (error.message?.includes('Bucket not found') || 
          error.message?.includes('bucket not found')) {
        throw new Error(`Bucket '${BUCKET_NAME}' tidak ditemukan. Pastikan bucket sudah dibuat di Supabase Storage.`);
      }
      throw error;
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

      if (error.message?.includes('Bucket not found') || 
          error.message?.includes('bucket not found')) {
        console.warn('Bucket not found, skipping deletion:', error.message);
        return;
      }
      console.error('Delete error:', error);
      throw error;
    }
  } catch (error: any) {
    // Handle bucket not found errors gracefully
    if (error?.message?.includes('Bucket not found') || 
        error?.message?.includes('bucket not found') ||
        error?.message?.includes('not found')) {
      console.warn('Bucket not found, skipping deletion:', error.message);
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
