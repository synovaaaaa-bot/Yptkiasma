import { Header } from '../types/globals';
import logoTPK from 'figma:asset/24260d8aef2e8086a09f64ac0e634de86b72283f.png';
import logoIASMA from 'figma:asset/7d2c7b58c5e1fe4e465a36c2ca34e6b64bf8c479.png';

// Header Global Configuration
export const header: Header = {
  logo: {
    primary: logoTPK,
    secondary: logoIASMA,
  },
  organizationName: {
    main: 'TPK IASMA 1',
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
      description: 'Tentang Yayasan TPK IASMA',
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
