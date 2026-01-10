import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { logoTPK, logoIASMA } from '../../assets/logos';

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoTPK} 
                alt="Logo TPK" 
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <img 
                src={logoIASMA} 
                alt="Logo IASMA 1 Landbouw" 
                className="h-12 w-12 object-contain bg-white rounded-lg p-1"
              />
            </div>
            <h3 className="mb-4 text-white">Yayasan TPK IASMA</h3>
            <p className="text-white/80 mb-4">
              Yayasan yang berkomitmen untuk menjadi pusat kegiatan pendidikan, 
              sosial, dan pemberdayaan masyarakat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-white">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/profil" className="text-white/80 hover:text-secondary transition-colors">
                  Profil Yayasan
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-white/80 hover:text-secondary transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link to="/kegiatan" className="text-white/80 hover:text-secondary transition-colors">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link to="/berita" className="text-white/80 hover:text-secondary transition-colors">
                  Berita
                </Link>
              </li>
              <li>
                <Link to="/donasi" className="text-white/80 hover:text-secondary transition-colors">
                  Donasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-white">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Jl. Raya Pendidikan No. 123, Jakarta Selatan 12345
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80">info@tpkiasma.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Yayasan TPK IASMA. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}