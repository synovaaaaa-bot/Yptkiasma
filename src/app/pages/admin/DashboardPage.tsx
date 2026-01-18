import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { FileText, Calendar, Image, DollarSign, Mail, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Program',
      value: '12',
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      trend: '+2 bulan ini',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Kegiatan Aktif',
      value: '8',
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      trend: '+3 minggu ini',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Foto Galeri',
      value: '156',
      icon: <Image className="w-8 h-8 text-purple-600" />,
      trend: '+24 bulan ini',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Total Donasi',
      value: 'Rp 45.5M',
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
      trend: '+12% dari bulan lalu',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Pesan Masuk',
      value: '23',
      icon: <Mail className="w-8 h-8 text-red-600" />,
      trend: '5 belum dibaca',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Berita Published',
      value: '45',
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      trend: '+7 bulan ini',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Selamat datang di admin dashboard. Kelola semua konten website di sini.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.trend}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>{stat.icon}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'Program baru ditambahkan', time: '2 jam yang lalu', color: 'bg-blue-100' },
                { action: 'Donasi baru diterima', time: '5 jam yang lalu', color: 'bg-green-100' },
                { action: 'Berita dipublikasikan', time: '1 hari yang lalu', color: 'bg-purple-100' },
                { action: 'Pesan baru diterima', time: '2 hari yang lalu', color: 'bg-yellow-100' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${activity.color}`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
                <FileText className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Tambah Program</p>
              </button>
              <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
                <Calendar className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Tambah Kegiatan</p>
              </button>
              <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
                <Image className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Upload Foto</p>
              </button>
              <button className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors text-left">
                <Mail className="w-6 h-6 text-yellow-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Lihat Pesan</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
