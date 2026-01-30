import { Image as ImageIcon, Play, Download, Eye, Heart, Calendar, Tag, Sparkles, Filter, Grid3x3, Rows, ExternalLink, Instagram, Facebook, Loader2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useState, useEffect } from 'react';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { albumsApi, photosApi } from '@/api/supabase-db';
import type { Album, Photo } from '@/db/schema';

export default function GaleriPage() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [albumPhotos, setAlbumPhotos] = useState<Record<number, Photo[]>>({});
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedGallery, setSelectedGallery] = useState<any>(null);

  // Load albums and photos from database
  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    try {
      setLoading(true);
      const albumsData = await albumsApi.getAll();
      setAlbums(albumsData);
      
      // Load photos for each album
      const photosMap: Record<number, Photo[]> = {};
      for (const album of albumsData) {
        try {
          const photos = await photosApi.getByAlbumId(album.id);
          photosMap[album.id] = photos;
        } catch (error) {
          console.error(`Error loading photos for album ${album.id}:`, error);
          photosMap[album.id] = [];
        }
      }
      setAlbumPhotos(photosMap);
    } catch (error) {
      console.error('Error loading albums:', error);
    } finally {
      setLoading(false);
    }
  };

  // Categories - simplified since database doesn't have category field yet
  // You can add category field to schema later if needed
  const categories = [
    { value: 'semua', label: 'Semua Album', count: albums.length },
  ];

  const filteredAlbums = albums;

  const getCategoryColor = () => {
    return 'from-primary to-secondary';
  };

  const getCategoryLabel = () => {
    return 'Semua Album';
  };

  const handleViewAlbum = (album: Album) => {
    // Get photos for this album
    const photos = albumPhotos[album.id] || [];
    const images = photos.map(photo => ({
      url: photo.url,
      caption: photo.caption || album.title,
    }));
    
    setSelectedGallery({ ...album, images });
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Memuat galeri...</p>
        </div>
      </div>
    );
  }

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
                <ImageIcon className="w-8 h-8 text-accent" />
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">
                    {Object.values(albumPhotos).reduce((total, photos) => total + photos.length, 0)}
                  </div>
                  <div className="text-sm text-white/80">Total Foto</div>
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
              {/* Category Filter - Simplified for now */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Filter className="w-4 h-4" />
                  <span className="font-semibold">Filter:</span>
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
            Semua Dokumentasi
          </h2>
          <p className="text-muted-foreground">
            {filteredAlbums.length} album tersedia
          </p>
        </div>

        <div className={viewMode === 'masonry' 
          ? 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'
          : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        }>
          {filteredAlbums.map((album) => {
            const photos = albumPhotos[album.id] || [];
            const coverImage = album.coverImage || (photos.length > 0 ? photos[0].url : null);
            const photoCount = photos.length;
            
            return (
              <Card 
                key={album.id}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg break-inside-avoid ${
                  viewMode === 'grid' ? '' : 'mb-6'
                }`}
              >
                <div className={`relative ${viewMode === 'grid' ? 'h-80' : 'h-96'} overflow-hidden`}>
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <ImageIcon className="w-16 h-16 text-white/50" />
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor()} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                  
                  {/* Top Info */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <Badge className="bg-white text-primary shadow-lg">
                      Album
                    </Badge>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <ImageIcon className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-medium">{photoCount} foto</span>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {album.title}
                    </h3>
                    {album.description && (
                      <p className="text-sm text-white/90 line-clamp-2 mb-3">
                        {album.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between text-sm mb-3">
                      <div className="flex items-center gap-2 text-white/90">
                        <Calendar className="w-4 h-4" />
                        <span className="line-clamp-1">
                          {new Date(album.createdAt).toLocaleDateString('id-ID', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button 
                      className="bg-white text-primary hover:bg-white/90 shadow-xl" 
                      onClick={() => handleViewAlbum(album)}
                      disabled={photoCount === 0}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {photoCount > 0 ? 'Lihat Detail' : 'Belum Ada Foto'}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
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
              <div className="text-4xl font-bold mb-2">{albums.length}</div>
              <div className="text-white/90">Total Album</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <ImageIcon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2">
                {Object.values(albumPhotos).reduce((total, photos) => total + photos.length, 0)}
              </div>
              <div className="text-white/90">Total Foto</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2">{new Date().getFullYear()}</div>
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