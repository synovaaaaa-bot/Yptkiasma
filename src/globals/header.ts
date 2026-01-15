import { Header } from '../types/globals';
import { logoTPK, logoIASMA } from '../assets/logos';

// Header Global Configuration
export const header: Header = {
  logo: {
    primary: logoTPK,
    secondary: logoIASMA,
  },
  organizationName: {
    main: 'YTPK',
    sub: 'Landbouw Bukittinggi',
  },
  navigation: [
    {
      label: 'Beranda',
      href: '/',
    },
    {
      label: 'Profil',
      href: '/profil',
      description: 'Tentang YTPK Iasma I Landbouw Bukittinggi',
    },
    {
      label: 'Program',
      href: '/program',
      description: 'Program-program yayasan',
    },
    {
      label: 'Kegiatan',
      href: '/kegiatan',
      description: 'Agenda dan kegiatan terkini',
    },
    {
      label: 'Berita',
      href: '/berita',
      description: 'Berita dan artikel',
    },
    {
      label: 'Galeri',
      href: '/galeri',
      description: 'Dokumentasi kegiatan',
    },
    {
      label: 'Donasi',
      href: '/donasi',
      description: 'Berdonasi untuk program yayasan',
    },
    {
      label: 'Kontak',
      href: '/kontak',
      description: 'Hubungi kami',
    },
  ],
  announcement: {
    enabled: true,
    text: 'Pendaftaran Tahfidz Al-Quran 2025 telah dibuka!',
    link: '/program',
  },
};

export default header;