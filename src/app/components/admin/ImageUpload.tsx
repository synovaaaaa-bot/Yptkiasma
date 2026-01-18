import { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { uploadImage } from '@/lib/supabase-storage';
import { toast } from 'sonner';

interface ImageUploadProps {
  currentImage?: string | null;
  onImageChange: (imageUrl: string) => void;
  folder: string; // programs, activities, posts, etc
  label?: string;
}

export function ImageUpload({ 
  currentImage, 
  onImageChange, 
  folder,
  label = 'Upload Image'
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('File harus berupa gambar');
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error('Ukuran file maksimal 5MB');
      return;
    }

    try {
      setUploading(true);

      // Show preview immediately
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Upload to Supabase Storage
      const imageUrl = await uploadImage(file, folder);
      
      // Update parent component
      onImageChange(imageUrl);
      
      toast.success('Image berhasil diupload!');
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(error.message || 'Gagal upload image');
      setPreview(currentImage || null);
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onImageChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      
      <div className="border-2 border-dashed rounded-lg p-4">
        {preview ? (
          // Show preview
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              disabled={uploading}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          // Show upload button
          <div className="flex flex-col items-center justify-center py-8">
            <ImageIcon className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-sm text-gray-500 mb-4">
              Upload gambar (Max 5MB)
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Pilih Gambar
                </>
              )}
            </Button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      <p className="text-xs text-gray-500">
        Format: JPG, PNG, GIF, WebP (Max 5MB)
      </p>
    </div>
  );
}
