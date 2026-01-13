import { Activity } from '../types/collections';

// Base URL untuk gambar dari GitHub CDN
const CDN_BASE_URL = 'https://cdn.jsdelivr.net/gh/synovaaaaa-bot/ytpk-assets@main/assets/kegiatan';

// Fallback images (gunakan sementara sampai gambar di GitHub ready)
const FALLBACK_IMAGES = {
  'bantuan-bencana': 'https://images.unsplash.com/photo-1764684994219-8347a5ab0e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'bantuan-air-bersih': 'https://images.unsplash.com/photo-1606165461534-0e70bb47284c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'donasi-santunan': 'https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'program-pendidikan': 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'bantuan-material': 'https://images.unsplash.com/photo-1763665814482-bdf1016e4d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'majelis-taklim': 'https://images.unsplash.com/photo-1768152858332-3a9d4686bc03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'komunitas-alumni': 'https://images.unsplash.com/photo-1764173039313-1422b53003a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
};

// Helper function to get image URL with fallback
const getImageUrl = (filename: string, category: string) => {
  // Untuk production, uncomment baris ini setelah upload gambar ke GitHub:
  // return `${CDN_BASE_URL}/${filename}`;
  
  // Sementara gunakan fallback Unsplash
  return FALLBACK_IMAGES[category as keyof typeof FALLBACK_IMAGES];
};

// Activities Collection - Kegiatan YTPK IASMA 1 Landbouw
export const activities: Activity[] = [
  // 1. Bantuan Bencana & Kemanusiaan
  {
    id: 'ytpk-2026-01-03-malalo',
    title: 'Penyaluran Bantuan Nagari Guguak Malalo',
    slug: 'bantuan-guguak-malalo',
    description: 'Penyaluran bantuan kemanusiaan untuk korban bencana di Nagari Guguak Malalo, Batipuh Selatan sebagai bentuk kepedulian YTPK terhadap saudara yang terdampak.',
    image: getImageUrl('2026-01-03_malalo_cover.jpg', 'bantuan-bencana'),
    category: 'bantuan-bencana',
    date: '2026-01-03',
    location: 'Nagari Guguak Malalo, Batipuh Selatan',
    participants: 150,
    content: `Kegiatan penyaluran bantuan logistik dan kebutuhan mendesak untuk masyarakat Nagari Guguak Malalo yang terdampak bencana. Tim YTPK bergerak cepat memberikan bantuan sembako, air bersih, dan kebutuhan dasar lainnya.

**Bantuan yang Disalurkan:**
- Paket sembako lengkap
- Air bersih dan minuman
- Perlengkapan kebersihan
- Selimut dan pakaian layak pakai
- Obat-obatan dan P3K

**Dokumentasi:**
Kegiatan ini terdokumentasi lengkap di media sosial YTPK sebagai bentuk transparansi dan akuntabilitas kepada para donatur.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DTC8AzPEwVs/',
      },
    ],
    featured: true,
    _status: 'published',
    meta: {
      title: 'Penyaluran Bantuan Nagari Guguak Malalo - YTPK',
      description: 'Bantuan kemanusiaan untuk korban bencana di Batipuh Selatan',
    },
    createdAt: '2026-01-03T08:00:00Z',
    updatedAt: '2026-01-03T18:00:00Z',
  },
  {
    id: 'ytpk-2026-01-06-prayforsumbar',
    title: 'Kegiatan YTPK #PrayforSumbar #Sumbarbangkit',
    slug: 'pray-for-sumbar',
    description: 'Kegiatan YTPK dalam mendukung pemulihan Sumatera Barat pasca bencana dengan penyaluran bantuan dan dukungan moral kepada korban.',
    image: getImageUrl('2026-01-06_prayforsumbar_cover.jpg', 'bantuan-bencana'),
    category: 'bantuan-bencana',
    date: '2026-01-06',
    location: 'Berbagai lokasi di Sumatera Barat',
    participants: 200,
    content: `Program tanggap darurat YTPK untuk mendukung pemulihan Sumatera Barat pasca bencana. Kegiatan ini melibatkan tim relawan, pengumpulan donasi, dan penyaluran bantuan kepada korban di berbagai lokasi.

**Fokus Kegiatan:**
- Penyaluran bantuan darurat
- Trauma healing untuk korban
- Pendampingan psikososial
- Koordinasi dengan BPBD dan relawan lain
- Kampanye solidaritas #PrayforSumbar

**Dampak:**
Kegiatan ini memberikan harapan dan semangat bagi masyarakat Sumbar untuk bangkit kembali.`,
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/reni.mulyati1/videos/kegiatan-yayasan-tim-peduli-kemanusiaan-ytpk-iasma-i-landbouw-bukittinggi-hari-s/4076135416032605/',
      },
    ],
    featured: true,
    _status: 'published',
    meta: {
      title: 'Kegiatan #PrayforSumbar #Sumbarbangkit - YTPK',
      description: 'Dukungan pemulihan Sumatera Barat pasca bencana',
    },
    createdAt: '2026-01-06T09:00:00Z',
    updatedAt: '2026-01-06T17:00:00Z',
  },
  {
    id: 'ytpk-2025-12-10-jorong-pauh',
    title: 'Penyaluran Bantuan Jorong Pauh',
    slug: 'bantuan-jorong-pauh',
    description: 'Kegiatan lapangan pasca bencana dengan penyaluran bantuan kepada masyarakat Jorong Pauh yang membutuhkan.',
    image: getImageUrl('2025-12-10_jorong-pauh_cover.jpg', 'bantuan-bencana'),
    category: 'bantuan-bencana',
    date: '2025-12-10',
    location: 'Jorong Pauh, Sumatera Barat',
    participants: 100,
    content: `Tim YTPK turun langsung ke lapangan untuk menyalurkan bantuan kepada masyarakat Jorong Pauh yang terdampak bencana. Bantuan diberikan dalam bentuk logistik dan kebutuhan darurat.

**Kondisi Lapangan:**
Situasi pasca bencana masih memerlukan perhatian khusus, sehingga YTPK berkomitmen untuk terus memantau dan memberikan bantuan lanjutan.

**Bentuk Bantuan:**
- Sembako dan makanan siap saji
- Perlengkapan darurat
- Air bersih
- Dukungan kesehatan`,
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/reni.mulyati1/videos/assalamualaikum-wr-wb-uda-uni-kawan-dan-adiak2-sadonyoupdate-kegiatan-ytpk-iasma/26176051835316403/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Penyaluran Bantuan Jorong Pauh - YTPK',
      description: 'Bantuan lapangan pasca bencana untuk masyarakat Jorong Pauh',
    },
    createdAt: '2025-12-10T10:00:00Z',
    updatedAt: '2025-12-10T16:00:00Z',
  },

  // 2. Bantuan Air Bersih
  {
    id: 'ytpk-2025-12-16-filter-air-maninjau',
    title: 'Distribusi Filter Air dari IA ITB ke Jorong Surau Ujung',
    slug: 'filter-air-maninjau',
    description: 'Pendistribusian filter air hasil kolaborasi dengan IA ITB kepada masyarakat Jorong Surau Ujung Sungai Batang Maninjau untuk penyediaan air bersih.',
    image: getImageUrl('2025-12-16_filter-air_maninjau_cover.jpg', 'bantuan-air-bersih'),
    category: 'bantuan-air-bersih',
    date: '2025-12-16',
    location: 'Jorong Surau Ujung, Sungai Batang Maninjau',
    participants: 80,
    content: `Program kolaborasi YTPK dengan Ikatan Alumni ITB (IA ITB) dalam mendistribusikan filter air bersih untuk masyarakat Jorong Surau Ujung. Filter air ini sangat membantu masyarakat yang kesulitan mendapatkan akses air bersih.

**Spesifikasi Filter Air:**
- Filter air multi-tahap
- Kapasitas penyaringan tinggi
- Teknologi dari IA ITB
- Mudah dioperasikan dan dirawat
- Tahan lama dan efisien

**Manfaat Langsung:**
- Akses air bersih untuk 50+ keluarga
- Mengurangi penyakit berbasis air
- Menghemat biaya air bersih
- Peningkatan kualitas hidup masyarakat

**Kolaborasi:**
Kegiatan ini merupakan bukti nyata kolaborasi antar alumni untuk kesejahteraan masyarakat.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DSXnAw8Ecij/',
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/jadisyakila/videos/giat-ytpkiasma1landbouw-selasa-16-des-2025pendistribusian-filter-air-dari-ia-itb/1493458572653113/',
      },
      {
        platform: 'threads',
        url: 'https://www.threads.com/%40mariam_vaisyila/post/DSXnOCRj0Dy/',
      },
    ],
    featured: true,
    _status: 'published',
    meta: {
      title: 'Distribusi Filter Air dari IA ITB - YTPK',
      description: 'Filter air bersih untuk masyarakat Maninjau',
    },
    createdAt: '2025-12-16T08:00:00Z',
    updatedAt: '2025-12-16T17:00:00Z',
  },
  {
    id: 'ytpk-2025-12-16-update-filter-air',
    title: 'Update Kegiatan Distribusi Filter Air',
    slug: 'update-distribusi-filter-air',
    description: 'Dokumentasi lengkap kegiatan distribusi filter air kepada masyarakat yang membutuhkan akses air bersih.',
    image: getImageUrl('2025-12-16_update-filter-air_cover.jpg', 'bantuan-air-bersih'),
    category: 'bantuan-air-bersih',
    date: '2025-12-16',
    location: 'Maninjau, Sumatera Barat',
    participants: 100,
    content: `Update lengkap kegiatan distribusi filter air YTPK yang dilakukan di berbagai lokasi. Program ini bertujuan memberikan akses air bersih kepada masyarakat yang membutuhkan.

**Lokasi Distribusi:**
- Daerah terpencil dengan akses air terbatas
- Kampung-kampung yang jauh dari sumber air
- Wilayah pasca bencana
- Desa dengan kualitas air rendah

**Proses Distribusi:**
- Survei kebutuhan lokasi
- Koordinasi dengan tokoh masyarakat
- Pemasangan dan training penggunaan
- Monitoring dan evaluasi`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DSYj395k69q/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Update Kegiatan Distribusi Filter Air - YTPK',
      description: 'Dokumentasi distribusi filter air di berbagai lokasi',
    },
    createdAt: '2025-12-16T14:00:00Z',
    updatedAt: '2025-12-16T18:00:00Z',
  },

  // 3. Penyaluran Donasi & Santunan
  {
    id: 'ytpk-2025-12-12-penyaluran-donasi',
    title: 'Penyaluran Donasi Amanah Donatur',
    slug: 'donasi-alumni',
    description: 'Penyaluran donasi kepada penerima manfaat yang membutuhkan bantuan, sebagai wujud amanah dari para donatur.',
    image: getImageUrl('2025-12-12_penyaluran-donasi_cover.jpg', 'donasi-santunan'),
    category: 'donasi-santunan',
    date: '2025-12-12',
    location: 'Bukittinggi dan sekitarnya',
    participants: 50,
    content: `Program penyaluran donasi kepada penerima manfaat yang membutuhkan bantuan. Kegiatan ini merupakan manifestasi dari semangat gotong royong dan kepedulian sesama.

**Penerima Bantuan:**
- Masyarakat yang mengalami kesulitan ekonomi
- Keluarga yang membutuhkan bantuan kesehatan
- Anak-anak yang membutuhkan biaya pendidikan
- Korban bencana dan masyarakat terdampak

**Bentuk Bantuan:**
- Bantuan tunai
- Sembako
- Biaya kesehatan
- Biaya pendidikan

**Amanah Donatur:**
YTPK berkomitmen menyalurkan setiap donasi dengan penuh amanah dan transparansi.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DRvw-Vnkw-F/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Penyaluran Donasi Amanah Donatur - YTPK',
      description: 'Bantuan untuk masyarakat yang membutuhkan',
    },
    createdAt: '2025-12-12T09:00:00Z',
    updatedAt: '2025-12-12T15:00:00Z',
  },
  {
    id: 'ytpk-2025-12-04-donasi-uda-uni',
    title: 'Penyaluran Donasi dari Uda-Uni',
    slug: 'donasi-uda-uni',
    description: 'Penyaluran donasi dari para Uda-Uni (kakak-kakak alumni) melalui tim YTPK kepada lokasi dan penerima yang sangat membutuhkan.',
    image: getImageUrl('2025-12-04_donasi-uda-uni_cover.jpg', 'donasi-santunan'),
    category: 'donasi-santunan',
    date: '2025-12-04',
    location: 'Berbagai lokasi penerima bantuan',
    participants: 75,
    content: `Alhamdulillah, tersalurkan kembali donasi dari Uda-Uni (kakak-kakak alumni) melalui tim YTPK kepada masyarakat yang sangat membutuhkan. Kegiatan ini menunjukkan solidaritas tinggi alumni IASMA 1 Landbouw.

**Sumber Donasi:**
- Uda-Uni alumni IASMA 1
- Donatur tetap YTPK
- Kampanye penggalangan dana
- Infaq dan sedekah spontan

**Target Penerima:**
- Keluarga dhuafa
- Yatim piatu
- Lansia tidak mampu
- Korban bencana
- Masyarakat terpencil

**Mekanisme Transparan:**
Setiap penyaluran didokumentasikan dan dilaporkan kepada donatur.`,
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/iasma1bukittinggi/videos/alhamdulillah-kamis-4-desember-kembali-tersalurkan-donasi-dari-uda-uni-melalui-t/4157831264433236/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Penyaluran Donasi dari Uda-Uni - YTPK',
      description: 'Donasi alumni untuk masyarakat yang membutuhkan',
    },
    createdAt: '2025-12-04T10:00:00Z',
    updatedAt: '2025-12-04T16:00:00Z',
  },

  // 4. Program Pendidikan
  {
    id: 'ytpk-2025-12-15-pendataan-siswa',
    title: 'Pendataan Siswa-Siswa Program YTPK',
    slug: 'pendataan-siswa',
    description: 'Kegiatan pendataan siswa-siswa penerima manfaat program pendidikan YTPK untuk memastikan bantuan tepat sasaran.',
    image: getImageUrl('2025-12-15_pendataan-siswa_cover.jpg', 'program-pendidikan'),
    category: 'program-pendidikan',
    date: '2025-12-15',
    location: 'Beberapa sekolah di Bukittinggi',
    participants: 40,
    content: `Tim YTPK melakukan pendataan siswa-siswa yang akan menjadi penerima manfaat program pendidikan. Pendataan ini penting untuk memastikan bantuan pendidikan tepat sasaran dan berkelanjutan.

**Tujuan Pendataan:**
- Identifikasi siswa yang membutuhkan bantuan
- Verifikasi data ekonomi keluarga
- Pemetaan kebutuhan pendidikan
- Database penerima beasiswa
- Monitoring prestasi siswa

**Data yang Dikumpulkan:**
- Biodata siswa dan keluarga
- Kondisi ekonomi keluarga
- Prestasi akademik
- Kebutuhan khusus
- Rencana pendidikan

**Program Lanjutan:**
Hasil pendataan akan menjadi dasar pemberian beasiswa, bantuan buku, seragam, dan program pendidikan YTPK lainnya.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DSSQ8PSEzuI/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Pendataan Siswa-Siswa Program YTPK',
      description: 'Pendataan untuk program pendidikan yang tepat sasaran',
    },
    createdAt: '2025-12-15T08:00:00Z',
    updatedAt: '2025-12-15T15:00:00Z',
  },

  // 5. Bantuan Material & Infrastruktur
  {
    id: 'ytpk-2025-11-17-bsps-material',
    title: 'Pengiriman Material Program BSPS',
    slug: 'material-bsps',
    description: 'Pengiriman material untuk Program Bantuan Stimulan Perumahan Swadaya (BSPS) kepada masyarakat yang membutuhkan rumah layak huni.',
    image: getImageUrl('2025-11-17_bsps_material_cover.jpg', 'bantuan-material'),
    category: 'bantuan-material',
    date: '2025-11-17',
    location: 'Desa Bongkok, Bukittinggi',
    participants: 60,
    content: `Program kolaborasi YTPK dalam penyaluran Bantuan Stimulan Perumahan Swadaya (BSPS) dengan mengirimkan material bangunan kepada masyarakat yang membutuhkan perbaikan atau pembangunan rumah.

**Material yang Dikirim:**
- Semen dan pasir
- Batu bata dan batako
- Kayu dan material atap
- Cat dan finishing
- Peralatan konstruksi

**Target Penerima:**
- Keluarga tidak mampu dengan rumah tidak layak huni
- Korban bencana yang rumahnya rusak
- Keluarga dhuafa dengan kondisi rumah darurat
- Lansia dengan rumah tidak terawat

**Dampak Program:**
Program BSPS membantu masyarakat mendapatkan rumah yang layak huni dan aman, meningkatkan kualitas hidup dan kesejahteraan keluarga.

**Mekanisme Program:**
YTPK melakukan survei lokasi, verifikasi penerima, pengadaan material, pengiriman, dan monitoring pelaksanaan pembangunan/perbaikan.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DR7E29Gkfaz/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Pengiriman Material Program BSPS - YTPK',
      description: 'Bantuan material untuk rumah layak huni',
    },
    createdAt: '2025-11-17T09:00:00Z',
    updatedAt: '2025-11-17T17:00:00Z',
  },

  // 6. Majelis Taklim & Kajian
  {
    id: 'ytpk-2025-09-06-undangan-majelis-taklim',
    title: 'Undangan Majelis Taklim IASMA 1 Landbouw - SLA 2025',
    slug: 'majelis-taklim-sla-2025',
    description: 'Undangan terbuka untuk seluruh Uda, Uni, Kawan, dan Adiak untuk menghadiri Majelis Taklim IASMA 1 Landbouw dalam rangka SLA 2025.',
    image: getImageUrl('2025-09-06_undangan-majelis-taklim_cover.jpg', 'majelis-taklim'),
    category: 'majelis-taklim',
    date: '2025-09-06',
    location: 'Lokasi SLA Bukittinggi',
    participants: 300,
    content: `Majelis Taklim IASMA 1 Landbouw mengundang seluruh Uda, Uni, Kawan, dan Adiak-Adiak untuk hadir dalam acara Silaturahmi Landbouw Alumni (SLA) 2025. Acara ini merupakan momentum berkumpul, berbagi ilmu, dan mempererat ukhuwah islamiyah.

**Tema Kajian:**
Membangun Ukhuwah dan Kepedulian Sesama dalam Bingkai Islam

**Agenda Acara:**
- Pembukaan dan sambutan
- Kajian Islam oleh Ustadz/Ustadzah
- Diskusi dan tanya jawab
- Silaturahmi dan networking
- Doa bersama

**Narasumber:**
Ustadz/Ustadzah pilihan dengan pemahaman Islam yang moderat dan rahmatan lil alamin.

**Manfaat Mengikuti:**
- Menambah ilmu agama
- Memperkuat silaturahmi alumni
- Berbagi pengalaman dan inspirasi
- Memperluas jaringan
- Pahala beramal saleh

**Catatan:**
Acara terbuka untuk umum, gratis, dan ramah keluarga. Kami menunggu kehadiran Uda-Uni sekalian.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/p/DNISxsyvi4w/',
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/iasma1bukittinggi/posts/majelis-taklim-iasma-1-landbouw-mengundang-uda-uni-kawan-adiak-adiak-/729348509728746/',
      },
    ],
    featured: true,
    _status: 'published',
    meta: {
      title: 'Undangan Majelis Taklim IASMA 1 Landbouw - SLA 2025',
      description: 'Undangan kajian dan silaturahmi alumni',
    },
    createdAt: '2025-09-06T07:00:00Z',
    updatedAt: '2025-09-06T20:00:00Z',
  },
];

export default activities;