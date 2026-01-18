import { Album } from '../types/collections';
import { activities } from './activities';
import { programs } from './programs';
import { posts } from './posts';

// Helper function to get images from activities
const getActivityImages = (activityIds: string[]) => {
  return activityIds.map((id, index) => {
    const activity = activities.find(a => a.id === id);
    return {
      id: `${id}-img-${index}`,
      url: activity?.image as string || '',
      caption: activity?.title || '',
      activityId: id,
    };
  });
};

// Helper function to create album from program
const createProgramAlbum = (programId: string, category: string): Album | null => {
  const program = programs.find(p => p.id === programId);
  if (!program) return null;

  return {
    id: `album-program-${program.id}`,
    title: program.title,
    slug: program.slug,
    description: program.description,
    coverImage: program.image,
    category: category,
    images: [
      {
        id: `program-${program.id}-main`,
        url: program.image,
        caption: program.title,
      }
    ],
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    location: program.location || 'Bukittinggi',
    views: program.participants || 0,
    likes: Math.floor((program.participants || 0) * 0.3),
    _status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

// Albums Collection - Mengelompokkan kegiatan menjadi album
export const albums: Album[] = [
  // Album 1: Bantuan Bencana Sumatera Barat 2026
  {
    id: 'album-bantuan-bencana-sumbar-2026',
    title: 'Bantuan Bencana Sumatera Barat 2026',
    slug: 'bantuan-bencana-sumbar-2026',
    description: 'Dokumentasi lengkap kegiatan tanggap darurat YTPK dalam membantu korban bencana di berbagai lokasi Sumatera Barat. Album ini mencakup penyaluran bantuan di Nagari Guguak Malalo, kampanye #PrayforSumbar, dan bantuan di Jorong Pauh.',
    coverImage: activities.find(a => a.id === 'ytpk-2026-01-03-malalo')?.image as string,
    category: 'bantuan-bencana',
    images: getActivityImages([
      'ytpk-2026-01-03-malalo',
      'ytpk-2026-01-06-prayforsumbar',
      'ytpk-2025-12-10-jorong-pauh',
    ]),
    activityIds: [
      'ytpk-2026-01-03-malalo',
      'ytpk-2026-01-06-prayforsumbar',
      'ytpk-2025-12-10-jorong-pauh',
    ],
    date: new Date('2026-01-06').toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    location: 'Berbagai lokasi di Sumatera Barat',
    views: 3450,
    likes: 287,
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/reel/DTC8AzPEwVs/' },
      { platform: 'facebook', url: 'https://www.facebook.com/reni.mulyati1/videos/4076135416032605/' },
    ],
    _status: 'published',
    createdAt: '2026-01-06T18:00:00Z',
    updatedAt: '2026-01-06T18:00:00Z',
  },

  // Album 2: Program Air Bersih untuk Masyarakat
  {
    id: 'album-air-bersih-2025',
    title: 'Program Air Bersih untuk Masyarakat',
    slug: 'program-air-bersih-2025',
    description: 'Kolaborasi YTPK dengan Ikatan Alumni ITB dalam mendistribusikan filter air bersih kepada masyarakat yang membutuhkan. Program ini menjangkau daerah terpencil di Maninjau dan sekitarnya.',
    coverImage: activities.find(a => a.id === 'ytpk-2025-12-16-filter-air-maninjau')?.image as string,
    category: 'bantuan-air-bersih',
    images: getActivityImages([
      'ytpk-2025-12-16-filter-air-maninjau',
      'ytpk-2025-12-16-update-filter-air',
    ]),
    activityIds: [
      'ytpk-2025-12-16-filter-air-maninjau',
      'ytpk-2025-12-16-update-filter-air',
    ],
    date: '16 Des 2025',
    location: 'Maninjau dan sekitarnya',
    views: 2890,
    likes: 234,
    _status: 'published',
    createdAt: '2025-12-16T18:00:00Z',
    updatedAt: '2025-12-16T18:00:00Z',
  },

  // Album 3: Penyaluran Donasi Desember 2025
  {
    id: 'album-donasi-desember-2025',
    title: 'Penyaluran Donasi Desember 2025',
    slug: 'penyaluran-donasi-desember-2025',
    description: 'Dokumentasi penyaluran donasi dari para Uda-Uni dan donatur YTPK kepada masyarakat yang membutuhkan. Setiap donasi disalurkan dengan penuh amanah dan transparansi.',
    coverImage: activities.find(a => a.id === 'ytpk-2025-12-12-penyaluran-donasi')?.image as string,
    category: 'donasi-santunan',
    images: getActivityImages([
      'ytpk-2025-12-12-penyaluran-donasi',
      'ytpk-2025-12-04-donasi-uda-uni',
    ]),
    activityIds: [
      'ytpk-2025-12-12-penyaluran-donasi',
      'ytpk-2025-12-04-donasi-uda-uni',
    ],
    date: '12 Des 2025',
    location: 'Bukittinggi dan sekitarnya',
    views: 2340,
    likes: 198,
    _status: 'published',
    createdAt: '2025-12-12T17:00:00Z',
    updatedAt: '2025-12-12T17:00:00Z',
  },

  // Album 4: Program Pendidikan & Pendataan Siswa
  {
    id: 'album-pendidikan-2025',
    title: 'Program Pendidikan & Pendataan Siswa',
    slug: 'program-pendidikan-2025',
    description: 'Kegiatan pendataan siswa-siswa penerima manfaat program pendidikan YTPK. Data ini menjadi dasar pemberian beasiswa dan bantuan pendidikan lainnya.',
    coverImage: activities.find(a => a.id === 'ytpk-2025-12-15-pendataan-siswa')?.image as string,
    category: 'program-pendidikan',
    images: getActivityImages([
      'ytpk-2025-12-15-pendataan-siswa',
    ]),
    activityIds: [
      'ytpk-2025-12-15-pendataan-siswa',
    ],
    date: '15 Des 2025',
    location: 'Beberapa sekolah di Bukittinggi',
    views: 1567,
    likes: 123,
    _status: 'published',
    createdAt: '2025-12-15T16:00:00Z',
    updatedAt: '2025-12-15T16:00:00Z',
  },

  // Album 5: Majelis Taklim & SLA 2025
  {
    id: 'album-majelis-taklim-sla-2025',
    title: 'Majelis Taklim & SLA 2025',
    slug: 'majelis-taklim-sla-2025',
    description: 'Dokumentasi kegiatan Majelis Taklim IASMA 1 Landbouw dalam rangka Silaturahmi Landbouw Alumni (SLA) 2025. Momentum berkumpul, berbagi ilmu, dan mempererat ukhuwah islamiyah.',
    coverImage: activities.find(a => a.id === 'ytpk-2025-09-06-undangan-majelis-taklim')?.image as string,
    category: 'majelis-taklim',
    images: getActivityImages([
      'ytpk-2025-09-06-undangan-majelis-taklim',
    ]),
    activityIds: [
      'ytpk-2025-09-06-undangan-majelis-taklim',
    ],
    date: '6 Sep 2025',
    location: 'Lokasi SLA Bukittinggi',
    views: 4567,
    likes: 389,
    _status: 'published',
    createdAt: '2025-09-06T20:00:00Z',
    updatedAt: '2025-09-06T20:00:00Z',
  },

  // Album 6: Program Qurban ke Daerah Terpencil
  {
    id: 'album-program-qurban-terpencil',
    title: 'Sebar Qurban ke Daerah Terpencil',
    slug: 'sebar-qurban-daerah-terpencil',
    description: 'Dokumentasi program penyaluran daging qurban ke daerah-daerah terpencil dan masyarakat dhuafa yang jauh dari pusat kota. Memastikan masyarakat pelosok juga merasakan kebahagiaan Idul Adha.',
    coverImage: programs.find(p => p.id === '1')?.image as string,
    category: 'donasi-santunan',
    images: [
      {
        id: 'program-qurban-main',
        url: programs.find(p => p.id === '1')?.image as string,
        caption: 'Program Sebar Qurban ke Daerah Terpencil',
      }
    ],
    date: '18 Jan 2026',
    location: 'Daerah Terpencil Sumbar',
    views: 1250,
    likes: 98,
    _status: 'published',
    createdAt: '2026-01-18T10:00:00Z',
    updatedAt: '2026-01-18T10:00:00Z',
  },

  // Album 7: Program Waqaf Al-Qur'an
  {
    id: 'album-program-waqaf-alquran',
    title: 'Waqaf Al-Qur\'an untuk Mushalla & Mesjid',
    slug: 'waqaf-alquran',
    description: 'Program wakaf Al-Qur\'an berkualitas untuk mushalla, mesjid, pesantren, dan masyarakat yang membutuhkan sebagai amal jariyah yang pahalanya terus mengalir.',
    coverImage: programs.find(p => p.id === '7')?.image as string,
    category: 'program-pendidikan',
    images: [
      {
        id: 'program-waqaf-main',
        url: programs.find(p => p.id === '7')?.image as string,
        caption: 'Program Waqaf Al-Qur\'an',
      }
    ],
    date: '18 Jan 2026',
    location: 'Sumatera Barat',
    views: 1580,
    likes: 142,
    _status: 'published',
    createdAt: '2026-01-18T10:00:00Z',
    updatedAt: '2026-01-18T10:00:00Z',
  },

  // Album 8: Program Takjil & Sembako Ramadhan
  {
    id: 'album-program-takjil-ramadhan',
    title: 'Pembagian Takjil dan Sembako Ramadhan',
    slug: 'takjil-sembako-ramadhan',
    description: 'Program berbagi takjil gratis setiap sore dan paket sembako untuk keluarga dhuafa di bulan suci Ramadhan. Berbagi kebahagiaan di bulan penuh berkah.',
    coverImage: programs.find(p => p.id === '5')?.image as string,
    category: 'donasi-santunan',
    images: [
      {
        id: 'program-takjil-main',
        url: programs.find(p => p.id === '5')?.image as string,
        caption: 'Pembagian Takjil dan Sembako Ramadhan',
      }
    ],
    date: '18 Jan 2026',
    location: 'Beberapa Titik di Bukittinggi',
    views: 2340,
    likes: 198,
    _status: 'published',
    createdAt: '2026-01-18T10:00:00Z',
    updatedAt: '2026-01-18T10:00:00Z',
  },

  // Album 9: Komunitas Alumni IASMA
  {
    id: 'album-komunitas-alumni',
    title: 'Komunitas Alumni IASMA 1 Landbouw',
    slug: 'komunitas-alumni-iasma',
    description: 'Dokumentasi kegiatan dan silaturahmi Ikatan Alumni SMA 1 Landbouw Bukittinggi. Mempererat tali persaudaraan dan berkontribusi untuk kemajuan almamater dan masyarakat.',
    coverImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'komunitas-alumni',
    images: [
      {
        id: 'alumni-1',
        url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
        caption: 'Pertemuan Alumni IASMA 1 Landbouw',
      }
    ],
    date: '18 Jan 2026',
    location: 'Bukittinggi',
    views: 1800,
    likes: 156,
    _status: 'published',
    createdAt: '2026-01-18T10:00:00Z',
    updatedAt: '2026-01-18T10:00:00Z',
  },
];

export default albums;