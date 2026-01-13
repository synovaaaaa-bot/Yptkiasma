import { Album } from '../types/collections';
import { activities } from './activities';

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
    date: '2025-12-16',
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
    date: '2025-12-12',
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
    date: '2025-12-15',
    location: 'Beberapa sekolah di Bukittinggi',
    views: 1567,
    likes: 123,
    _status: 'published',
    createdAt: '2025-12-15T16:00:00Z',
    updatedAt: '2025-12-15T16:00:00Z',
  },

  // Album 5: Program BSPS - Bantuan Perumahan
  {
    id: 'album-bsps-2025',
    title: 'Program BSPS - Bantuan Perumahan',
    slug: 'program-bsps-2025',
    description: 'Dokumentasi pengiriman material untuk Program Bantuan Stimulan Perumahan Swadaya (BSPS). Program ini membantu masyarakat kurang mampu mendapatkan rumah layak huni.',
    coverImage: activities.find(a => a.id === 'ytpk-2025-11-17-bsps-material')?.image as string,
    category: 'bantuan-material',
    images: getActivityImages([
      'ytpk-2025-11-17-bsps-material',
    ]),
    activityIds: [
      'ytpk-2025-11-17-bsps-material',
    ],
    date: '2025-11-17',
    location: 'Desa Bongkok, Bukittinggi',
    views: 1890,
    likes: 156,
    _status: 'published',
    createdAt: '2025-11-17T18:00:00Z',
    updatedAt: '2025-11-17T18:00:00Z',
  },

  // Album 6: Majelis Taklim & SLA 2025
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
    date: '2025-09-06',
    location: 'Lokasi SLA Bukittinggi',
    views: 4567,
    likes: 389,
    _status: 'published',
    createdAt: '2025-09-06T20:00:00Z',
    updatedAt: '2025-09-06T20:00:00Z',
  },
];

export default albums;