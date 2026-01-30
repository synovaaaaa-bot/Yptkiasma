import { Calendar, MapPin, Users, Search, ArrowRight, Sparkles, Instagram, Facebook, Youtube, ExternalLink, Filter, TrendingUp, Loader2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { activitiesApi } from '@/api/supabase-db';

export default function KegiatanPage() {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Load activities from Supabase
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
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'semua', label: 'Semua Kegiatan', count: activities.length },
    { value: 'bantuan-bencana', label: 'Bantuan Bencana', count: activities.filter(a => a.category === 'bantuan-bencana').length },
    { value: 'bantuan-air-bersih', label: 'Bantuan Air Bersih', count: activities.filter(a => a.category === 'bantuan-air-bersih').length },
    { value: 'donasi-santunan', label: 'Donasi & Santunan', count: activities.filter(a => a.category === 'donasi-santunan').length },
    { value: 'program-pendidikan', label: 'Program Pendidikan', count: activities.filter(a => a.category === 'program-pendidikan').length },
    { value: 'bantuan-material', label: 'Bantuan Material', count: activities.filter(a => a.category === 'bantuan-material').length },
    { value: 'majelis-taklim', label: 'Majelis Taklim', count: activities.filter(a => a.category === 'majelis-taklim').length },
    { value: 'komunitas-alumni', label: 'Komunitas Alumni', count: activities.filter(a => a.category === 'komunitas-alumni').length },
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = selectedCategory === 'semua' || activity.category === selectedCategory;
    const matchesSearch = activity.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          activity.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          activity.location?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured activities (with featured flag)
  const featuredActivities = activities.filter(a => a.featured).slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Memuat kegiatan...</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getCategoryLabel = (category: string) => {
    return categories.find(c => c.value === category)?.label || category;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'bantuan-bencana': 'bg-rose-100 text-rose-700 border-rose-200',
      'bantuan-air-bersih': 'bg-blue-100 text-blue-700 border-blue-200',
      'donasi-santunan': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'program-pendidikan': 'bg-purple-100 text-purple-700 border-purple-200',
      'bantuan-material': 'bg-orange-100 text-orange-700 border-orange-200',
      'majelis-taklim': 'bg-cyan-100 text-cyan-700 border-cyan-200',
      'komunitas-alumni': 'bg-pink-100 text-pink-700 border-pink-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return Instagram;
      case 'facebook': return Facebook;
      case 'youtube': return Youtube;
      default: return ExternalLink;
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24 text-center z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-4">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Dokumentasi Kegiatan Terbaru</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Kegiatan <span className="text-accent">YTPK</span><br />
              <span className="text-4xl md:text-5xl">IASMA 1 Landbouw Bukittinggi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Jejak langkah nyata YTPK dalam melayani masyarakat melalui berbagai program kemanusiaan, pendidikan, dan pemberdayaan
            </p>

            <div className="flex flex-wrap gap-6 justify-center pt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-1">{activities.length}+</div>
                <div className="text-white/90 text-sm">Kegiatan Terlaksana</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-1">7</div>
                <div className="text-white/90 text-sm">Kategori Program</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-1">1000+</div>
                <div className="text-white/90 text-sm">Orang Terbantu</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Featured Carousel Section */}
      {featuredActivities.length > 0 && (
        <section className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
          <div className="text-center mb-8">
            <Badge className="mb-4 px-4 py-2 bg-accent text-accent-foreground">
              <Sparkles className="w-4 h-4 mr-2" />
              Kegiatan Unggulan
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Kegiatan Terbaru Kami</h2>
            <p className="text-muted-foreground">Program dan kegiatan yang baru saja terlaksana</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredActivities.map((activity) => (
              <Card key={activity.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-primary/20">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activity.image as string}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(activity.category)} border`}>
                      {getCategoryLabel(activity.category)}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-xl mb-2 line-clamp-2">{activity.title}</h3>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(activity.date)}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {activity.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="line-clamp-1">{activity.location}</span>
                    </div>
                    {activity.participants && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{activity.participants}</span>
                      </div>
                    )}
                  </div>

                  {activity.socialLinks && activity.socialLinks.length > 0 && (
                    <div className="flex gap-2 border-t pt-4">
                      {activity.socialLinks.map((link, idx) => {
                        const Icon = getSocialIcon(link.platform);
                        return (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors text-sm flex-1 justify-center"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="capitalize">{link.platform}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="container mx-auto px-4 mb-12">
        <Card className="shadow-lg border-2">
          <CardContent className="p-6">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cari kegiatan berdasarkan judul, deskripsi, atau lokasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span className="font-semibold">Filter Kategori:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 border-2 ${
                      selectedCategory === category.value
                        ? 'bg-primary text-white border-primary shadow-lg scale-105'
                        : 'bg-white hover:bg-muted border-muted text-foreground hover:border-primary/50'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      selectedCategory === category.value
                        ? 'bg-white/20'
                        : 'bg-muted'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Activities Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {filteredActivities.length} Kegiatan Ditemukan
          </h2>
          <p className="text-muted-foreground">
            {selectedCategory === 'semua' 
              ? 'Menampilkan semua kegiatan YTPK' 
              : `Kategori: ${getCategoryLabel(selectedCategory)}`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <Card 
              key={activity.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={activity.image as string}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(activity.category)} border shadow-lg`}>
                    {getCategoryLabel(activity.category)}
                  </Badge>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(activity.date)}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2 min-h-[56px]">
                  {activity.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-3 min-h-[60px]">
                  {activity.description}
                </p>

                <div className="space-y-2 text-sm pt-2 border-t">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{activity.location}</span>
                  </div>
                  {activity.participants && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{activity.participants} partisipan</span>
                    </div>
                  )}
                </div>

                {activity.socialLinks && activity.socialLinks.length > 0 && (
                  <div className="flex gap-2 pt-4 border-t">
                    <span className="text-xs text-muted-foreground self-center">Lihat di:</span>
                    {activity.socialLinks.map((link, idx) => {
                      const Icon = getSocialIcon(link.platform);
                      return (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors"
                          title={`Lihat di ${link.platform}`}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-20 bg-muted/30 rounded-3xl">
            <Calendar className="w-24 h-24 mx-auto mb-6 text-muted-foreground/50" />
            <h3 className="text-2xl font-bold mb-2">Tidak Ada Kegiatan Ditemukan</h3>
            <p className="text-muted-foreground mb-6">
              Tidak ada kegiatan yang sesuai dengan pencarian atau filter Anda
            </p>
            <Button 
              onClick={() => {
                setSelectedCategory('semua');
                setSearchQuery('');
              }}
              variant="outline"
            >
              Reset Filter
            </Button>
          </div>
        )}
      </section>

      {/* Social Media CTA */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Sparkles className="w-16 h-16 mx-auto text-accent" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ikuti Kegiatan Kami di Media Sosial
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              Dapatkan update terbaru tentang kegiatan YTPK dan jadilah bagian dari gerakan kebaikan untuk sesama
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <a 
                href="https://www.instagram.com/iasma1bukittinggi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-xl rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/iasma1bukittinggi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-xl rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Facebook className="w-6 h-6" />
                <span>Facebook</span>
              </a>
              <Link to="/kontak">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl px-8 py-4 text-base">
                  Hubungi Kami
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
