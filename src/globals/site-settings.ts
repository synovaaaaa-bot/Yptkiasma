import { SiteSettings } from '../types/globals';

// Site Settings Global Configuration
export const siteSettings: SiteSettings = {
  siteName: 'Yayasan TPK IASMA 1 Landbouw Bukittinggi',
  siteDescription:
    'Yayasan TPK IASMA 1 Landbouw Bukittinggi - Lembaga sosial dan pendidikan yang berkomitmen untuk pemberdayaan masyarakat melalui program pendidikan, sosial, dan ekonomi.',
  siteUrl: 'https://tpkiasma.or.id',
  organizationInfo: {
    fullName: 'Yayasan Tim Peduli Kemanusiaan IASMA 1 Landbouw Bukittinggi',
    shortName: 'TPK IASMA 1',
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
    defaultTitle: 'Yayasan TPK IASMA 1 Landbouw Bukittinggi',
    defaultDescription:
      'Lembaga sosial dan pendidikan Islam yang fokus pada pemberdayaan masyarakat melalui program pendidikan Al-Quran, bantuan sosial, dan pengembangan ekonomi.',
    defaultImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200',
    keywords: [
      'yayasan islam',
      'tpk iasma',
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
