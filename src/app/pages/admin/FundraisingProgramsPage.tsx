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
import { Plus, Pencil, Trash2, Loader2, Target, TrendingUp, Users } from 'lucide-react';
import { fundraisingProgramsApi } from '@/api/supabase-db';
import { toast } from 'sonner';
import { ImageUpload } from '@/app/components/admin/ImageUpload';
import { deleteImage } from '@/lib/supabase-storage';

interface FundraisingProgram {
  id: number;
  title: string;
  description: string | null;
  target: number;
  collected: number;
  image: string | null;
  status: string;
  urgent: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function FundraisingProgramsPage() {
  const [programs, setPrograms] = useState<FundraisingProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<FundraisingProgram | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    target: '',
    image: '',
    status: 'active',
    urgent: false,
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      setLoading(true);
      const data = await fundraisingProgramsApi.getAll();
      setPrograms(data);
    } catch (error) {
      console.error('Error loading fundraising programs:', error);
      toast.error('Gagal memuat program donasi');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const programData = {
        title: formData.title.trim(),
        description: formData.description.trim() || null,
        target: parseInt(formData.target.replace(/\D/g, '')) || 0,
        image: formData.image || null,
        status: formData.status,
        urgent: formData.urgent,
      };

      if (editingProgram) {
        await fundraisingProgramsApi.update(editingProgram.id, programData);
        toast.success('Program donasi berhasil diupdate!');
      } else {
        await fundraisingProgramsApi.create(programData);
        toast.success('Program donasi berhasil dibuat!');
      }
      
      await loadPrograms();
      setIsDialogOpen(false);
      resetForm();
    } catch (error: any) {
      console.error('Error saving fundraising program:', error);
      toast.error(error.message || 'Gagal menyimpan program donasi');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      target: '',
      image: '',
      status: 'active',
      urgent: false,
    });
    setEditingProgram(null);
  };

  const handleEdit = (program: FundraisingProgram) => {
    setEditingProgram(program);
    setFormData({
      title: program.title,
      description: program.description || '',
      target: program.target.toLocaleString('id-ID'),
      image: program.image || '',
      status: program.status,
      urgent: program.urgent,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Apakah Anda yakin ingin menghapus program donasi ini?')) {
      return;
    }

    try {
      const program = programs.find(p => p.id === id);
      if (program?.image) {
        await deleteImage(program.image);
      }
      await fundraisingProgramsApi.delete(id);
      toast.success('Program donasi berhasil dihapus!');
      await loadPrograms();
    } catch (error: any) {
      console.error('Error deleting fundraising program:', error);
      toast.error(error.message || 'Gagal menghapus program donasi');
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getPercentage = (collected: number, target: number) => {
    if (target === 0) return 0;
    return Math.round((collected / target) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Program Donasi</h1>
          <p className="text-gray-600 mt-2">Kelola program donasi dan target penggalangan dana</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Tambah Program
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingProgram ? 'Edit Program Donasi' : 'Tambah Program Donasi Baru'}
              </DialogTitle>
              <DialogDescription>
                Isi form di bawah untuk {editingProgram ? 'mengubah' : 'menambah'} program donasi
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Judul Program *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Deskripsi</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target">Target Donasi (Rp) *</Label>
                  <Input
                    id="target"
                    value={formData.target}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setFormData({ ...formData, target: value });
                    }}
                    placeholder="500000000"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    {formData.target ? formatCurrency(parseInt(formData.target.replace(/\D/g, '')) || 0) : ''}
                  </p>
                </div>
                <ImageUpload
                  currentImage={formData.image}
                  onImageChange={(url) => setFormData({ ...formData, image: url })}
                  folder="fundraising"
                  label="Gambar Program (Opsional)"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <select
                      id="status"
                      className="w-full px-3 py-2 border rounded-md"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="active">Aktif</option>
                      <option value="completed">Selesai</option>
                      <option value="paused">Ditunda</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgent">Prioritas</Label>
                    <div className="flex items-center space-x-2 pt-2">
                      <input
                        type="checkbox"
                        id="urgent"
                        checked={formData.urgent}
                        onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <Label htmlFor="urgent" className="cursor-pointer">
                        Tandai sebagai Urgent
                      </Label>
                    </div>
                  </div>
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
                    editingProgram ? 'Simpan Perubahan' : 'Tambah Program'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : programs.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum ada program donasi</h3>
            <p className="text-gray-600 mb-4">Buat program donasi pertama Anda</p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Tambah Program
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const percentage = getPercentage(program.collected, program.target);
            return (
              <Card key={program.id} className="overflow-hidden">
                {program.image && (
                  <div className="relative aspect-video bg-gray-100">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg flex-1">{program.title}</h3>
                    {program.urgent && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                        Urgent
                      </span>
                    )}
                  </div>
                  {program.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{program.description}</p>
                  )}
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Terkumpul</span>
                        <span className="font-semibold">{formatCurrency(program.collected)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{percentage}%</span>
                        <span>Target: {formatCurrency(program.target)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className={`text-xs px-2 py-1 rounded ${
                      program.status === 'active' ? 'bg-green-100 text-green-800' :
                      program.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {program.status === 'active' ? 'Aktif' :
                       program.status === 'completed' ? 'Selesai' : 'Ditunda'}
                    </span>
                    <div className="flex gap-2">
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
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
