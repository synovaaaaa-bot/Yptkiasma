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
import { programsApi } from '@/api/supabase-db';
import { toast } from 'sonner';
import { ImageUpload } from '@/app/components/admin/ImageUpload';
import { deleteImage } from '@/lib/supabase-storage';

interface Program {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  image?: string;
  schedule?: string;
  location?: string;
  participants?: string;
  contact?: string;
  benefits?: string;
  createdAt: string;
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    status: 'active',
    image: '',
    schedule: '',
    location: '',
    participants: '',
    contact: '',
    benefits: '',
  });
  const [submitting, setSubmitting] = useState(false);

  // Load programs from database
  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      setLoading(true);
      const data = await programsApi.getAll();
      setPrograms(data);
    } catch (error) {
      console.error('Error loading programs:', error);
      toast.error('Gagal memuat data program');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (editingProgram) {
        // Update existing program
        await programsApi.update(editingProgram.id, formData);
        toast.success('Program berhasil diupdate!');
      } else {
        // Create new program
        await programsApi.create(formData);
        toast.success('Program berhasil ditambahkan!');
      }
      
      await loadPrograms(); // Reload data
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error saving program:', error);
      toast.error('Gagal menyimpan program');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', category: '', status: 'active', image: '' });
    setEditingProgram(null);
  };

  const handleEdit = (program: Program) => {
    setEditingProgram(program);
    setFormData({
      title: program.title,
      description: program.description,
      category: program.category,
      status: program.status,
      image: program.image || '',
      schedule: program.schedule || '',
      location: program.location || '',
      participants: program.participants || '',
      contact: program.contact || '',
      benefits: program.benefits || '',
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus program ini?')) {
      try {
        // Get program to delete image
        const program = programs.find(p => p.id === id);
        
        // Delete program from database
        await programsApi.delete(id);
        
        // Delete image from storage if exists
        if (program?.image) {
          await deleteImage(program.image);
        }
        
        toast.success('Program berhasil dihapus!');
        await loadPrograms();
      } catch (error) {
        console.error('Error deleting program:', error);
        toast.error('Gagal menghapus program');
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Program</h1>
          <p className="text-gray-600 mt-2">Tambah, edit, atau hapus program yayasan</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Tambah Program
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingProgram ? 'Edit Program' : 'Tambah Program Baru'}
              </DialogTitle>
              <DialogDescription>
                Isi form di bawah untuk {editingProgram ? 'mengubah' : 'menambah'} program
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Judul Program</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Kategori</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    placeholder="contoh: pendidikan, sosial, kesehatan"
                    required
                  />
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
                <ImageUpload
                  currentImage={formData.image}
                  onImageChange={(url) => setFormData({ ...formData, image: url })}
                  folder="programs"
                  label="Gambar Program"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="schedule">Jadwal</Label>
                    <Input
                      id="schedule"
                      value={formData.schedule}
                      onChange={(e) =>
                        setFormData({ ...formData, schedule: e.target.value })
                      }
                      placeholder="Contoh: Sepanjang Tahun"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Lokasi</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="Contoh: Berbagai Lokasi"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="participants">Peserta</Label>
                    <Input
                      id="participants"
                      value={formData.participants}
                      onChange={(e) =>
                        setFormData({ ...formData, participants: e.target.value })
                      }
                      placeholder="Contoh: 100+ Terbantu"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Kontak</Label>
                    <Input
                      id="contact"
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      placeholder="Contoh: 0812-3456-7890"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="benefits">Manfaat Program (pisahkan dengan koma)</Label>
                  <Textarea
                    id="benefits"
                    rows={3}
                    value={formData.benefits}
                    onChange={(e) =>
                      setFormData({ ...formData, benefits: e.target.value })
                    }
                    placeholder="Contoh: Bantuan pendidikan, Bantuan kesehatan, Bantuan ekonomi"
                  />
                  <p className="text-xs text-gray-500">Pisahkan setiap manfaat dengan koma</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    <option value="active">Aktif</option>
                    <option value="inactive">Nonaktif</option>
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Menyimpan...
                    </>
                  ) : (
                    editingProgram ? 'Simpan Perubahan' : 'Tambah Program'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Program</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : programs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Belum ada program. Klik "Tambah Program" untuk menambah.
            </div>
          ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tanggal Dibuat</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programs.map((program) => (
                <TableRow key={program.id}>
                  <TableCell className="font-medium">{program.title}</TableCell>
                  <TableCell>{program.category}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        program.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {program.status === 'active' ? 'Aktif' : 'Nonaktif'}
                    </span>
                  </TableCell>
                  <TableCell>{program.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(program)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(program.id)}
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
