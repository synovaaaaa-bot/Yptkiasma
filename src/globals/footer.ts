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
    email: 'info@ytpk.or.id',
    whatsapp: '+62 812 3456 7890',
  },
  socialMedia: [
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/share/17icRxHRrE/',
    },
    {
      platform: 'instagram',
      url: 'https://www.instagram.com/ytpkiasma1.landbouw?igsh=MTN3bWNzNHZqajh3bQ==',
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/@yayasantimpedulikemanusiaan?si=FP620KTmv5K31Ed4',
    },
    {
      platform: 'tiktok',
      url: 'https://www.tiktok.com/@ytpk.iasma.1.land?_r=1&_t=ZS-939C6bBOSea',
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
  copyright: `© ${new Date().getFullYear()} YTPK Iasma I Landbouw Bukittinggi. Semua hak dilindungi.`,
  footerText: 'Peduli Sesama, Berbagi Kebahagiaan',
};

export default footer;