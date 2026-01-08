import { X, ChevronLeft, ChevronRight, Download, Share2, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  date: string;
  category: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  setCurrentIndex?: (index: number) => void;
}

export function GalleryLightbox({ images, currentIndex, isOpen, onClose, onNext, onPrevious, setCurrentIndex }: GalleryLightboxProps) {
  const [isLiked, setIsLiked] = useState(false);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex];

  const handleDownload = () => {
    // In real app, this would download the image
    alert('Download dimulai...');
  };

  const handleShare = () => {
    // In real app, this would open share dialog
    alert('Fitur berbagi akan segera tersedia!');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black animate-in fade-in">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
              {currentImage.category}
            </Badge>
            <div className="text-white/90 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
            </button>
            <button
              onClick={handleShare}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleDownload}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Download className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <img
          src={currentImage.url}
          alt={currentImage.title}
          className="max-w-full max-h-full object-contain animate-in zoom-in-95"
          key={currentIndex}
        />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Footer Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-1">{currentImage.title}</h3>
          <p className="text-white/80 text-sm">{currentImage.date}</p>
        </div>
      </div>

      {/* Keyboard Navigation Info */}
      <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-white/60 text-xs">
        Gunakan ← → atau swipe untuk navigasi
      </div>
    </div>
  );
}