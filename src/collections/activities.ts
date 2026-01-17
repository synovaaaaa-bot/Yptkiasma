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
  // 1. Penyaluran Bantuan Nagari Guguak Malalo
  {
    id: 'ytpk-2026-01-03-malalo',
    title: 'Penyaluran Bantuan Nagari Guguak Malalo',
    slug: 'bantuan-guguak-malalo',
    description: 'YTPK IASMA 1 Landbouw menyalurkan bantuan untuk warga Nagari Guguak Malalo sebagai respon cepat terhadap kebutuhan lapangan pasca bencana.',
    image: getImageUrl('2026-01-03_malalo_cover.jpg'),
    category: 'bantuan-bencana',
    date: '2026-01-03',
    location: 'Nagari Guguak Malalo, Batipuh Selatan',
    participants: 150,
    content: `YTPK IASMA 1 Landbouw Bukittinggi kembali melaksanakan kegiatan kemanusiaan dengan menyalurkan bantuan kepada masyarakat di Nagari Guguak Malalo, Kecamatan Batipuh Selatan. Kegiatan ini dilakukan sebagai bentuk kepedulian serta komitmen YTPK dalam hadir langsung di tengah masyarakat yang membutuhkan dukungan pasca bencana.

Tim YTPK turun ke lapangan untuk memastikan bantuan dapat diterima secara tepat sasaran serta membantu meringankan beban warga terdampak. Melalui kegiatan ini, YTPK juga mengajak masyarakat dan para donatur untuk terus memperkuat solidaritas sosial serta gotong royong dalam situasi darurat.

YTPK menyampaikan terima kasih kepada seluruh pihak yang telah mendukung kegiatan ini, serta berharap bantuan yang diberikan dapat menjadi manfaat dan penguat semangat bagi masyarakat Nagari Guguak Malalo.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DTC8AzPEwVs/',
      },
    ],
    featured: true,
    _status: 'published',
    meta: {
      title: 'Penyaluran Bantuan Nagari Guguak Malalo - YTPK IASMA 1',
      description: 'Bantuan kemanusiaan untuk warga terdampak bencana di Batipuh Selatan',
    },
    createdAt: '2026-01-03T18:00:00Z',
    updatedAt: '2026-01-03T18:00:00Z',
  },

  // 2. Kegiatan #PrayforSumbar / #SumbarBangkit
  {
    id: 'ytpk-2026-01-06-prayforsumbar',
    title: 'Kegiatan YTPK #PrayforSumbar #SumbarBangkit',
    slug: 'prayforsumbar-sumbarbangkit',
    description: 'Kegiatan lapangan YTPK dalam mendukung pemulihan pasca bencana di Sumatera Barat melalui program bantuan dan pendampingan warga.',
    image: getImageUrl('2026-01-06_prayforsumbar.jpg', 'bantuan-bencana'),
    category: 'bantuan-bencana',
    date: '2026-01-06',
    location: 'Berbagai lokasi di Sumatera Barat',
    participants: 500,
    content: `YTPK IASMA 1 Landbouw Bukittinggi melanjutkan rangkaian kegiatan kemanusiaan dalam gerakan solidaritas #PrayforSumbar dan #SumbarBangkit. Melalui kegiatan ini, YTPK kembali menguatkan komitmennya untuk membantu masyarakat yang terdampak bencana melalui aksi nyata di lapangan.

Kegiatan ini menjadi pengingat bahwa pemulihan pasca bencana bukan hanya tentang distribusi bantuan, tetapi juga tentang menjaga harapan, memulihkan semangat, dan memastikan masyarakat tidak berjalan sendiri menghadapi kondisi sulit. YTPK mengajak seluruh pihak untuk terus menyalurkan dukungan, baik dalam bentuk bantuan maupun doa.`,
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/reni.mulyati1/videos/kegiatan-yayasan-tim-peduli-kemanusiaan-ytpk-iasma-i-landbouw-bukittinggi-hari-s/4076135416032605/',
      },
    ],
    featured: true,
    _status: 'published',
    meta: {
      title: 'YTPK Perkuat Gerakan #PrayforSumbar #SumbarBangkit',
      description: 'Program bantuan dan pendampingan untuk pemulihan pasca bencana',
    },
    createdAt: '2026-01-06T17:00:00Z',
    updatedAt: '2026-01-06T17:00:00Z',
  },

  // 3. Kegiatan Lapangan Pasca Bencana Jorong Pauh
  {
    id: 'ytpk-2025-12-10-jorong-pauh',
    title: 'Bantuan Pasca Bencana Jorong Pauh',
    slug: 'bantuan-jorong-pauh',
    description: 'Dokumentasi kegiatan dan kondisi lapangan pasca bencana, serta langkah bantuan yang dilakukan YTPK untuk masyarakat Jorong Pauh.',
    image: getImageUrl('2025-12-10_jorong_pauh.jpg', 'bantuan-bencana'),
    category: 'bantuan-bencana',
    date: '2025-12-10',
    location: 'Jorong Pauh',
    participants: 200,
    content: `YTPK IASMA 1 Landbouw Bukittinggi melakukan kegiatan lapangan serta pendokumentasian kondisi masyarakat di Jorong Pauh pasca bencana. Kegiatan ini dilakukan untuk memastikan kebutuhan mendasar warga dapat dipetakan dengan baik, serta program bantuan yang disalurkan berjalan sesuai kondisi aktual di lapangan.

Melalui dokumentasi dan update kegiatan ini, YTPK juga membuka ruang transparansi kepada para donatur dan masyarakat luas terkait aktivitas yayasan di lapangan, sekaligus mengajak semua pihak untuk terus mendukung pemulihan masyarakat terdampak.`,
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/reni.mulyati1/videos/26176051835316403/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Bantuan Pasca Bencana Jorong Pauh - YTPK IASMA 1',
      description: 'Dokumentasi kondisi dan penyaluran bantuan di Jorong Pauh',
    },
    createdAt: '2025-12-10T16:00:00Z',
    updatedAt: '2025-12-10T16:00:00Z',
  },

  // 4. Distribusi Filter Air IA ITB ke Maninjau
  {
    id: 'ytpk-2025-12-16-filter-air-maninjau',
    title: 'Distribusi Filter Air IA ITB untuk Maninjau',
    slug: 'distribusi-filter-air-maninjau',
    description: 'YTPK menyalurkan filter air dari IA ITB ke Surau Ujung Maninjau untuk mendukung akses air bersih warga.',
    image: getImageUrl('2025-12-16_filter_air_maninjau.jpg', 'bantuan-air-bersih'),
    category: 'bantuan-air-bersih',
    date: '2025-12-16',
    location: 'Surau Ujung, Sungai Batang Maninjau',
    participants: 50,
    content: `YTPK IASMA 1 Landbouw Bukittinggi melaksanakan kegiatan pendistribusian filter air dari IA ITB kepada masyarakat di wilayah Surau Ujung, Sungai Batang Maninjau. Kegiatan ini merupakan bagian dari respon kebutuhan vital masyarakat, khususnya terkait akses air bersih yang aman dan layak.

Melalui kerja sama serta dukungan berbagai pihak, YTPK memastikan bantuan diterima secara langsung oleh masyarakat yang membutuhkan. Program ini diharapkan dapat membantu menjaga kesehatan warga serta mendukung aktivitas harian masyarakat agar tetap berjalan dengan baik.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DSXnAw8Ecij/',
      },
    ],
    featured: true,
    _status: 'published',
    meta: {
      title: 'Distribusi Filter Air IA ITB untuk Maninjau - YTPK IASMA 1',
      description: 'Bantuan filter air untuk akses air bersih masyarakat Maninjau',
    },
    createdAt: '2025-12-16T17:00:00Z',
    updatedAt: '2025-12-16T17:00:00Z',
  },

  // 5. Update Dokumentasi Distribusi Filter Air
  {
    id: 'ytpk-2025-12-16-update-filter-air',
    title: 'Update Dokumentasi Distribusi Filter Air',
    slug: 'update-distribusi-filter-air',
    description: 'Update lanjutan kegiatan distribusi filter air dan dokumentasi penyaluran di lapangan.',
    image: getImageUrl('2025-12-16_update_filter_air.jpg', 'bantuan-air-bersih'),
    category: 'bantuan-air-bersih',
    date: '2025-12-16',
    location: 'Maninjau',
    participants: 50,
    content: `YTPK IASMA 1 Landbouw Bukittinggi menyampaikan update kegiatan serta dokumentasi distribusi filter air yang dilaksanakan di Maninjau. Update ini menjadi bagian dari transparansi kegiatan yayasan sekaligus bentuk pelaporan publik kepada para donatur dan masyarakat yang ikut mendukung program kemanusiaan.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DSXnAw8Ecij/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Update Dokumentasi Distribusi Filter Air - YTPK IASMA 1',
      description: 'Dokumentasi dan pelaporan kegiatan distribusi filter air',
    },
    createdAt: '2025-12-16T18:00:00Z',
    updatedAt: '2025-12-16T18:00:00Z',
  },

  // 6. Penyaluran Donasi Genset
  {
    id: 'ytpk-2025-12-12-penyaluran-donasi',
    title: 'Penyaluran Donasi Genset untuk Penerima Manfaat',
    slug: 'penyaluran-donasi-genset',
    description: 'Penyaluran donasi berupa bantuan genset untuk mendukung kebutuhan warga di lapangan.',
    image: getImageUrl('2025-12-12_penyaluran_donasi_genset.jpg', 'donasi-santunan'),
    category: 'donasi-santunan',
    date: '2025-12-12',
    location: 'Lawang, Pabatuangan',
    participants: 100,
    content: `YTPK IASMA 1 Landbouw Bukittinggi melaksanakan kegiatan penyaluran amanah donasi pada Jumat, 12 Desember 2025. Bantuan yang disalurkan berupa genset yang diharapkan dapat membantu kebutuhan penerima manfaat, terutama pada kondisi lapangan yang membutuhkan dukungan energi listrik untuk aktivitas dasar.

Kegiatan penyaluran ini menunjukkan peran penting gotong royong, di mana donasi dari berbagai pihak dapat dikonversi menjadi dampak nyata di lokasi penerima bantuan.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DRvw-Vnkw-F/',
      },
    ],
    featured: true,
    _status: 'published',
    meta: {
      title: 'Penyaluran Donasi Genset - YTPK IASMA 1',
      description: 'Bantuan genset untuk mendukung kebutuhan energi penerima manfaat',
    },
    createdAt: '2025-12-12T17:00:00Z',
    updatedAt: '2025-12-12T17:00:00Z',
  },

  // 7. Penyaluran Donasi Uda-Uni
  {
    id: 'ytpk-2025-12-04-donasi-uda-uni',
    title: 'Penyaluran Amanah Donasi Uda-Uni',
    slug: 'penyaluran-donasi-uda-uni',
    description: 'YTPK menyalurkan kembali donasi dari Uda-Uni kepada pihak yang membutuhkan, disertai dokumentasi penyerahan.',
    image: getImageUrl('2025-12-04_donasi_uda_uni.jpg', 'donasi-santunan'),
    category: 'donasi-santunan',
    date: '2025-12-04',
    location: 'Bukittinggi',
    participants: 75,
    content: `YTPK IASMA 1 Landbouw Bukittinggi kembali menyalurkan amanah donasi dari Uda-Uni kepada penerima manfaat yang membutuhkan. Kegiatan penyaluran disertai dokumentasi sebagai bentuk transparansi sekaligus laporan kepada para donatur.

YTPK menegaskan bahwa setiap amanah yang diberikan akan dijaga dan disalurkan sebaik mungkin agar berdampak langsung bagi masyarakat.`,
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/iasma1bukittinggi/videos/4157831264433236/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Penyaluran Amanah Donasi Uda-Uni - YTPK IASMA 1',
      description: 'Penyaluran donasi dengan transparansi dan akuntabilitas',
    },
    createdAt: '2025-12-04T16:00:00Z',
    updatedAt: '2025-12-04T16:00:00Z',
  },

  // 8. Kegiatan Santunan
  {
    id: 'ytpk-2025-12-santunan',
    title: 'Santunan untuk Penerima Manfaat',
    slug: 'santunan-penerima-manfaat',
    description: 'Kegiatan santunan sebagai bentuk kepedulian YTPK terhadap penerima manfaat di lapangan.',
    image: getImageUrl('2025-12-santunan.jpg', 'donasi-santunan'),
    category: 'donasi-santunan',
    date: '2025-12-01',
    location: 'Bukittinggi dan sekitarnya',
    participants: 120,
    content: `YTPK IASMA 1 Landbouw Bukittinggi melaksanakan kegiatan santunan bagi penerima manfaat sebagai bagian dari program kepedulian sosial. Kegiatan ini menjadi bentuk komitmen YTPK untuk terus hadir memberikan penguatan, bukan hanya bantuan material tetapi juga dukungan moral dan kemanusiaan.`,
    socialLinks: [
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/reni.mulyati1/videos/1296203558940924/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Santunan untuk Penerima Manfaat - YTPK IASMA 1',
      description: 'Program kepedulian sosial dan dukungan kemanusiaan',
    },
    createdAt: '2025-12-01T15:00:00Z',
    updatedAt: '2025-12-01T15:00:00Z',
  },

  // 9. Pendataan Siswa
  {
    id: 'ytpk-2025-12-15-pendataan-siswa',
    title: 'Pendataan Siswa untuk Program Pendidikan',
    slug: 'pendataan-siswa-program-pendidikan',
    description: 'Kegiatan pendataan siswa sebagai bagian dari program sosial/pendidikan YTPK.',
    image: getImageUrl('2025-12-15_pendataan_siswa.jpg', 'program-pendidikan'),
    category: 'program-pendidikan',
    date: '2025-12-15',
    location: 'Beberapa sekolah di Bukittinggi',
    participants: 200,
    content: `YTPK IASMA 1 Landbouw Bukittinggi melakukan kegiatan pendataan siswa sebagai upaya awal dalam penyusunan program pendidikan dan sosial. Pendataan ini bertujuan agar bantuan pendidikan dapat diberikan lebih tepat sasaran, terukur, serta sesuai kebutuhan di lapangan.

Kegiatan ini memperlihatkan bahwa program pendidikan tidak hanya soal bantuan sesaat, tetapi juga tentang membangun sistem bantuan yang rapi dan berkelanjutan.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DSbcw9Gk3Aq/',
      },
    ],
    featured: true,
    _status: 'published',
    meta: {
      title: 'Pendataan Siswa untuk Program Pendidikan - YTPK IASMA 1',
      description: 'Langkah awal untuk bantuan pendidikan yang tepat sasaran',
    },
    createdAt: '2025-12-15T16:00:00Z',
    updatedAt: '2025-12-15T16:00:00Z',
  },

  // 10. Pengiriman Material Program BSPS
  {
    id: 'ytpk-2025-11-17-bsps-material',
    title: 'Pengiriman Material Program BSPS',
    slug: 'pengiriman-material-bsps',
    description: 'Pengiriman material bantuan untuk program BSPS sebagai dukungan terhadap perbaikan/rumah layak huni.',
    image: getImageUrl('2025-11-17_bsps_material.jpg', 'bantuan-material'),
    category: 'bantuan-material',
    date: '2025-11-17',
    location: 'Desa Bongkok, Bukittinggi',
    participants: 30,
    content: `YTPK IASMA 1 Landbouw Bukittinggi melaksanakan kegiatan pengiriman material untuk program BSPS (Bantuan Stimulan Perumahan Swadaya). Program ini berfokus pada dukungan pembangunan/perbaikan hunian yang lebih layak bagi masyarakat.

Melalui kegiatan ini, YTPK berupaya mendorong peningkatan kualitas hidup masyarakat melalui bantuan yang sifatnya jangka panjang, bukan hanya bantuan darurat.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/reel/DR7E29Gkfaz/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Pengiriman Material Program BSPS - YTPK IASMA 1',
      description: 'Dukungan material untuk rumah layak huni masyarakat',
    },
    createdAt: '2025-11-17T18:00:00Z',
    updatedAt: '2025-11-17T18:00:00Z',
  },

  // 11. Undangan Majelis Taklim SLA
  {
    id: 'ytpk-2025-09-06-undangan-majelis-taklim',
    title: 'Undangan Majelis Taklim IASMA 1 Landbouw',
    slug: 'undangan-majelis-taklim-sla',
    description: 'Undangan Majelis Taklim IASMA 1 Landbouw sebagai kegiatan pembinaan rutin dan penguatan ukhuwah.',
    image: getImageUrl('2025-09-06_majelis_taklim.jpg', 'majelis-taklim'),
    category: 'majelis-taklim',
    date: '2025-09-06',
    location: 'Lokasi SLA Bukittinggi',
    participants: 300,
    content: `Majelis Taklim IASMA 1 Landbouw mengadakan kegiatan pembinaan keagamaan yang mengajak Uda-Uni, kawan, dan masyarakat untuk meningkatkan kebersamaan serta memperkuat nilai-nilai spiritual. Kegiatan majelis taklim menjadi salah satu bagian penting dari aktivitas komunitas IASMA 1 Landbouw.`,
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/p/DSKIbpmk9ou/',
      },
    ],
    featured: false,
    _status: 'published',
    meta: {
      title: 'Undangan Majelis Taklim IASMA 1 Landbouw - SLA 2025',
      description: 'Kegiatan pembinaan dan penguatan ukhuwah islamiyah',
    },
    createdAt: '2025-09-06T20:00:00Z',
    updatedAt: '2025-09-06T20:00:00Z',
  },
];

export default activities;
