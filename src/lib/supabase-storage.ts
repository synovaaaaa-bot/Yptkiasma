import { supabase } from './supabase';

const BUCKET_NAME = 'images'; // Nama bucket di Supabase Storage

/**
 * Upload image to Supabase Storage
 * @param file - File object dari input
 * @param folder - Folder name (programs, activities, posts, etc)
 * @returns Public URL of uploaded image
 */
export async function uploadImage(file: File, folder: string): Promise<string> {
  try {
    // Validate file
    if (!file) {
      throw new Error('No file provided');
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      throw new Error('File must be an image');
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      throw new Error('File size must be less than 5MB');
    }

    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
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
    // Extract file path from URL
    const urlParts = imageUrl.split('/');
    const bucketIndex = urlParts.indexOf(BUCKET_NAME);
    if (bucketIndex === -1) return;

    const filePath = urlParts.slice(bucketIndex + 1).join('/');

    // Delete from storage
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([filePath]);

    if (error) {
      console.error('Delete error:', error);
    }
  } catch (error) {
    console.error('Delete error:', error);
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
  // Delete old image if exists
  if (oldImageUrl) {
    await deleteImage(oldImageUrl);
  }

  // Upload new image
  return await uploadImage(newFile, folder);
}
