import { Calendar, Clock, MapPin, Users, Search, ArrowRight, Sparkles, Share2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RegistrationModal } from '../components/RegistrationModal';

export default function KegiatanPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [activityForRegistration, setActivityForRegistration] = useState<any>(null);

  const categories = ['Semua', 'Pendidikan', 'Sosial', 'Kajian', 'Ekonomi'];

  const activities = [
    {
      id: 1,
      title: 'Tahsin Al-Quran Intensif',
      date: '7 Januari 2026',
      time: '08:00 - 10:00',
      location: 'Gedung Utama TPK IASMA',
      participants: '50 Peserta',
      category: 'Pendidikan',
      status: 'Akan Datang',
      description: 'Program pembelajaran membaca Al-Quran dengan tartil dan tajwid yang benar, dibimbing oleh ustadz berpengalaman.',
      image: 'https://images.unsplash.com/photo-1600814832809-579119f47045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 2,
      title: 'Bakti Sosial & Sembako Gratis',
      date: '12 Januari 2026',
      time: '09:00 - 12:00',
      location: 'Wilayah Bukittinggi',
      participants: '30 Relawan',
      category: 'Sosial',
      status: 'Akan Datang',
      description: 'Kegiatan bakti sosial membersihkan lingkungan dan membagikan sembako kepada warga yang membutuhkan.',
      image: 'https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      id: 3,
      title: 'Pengajian Akbar Bulanan',
      date: '20 Januari 2026',
      time: '19:00 - 21:00',
      location: 'Aula TPK IASMA',
      participants: '500+ Jamaah',
      category: 'Kajian',
      status: 'Akan Datang',
      description: 'Pengajian akbar bulanan dengan ustadz terkenal, tema: Akhlak Mulia dalam Kehidupan Sehari-hari.',
      image: 'https://images.unsplash.com/photo-1625246433906-6cfa33544b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      id: 4,
      title: 'Tahfidz Anak Usia Dini',
      date: '22 Januari 2026',
      time: '16:00 - 17:30',
      location: 'Ruang Kelas TPK IASMA',
      participants: '40 Anak',
      category: 'Pendidikan',
      status: 'Akan Datang',
      description: 'Program menghafal Al-Quran untuk anak-anak usia 7-12 tahun dengan metode fun learning.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      id: 5,
      title: 'Santunan Yatim Bulanan',
      date: '25 Januari 2026',
      time: '10:00 - 12:00',
      location: 'Gedung Serbaguna',
      participants: '100+ Anak Yatim',
      category: 'Sosial',
      status: 'Akan Datang',
      description: 'Program santunan rutin untuk anak yatim dan dhuafa, termasuk bantuan pendidikan dan sembako.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-teal-500 to-secondary',
    },
    {
      id: 6,
      title: 'Workshop Kewirausahaan',
      date: '28 Januari 2026',
      time: '13:00 - 17:00',
      location: 'Ruang Workshop',
      participants: '60 Peserta',
      category: 'Ekonomi',
      status: 'Akan Datang',
      description: 'Pelatihan kewirausahaan dan manajemen usaha untuk UMKM binaan yayasan.',
      image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 7,
      title: 'Kajian Keluarga Sakinah',
      date: '2 Februari 2026',
      time: '15:00 - 17:00',
      location: 'Aula Utama',
      participants: '150+ Peserta',
      category: 'Kajian',
      status: 'Pendaftaran Dibuka',
      description: 'Kajian tentang membangun keluarga yang harmonis sesuai tuntunan Islam.',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-teal-500 to-green-600',
    },
    {
      id: 8,
      title: 'Beasiswa Tahfidz 2026',
      date: '5 Februari 2026',
      time: '08:00 - 12:00',
      location: 'Kampus TPK IASMA',
      participants: 'Terbatas',
      category: 'Pendidikan',
      status: 'Pendaftaran Dibuka',
      description: 'Seleksi penerima beasiswa tahfidz Al-Quran untuk periode 2026-2027.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = selectedCategory === 'Semua' || activity.category === selectedCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRegister = (activity: any) => {
    setActivityForRegistration(activity);
    setRegistrationModalOpen(true);
  };

  const handleShare = (activity: any) => {
    if (navigator.share) {
      navigator.share({
        title: activity.title,
        text: activity.description,
        url: window.location.href,
      }).catch(() => {
        alert('Link berhasil disalin ke clipboard!');
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link berhasil disalin ke clipboard!');
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-accent/85"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-4">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Agenda & Kegiatan</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Kegiatan <span className="text-accent">TPK IASMA</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Ikuti berbagai kegiatan bermanfaat dan jadilah bagian dari perubahan positif di masyarakat
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <Card className="shadow-2xl border-0">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-1 relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cari kegiatan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-lg scale-105'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Activities Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {filteredActivities.length} Kegiatan Tersedia
          </h2>
          <p className="text-muted-foreground">
            {selectedCategory === 'Semua' ? 'Menampilkan semua kegiatan' : `Kategori: ${selectedCategory}`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <Card 
              key={activity.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activity.gradient} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <Badge className="bg-white text-primary shadow-lg">
                    {activity.category}
                  </Badge>
                  <Badge className="bg-accent text-accent-foreground shadow-lg">
                    {activity.status}
                  </Badge>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold text-sm">{activity.date}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {activity.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2">
                  {activity.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{activity.time} WIB</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="line-clamp-1">{activity.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{activity.participants}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => handleRegister(activity)}
                  >
                    Daftar Sekarang
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(activity);
                    }}
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-20">
            <Calendar className="w-20 h-20 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-bold mb-2">Tidak Ada Kegiatan</h3>
            <p className="text-muted-foreground">
              Tidak ada kegiatan yang sesuai dengan pencarian Anda
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Sparkles className="w-16 h-16 mx-auto text-accent" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Punya Pertanyaan tentang Kegiatan?
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              Hubungi kami untuk informasi lebih lanjut atau daftarkan diri Anda untuk mengikuti kegiatan-kegiatan bermanfaat
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/kontak">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                  Hubungi Kami
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/program">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl">
                  Lihat Program Lainnya
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={registrationModalOpen}
        onClose={() => setRegistrationModalOpen(false)}
        title={activityForRegistration?.title || ''}
        category={activityForRegistration?.category || ''}
        type="kegiatan"
      />
    </div>
  );
}