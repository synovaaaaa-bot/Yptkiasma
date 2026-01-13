import { Post } from '../types/collections';
import { activities } from './activities';

// Posts Collection - Berita/Artikel dari kegiatan YTPK (Sesuai Master Cluster)
export const posts: Post[] = [
  // Berita 1 - Bantuan Nagari Guguak Malalo (3 Jan 2026)
  {
    id: 'post-malalo-2026',
    title: 'YTPK IASMA 1 Landbouw Salurkan Bantuan untuk Warga Nagari Guguak Malalo (Batipuh Selatan)',
    slug: 'bantuan-nagari-guguak-malalo',
    excerpt: 'YTPK IASMA 1 Landbouw menyalurkan bantuan untuk warga Nagari Guguak Malalo sebagai respon cepat terhadap kebutuhan lapangan pasca bencana.',
    content: `Yayasan Tim Peduli Kemanusiaan (YTPK) IASMA 1 Landbouw Bukittinggi kembali melaksanakan kegiatan kemanusiaan dengan menyalurkan bantuan kepada masyarakat di Nagari Guguak Malalo, Kecamatan Batipuh Selatan. Kegiatan ini dilakukan sebagai bentuk kepedulian serta komitmen YTPK dalam hadir langsung di tengah masyarakat yang membutuhkan dukungan pasca bencana.

Tim YTPK turun ke lapangan untuk memastikan bantuan dapat diterima secara tepat sasaran serta membantu meringankan beban warga terdampak. Melalui kegiatan ini, YTPK juga mengajak masyarakat dan para donatur untuk terus memperkuat solidaritas sosial serta gotong royong dalam situasi darurat.

YTPK menyampaikan terima kasih kepada seluruh pihak yang telah mendukung kegiatan ini, serta berharap bantuan yang diberikan dapat menjadi manfaat dan penguat semangat bagi masyarakat Nagari Guguak Malalo.

**Sumber:** [Instagram - Dokumentasi Kegiatan](https://www.instagram.com/reel/DTC8AzPEwVs/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2026-01-03-malalo')?.image as string,
    categories: ['bantuan-bencana', 'kegiatan'],
    tags: ['bantuan-bencana', 'batipuh-selatan', 'malalo', 'kemanusiaan'],
    author: 'YTPK IASMA 1',
    publishedDate: '2026-01-03',
    _status: 'published',
    meta: {
      title: 'YTPK Salurkan Bantuan Nagari Guguak Malalo',
      description: 'Bantuan kemanusiaan untuk warga terdampak bencana di Batipuh Selatan',
    },
    createdAt: '2026-01-03T18:00:00Z',
    updatedAt: '2026-01-03T18:00:00Z',
    publishedAt: '2026-01-03T18:00:00Z',
  },

  // Berita 2 - YTPK Perkuat Gerakan #PrayforSumbar (6 Jan 2026)
  {
    id: 'post-prayforsumbar-2026',
    title: 'YTPK Perkuat Gerakan Kemanusiaan #PrayforSumbar dan #SumbarBangkit',
    slug: 'ytpk-prayforsumbar-sumbarbangkit',
    excerpt: 'Kegiatan lapangan YTPK dalam mendukung pemulihan pasca bencana di Sumatera Barat melalui program bantuan dan pendampingan warga.',
    content: `YTPK IASMA 1 Landbouw Bukittinggi melanjutkan rangkaian kegiatan kemanusiaan dalam gerakan solidaritas #PrayforSumbar dan #SumbarBangkit. Melalui kegiatan ini, YTPK kembali menguatkan komitmennya untuk membantu masyarakat yang terdampak bencana melalui aksi nyata di lapangan.

Kegiatan ini menjadi pengingat bahwa pemulihan pasca bencana bukan hanya tentang distribusi bantuan, tetapi juga tentang menjaga harapan, memulihkan semangat, dan memastikan masyarakat tidak berjalan sendiri menghadapi kondisi sulit. YTPK mengajak seluruh pihak untuk terus menyalurkan dukungan, baik dalam bentuk bantuan maupun doa.

**Sumber:** [Facebook - Video Kegiatan](https://www.facebook.com/reni.mulyati1/videos/kegiatan-yayasan-tim-peduli-kemanusiaan-ytpk-iasma-i-landbouw-bukittinggi-hari-s/4076135416032605/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2026-01-06-prayforsumbar')?.image as string,
    categories: ['bantuan-bencana', 'kegiatan'],
    tags: ['prayforsumbar', 'sumbarbangkit', 'tanggap-darurat', 'solidaritas'],
    author: 'YTPK IASMA 1',
    publishedDate: '2026-01-06',
    _status: 'published',
    meta: {
      title: 'YTPK Perkuat Gerakan #PrayforSumbar #SumbarBangkit',
      description: 'Program bantuan dan pendampingan untuk pemulihan pasca bencana',
    },
    createdAt: '2026-01-06T17:00:00Z',
    updatedAt: '2026-01-06T17:00:00Z',
    publishedAt: '2026-01-06T17:00:00Z',
  },

  // Berita 3 - Dokumentasi Kondisi Jorong Pauh (10 Des 2025)
  {
    id: 'post-jorong-pauh-2025',
    title: 'YTPK Dokumentasikan Kondisi Jorong Pauh dan Lanjutkan Program Bantuan Pasca Bencana',
    slug: 'bantuan-jorong-pauh',
    excerpt: 'Dokumentasi kegiatan dan kondisi lapangan pasca bencana, serta langkah bantuan yang dilakukan YTPK untuk masyarakat Jorong Pauh.',
    content: `YTPK IASMA 1 Landbouw Bukittinggi melakukan kegiatan lapangan serta pendokumentasian kondisi masyarakat di Jorong Pauh pasca bencana. Kegiatan ini dilakukan untuk memastikan kebutuhan mendasar warga dapat dipetakan dengan baik, serta program bantuan yang disalurkan berjalan sesuai kondisi aktual di lapangan.

Melalui dokumentasi dan update kegiatan ini, YTPK juga membuka ruang transparansi kepada para donatur dan masyarakat luas terkait aktivitas yayasan di lapangan, sekaligus mengajak semua pihak untuk terus mendukung pemulihan masyarakat terdampak.

**Sumber:** [Facebook - Video Dokumentasi](https://www.facebook.com/reni.mulyati1/videos/assalamualaikum-wr-wb-uda-uni-kawan-dan-adiak2-sadonyoupdate-kegiatan-ytpk-iasma/26176051835316403/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2025-12-10-jorong-pauh')?.image as string,
    categories: ['bantuan-bencana', 'kegiatan'],
    tags: ['jorong-pauh', 'dokumentasi', 'bantuan-bencana', 'transparansi'],
    author: 'YTPK IASMA 1',
    publishedDate: '2025-12-10',
    _status: 'published',
    meta: {
      title: 'YTPK Dokumentasikan Kondisi Jorong Pauh',
      description: 'Dokumentasi kondisi dan penyaluran bantuan di Jorong Pauh',
    },
    createdAt: '2025-12-10T16:00:00Z',
    updatedAt: '2025-12-10T16:00:00Z',
    publishedAt: '2025-12-10T16:00:00Z',
  },

  // Berita 4 - YTPK Salurkan Filter Air (16 Des 2025)
  {
    id: 'post-filter-air-2025',
    title: 'YTPK Salurkan Filter Air dari IA ITB untuk Warga Maninjau',
    slug: 'distribusi-filter-air-maninjau',
    excerpt: 'YTPK menyalurkan filter air dari IA ITB ke Surau Ujung Maninjau untuk mendukung akses air bersih warga.',
    content: `YTPK IASMA 1 Landbouw Bukittinggi melaksanakan kegiatan pendistribusian filter air dari IA ITB kepada masyarakat di wilayah Surau Ujung, Sungai Batang Maninjau. Kegiatan ini merupakan bagian dari respon kebutuhan vital masyarakat, khususnya terkait akses air bersih yang aman dan layak.

Melalui kerja sama serta dukungan berbagai pihak, YTPK memastikan bantuan diterima secara langsung oleh masyarakat yang membutuhkan. Program ini diharapkan dapat membantu menjaga kesehatan warga serta mendukung aktivitas harian masyarakat agar tetap berjalan dengan baik.

**Sumber:**
- [Instagram - Dokumentasi Distribusi](https://www.instagram.com/reel/DSXnAw8Ecij/)
- [Facebook - Video Kegiatan](https://www.facebook.com/jadisyakila/videos/giat-ytpkiasma1landbouw-selasa-16-des-2025pendistribusian-filter-air-dari-ia-itb/1493458572653113/)
- [Threads - Mirror](https://www.threads.com/@mariam_vaisyila/post/DSXnOCRj0Dy/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2025-12-16-filter-air-maninjau')?.image as string,
    categories: ['bantuan-air-bersih', 'program-sosial'],
    tags: ['filter-air', 'maninjau', 'ia-itb', 'air-bersih', 'kolaborasi'],
    author: 'YTPK IASMA 1',
    publishedDate: '2025-12-16',
    _status: 'published',
    meta: {
      title: 'YTPK Salurkan Filter Air dari IA ITB untuk Maninjau',
      description: 'Bantuan filter air untuk akses air bersih masyarakat Maninjau',
    },
    createdAt: '2025-12-16T17:00:00Z',
    updatedAt: '2025-12-16T17:00:00Z',
    publishedAt: '2025-12-16T17:00:00Z',
  },

  // Berita 5 - Update Dokumentasi Filter Air (16 Des 2025)
  {
    id: 'post-update-filter-air-2025',
    title: 'YTPK Rilis Dokumentasi dan Update Distribusi Filter Air di Maninjau',
    slug: 'update-dokumentasi-filter-air',
    excerpt: 'Update lanjutan kegiatan distribusi filter air dan dokumentasi penyaluran di lapangan.',
    content: `YTPK IASMA 1 Landbouw Bukittinggi menyampaikan update kegiatan serta dokumentasi distribusi filter air yang dilaksanakan di Maninjau. Update ini menjadi bagian dari transparansi kegiatan yayasan sekaligus bentuk pelaporan publik kepada para donatur dan masyarakat yang ikut mendukung program kemanusiaan.

**Sumber:** [Instagram - Update Dokumentasi](https://www.instagram.com/reel/DSYj395k69q/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2025-12-16-update-filter-air')?.image as string,
    categories: ['bantuan-air-bersih', 'kegiatan'],
    tags: ['filter-air', 'dokumentasi', 'transparansi', 'update-kegiatan'],
    author: 'YTPK IASMA 1',
    publishedDate: '2025-12-16',
    _status: 'published',
    meta: {
      title: 'Update Dokumentasi Distribusi Filter Air di Maninjau',
      description: 'Dokumentasi dan pelaporan kegiatan distribusi filter air',
    },
    createdAt: '2025-12-16T18:00:00Z',
    updatedAt: '2025-12-16T18:00:00Z',
    publishedAt: '2025-12-16T18:00:00Z',
  },

  // Berita 6 - Penyaluran Donasi Genset (12 Des 2025)
  {
    id: 'post-donasi-genset-2025',
    title: 'YTPK Salurkan Donasi Genset untuk Penerima Manfaat di Lawang',
    slug: 'penyaluran-donasi-genset',
    excerpt: 'Penyaluran donasi berupa bantuan genset untuk mendukung kebutuhan warga di lapangan.',
    content: `YTPK IASMA 1 Landbouw Bukittinggi melaksanakan kegiatan penyaluran amanah donasi pada Jumat, 12 Desember 2025. Bantuan yang disalurkan berupa genset yang diharapkan dapat membantu kebutuhan penerima manfaat, terutama pada kondisi lapangan yang membutuhkan dukungan energi listrik untuk aktivitas dasar.

Kegiatan penyaluran ini menunjukkan peran penting gotong royong, di mana donasi dari berbagai pihak dapat dikonversi menjadi dampak nyata di lokasi penerima bantuan.

**Sumber:** [Instagram - Dokumentasi Penyaluran](https://www.instagram.com/reel/DRvw-Vnkw-F/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2025-12-12-penyaluran-donasi')?.image as string,
    categories: ['donasi-santunan', 'program-sosial'],
    tags: ['donasi', 'genset', 'bantuan-energi', 'lawang'],
    author: 'YTPK IASMA 1',
    publishedDate: '2025-12-12',
    _status: 'published',
    meta: {
      title: 'YTPK Salurkan Donasi Genset untuk Penerima Manfaat',
      description: 'Bantuan genset untuk mendukung kebutuhan energi penerima manfaat',
    },
    createdAt: '2025-12-12T17:00:00Z',
    updatedAt: '2025-12-12T17:00:00Z',
    publishedAt: '2025-12-12T17:00:00Z',
  },

  // Berita 7 - Amanah Donasi Uda-Uni (4 Des 2025)
  {
    id: 'post-donasi-uda-uni-2025',
    title: 'Amanah Donasi Uda-Uni Kembali Tersalurkan Melalui Tim YTPK',
    slug: 'penyaluran-amanah-donasi-uda-uni',
    excerpt: 'YTPK menyalurkan kembali donasi dari Uda-Uni kepada pihak yang membutuhkan, disertai dokumentasi penyerahan.',
    content: `YTPK IASMA 1 Landbouw Bukittinggi kembali menyalurkan amanah donasi dari Uda-Uni kepada penerima manfaat yang membutuhkan. Kegiatan penyaluran disertai dokumentasi sebagai bentuk transparansi sekaligus laporan kepada para donatur.

YTPK menegaskan bahwa setiap amanah yang diberikan akan dijaga dan disalurkan sebaik mungkin agar berdampak langsung bagi masyarakat.

**Sumber:**
- [Facebook - Video Penyaluran](https://www.facebook.com/iasma1bukittinggi/videos/alhamdulillah-kamis-4-desember-kembali-tersalurkan-donasi-dari-uda-uni-melalui-t/4157831264433236/)
- [Facebook - Page IASMA 1](https://www.facebook.com/iasma1bukittinggi/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2025-12-04-donasi-uda-uni')?.image as string,
    categories: ['donasi-santunan', 'program-sosial'],
    tags: ['donasi', 'uda-uni', 'amanah', 'transparansi'],
    author: 'YTPK IASMA 1',
    publishedDate: '2025-12-04',
    _status: 'published',
    meta: {
      title: 'Amanah Donasi Uda-Uni Tersalurkan Melalui YTPK',
      description: 'Penyaluran donasi dengan transparansi dan akuntabilitas',
    },
    createdAt: '2025-12-04T16:00:00Z',
    updatedAt: '2025-12-04T16:00:00Z',
    publishedAt: '2025-12-04T16:00:00Z',
  },

  // Berita 8 - Santunan untuk Penerima Manfaat (Des 2025)
  {
    id: 'post-santunan-2025',
    title: 'YTPK Salurkan Santunan untuk Penerima Manfaat',
    slug: 'santunan-penerima-manfaat',
    excerpt: 'Kegiatan santunan sebagai bentuk kepedulian YTPK terhadap penerima manfaat di lapangan.',
    content: `YTPK IASMA 1 Landbouw Bukittinggi melaksanakan kegiatan santunan bagi penerima manfaat sebagai bagian dari program kepedulian sosial. Kegiatan ini menjadi bentuk komitmen YTPK untuk terus hadir memberikan penguatan, bukan hanya bantuan material tetapi juga dukungan moral dan kemanusiaan.

**Sumber:** [Facebook - Video Kegiatan Santunan](https://www.facebook.com/reni.mulyati1/videos/assalamualaikum-wr-wb-uda-uni-kawan-dan-adiak2-sadonyoupdate-kegiatan-ytpk-iasma/1296203558940924/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2025-12-santunan')?.image as string,
    categories: ['donasi-santunan', 'program-sosial'],
    tags: ['santunan', 'kepedulian-sosial', 'kemanusiaan'],
    author: 'YTPK IASMA 1',
    publishedDate: '2025-12-01',
    _status: 'published',
    meta: {
      title: 'YTPK Salurkan Santunan untuk Penerima Manfaat',
      description: 'Program kepedulian sosial dan dukungan kemanusiaan',
    },
    createdAt: '2025-12-01T15:00:00Z',
    updatedAt: '2025-12-01T15:00:00Z',
    publishedAt: '2025-12-01T15:00:00Z',
  },

  // Berita 9 - Pendataan Siswa (15 Des 2025)
  {
    id: 'post-pendataan-siswa-2025',
    title: 'YTPK Lakukan Pendataan Siswa sebagai Langkah Program Pendidikan',
    slug: 'pendataan-siswa-program-pendidikan',
    excerpt: 'Kegiatan pendataan siswa sebagai bagian dari program sosial/pendidikan YTPK.',
    content: `YTPK IASMA 1 Landbouw Bukittinggi melakukan kegiatan pendataan siswa sebagai upaya awal dalam penyusunan program pendidikan dan sosial. Pendataan ini bertujuan agar bantuan pendidikan dapat diberikan lebih tepat sasaran, terukur, serta sesuai kebutuhan di lapangan.

Kegiatan ini memperlihatkan bahwa program pendidikan tidak hanya soal bantuan sesaat, tetapi juga tentang membangun sistem bantuan yang rapi dan berkelanjutan.

**Sumber:** [Instagram - Dokumentasi Pendataan](https://www.instagram.com/reel/DSSQ8PSEzuI/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2025-12-15-pendataan-siswa')?.image as string,
    categories: ['program-pendidikan', 'kegiatan'],
    tags: ['pendidikan', 'pendataan-siswa', 'program-sosial', 'beasiswa'],
    author: 'YTPK IASMA 1',
    publishedDate: '2025-12-15',
    _status: 'published',
    meta: {
      title: 'YTPK Lakukan Pendataan Siswa untuk Program Pendidikan',
      description: 'Langkah awal untuk bantuan pendidikan yang tepat sasaran',
    },
    createdAt: '2025-12-15T16:00:00Z',
    updatedAt: '2025-12-15T16:00:00Z',
    publishedAt: '2025-12-15T16:00:00Z',
  },

  // Berita 10 - Program BSPS (17 Nov 2025)
  {
    id: 'post-bsps-2025',
    title: 'YTPK Dukung Program BSPS melalui Pengiriman Material Bantuan',
    slug: 'program-bsps-material-bantuan',
    excerpt: 'Pengiriman material bantuan untuk program BSPS sebagai dukungan terhadap perbaikan/rumah layak huni.',
    content: `YTPK IASMA 1 Landbouw Bukittinggi melaksanakan kegiatan pengiriman material untuk program BSPS (Bantuan Stimulan Perumahan Swadaya). Program ini berfokus pada dukungan pembangunan/perbaikan hunian yang lebih layak bagi masyarakat.

Melalui kegiatan ini, YTPK berupaya mendorong peningkatan kualitas hidup masyarakat melalui bantuan yang sifatnya jangka panjang, bukan hanya bantuan darurat.

**Sumber:** [Instagram - Dokumentasi Pengiriman Material](https://www.instagram.com/reel/DR7E29Gkfaz/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2025-11-17-bsps-material')?.image as string,
    categories: ['bantuan-material', 'program-sosial'],
    tags: ['bsps', 'perumahan', 'material-bangunan', 'rumah-layak-huni'],
    author: 'YTPK IASMA 1',
    publishedDate: '2025-11-17',
    _status: 'published',
    meta: {
      title: 'YTPK Dukung Program BSPS melalui Pengiriman Material',
      description: 'Dukungan material untuk rumah layak huni masyarakat',
    },
    createdAt: '2025-11-17T18:00:00Z',
    updatedAt: '2025-11-17T18:00:00Z',
    publishedAt: '2025-11-17T18:00:00Z',
  },

  // Berita 11 - Majelis Taklim SLA (6 Sep 2025)
  {
    id: 'post-majelis-taklim-sla-2025',
    title: 'Majelis Taklim IASMA 1 Landbouw: Ruang Kebersamaan dan Pembinaan',
    slug: 'majelis-taklim-sla-2025',
    excerpt: 'Undangan Majelis Taklim IASMA 1 Landbouw sebagai kegiatan pembinaan rutin dan penguatan ukhuwah.',
    content: `Majelis Taklim IASMA 1 Landbouw mengadakan kegiatan pembinaan keagamaan yang mengajak Uda-Uni, kawan, dan masyarakat untuk meningkatkan kebersamaan serta memperkuat nilai-nilai spiritual. Kegiatan majelis taklim menjadi salah satu bagian penting dari aktivitas komunitas IASMA 1 Landbouw.

**Sumber:**
- [Instagram - Undangan Majelis Taklim](https://www.instagram.com/p/DNISxsyvi4w/)
- [Facebook - Undangan](https://www.facebook.com/iasma1bukittinggi/posts/majelis-taklim-iasma-1-landbouw-mengundang-uda-uni-kawan-adiak-adiak-/729348509728746/)`,
    featuredImage: activities.find(a => a.id === 'ytpk-2025-09-06-undangan-majelis-taklim')?.image as string,
    categories: ['majelis-taklim', 'kegiatan'],
    tags: ['majelis-taklim', 'sla-2025', 'pembinaan', 'ukhuwah-islamiyah'],
    author: 'YTPK IASMA 1',
    publishedDate: '2025-09-06',
    _status: 'published',
    meta: {
      title: 'Majelis Taklim IASMA 1 Landbouw: Ruang Kebersamaan',
      description: 'Kegiatan pembinaan dan penguatan ukhuwah islamiyah',
    },
    createdAt: '2025-09-06T20:00:00Z',
    updatedAt: '2025-09-06T20:00:00Z',
    publishedAt: '2025-09-06T20:00:00Z',
  },
];

export default posts;
