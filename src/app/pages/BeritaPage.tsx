import { Calendar, Eye, Tag, Search, User, TrendingUp, Clock, ArrowRight, Sparkles, Newspaper, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticleDetailModal } from '../components/ArticleDetailModal';

export default function BeritaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [email, setEmail] = useState('');

  const categories = ['Semua', 'Pendidikan', 'Sosial', 'Ekonomi', 'Peringatan'];

  const articles = [
    {
      id: 1,
      title: 'Peringatan Maulid Nabi Muhammad SAW 1446 H',
      excerpt: 'Yayasan TPK IASMA menyelenggarakan peringatan Maulid Nabi Muhammad SAW dengan rangkaian acara yang meriah dan penuh makna, dihadiri ribuan jamaah.',
      date: '20 Desember 2025',
      category: 'Peringatan',
      image: 'https://images.unsplash.com/photo-1700306692751-1fd5f2b88443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      views: 1250,
      author: 'Tim TPK IASMA',
      readTime: '5 min',
      featured: true,
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 2,
      title: 'Program Tahfidz Quran Berhasil Cetak 20 Penghafal',
      excerpt: 'Alhamdulillah, program tahfidz Al-Quran TPK IASMA berhasil mencetak 20 penghafal Al-Quran dalam periode ini dengan prestasi gemilang.',
      date: '15 Desember 2025',
      category: 'Pendidikan',
      image: 'https://images.unsplash.com/photo-1600814832809-579119f47045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      views: 980,
      author: 'Ustadz Ahmad',
      readTime: '4 min',
      featured: false,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      id: 3,
      title: 'Bakti Sosial: Berbagi dengan 500 Keluarga Dhuafa',
      excerpt: 'Kegiatan bakti sosial berhasil menyalurkan bantuan sembako dan dana tunai kepada 500 keluarga kurang mampu di wilayah Bukittinggi.',
      date: '10 Desember 2025',
      category: 'Sosial',
      image: 'https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      views: 1450,
      author: 'Tim Sosial',
      readTime: '6 min',
      featured: true,
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      id: 4,
      title: 'Pembangunan Gedung Baru TPK IASMA Dimulai',
      excerpt: 'Proyek pembangunan gedung baru senilai 5 miliar rupiah resmi dimulai untuk menambah kapasitas dan memperbaiki fasilitas pembelajaran.',
      date: '5 Desember 2025',
      category: 'Pendidikan',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      views: 2100,
      author: 'Tim Manajemen',
      readTime: '7 min',
      featured: false,
      gradient: 'from-yellow-500 to-accent',
    },
    {
      id: 5,
      title: 'UMKM Binaan TPK IASMA Raih Omzet Miliaran',
      excerpt: 'Kebanggan tersendiri, UMKM binaan TPK IASMA berhasil meraih omzet hingga miliaran rupiah melalui program pemberdayaan ekonomi.',
      date: '1 Desember 2025',
      category: 'Ekonomi',
      image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      views: 1890,
      author: 'Tim Ekonomi',
      readTime: '5 min',
      featured: false,
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      id: 6,
      title: 'Santunan Yatim Piatu untuk 150 Anak',
      excerpt: 'Program santunan bulanan kembali disalurkan kepada 150 anak yatim piatu dengan bantuan biaya pendidikan dan kebutuhan sehari-hari.',
      date: '28 November 2025',
      category: 'Sosial',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      views: 1320,
      author: 'Tim Sosial',
      readTime: '4 min',
      featured: false,
      gradient: 'from-teal-500 to-green-600',
    },
    {
      id: 7,
      title: 'Workshop Digital Marketing untuk UMKM',
      excerpt: 'TPK IASMA mengadakan workshop digital marketing gratis untuk meningkatkan kemampuan pemasaran online para pelaku UMKM binaan.',
      date: '25 November 2025',
      category: 'Ekonomi',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      views: 870,
      author: 'Coach Digital',
      readTime: '6 min',
      featured: false,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 8,
      title: 'Beasiswa S1 untuk 30 Mahasiswa Berprestasi',
      excerpt: 'TPK IASMA memberikan beasiswa penuh untuk 30 mahasiswa berprestasi dari keluarga kurang mampu untuk melanjutkan pendidikan ke jenjang S1.',
      date: '20 November 2025',
      category: 'Pendidikan',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      views: 2450,
      author: 'Tim Pendidikan',
      readTime: '5 min',
      featured: false,
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Semua' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
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
              <Newspaper className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Berita & Artikel</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Berita <span className="text-accent">Terkini</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Ikuti perkembangan terbaru kegiatan dan program TPK IASMA Bukittinggi
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
                  placeholder="Cari berita..."
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

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Berita Pilihan</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                  
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground shadow-lg">
                      Featured
                    </Badge>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/90">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <Button variant="ghost" className="group-hover:text-primary" onClick={() => { setSelectedArticle(article); setDetailModalOpen(true); }}>
                      Baca <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Semua Berita</h2>
          <p className="text-muted-foreground">
            {regularArticles.length} artikel tersedia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <Card key={article.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-primary shadow-lg">
                    {article.category}
                  </Badge>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary" onClick={() => { setSelectedArticle(article); setDetailModalOpen(true); }}>
                    Baca
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <Newspaper className="w-20 h-20 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-bold mb-2">Tidak Ada Berita</h3>
            <p className="text-muted-foreground">
              Tidak ada berita yang sesuai dengan pencarian Anda
            </p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-4">
              <MessageCircle className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Newsletter</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Dapatkan Berita Terbaru
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              Berlangganan newsletter kami untuk mendapatkan update terbaru tentang kegiatan dan program TPK IASMA
            </p>

            <div className="flex gap-4 justify-center max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      <ArticleDetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        article={selectedArticle}
      />
    </div>
  );
}