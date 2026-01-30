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
import { Plus, Pencil, Trash2, Loader2, Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';
import { contactInfoApi, contactDepartmentsApi } from '@/api/supabase-db';
import { toast } from 'sonner';

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState<any>(null);
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [isDeptDialogOpen, setIsDeptDialogOpen] = useState(false);
  const [editingDept, setEditingDept] = useState<any | null>(null);
  const [deptFormData, setDeptFormData] = useState({
    name: '',
    phone: '',
    email: '',
    order: 0,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [info, depts] = await Promise.all([
        contactInfoApi.get(),
        contactDepartmentsApi.getAll(),
      ]);
      setContactInfo(info);
      setDepartments(depts);
    } catch (error) {
      console.error('Error loading contact data:', error);
      toast.error('Gagal memuat data kontak');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveContactInfo = async () => {
    if (!contactInfo) return;
    
    setSaving(true);
    try {
      await contactInfoApi.update(contactInfo);
      toast.success('Informasi kontak berhasil disimpan!');
    } catch (error) {
      console.error('Error saving contact info:', error);
      toast.error('Gagal menyimpan informasi kontak');
    } finally {
      setSaving(false);
    }
  };

  const handleDeptSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingDept) {
        await contactDepartmentsApi.update(editingDept.id, deptFormData);
        toast.success('Departemen berhasil diupdate!');
      } else {
        await contactDepartmentsApi.create(deptFormData);
        toast.success('Departemen berhasil ditambahkan!');
      }
      
      await loadData();
      setIsDeptDialogOpen(false);
      resetDeptForm();
    } catch (error) {
      console.error('Error saving department:', error);
      toast.error('Gagal menyimpan departemen');
    }
  };

  const resetDeptForm = () => {
    setDeptFormData({ name: '', phone: '', email: '', order: 0 });
    setEditingDept(null);
  };

  const handleEditDept = (dept: any) => {
    setEditingDept(dept);
    setDeptFormData({
      name: dept.name,
      phone: dept.phone || '',
      email: dept.email || '',
      order: dept.order || 0,
    });
    setIsDeptDialogOpen(true);
  };

  const handleDeleteDept = async (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus departemen ini?')) {
      try {
        await contactDepartmentsApi.delete(id);
        toast.success('Departemen berhasil dihapus!');
        await loadData();
      } catch (error) {
        console.error('Error deleting department:', error);
        toast.error('Gagal menghapus departemen');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Kelola Kontak</h1>
        <p className="text-gray-600 mt-2">Kelola informasi kontak dan departemen</p>
      </div>

      {/* General Contact Info */}
      <Card>
        <CardHeader>
          <CardTitle>Informasi Kontak Umum</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="heroTitle">Judul Hero Section</Label>
              <Input
                id="heroTitle"
                value={contactInfo?.heroTitle || ''}
                onChange={(e) => setContactInfo({ ...contactInfo, heroTitle: e.target.value })}
                placeholder="Ada yang Bisa Kami Bantu?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="heroSubtitle">Subtitle Hero Section</Label>
              <Input
                id="heroSubtitle"
                value={contactInfo?.heroSubtitle || ''}
                onChange={(e) => setContactInfo({ ...contactInfo, heroSubtitle: e.target.value })}
                placeholder="Tim kami siap melayani..."
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">
                <Phone className="w-4 h-4 inline mr-2" />
                Telepon 1
              </Label>
              <Input
                id="phone"
                value={contactInfo?.phone || ''}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                placeholder="+62 752 1234567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone2">
                <Phone className="w-4 h-4 inline mr-2" />
                Telepon 2
              </Label>
              <Input
                id="phone2"
                value={contactInfo?.phone2 || ''}
                onChange={(e) => setContactInfo({ ...contactInfo, phone2: e.target.value })}
                placeholder="+62 812 3456 7890"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                <Mail className="w-4 h-4 inline mr-2" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={contactInfo?.email || ''}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                placeholder="info@ytpk.or.id"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp">
                <Phone className="w-4 h-4 inline mr-2" />
                WhatsApp
              </Label>
              <Input
                id="whatsapp"
                value={contactInfo?.whatsapp || ''}
                onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value })}
                placeholder="+62 812 3456 7890"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">
              <MapPin className="w-4 h-4 inline mr-2" />
              Alamat
            </Label>
            <Textarea
              id="address"
              rows={2}
              value={contactInfo?.address || ''}
              onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
              placeholder="Jl. Landbouw No. 10, Bukittinggi, Sumatera Barat 26115"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="operationalHours">
                <Clock className="w-4 h-4 inline mr-2" />
                Jam Operasional 1
              </Label>
              <Input
                id="operationalHours"
                value={contactInfo?.operationalHours || ''}
                onChange={(e) => setContactInfo({ ...contactInfo, operationalHours: e.target.value })}
                placeholder="Senin - Jumat: 08:00 - 17:00"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="operationalHours2">
                <Clock className="w-4 h-4 inline mr-2" />
                Jam Operasional 2
              </Label>
              <Input
                id="operationalHours2"
                value={contactInfo?.operationalHours2 || ''}
                onChange={(e) => setContactInfo({ ...contactInfo, operationalHours2: e.target.value })}
                placeholder="Sabtu: 08:00 - 12:00"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mapEmbedUrl">
              <Globe className="w-4 h-4 inline mr-2" />
              Google Maps Embed URL
            </Label>
            <Textarea
              id="mapEmbedUrl"
              rows={3}
              value={contactInfo?.mapEmbedUrl || ''}
              onChange={(e) => setContactInfo({ ...contactInfo, mapEmbedUrl: e.target.value })}
              placeholder="https://www.google.com/maps/embed?pb=..."
            />
            <p className="text-xs text-gray-500">
              Dapatkan URL embed dari Google Maps: Buka lokasi di Google Maps → Share → Embed a map
            </p>
          </div>

          <Button onClick={handleSaveContactInfo} disabled={saving} className="w-full">
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Menyimpan...
              </>
            ) : (
              'Simpan Informasi Kontak'
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Departments */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Kontak Departemen</CardTitle>
          <Dialog open={isDeptDialogOpen} onOpenChange={setIsDeptDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetDeptForm}>
                <Plus className="w-4 h-4 mr-2" />
                Tambah Departemen
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingDept ? 'Edit Departemen' : 'Tambah Departemen Baru'}
                </DialogTitle>
                <DialogDescription>
                  Isi form di bawah untuk {editingDept ? 'mengubah' : 'menambah'} departemen
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleDeptSubmit}>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="deptName">Nama Departemen</Label>
                    <Input
                      id="deptName"
                      value={deptFormData.name}
                      onChange={(e) => setDeptFormData({ ...deptFormData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deptPhone">Telepon</Label>
                    <Input
                      id="deptPhone"
                      value={deptFormData.phone}
                      onChange={(e) => setDeptFormData({ ...deptFormData, phone: e.target.value })}
                      placeholder="0812-3456-7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deptEmail">Email</Label>
                    <Input
                      id="deptEmail"
                      type="email"
                      value={deptFormData.email}
                      onChange={(e) => setDeptFormData({ ...deptFormData, email: e.target.value })}
                      placeholder="departemen@ytpk.or.id"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deptOrder">Urutan</Label>
                    <Input
                      id="deptOrder"
                      type="number"
                      value={deptFormData.order}
                      onChange={(e) => setDeptFormData({ ...deptFormData, order: parseInt(e.target.value) || 0 })}
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500">Urutan tampil (0 = pertama)</p>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">
                    {editingDept ? 'Simpan Perubahan' : 'Tambah Departemen'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {departments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Belum ada departemen. Klik "Tambah Departemen" untuk menambah.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Telepon</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Urutan</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {departments.map((dept) => (
                  <TableRow key={dept.id}>
                    <TableCell className="font-medium">{dept.name}</TableCell>
                    <TableCell>{dept.phone || '-'}</TableCell>
                    <TableCell>{dept.email || '-'}</TableCell>
                    <TableCell>{dept.order}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditDept(dept)}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteDept(dept.id)}
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
