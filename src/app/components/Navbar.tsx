import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoTPK from 'figma:asset/24260d8aef2e8086a09f64ac0e634de86b72283f.png';
import logoIASMA from 'figma:asset/7d2c7b58c5e1fe4e465a36c2ca34e6b64bf8c479.png';

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
              <img 
                src={logoTPK} 
                alt="Logo TPK" 
                className="h-14 w-14 object-contain"
              />
              <img 
                src={logoIASMA} 
                alt="Logo IASMA 1 Landbouw" 
                className="h-14 w-14 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-lg leading-tight">TPK IASMA 1</span>
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