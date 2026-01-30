import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { logoTPK, logoIASMA } from '../../assets/logos';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/profil', label: 'Profil' },
    { to: '/program', label: 'Program' },
    { to: '/kegiatan', label: 'Kegiatan' },
    { to: '/berita', label: 'Berita' },
    { to: '/galeri', label: 'Galeri' },
    { to: '/donasi', label: 'Donasi' },
    { to: '/kontak', label: 'Kontak' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {/* Logo 1: IASMA 1 LANDBOUW BUKITTINGGI */}
              <img 
                src={logoIASMA} 
                alt="Logo IASMA 1 Landbouw Bukittinggi" 
                className="h-16 w-16 object-contain"
                onError={(e) => {
                  // Fallback jika gambar tidak ditemukan
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='8' fill='%230F766E'/%3E%3Ctext x='50' y='40' font-family='Arial, sans-serif' font-size='20' font-weight='bold' fill='%23FACC15' text-anchor='middle'%3EIASMA%3C/text%3E%3Ctext x='50' y='70' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle'%3ELandbouw%3C/text%3E%3C/svg%3E";
                }}
              />
              {/* Logo 2: YAYASAN TIM PEDULI KEMANUSIAAN */}
              <img 
                src={logoTPK} 
                alt="Logo Yayasan Tim Peduli Kemanusiaan" 
                className="h-16 w-16 object-contain"
                onError={(e) => {
                  // Fallback jika gambar tidak ditemukan
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%230F766E'/%3E%3Ctext x='50' y='50' font-family='Arial, sans-serif' font-size='32' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETPK%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-lg leading-tight">YTPK</span>
              <span className="text-xs text-muted-foreground">Landbouw Bukittinggi</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive(link.to)
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isActive(link.to)
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-muted'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}