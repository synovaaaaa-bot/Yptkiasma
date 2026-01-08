import { X, Calendar, Eye, User, Clock, Share2, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  views: number;
  author: string;
  readTime: string;
  gradient: string;
  content?: string;
}

interface ArticleDetailModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArticleDetailModal({ article, isOpen, onClose }: ArticleDetailModalProps) {
  if (!isOpen || !article) return null;

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article.title;
    
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
      alert('Link berhasil disalin ke clipboard!');
    }
  };

  const articleContent = article.content || `
    <p class="mb-4">${article.excerpt}</p>
    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h3 class="text-xl font-bold mb-3 mt-6">Poin Penting</h3>
    <p class="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <p class="mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
  `;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl animate-in slide-in-from-bottom-4">
        {/* Header Image */}
        <div className="relative h-96 overflow-hidden rounded-t-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-80`}></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
              {article.category}
            </Badge>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-4xl font-bold mb-4 leading-tight">{article.title}</h2>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{article.views} views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Share Buttons */}
          <div className="flex items-center gap-3 pb-6 border-b mb-6">
            <span className="text-sm font-semibold text-muted-foreground">Bagikan:</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleShare('whatsapp')}
              className="text-green-600 hover:text-green-700 hover:bg-green-50"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleShare('facebook')}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <Facebook className="w-4 h-4 mr-1" />
              Facebook
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleShare('twitter')}
              className="text-sky-600 hover:text-sky-700 hover:bg-sky-50"
            >
              <Twitter className="w-4 h-4 mr-1" />
              Twitter
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleShare('copy')}
            >
              <Share2 className="w-4 h-4 mr-1" />
              Salin Link
            </Button>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Tutup
            </Button>
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={() => handleShare('whatsapp')}
            >
              <Share2 className="mr-2 w-4 h-4" />
              Bagikan Artikel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
