import { SiteSettings } from '../types/globals';

// Site Settings Global Configuration
export const siteSettings: SiteSettings = {
  siteName: 'YTPK Iasma I Landbouw Bukittinggi',
  siteDescription:
    'YTPK Iasma I Landbouw Bukittinggi - Lembaga sosial dan pendidikan yang berkomitmen untuk pemberdayaan masyarakat melalui program pendidikan, sosial, dan ekonomi.',
  siteUrl: 'https://ytpk.or.id',
  organizationInfo: {
    fullName: 'Yayasan Pendidikan dan Pemberdayaan Masyarakat YTPK Landbouw Bukittinggi',
    shortName: 'YTPK',
    tagline: 'Peduli Sesama, Berbagi Kebahagiaan',
    foundedYear: '2009',
    location: 'Bukittinggi, Sumatera Barat',
  },
  theme: {
    primaryColor: '#0F766E', // Hijau Tua
    secondaryColor: '#5EEAD4', // Tosca
    accentColor: '#FACC15', // Emas
  },
  seo: {
    defaultTitle: 'YTPK Iasma I Landbouw Bukittinggi',
    defaultDescription:
      'Lembaga sosial dan pendidikan Islam yang fokus pada pemberdayaan masyarakat melalui program pendidikan Al-Quran, bantuan sosial, dan pengembangan ekonomi.',
    defaultImage: '/og-image.jpg',
    keywords: [
      'yayasan islam',
      'ytpk',
      'bukittinggi',
      'pendidikan islam',
      'tahfidz quran',
      'santunan sosial',
      'pemberdayaan ekonomi',
      'beasiswa pendidikan',
      'kajian islam',
      'program sosial',
    ],
  },
};

export default siteSettings;