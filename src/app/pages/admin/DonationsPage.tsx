import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
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
} from '@/app/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { CheckCircle, XCircle, Eye, Loader2, DollarSign, Users, Clock, TrendingUp } from 'lucide-react';
import { donationsApi } from '@/api/donations-api';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

interface Donation {
  id: number;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  amount: number;
  program: string;
  paymentMethod: string;
  accountNumber: string;
  paymentProof: string;
  paymentStatus: string;
  adminNotes?: string;
  verifiedBy?: string;
  verifiedAt?: string;
  message?: string;
  createdAt: string;
}

export default function DonationsPage() {
  const { user } = useAuth();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [adminNotes, setAdminNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
    totalAmount: 0,
  });
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    loadDonations();
    loadStats();
  }, []);

  const loadDonations = async () => {
    try {
      setLoading(true);
      const data = await donationsApi.getAll();
      setDonations(data);
    } catch (error) {
      console.error('Error loading donations:', error);
      toast.error('Gagal memuat data donasi');
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const data = await donationsApi.getStats();
      setStats(data);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleReview = (donation: Donation) => {
    setSelectedDonation(donation);
    setAdminNotes(donation.adminNotes || '');
    setIsReviewOpen(true);
  };

  const handleApprove = async () => {
    if (!selectedDonation) return;
    
    setSubmitting(true);
    try {
      await donationsApi.approve(selectedDonation.id, adminNotes, user?.email);
      toast.success('Donasi berhasil disetujui!');
      
      // Refresh data
      await Promise.all([loadDonations(), loadStats()]);
      
      setIsReviewOpen(false);
      setSelectedDonation(null);
      setAdminNotes('');
    } catch (error: any) {
      console.error('Error approving donation:', error);
      toast.error(error.message || 'Gagal menyetujui donasi');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReject = async () => {
    if (!selectedDonation) return;
    
    if (!adminNotes.trim()) {
      toast.error('Catatan admin wajib diisi untuk penolakan');
      return;
    }
    
    setSubmitting(true);
    try {
      await donationsApi.reject(selectedDonation.id, adminNotes, user?.email);
      toast.success('Donasi berhasil ditolak');
      
      // Refresh data
      await Promise.all([loadDonations(), loadStats()]);
      
      setIsReviewOpen(false);
      setSelectedDonation(null);
      setAdminNotes('');
    } catch (error: any) {
      console.error('Error rejecting donation:', error);
      toast.error(error.message || 'Gagal menolak donasi');
    } finally {
      setSubmitting(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
      case 'approved':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Approved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const filteredDonations = filterStatus === 'all' 
    ? donations 
    : donations.filter(d => d.paymentStatus === filterStatus);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Validasi Donasi</h1>
        <p className="text-gray-600 mt-2">Review dan validasi pembayaran donasi</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Donasi</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Approved</p>
                <p className="text-lg font-bold text-green-600">{formatCurrency(stats.totalAmount)}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2">
            <Button
              variant={filterStatus === 'all' ? 'default' : 'outline'}
              onClick={() => setFilterStatus('all')}
            >
              Semua ({stats.total})
            </Button>
            <Button
              variant={filterStatus === 'pending' ? 'default' : 'outline'}
              onClick={() => setFilterStatus('pending')}
            >
              Pending ({stats.pending})
            </Button>
            <Button
              variant={filterStatus === 'approved' ? 'default' : 'outline'}
              onClick={() => setFilterStatus('approved')}
            >
              Approved ({stats.approved})
            </Button>
            <Button
              variant={filterStatus === 'rejected' ? 'default' : 'outline'}
              onClick={() => setFilterStatus('rejected')}
            >
              Rejected ({stats.rejected})
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Donasi</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : filteredDonations.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Tidak ada donasi
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Donatur</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Jumlah</TableHead>
                  <TableHead>Metode</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDonations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell className="text-sm">{formatDate(donation.createdAt)}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{donation.donorName}</div>
                        <div className="text-sm text-gray-500">{donation.donorEmail}</div>
                        <div className="text-sm text-gray-500">{donation.donorPhone}</div>
                      </div>
                    </TableCell>
                    <TableCell>{donation.program || '-'}</TableCell>
                    <TableCell className="font-bold">{formatCurrency(donation.amount)}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{donation.paymentMethod}</div>
                        {donation.accountNumber && (
                          <div className="text-gray-500">Rek: {donation.accountNumber}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(donation.paymentStatus)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleReview(donation)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Review
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Review Dialog */}
      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Review Donasi</DialogTitle>
            <DialogDescription>
              Verify bukti transfer dan nominal donasi
            </DialogDescription>
          </DialogHeader>

          {selectedDonation && (
            <div className="space-y-6 py-4">
              {/* Donatur Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Nama Donatur</Label>
                  <p className="font-medium">{selectedDonation.donorName}</p>
                </div>
                <div>
                  <Label>Email</Label>
                  <p className="font-medium">{selectedDonation.donorEmail}</p>
                </div>
                <div>
                  <Label>No. HP</Label>
                  <p className="font-medium">{selectedDonation.donorPhone}</p>
                </div>
                <div>
                  <Label>Program</Label>
                  <p className="font-medium">{selectedDonation.program || '-'}</p>
                </div>
              </div>

              {/* Payment Info */}
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Informasi Pembayaran</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Jumlah Donasi</Label>
                    <p className="text-2xl font-bold text-green-600">
                      {formatCurrency(selectedDonation.amount)}
                    </p>
                  </div>
                  <div>
                    <Label>Metode Pembayaran</Label>
                    <p className="font-medium">{selectedDonation.paymentMethod}</p>
                  </div>
                  <div>
                    <Label>No. Rekening Pengirim</Label>
                    <p className="font-medium">{selectedDonation.accountNumber || '-'}</p>
                  </div>
                  <div>
                    <Label>Status</Label>
                    <div className="mt-1">{getStatusBadge(selectedDonation.paymentStatus)}</div>
                  </div>
                </div>
              </div>

              {/* Bukti Transfer */}
              {selectedDonation.paymentProof && (
                <div className="border-t pt-4">
                  <Label>Bukti Transfer</Label>
                  <div className="mt-2 border rounded-lg p-2">
                    <img
                      src={selectedDonation.paymentProof}
                      alt="Bukti Transfer"
                      className="w-full h-auto max-h-96 object-contain"
                    />
                  </div>
                  <a
                    href={selectedDonation.paymentProof}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Buka gambar di tab baru
                  </a>
                </div>
              )}

              {/* Message */}
              {selectedDonation.message && (
                <div className="border-t pt-4">
                  <Label>Pesan dari Donatur</Label>
                  <p className="text-sm text-gray-600 mt-1">{selectedDonation.message}</p>
                </div>
              )}

              {/* Admin Notes */}
              <div className="border-t pt-4">
                <Label htmlFor="adminNotes">Catatan Admin {selectedDonation.paymentStatus === 'pending' ? '' : '(View Only)'}</Label>
                <Textarea
                  id="adminNotes"
                  rows={3}
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Tulis catatan untuk donatur (opsional untuk approve, wajib untuk reject)"
                  disabled={selectedDonation.paymentStatus !== 'pending'}
                  className="mt-2"
                />
              </div>

              {/* Verification Info */}
              {selectedDonation.verifiedAt && (
                <div className="border-t pt-4 bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Diverifikasi oleh <span className="font-medium">{selectedDonation.verifiedBy}</span> pada{' '}
                    {formatDate(selectedDonation.verifiedAt)}
                  </p>
                </div>
              )}
            </div>
          )}

          <DialogFooter>
            {selectedDonation?.paymentStatus === 'pending' && (
              <>
                <Button
                  variant="outline"
                  onClick={handleReject}
                  disabled={submitting}
                  className="bg-red-50 text-red-600 hover:bg-red-100"
                >
                  {submitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <XCircle className="w-4 h-4 mr-2" />}
                  Tolak
                </Button>
                <Button
                  onClick={handleApprove}
                  disabled={submitting}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {submitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CheckCircle className="w-4 h-4 mr-2" />}
                  Setujui
                </Button>
              </>
            )}
            {selectedDonation?.paymentStatus !== 'pending' && (
              <Button onClick={() => setIsReviewOpen(false)}>Tutup</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
