import { Program } from '../types/collections';

// Programs Collection - Program Yayasan
export const programs: Program[] = [
  {
    id: '1',
    title: 'Tahsin Al-Quran',
    slug: 'tahsin-al-quran',
    description: 'Belajar membaca Al-Quran dengan tartil dan benar sesuai kaidah tajwid',
    image: 'https://images.unsplash.com/photo-1762059904093-c76f6f591b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'pendidikan',
    status: 'active',
    participants: 200,
    location: 'Masjid TPK IASMA, Bukittinggi',
    content: `Program Tahsin Al-Quran merupakan program unggulan Yayasan TPK IASMA yang bertujuan untuk meningkatkan kemampuan membaca Al-Quran dengan benar sesuai kaidah tajwid.

**Jadwal Pembelajaran:**
- Senin - Kamis: 16.00 - 17.30 WIB (Anak-anak)
- Jum'at - Sabtu: 19.30 - 21.00 WIB (Dewasa)
- Ahad: 08.00 - 10.00 WIB (Remaja)

**Materi Pembelajaran:**
- Makharijul Huruf (tempat keluar huruf)
- Sifatul Huruf (sifat-sifat huruf)
- Ahkamul Huruf (hukum-hukum huruf)
- Tajwid dasar dan lanjutan
- Praktik membaca dengan tartil`,
    benefits: [
      'Belajar dengan ustadz berpengalaman dan bersanad',
      'Kelas kecil maksimal 15 orang per kelas',
      'Mendapatkan modul pembelajaran gratis',
      'Sertifikat setelah menyelesaikan program',
      'Evaluasi berkala setiap bulan',
    ],
    requirements: [
      'Muslim/Muslimah',
      'Usia minimal 7 tahun',
      'Mampu membaca huruf hijaiyah',
      'Komitmen mengikuti pembelajaran rutin',
    ],
    _status: 'published',
    meta: {
      title: 'Program Tahsin Al-Quran - TPK IASMA',
      description: 'Belajar membaca Al-Quran dengan tartil dan benar sesuai kaidah tajwid',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Tahfidz Al-Quran',
    slug: 'tahfidz-al-quran',
    description: 'Program menghafal Al-Quran dengan metode yang terbukti efektif dan menyenangkan',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'pendidikan',
    status: 'active',
    participants: 150,
    location: 'Masjid TPK IASMA, Bukittinggi',
    content: `Program Tahfidz Al-Quran adalah program unggulan untuk menghafal Al-Quran dengan metode yang mudah, efektif, dan menyenangkan. Program ini telah menghasilkan ratusan hafidz dan hafidzah.

**Target Hafalan:**
- Level 1: Juz 30 (6 bulan)
- Level 2: Juz 29-30 (1 tahun)
- Level 3: Juz 1-3 (2 tahun)
- Level 4: 10 Juz (3 tahun)
- Level 5: 30 Juz (5 tahun)

**Metode Pembelajaran:**
- Talaqqi (setoran hafalan langsung ke ustadz)
- Muraja'ah (pengulangan hafalan)
- Tasmi' (mendengarkan hafalan teman)
- Evaluasi berkala`,
    benefits: [
      'Pembimbing hafidz/hafidzah bersanad',
      'Metode hafalan yang terbukti efektif',
      'Muraja'ah terjadwal dan terstruktur',
      'Evaluasi dan motivasi rutin',
      'Wisuda dan sertifikat resmi',
      'Beasiswa untuk hafidz/hafidzah berprestasi',
    ],
    requirements: [
      'Muslim/Muslimah',
      'Usia minimal 10 tahun',
      'Sudah lancar membaca Al-Quran',
      'Lulus seleksi tes baca Al-Quran',
      'Komitmen tinggi untuk menghafal',
    ],
    _status: 'published',
    meta: {
      title: 'Program Tahfidz Al-Quran - TPK IASMA',
      description: 'Program menghafal Al-Quran dengan metode yang terbukti efektif',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '3',
    title: 'Kajian Rutin Mingguan',
    slug: 'kajian-rutin-mingguan',
    description: 'Kajian Islam rutin setiap minggu dengan berbagai tema aktual dan relevan',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'pendidikan',
    status: 'active',
    participants: 300,
    location: 'Masjid TPK IASMA, Bukittinggi',
    content: `Kajian rutin mingguan merupakan program dakwah yang menghadirkan berbagai tema keislaman yang aktual dan relevan dengan kehidupan sehari-hari. Kajian dipandu oleh ustadz-ustadz kompeten dan berpengalaman.

**Jadwal Kajian:**
- Senin: Tafsir Al-Quran (Ba'da Maghrib)
- Rabu: Hadits dan Fiqih (Ba'da Isya)
- Jum'at: Kajian Wanita (Ba'da Ashar)
- Ahad: Kajian Umum (Ba'da Subuh)

**Tema Kajian:**
- Akidah dan Tauhid
- Fiqih Ibadah
- Akhlak dan Adab
- Muamalah Kontemporer
- Tafsir Al-Quran
- Sirah Nabawiyah`,
    benefits: [
      'Gratis dan terbuka untuk umum',
      'Ustadz kompeten dan berpengalaman',
      'Materi yang aplikatif',
      'Sesi tanya jawab interaktif',
      'Modul kajian digital',
      'Rekaman kajian tersedia',
    ],
    requirements: [
      'Muslim/Muslimah',
      'Berpakaian sopan dan syar\'i',
      'Datang tepat waktu',
    ],
    _status: 'published',
    meta: {
      title: 'Kajian Rutin Mingguan - TPK IASMA',
      description: 'Kajian Islam rutin dengan berbagai tema aktual dan relevan',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '4',
    title: 'Beasiswa Pendidikan',
    slug: 'beasiswa-pendidikan',
    description: 'Bantuan beasiswa untuk pelajar dan mahasiswa kurang mampu yang berprestasi',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    targetAmount: 100000000,
    currentAmount: 65000000,
    participants: 80,
    content: `Program Beasiswa Pendidikan TPK IASMA bertujuan membantu pelajar dan mahasiswa kurang mampu namun memiliki prestasi akademik yang baik untuk melanjutkan pendidikan.

**Jenis Beasiswa:**
- Beasiswa SD/MI: Rp 500.000/semester
- Beasiswa SMP/MTs: Rp 750.000/semester
- Beasiswa SMA/MA: Rp 1.000.000/semester
- Beasiswa Perguruan Tinggi: Rp 2.000.000/semester

**Fasilitas:**
- Bantuan biaya pendidikan
- Bantuan seragam dan perlengkapan sekolah
- Bimbingan belajar gratis
- Pembinaan karakter dan akhlak`,
    benefits: [
      'Bantuan finansial pendidikan',
      'Bimbingan akademik gratis',
      'Pembinaan soft skills',
      'Pendampingan hingga lulus',
      'Jaringan alumni yang luas',
    ],
    requirements: [
      'Pelajar/mahasiswa aktif',
      'Berasal dari keluarga kurang mampu',
      'Memiliki prestasi akademik baik',
      'Berkelakuan baik',
      'Melampirkan surat keterangan tidak mampu',
    ],
    _status: 'published',
    meta: {
      title: 'Program Beasiswa Pendidikan - TPK IASMA',
      description: 'Bantuan beasiswa untuk pelajar dan mahasiswa kurang mampu',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '5',
    title: 'Pemberdayaan Ekonomi UMKM',
    slug: 'pemberdayaan-ekonomi-umkm',
    description: 'Program pelatihan keterampilan dan bantuan modal usaha untuk masyarakat',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'ekonomi',
    status: 'active',
    targetAmount: 200000000,
    currentAmount: 120000000,
    participants: 120,
    content: `Program Pemberdayaan Ekonomi UMKM bertujuan memberdayakan masyarakat kurang mampu melalui pelatihan keterampilan dan bantuan modal usaha produktif.

**Jenis Pelatihan:**
- Kuliner dan Food Processing
- Menjahit dan Fashion
- Kerajinan Tangan
- Digital Marketing
- Manajemen Usaha
- Kewirausahaan

**Bantuan Modal:**
- Modal Usaha Mikro: Rp 2-5 juta
- Modal Usaha Kecil: Rp 5-10 juta
- Sistem qardhul hasan (pinjaman tanpa bunga)`,
    benefits: [
      'Pelatihan keterampilan gratis',
      'Bantuan modal usaha tanpa bunga',
      'Pendampingan usaha intensif',
      'Akses ke jaringan pemasaran',
      'Pembinaan manajemen usaha',
    ],
    requirements: [
      'Warga Bukittinggi atau sekitarnya',
      'Usia 18-55 tahun',
      'Memiliki komitmen berwirausaha',
      'Mengikuti seluruh program pelatihan',
      'Lulus seleksi proposal usaha',
    ],
    _status: 'published',
    meta: {
      title: 'Program Pemberdayaan Ekonomi UMKM - TPK IASMA',
      description: 'Pelatihan keterampilan dan bantuan modal usaha',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '6',
    title: 'Santunan Yatim dan Dhuafa',
    slug: 'santunan-yatim-dhuafa',
    description: 'Bantuan rutin untuk anak yatim, janda, dan keluarga dhuafa',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    targetAmount: 150000000,
    currentAmount: 95000000,
    participants: 150,
    content: `Program Santunan Yatim dan Dhuafa adalah program sosial rutin untuk membantu anak yatim, janda, dan keluarga kurang mampu memenuhi kebutuhan hidup sehari-hari.

**Jenis Bantuan:**
- Santunan Rutin Bulanan
- Bantuan Biaya Pendidikan
- Bantuan Biaya Kesehatan
- Paket Sembako Bulanan
- Santunan Hari Raya
- Bantuan Renovasi Rumah

**Nominal Bantuan:**
- Anak Yatim: Rp 300.000/bulan
- Janda Dhuafa: Rp 400.000/bulan
- Lansia Terlantar: Rp 350.000/bulan`,
    benefits: [
      'Bantuan finansial rutin',
      'Bantuan kebutuhan pokok',
      'Bantuan pendidikan anak',
      'Bantuan kesehatan',
      'Pembinaan mental dan spiritual',
    ],
    requirements: [
      'Anak yatim/piatu/yatim piatu',
      'Janda dengan tanggungan',
      'Lansia tidak mampu',
      'Memiliki surat keterangan dari RT/RW',
      'Domisili Bukittinggi atau sekitarnya',
    ],
    _status: 'published',
    meta: {
      title: 'Program Santunan Yatim dan Dhuafa - TPK IASMA',
      description: 'Bantuan rutin untuk anak yatim, janda, dan keluarga dhuafa',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
];

export default programs;
