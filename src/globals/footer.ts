import { Footer } from '../types/globals';
import { logoTPK, logoIASMA } from '../assets/logos';

// Footer Global Configuration
export const footer: Footer = {
  logo: {
    primary: logoTPK,
    secondary: logoIASMA,
  },
  description:
    'Yayasan yang berkomitmen untuk menjadi pusat kegiatan pendidikan, sosial, dan pemberdayaan masyarakat.',
  contact: {
    address: 'Jl. Landbouw No. 10, Bukittinggi, Sumatera Barat 26115',
    phone: '+62 752 1234567',
    email: 'info@yptk.or.id',
    whatsapp: '+62 812 3456 7890',
  },
  socialLinks: [
    {
      platform: 'facebook',
      url: 'https://facebook.com/yptk',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/yptk',
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/@yptk',
    },
    {
      platform: 'whatsapp',
      url: 'https://wa.me/6281234567890',
    },
  ],
  quickLinks: [
    {
      label: 'Profil Yayasan',
      href: '/profil',
    },
    {
      label: 'Program',
      href: '/program',
    },
    {
      label: 'Kegiatan',
      href: '/kegiatan',
    },
    {
      label: 'Berita',
      href: '/berita',
    },
    {
      label: 'Donasi',
      href: '/donasi',
    },
    {
      label: 'Kontak',
      href: '/kontak',
    },
  ],
  copyright: `© ${new Date().getFullYear()} Yayasan YPTK Landbouw Bukittinggi. Semua hak dilindungi.`,
  footerText: 'Peduli Sesama, Berbagi Kebahagiaan',
};

export default footer;