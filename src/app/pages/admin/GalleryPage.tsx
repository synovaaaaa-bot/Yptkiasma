import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Plus, FolderPlus, Image as ImageIcon, Trash2, Pencil, Loader2, X } from 'lucide-react';
import { albumsApi, photosApi } from '@/api/supabase-db';
import { ImageUpload } from '@/app/components/admin/ImageUpload';
import { uploadImage } from '@/lib/supabase-storage';
import { toast } from 'sonner';
import type { Album, Photo } from '@/db/schema';

export default function GalleryPage() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [createAlbumOpen, setCreateAlbumOpen] = useState(false);
  const [uploadPhotoOpen, setUploadPhotoOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [albumPhotos, setAlbumPhotos] = useState<Record<number, Photo[]>>({});
  
  // Form states
  const [albumForm, setAlbumForm] = useState({
    title: '',
    description: '',
    coverImage: '',
  });
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoCaption, setPhotoCaption] = useState('');

  // Load albums
  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    try {
      setLoading(true);
      const data = await albumsApi.getAll();
      setAlbums(data);
      
      // Load photos for each album
      const photosMap: Record<number, Photo[]> = {};
      for (const album of data) {
        try {
          const photos = await photosApi.getByAlbumId(album.id);
          photosMap[album.id] = photos;
        } catch (error) {
          console.error(`Error loading photos for album ${album.id}:`, error);
          photosMap[album.id] = [];
        }
      }
      setAlbumPhotos(photosMap);
    } catch (error) {
      console.error('Error loading albums:', error);
      toast.error('Gagal memuat album');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAlbum = async () => {
    if (!albumForm.title.trim()) {
      toast.error('Judul album wajib diisi');
      return;
    }

    try {
      await albumsApi.create({
        title: albumForm.title,
        description: albumForm.description || null,
        coverImage: albumForm.coverImage || null,
      });
      
      toast.success('Album berhasil dibuat!');
      setCreateAlbumOpen(false);
      setAlbumForm({ title: '', description: '', coverImage: '' });
      loadAlbums();
    } catch (error: any) {
      console.error('Error creating album:', error);
      toast.error(error.message || 'Gagal membuat album');
    }
  };

  const handleUploadPhoto = async () => {
    if (!selectedAlbum) {
      toast.error('Pilih album terlebih dahulu');
      return;
    }

    if (!photoFile) {
      toast.error('Pilih foto terlebih dahulu');
      return;
    }

    try {
      // Upload image to storage
      const imageUrl = await uploadImage(photoFile, 'albums');
      
      // Get current max order for this album
      const existingPhotos = albumPhotos[selectedAlbum] || [];
      const maxOrder = existingPhotos.length > 0 
        ? Math.max(...existingPhotos.map(p => p.order || 0))
        : 0;

      // Create photo record
      await photosApi.create({
        albumId: selectedAlbum,
        url: imageUrl,
        caption: photoCaption || null,
        order: maxOrder + 1,
      });

      toast.success('Foto berhasil diupload!');
      setUploadPhotoOpen(false);
      setPhotoFile(null);
      setPhotoCaption('');
      setSelectedAlbum(null);
      loadAlbums();
    } catch (error: any) {
      console.error('Error uploading photo:', error);
      toast.error(error.message || 'Gagal upload foto');
    }
  };

  const handleDeleteAlbum = async (id: number) => {
    if (!confirm('Yakin ingin menghapus album ini? Semua foto dalam album akan ikut terhapus.')) {
      return;
    }

    try {
      await albumsApi.delete(id);
      toast.success('Album berhasil dihapus!');
      loadAlbums();
    } catch (error: any) {
      console.error('Error deleting album:', error);
      toast.error(error.message || 'Gagal menghapus album');
    }
  };

  const handleDeletePhoto = async (photoId: number, albumId: number) => {
    if (!confirm('Yakin ingin menghapus foto ini?')) {
      return;
    }

    try {
      await photosApi.delete(photoId);
      toast.success('Foto berhasil dihapus!');
      loadAlbums();
    } catch (error: any) {
      console.error('Error deleting photo:', error);
      toast.error(error.message || 'Gagal menghapus foto');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Memuat galeri...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Galeri</h1>
          <p className="text-gray-600 mt-2">Kelola album dan foto galeri</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={createAlbumOpen} onOpenChange={setCreateAlbumOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <FolderPlus className="w-4 h-4 mr-2" />
                Buat Album
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Buat Album Baru</DialogTitle>
                <DialogDescription>
                  Buat album baru untuk mengorganisir foto galeri
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="album-title">Judul Album *</Label>
                  <Input
                    id="album-title"
                    value={albumForm.title}
                    onChange={(e) => setAlbumForm({ ...albumForm, title: e.target.value })}
                    placeholder="Contoh: Kegiatan Ramadhan 2024"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="album-description">Deskripsi</Label>
                  <Textarea
                    id="album-description"
                    value={albumForm.description}
                    onChange={(e) => setAlbumForm({ ...albumForm, description: e.target.value })}
                    placeholder="Deskripsi album (opsional)"
                    rows={3}
                  />
                </div>
                <ImageUpload
                  currentImage={albumForm.coverImage}
                  onImageChange={(url) => setAlbumForm({ ...albumForm, coverImage: url })}
                  folder="albums"
                  label="Cover Album (Opsional)"
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setCreateAlbumOpen(false)}>
                  Batal
                </Button>
                <Button onClick={handleCreateAlbum}>
                  Buat Album
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={uploadPhotoOpen} onOpenChange={setUploadPhotoOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Upload Foto
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Foto ke Album</DialogTitle>
                <DialogDescription>
                  Pilih album dan upload foto baru
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="album-select">Pilih Album *</Label>
                  <select
                    id="album-select"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    value={selectedAlbum || ''}
                    onChange={(e) => setSelectedAlbum(Number(e.target.value))}
                    required
                  >
                    <option value="">-- Pilih Album --</option>
                    {albums.map((album) => (
                      <option key={album.id} value={album.id}>
                        {album.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo-file">Foto *</Label>
                  <Input
                    id="photo-file"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                    required
                  />
                  <p className="text-xs text-gray-500">Format: JPG, PNG, GIF, WebP (Max 5MB)</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo-caption">Caption (Opsional)</Label>
                  <Textarea
                    id="photo-caption"
                    value={photoCaption}
                    onChange={(e) => setPhotoCaption(e.target.value)}
                    placeholder="Deskripsi foto (opsional)"
                    rows={2}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setUploadPhotoOpen(false)}>
                  Batal
                </Button>
                <Button onClick={handleUploadPhoto} disabled={!selectedAlbum || !photoFile}>
                  Upload Foto
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {albums.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum ada album</h3>
            <p className="text-gray-600 mb-4">Buat album pertama Anda untuk mulai mengorganisir foto</p>
            <Button onClick={() => setCreateAlbumOpen(true)}>
              <FolderPlus className="w-4 h-4 mr-2" />
              Buat Album Pertama
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => {
            const photos = albumPhotos[album.id] || [];
            const coverImage = album.coverImage || (photos.length > 0 ? photos[0].url : null);

            return (
              <Card key={album.id} className="overflow-hidden">
                <div className="relative aspect-video bg-gray-100">
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteAlbum(album.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg mb-1">{album.title}</h3>
                  {album.description && (
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{album.description}</p>
                  )}
                  <p className="text-sm text-gray-500">{photos.length} foto</p>
                  
                  {photos.length > 0 && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="grid grid-cols-3 gap-2">
                        {photos.slice(0, 6).map((photo) => (
                          <div key={photo.id} className="relative aspect-square group">
                            <img
                              src={photo.url}
                              alt={photo.caption || 'Photo'}
                              className="w-full h-full object-cover rounded"
                            />
                            <button
                              onClick={() => handleDeletePhoto(photo.id, album.id)}
                              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                            >
                              <Trash2 className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        ))}
                        {photos.length > 6 && (
                          <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                            <span className="text-xs text-gray-600">+{photos.length - 6}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
