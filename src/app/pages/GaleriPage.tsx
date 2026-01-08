import { Image as ImageIcon, Play, Download, Eye, Heart, Calendar, Tag, Sparkles, Filter, Grid3x3, Rows } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { GalleryLightbox } from '../components/GalleryLightbox';

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedGallery, setSelectedGallery] = useState<any>(null);

  const categories = ['Semua', 'Kegiatan', 'Pendidikan', 'Sosial', 'Infrastruktur'];

  const galleries = [
    {
      id: 1,
      title: 'Peringatan Maulid Nabi 2025',
      category: 'Kegiatan',
      date: '20 Des 2025',
      images: 12,
      views: 2340,
      likes: 156,
      thumbnail: 'https://images.unsplash.com/photo-1700306692751-1fd5f2b88443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-emerald-500 to-teal-600',
      height: 'h-80',
    },
    {
      id: 2,
      title: 'Program Tahfidz Al-Quran',
      category: 'Pendidikan',
      date: '15 Des 2025',
      images: 8,
      views: 1890,
      likes: 134,
      thumbnail: 'https://images.unsplash.com/photo-1600814832809-579119f47045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-blue-500 to-cyan-600',
      height: 'h-96',
    },
    {
      id: 3,
      title: 'Bakti Sosial Ramadhan',
      category: 'Sosial',
      date: '10 Des 2025',
      images: 15,
      views: 3210,
      likes: 245,
      thumbnail: 'https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-rose-500 to-pink-600',
      height: 'h-72',
    },
    {
      id: 4,
      title: 'Pembangunan Gedung Baru',
      category: 'Infrastruktur',
      date: '5 Des 2025',
      images: 20,
      views: 4567,
      likes: 321,
      thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-yellow-500 to-accent',
      height: 'h-80',
    },
    {
      id: 5,
      title: 'Workshop Kewirausahaan',
      category: 'Kegiatan',
      date: '1 Des 2025',
      images: 10,
      views: 1567,
      likes: 98,
      thumbnail: 'https://images.unsplash.com/photo-1554224311-beee415c201f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-purple-500 to-indigo-600',
      height: 'h-96',
    },
    {
      id: 6,
      title: 'Santunan Anak Yatim',
      category: 'Sosial',
      date: '28 Nov 2025',
      images: 14,
      views: 2890,
      likes: 187,
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-teal-500 to-green-600',
      height: 'h-72',
    },
    {
      id: 7,
      title: 'Kajian Rutin Mingguan',
      category: 'Pendidikan',
      date: '25 Nov 2025',
      images: 6,
      views: 1234,
      likes: 76,
      thumbnail: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-cyan-500 to-blue-600',
      height: 'h-80',
    },
    {
      id: 8,
      title: 'Beasiswa Pendidikan 2025',
      category: 'Pendidikan',
      date: '20 Nov 2025',
      images: 9,
      views: 3456,
      likes: 234,
      thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-indigo-500 to-purple-600',
      height: 'h-96',
    },
    {
      id: 9,
      title: 'Renovasi Masjid',
      category: 'Infrastruktur',
      date: '15 Nov 2025',
      images: 18,
      views: 2345,
      likes: 156,
      thumbnail: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      gradient: 'from-green-500 to-emerald-600',
      height: 'h-72',
    },
  ];

  const filteredGalleries = selectedCategory === 'Semua' 
    ? galleries 
    : galleries.filter(g => g.category === selectedCategory);

  const handleViewAlbum = (gallery: any) => {
    // Generate mock images for the gallery
    const mockImages = Array.from({ length: gallery.images }, (_, i) => ({
      id: i + 1,
      url: gallery.thumbnail,
      title: `${gallery.title} - Foto ${i + 1}`,
      date: gallery.date,
      category: gallery.category,
    }));
    
    setSelectedGallery({ ...gallery, images: mockImages });
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const handleNextImage = () => {
    if (selectedGallery && selectedGallery.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedGallery.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePreviousImage = () => {
    if (selectedGallery && selectedGallery.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedGallery.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
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
              <ImageIcon className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Galeri Foto & Video</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Galeri <span className="text-accent">Dokumentasi</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Dokumentasi visual kegiatan dan program TPK IASMA Bukittinggi
            </p>

            <div className="flex items-center justify-center gap-6 pt-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <ImageIcon className="w-6 h-6 text-accent" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/80">Foto</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Play className="w-6 h-6 text-accent" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-white/80">Video</div>
                </div>
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

      {/* Filter & View Mode */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <Card className="shadow-2xl border-0">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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

              {/* View Mode Toggle */}
              <div className="flex gap-2 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded transition-all ${
                    viewMode === 'masonry' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all ${
                    viewMode === 'grid' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Rows className="w-5 h-5" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {selectedCategory === 'Semua' ? 'Semua Album' : `Album ${selectedCategory}`}
          </h2>
          <p className="text-muted-foreground">
            {filteredGalleries.length} album tersedia
          </p>
        </div>

        <div className={viewMode === 'masonry' 
          ? 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'
          : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        }>
          {filteredGalleries.map((gallery) => (
            <Card 
              key={gallery.id}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 break-inside-avoid ${
                viewMode === 'grid' ? '' : 'mb-6'
              }`}
            >
              <div className={`relative ${viewMode === 'masonry' ? gallery.height : 'h-72'} overflow-hidden`}>
                <img
                  src={gallery.thumbnail}
                  alt={gallery.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${gallery.gradient} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                
                {/* Top Info */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <Badge className="bg-white text-primary shadow-lg">
                    {gallery.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                      <ImageIcon className="w-3 h-3 mr-1" />
                      {gallery.images}
                    </Badge>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {gallery.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{gallery.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{gallery.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{gallery.date}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-white text-primary hover:bg-white/90" onClick={() => handleViewAlbum(gallery)}>
                    Lihat Album
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredGalleries.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon className="w-20 h-20 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-bold mb-2">Tidak Ada Album</h3>
            <p className="text-muted-foreground">
              Tidak ada album di kategori ini
            </p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <ImageIcon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Total Foto</div>
            </div>
            <div>
              <Play className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/90">Video Dokumentasi</div>
            </div>
            <div>
              <Tag className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-white/90">Album Kegiatan</div>
            </div>
            <div>
              <Eye className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-white/90">Total Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={selectedGallery ? selectedGallery.images : []}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
        onNext={handleNextImage}
        onPrevious={handlePreviousImage}
      />
    </div>
  );
}