import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';
import { activitiesApi } from '@/api/supabase-db';
import { toast } from 'sonner';
import { ImageUpload } from '@/app/components/admin/ImageUpload';
import { deleteImage } from '@/lib/supabase-storage';

interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  status: string;
  image?: string;
  category?: string;
}

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    status: 'upcoming',
    image: '',
    category: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    try {
      setLoading(true);
      const data = await activitiesApi.getAll();
      setActivities(data);
    } catch (error) {
      console.error('Error loading activities:', error);
      toast.error('Gagal memuat data kegiatan');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Prepare data for API - ensure all fields are properly formatted
      // Note: category is not in database schema, so we exclude it
      const activityData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        date: formData.date, // Already in correct format from date input
        location: formData.location?.trim() || null,
        status: formData.status,
        image: formData.image?.trim() || null,
        // category field removed - not in database schema
      };

      if (editingActivity) {
        const updated = await activitiesApi.update(editingActivity.id, activityData);
        console.log('Activity updated:', updated);
        toast.success('Kegiatan berhasil diupdate!');
      } else {
        const created = await activitiesApi.create(activityData);
        console.log('Activity created:', created);
        toast.success('Kegiatan berhasil ditambahkan!');
      }
      
      // Refresh data after successful save
      await loadActivities();
      
      // Close dialog and reset form
      setIsDialogOpen(false);
      resetForm();
    } catch (error: any) {
      console.error('Error saving activity:', error);
      const errorMessage = error?.message || error?.error?.message || 'Gagal menyimpan kegiatan';
      console.error('Full error:', error);
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      location: '',
      status: 'upcoming',
      image: '',
      category: '',
    });
    setEditingActivity(null);
  };

  const handleEdit = (activity: Activity) => {
    setEditingActivity(activity);
    
    // Format date untuk input type="date" (YYYY-MM-DD)
    let formattedDate = '';
    if (activity.date) {
      try {
        // Handle different date formats
        const dateObj = new Date(activity.date);
        if (!isNaN(dateObj.getTime())) {
          formattedDate = dateObj.toISOString().split('T')[0];
        } else {
          // If date is already in YYYY-MM-DD format
          formattedDate = activity.date;
        }
      } catch (error) {
        console.error('Error formatting date:', error);
        formattedDate = activity.date;
      }
    }
    
    setFormData({
      title: activity.title || '',
      description: activity.description || '',
      date: formattedDate,
      location: activity.location || '',
      status: activity.status || 'upcoming',
      image: activity.image || '',
      category: activity.category || '',
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus kegiatan ini?')) {
      try {
        // Get activity to delete image
        const activity = activities.find(a => a.id === id);
        
        // Delete activity from database
        await activitiesApi.delete(id);
        
        // Delete image from storage if exists
        if (activity?.image) {
          await deleteImage(activity.image);
        }
        
        toast.success('Kegiatan berhasil dihapus!');
        await loadActivities();
      } catch (error) {
        console.error('Error deleting activity:', error);
        toast.error('Gagal menghapus kegiatan');
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Kegiatan</h1>
          <p className="text-gray-600 mt-2">Tambah, edit, atau hapus kegiatan yayasan</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            resetForm();
          }
        }}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Tambah Kegiatan
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingActivity ? 'Edit Kegiatan' : 'Tambah Kegiatan Baru'}
              </DialogTitle>
              <DialogDescription>
                Isi form di bawah untuk {editingActivity ? 'mengubah' : 'menambah'} kegiatan
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Judul Kegiatan</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Tanggal</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Lokasi</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Deskripsi</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Kategori</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="contoh: bantuan-bencana, donasi-santunan"
                  />
                </div>
                <ImageUpload
                  currentImage={formData.image}
                  onImageChange={(url) => setFormData({ ...formData, image: url })}
                  folder="activities"
                  label="Gambar Kegiatan"
                />
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="upcoming">Akan Datang</option>
                    <option value="ongoing">Sedang Berlangsung</option>
                    <option value="completed">Selesai</option>
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setIsDialogOpen(false);
                    resetForm();
                  }}
                  disabled={submitting}
                >
                  Batal
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Menyimpan...
                    </>
                  ) : (
                    editingActivity ? 'Simpan Perubahan' : 'Tambah Kegiatan'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Kegiatan</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : activities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Belum ada kegiatan. Tambah kegiatan pertama Anda.</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Judul</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Lokasi</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.title}</TableCell>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.location}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'completed'
                          ? 'bg-gray-100 text-gray-800'
                          : activity.status === 'ongoing'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {activity.status === 'completed'
                        ? 'Selesai'
                        : activity.status === 'ongoing'
                        ? 'Berlangsung'
                        : 'Akan Datang'}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(activity)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(activity.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
