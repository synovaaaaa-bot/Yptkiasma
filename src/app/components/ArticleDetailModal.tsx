import { X, Calendar, Eye, User, Clock, Share2, Facebook, Twitter, MessageCircle, ExternalLink, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Article {
  id: number | string;
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
  tags?: string[];
  sourceUrl?: string;
  documentationUrl?: string;
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

  // Get source and documentation links from article data
  const getSourceLinks = () => {
    const links: Array<{ platform: string; url: string }> = [];
    
    // Use documentationUrl if available, otherwise fallback to sourceUrl
    const docUrl = article.documentationUrl || article.sourceUrl;
    if (docUrl) {
      let platform = 'External';
      if (docUrl.includes('instagram.com')) platform = 'Instagram';
      else if (docUrl.includes('facebook.com')) platform = 'Facebook';
      else if (docUrl.includes('threads.net')) platform = 'Threads';
      
      links.push({ platform, url: docUrl });
    }
    
    return links;
  };

  const sourceLinks = getSourceLinks();

  // Remove source links from content for display
  const contentWithoutLinks = article.content 
    ? article.content.replace(/\*\*Sumber:\*\*[\s\S]*$/, '').trim()
    : `
    <p class="mb-4">${article.excerpt}</p>
    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
            className="prose prose-lg max-w-none text-foreground mb-8"
            dangerouslySetInnerHTML={{ __html: contentWithoutLinks }}
          />

          {/* Source Links Section */}
          {sourceLinks.length > 0 && (
            <div className="border-t pt-6 mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-primary" />
                Sumber & Dokumentasi
              </h3>
              <div className="flex flex-wrap gap-3">
                {sourceLinks.map((link, index) => {
                  const icon = link.platform === 'Instagram' ? Instagram : 
                               link.platform === 'Facebook' ? Facebook : 
                               ExternalLink;
                  const Icon = icon;
                  
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(link.url, '_blank')}
                      className={`
                        ${link.platform === 'Instagram' ? 'text-pink-600 hover:text-pink-700 hover:bg-pink-50 border-pink-200' : ''}
                        ${link.platform === 'Facebook' ? 'text-blue-600 hover:text-blue-700 hover:bg-blue-50 border-blue-200' : ''}
                        ${link.platform === 'Threads' ? 'text-gray-800 hover:text-gray-900 hover:bg-gray-50 border-gray-200' : ''}
                        ${link.platform === 'External' ? 'text-primary hover:text-primary/90 hover:bg-primary/5 border-primary/20' : ''}
                      `}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {link.platform}
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Klik tombol di atas untuk melihat dokumentasi asli kegiatan di media sosial resmi YTPK
              </p>
            </div>
          )}

          {/* Tags Section */}
          {article.tags && article.tags.length > 0 && (
            <div className="border-t pt-6 mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

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
