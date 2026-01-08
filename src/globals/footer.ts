import { Footer } from '../types/globals';
import logoTPK from 'figma:asset/24260d8aef2e8086a09f64ac0e634de86b72283f.png';
import logoIASMA from 'figma:asset/7d2c7b58c5e1fe4e465a36c2ca34e6b64bf8c479.png';

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
    email: 'info@tpkiasma.or.id',
    whatsapp: '+62 812 3456 7890',
  },
  socialLinks: [
    {
      platform: 'facebook',
      url: 'https://facebook.com/tpkiasma',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/tpkiasma',
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/@tpkiasma',
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
  copyright: `© ${new Date().getFullYear()} Yayasan TPK IASMA 1 Landbouw Bukittinggi. Semua hak dilindungi.`,
  footerText: 'Peduli Sesama, Berbagi Kebahagiaan',
};

export default footer;
