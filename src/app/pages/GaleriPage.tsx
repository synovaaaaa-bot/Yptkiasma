import { Image as ImageIcon, Play, Download, Eye, Heart, Calendar, Tag, Sparkles, Filter, Grid3x3, Rows, ExternalLink, Instagram, Facebook } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { albums } from '../../collections/albums';

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedGallery, setSelectedGallery] = useState<any>(null);

  const categories = [
    { value: 'semua', label: 'Semua Album', count: albums.length },
    { value: 'bantuan-bencana', label: 'Bantuan Bencana', count: albums.filter(a => a.category === 'bantuan-bencana').length },
    { value: 'bantuan-air-bersih', label: 'Bantuan Air Bersih', count: albums.filter(a => a.category === 'bantuan-air-bersih').length },
    { value: 'donasi-santunan', label: 'Donasi & Santunan', count: albums.filter(a => a.category === 'donasi-santunan').length },
    { value: 'program-pendidikan', label: 'Program Pendidikan', count: albums.filter(a => a.category === 'program-pendidikan').length },
    { value: 'majelis-taklim', label: 'Majelis Taklim', count: albums.filter(a => a.category === 'majelis-taklim').length },
    { value: 'komunitas-alumni', label: 'Komunitas Alumni', count: albums.filter(a => a.category === 'komunitas-alumni').length },
  ];

  const filteredAlbums = selectedCategory === 'semua' 
    ? albums 
    : albums.filter(a => a.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'bantuan-bencana': 'from-rose-500 to-pink-600',
      'bantuan-air-bersih': 'from-blue-500 to-cyan-600',
      'donasi-santunan': 'from-emerald-500 to-teal-600',
      'program-pendidikan': 'from-purple-500 to-indigo-600',
      'majelis-taklim': 'from-cyan-500 to-blue-600',
      'komunitas-alumni': 'from-pink-500 to-rose-600',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryLabel = (category: string) => {
    return categories.find(c => c.value === category)?.label || category;
  };

  const handleViewAlbum = (album: any) => {
    // Use album images from the album data
    setSelectedGallery({ ...album, images: album.images });
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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return Instagram;
      case 'facebook': return Facebook;
      default: return ExternalLink;
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
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-4">
              <ImageIcon className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Galeri Foto & Dokumentasi</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Galeri <span className="text-accent">YTPK</span><br />
              <span className="text-3xl md:text-4xl">IASMA 1 Landbouw Bukittinggi</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Dokumentasi visual kegiatan dan program YTPK dalam melayani masyarakat
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <ImageIcon className="w-8 h-8 text-accent" />
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">{albums.length}</div>
                  <div className="text-sm text-white/80">Album Dokumentasi</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <Tag className="w-8 h-8 text-accent" />
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">6</div>
                  <div className="text-sm text-white/80">Kategori</div>
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
      <section className="container mx-auto px-4 -mt-16 relative z-10 mb-12">
        <Card className="shadow-2xl border-2">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Category Filter */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Filter className="w-4 h-4" />
                  <span className="font-semibold">Filter Kategori:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all border-2 ${
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

              {/* View Mode Toggle */}
              <div className="flex gap-2 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded transition-all ${
                    viewMode === 'masonry' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  title="Masonry Grid"
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all ${
                    viewMode === 'grid' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  title="Regular Grid"
                >
                  <Rows className="w-5 h-5" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {selectedCategory === 'semua' ? 'Semua Dokumentasi' : getCategoryLabel(selectedCategory)}
          </h2>
          <p className="text-muted-foreground">
            {filteredAlbums.length} dokumentasi tersedia
          </p>
        </div>

        <div className={viewMode === 'masonry' 
          ? 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'
          : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        }>
          {filteredAlbums.map((album) => (
            <Card 
              key={album.id}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg break-inside-avoid ${
                viewMode === 'grid' ? '' : 'mb-6'
              }`}
            >
              <div className={`relative ${viewMode === 'grid' ? 'h-80' : 'h-96'} overflow-hidden`}>
                <img
                  src={album.coverImage as string}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(album.category)} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                
                {/* Top Info */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <Badge className="bg-white text-primary shadow-lg">
                    {getCategoryLabel(album.category)}
                  </Badge>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <Calendar className="w-3 h-3 text-white" />
                    <span className="text-white text-xs font-medium">{album.date}</span>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {album.title}
                  </h3>
                  <p className="text-sm text-white/90 line-clamp-2 mb-3">
                    {album.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm mb-3">
                    <div className="flex items-center gap-2 text-white/90">
                      <Tag className="w-4 h-4" />
                      <span className="line-clamp-1">{album.location}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  {album.socialLinks && album.socialLinks.length > 0 && (
                    <div className="flex gap-2">
                      {album.socialLinks.map((link: any, idx: number) => {
                        const Icon = getSocialIcon(link.platform);
                        return (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors text-xs"
                          >
                            <Icon className="w-3 h-3" />
                            <span className="capitalize">{link.platform}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button 
                    className="bg-white text-primary hover:bg-white/90 shadow-xl" 
                    onClick={() => handleViewAlbum(album)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredAlbums.length === 0 && (
          <div className="text-center py-20 bg-muted/30 rounded-3xl">
            <ImageIcon className="w-24 h-24 mx-auto mb-6 text-muted-foreground/50" />
            <h3 className="text-2xl font-bold mb-2">Tidak Ada Dokumentasi</h3>
            <p className="text-muted-foreground mb-6">
              Tidak ada dokumentasi di kategori ini
            </p>
            <Button 
              onClick={() => setSelectedCategory('semua')}
              variant="outline"
            >
              Lihat Semua Dokumentasi
            </Button>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Statistik Galeri YTPK</h2>
            <p className="text-white/90 text-lg">Dokumentasi lengkap kegiatan dan program kami</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <ImageIcon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2">{albums.length}+</div>
              <div className="text-white/90">Total Dokumentasi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Tag className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-white/90">Kategori Program</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2">2026</div>
              <div className="text-white/90">Tahun Aktif</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Heart className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/90">Orang Terbantu</div>
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