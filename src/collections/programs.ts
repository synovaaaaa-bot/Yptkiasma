import { Program } from '../types/collections';

// Programs Collection - Program Yayasan YTPK
export const programs: Program[] = [
  {
    id: '1',
    title: 'Sebar Qurban ke Daerah Terpencil',
    slug: 'sebar-qurban-daerah-terpencil',
    description: 'Program penyaluran daging qurban ke daerah-daerah terpencil dan masyarakat dhuafa yang jauh dari pusat kota',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    participants: 500,
    location: 'Daerah Terpencil Sumbar',
    content: `Program Sebar Qurban YTPK khusus menyalurkan daging qurban ke daerah-daerah terpencil yang sulit dijangkau dan jarang mendapat bantuan, memastikan masyarakat pelosok juga merasakan kebahagiaan Idul Adha.

**Target Penerima:**
- Masyarakat daerah terpencil dan pelosok
- Keluarga dhuafa di pegunungan
- Kampung-kampung yang sulit diakses
- Desa tertinggal di Sumatera Barat

**Wilayah Penyaluran:**
- Daerah pegunungan Bukittinggi
- Kampung-kampung terpencil di Agam
- Desa-desa pelosok di Lima Puluh Kota
- Wilayah sulit akses lainnya

**Proses Pelaksanaan:**
- Survey lokasi terpencil yang membutuhkan
- Penyembelihan hewan qurban sesuai syariat
- Pengemasan daging untuk perjalanan jauh
- Distribusi langsung ke lokasi terpencil
- Dokumentasi dan pelaporan transparan`,
    benefits: [
      'Hewan qurban berkualitas (sapi dan kambing)',
      'Penyembelihan sesuai syariat Islam',
      'Distribusi ke daerah yang benar-benar membutuhkan',
      'Menjangkau area yang jarang tersentuh bantuan',
      'Laporan transparan kepada donatur',
    ],
    requirements: [
      'Pendaftaran qurban H-30 Idul Adha',
      'Pembayaran dapat dicicil',
      'Dapat menitipkan niat qurban',
      'Dokumentasi proses penyembelihan dan distribusi',
    ],
    _status: 'published',
    meta: {
      title: 'Program Sebar Qurban ke Daerah Terpencil - YTPK',
      description: 'Penyaluran daging qurban untuk masyarakat daerah terpencil',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Bantuan Bencana',
    slug: 'bantuan-bencana',
    description: 'Tim tanggap darurat YTPK siap membantu korban bencana dengan bantuan logistik dan kebutuhan mendesak',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    participants: 1000,
    location: 'Sumatera Barat & Sekitarnya',
    content: `Program tanggap darurat YTPK untuk membantu korban bencana seperti gempa bumi, banjir, tanah longsor, kebakaran, dan bencana lainnya dengan bantuan logistik, trauma healing, dan kebutuhan mendesak lainnya.

**Jenis Bantuan:**
- Logistik darurat: makanan, air bersih, obat-obatan
- Kebutuhan mendesak: tenda, selimut, pakaian, perlengkapan tidur
- Trauma healing dan pendampingan psikososial
- Bantuan pemulihan pasca bencana
- Koordinasi dengan tim SAR dan relawan

**Mekanisme Penyaluran:**
- Tim siaga bencana 24 jam standby
- Koordinasi dengan BPBD dan relawan daerah
- Penyaluran langsung ke lokasi bencana
- Monitoring dan evaluasi berkelanjutan
- Laporan transparan penggunaan dana`,
    benefits: [
      'Tim relawan terlatih dan berpengalaman',
      'Respon cepat maksimal 24 jam',
      'Bantuan sesuai kebutuhan mendesak korban',
      'Koordinasi dengan pemerintah dan SAR',
      'Laporan transparan dan akuntabel',
    ],
    requirements: [
      'Verifikasi lokasi dan kondisi bencana',
      'Data korban yang membutuhkan bantuan',
      'Koordinasi dengan tim SAR dan relawan lokal',
      'Dokumentasi penyaluran bantuan',
    ],
    _status: 'published',
    meta: {
      title: 'Program Bantuan Bencana - YTPK',
      description: 'Tim tanggap darurat untuk korban bencana',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '3',
    title: 'Operasi Bibir Sumbing Gratis',
    slug: 'operasi-bibir-sumbing',
    description: 'Program operasi bibir sumbing gratis untuk anak-anak dari keluarga tidak mampu',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'kesehatan',
    status: 'active',
    participants: 50,
    location: 'Rumah Sakit Partner YTPK',
    content: `Program kesehatan YTPK bekerja sama dengan rumah sakit dan tim dokter bedah plastik untuk memberikan operasi bibir sumbing gratis bagi anak-anak dari keluarga kurang mampu, memberikan harapan baru dan masa depan yang lebih baik.

**Layanan yang Diberikan:**
- Pemeriksaan medis lengkap pra-operasi
- Operasi bibir sumbing oleh dokter spesialis bedah plastik
- Perawatan intensif pasca operasi
- Konsultasi dan follow-up gratis
- Bantuan biaya transportasi dan akomodasi

**Target Peserta:**
- Anak usia 3 bulan - 17 tahun
- Penderita bibir sumbing dari keluarga tidak mampu
- Hasil screening medis memenuhi syarat operasi
- Berdomisili di Sumatera Barat dan sekitarnya`,
    benefits: [
      'Operasi dan perawatan 100% gratis',
      'Tim dokter spesialis berpengalaman',
      'Fasilitas rumah sakit terpercaya',
      'Pendampingan keluarga pasien',
      'Follow-up hingga sembuh sempurna',
    ],
    requirements: [
      'Surat keterangan tidak mampu dari kelurahan',
      'Hasil pemeriksaan kesehatan awal',
      'Kelengkapan dokumen identitas anak dan orangtua',
      'Kesediaan mengikuti prosedur medis',
    ],
    _status: 'published',
    meta: {
      title: 'Program Operasi Bibir Sumbing Gratis - YTPK',
      description: 'Operasi bibir sumbing gratis untuk anak dari keluarga tidak mampu',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '4',
    title: 'Operasi Katarak Gratis',
    slug: 'operasi-katarak',
    description: 'Program operasi katarak gratis untuk lansia dan masyarakat kurang mampu',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'kesehatan',
    status: 'active',
    participants: 100,
    location: 'Rumah Sakit Partner YTPK',
    content: `Program bakti sosial kesehatan mata YTPK memberikan operasi katarak gratis untuk lansia dan masyarakat kurang mampu yang mengalami gangguan penglihatan akibat katarak, mengembalikan cahaya kehidupan mereka.

**Layanan yang Diberikan:**
- Pemeriksaan mata lengkap gratis
- Operasi katarak dengan teknologi modern
- Lensa tanam IOL berkualitas internasional
- Perawatan dan obat-obatan pasca operasi
- Kacamata baca gratis (jika diperlukan)

**Proses Pelaksanaan:**
- Screening awal kesehatan mata
- Penjadwalan operasi sesuai urutan pendaftaran
- Operasi oleh dokter spesialis mata berpengalaman
- Kontrol dan evaluasi pasca operasi rutin`,
    benefits: [
      'Operasi dan lensa tanam 100% gratis',
      'Dokter spesialis mata berpengalaman',
      'Teknologi operasi modern dan aman',
      'Obat-obatan lengkap gratis',
      'Pemulihan penglihatan maksimal',
    ],
    requirements: [
      'Usia minimal 40 tahun',
      'Surat keterangan tidak mampu dari kelurahan',
      'Hasil pemeriksaan mata awal',
      'Tidak memiliki penyakit mata lain yang berat',
    ],
    _status: 'published',
    meta: {
      title: 'Program Operasi Katarak Gratis - YTPK',
      description: 'Operasi katarak gratis untuk lansia dan masyarakat kurang mampu',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '5',
    title: 'Pembagian Takjil dan Sembako di Bulan Ramadhan',
    slug: 'takjil-sembako-ramadhan',
    description: 'Program berbagi takjil gratis setiap sore dan paket sembako untuk keluarga dhuafa di bulan suci Ramadhan',
    image: 'https://images.unsplash.com/photo-1610399827100-02e3c525f144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    participants: 500,
    location: 'Beberapa Titik di Bukittinggi',
    content: `Program Ramadhan YTPK yang membagikan takjil gratis setiap sore dan paket sembako untuk membantu masyarakat yang sedang berpuasa, terutama musafir, pekerja, dan keluarga kurang mampu.

**Program Takjil Gratis:**
- Pembagian setiap sore pukul 17.00 - 18.00 WIB
- Lokasi strategis di beberapa titik Bukittinggi
- Menu takjil bervariasi dan bergizi
- Khusus hari Jumat: nasi kotak gratis

**Program Sembako Ramadhan:**
- Paket sembako untuk 500+ keluarga dhuafa
- Distribusi di awal dan pertengahan Ramadhan
- Berisi beras, minyak, gula, dan bahan pokok lainnya
- Penyaluran langsung ke rumah penerima

**Lokasi Pembagian Takjil:**
- Simpang 4 Bukittinggi
- Terminal Aur Kuning
- Masjid Raya Bukittinggi
- Kawasan Jam Gadang
- Dan titik-titik strategis lainnya`,
    benefits: [
      'Takjil gratis setiap sore di bulan Ramadhan',
      'Paket sembako lengkap untuk keluarga',
      'Menu bervariasi dan higienis',
      'Lokasi mudah diakses',
      'Berbagi kebahagiaan di bulan suci',
    ],
    requirements: [
      'Takjil: Terbuka untuk semua orang yang berpuasa',
      'Sembako: Surat keterangan tidak mampu',
      'Antri dengan tertib dan menjaga kebersihan',
      'Pendataan penerima sembako',
    ],
    _status: 'published',
    meta: {
      title: 'Program Pembagian Takjil dan Sembako Ramadhan - YTPK',
      description: 'Berbagi takjil gratis dan sembako di bulan Ramadhan',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '6',
    title: 'Go Clean Mushalla dan Mesjid',
    slug: 'goclean-mushalla-mesjid',
    description: 'Kegiatan gotong royong membersihkan mushalla dan mesjid yang membutuhkan di sekitar Bukittinggi',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    participants: 50,
    location: 'Mushalla & Mesjid se-Bukittinggi',
    content: `Program Go Clean YTPK mengajak relawan untuk bergotong royong membersihkan mushalla dan mesjid yang membutuhkan, meliputi pembersihan menyeluruh dalam dan luar bangunan, perawatan fasilitas, dan perbaikan ringan.

**Kegiatan yang Dilakukan:**
- Pembersihan lantai, karpet, dan dinding
- Pembersihan toilet dan tempat wudhu
- Perawatan taman mushalla/mesjid
- Perbaikan fasilitas yang rusak ringan
- Pengecatan jika diperlukan
- Pembersihan selokan dan area parkir

**Jadwal Pelaksanaan:**
- Setiap bulan 2-3 mushalla/mesjid
- Hari Sabtu-Ahad pukul 08.00 - 12.00
- Koordinasi dengan pengurus mushalla/mesjid
- Dokumentasi sebelum dan sesudah

**Target Lokasi:**
- Mushalla dan mesjid yang kurang terawat
- Fasilitas ibadah di daerah kurang mampu
- Prioritas untuk mushalla/mesjid yang pengurus terbatas`,
    benefits: [
      'Mushalla/mesjid bersih dan nyaman untuk ibadah',
      'Mempererat silaturahmi umat',
      'Pahala menjaga kebersihan rumah Allah',
      'Gratis 100% untuk semua mushalla/mesjid',
      'Tim relawan berpengalaman dan bersemangat',
    ],
    requirements: [
      'Pengajuan dari pengurus mushalla/mesjid',
      'Survey lokasi terlebih dahulu',
      'Kesediaan pengurus untuk berkoordinasi',
      'Mushalla/mesjid yang memang membutuhkan',
    ],
    _status: 'published',
    meta: {
      title: 'Program Go Clean Mushalla dan Mesjid - YTPK',
      description: 'Gotong royong membersihkan mushalla dan mesjid',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '7',
    title: 'Waqaf Al-Qur\'an',
    slug: 'waqaf-alquran',
    description: 'Program wakaf Al-Qur\'an berkualitas untuk mushalla, mesjid, pesantren, dan masyarakat yang membutuhkan',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'pendidikan',
    status: 'active',
    participants: 500,
    location: 'Sumatera Barat',
    content: `Program wakaf Al-Qur'an YTPK menyediakan mushaf Al-Qur'an berkualitas untuk disebarkan ke mushalla, mesjid, pesantren, madrasah, dan masyarakat yang membutuhkan sebagai amal jariyah yang pahalanya terus mengalir.

**Jenis Al-Qur'an yang Tersedia:**
- Al-Qur'an ukuran sedang (A5) untuk mesjid/mushalla
- Al-Qur'an terjemahan Bahasa Indonesia
- Al-Qur'an tajwid warna untuk belajar
- Juz Amma untuk anak-anak
- Al-Qur'an ukuran besar untuk lansia (khusus)

**Program Penyaluran:**
- Prioritas untuk mushalla/mesjid yang kekurangan Al-Qur'an
- Pesantren dan madrasah yang membutuhkan
- Perpustakaan umum dan taman baca
- Masyarakat kurang mampu yang ingin memiliki Al-Qur'an
- Muallaf dan komunitas pengajian

**Syarat Penerima:**
- Mushalla/mesjid yang membutuhkan tambahan Al-Qur'an
- Pesantren dan lembaga pendidikan Islam
- Perpustakaan dan taman baca Al-Qur'an
- Masyarakat kurang mampu (dengan surat keterangan)
- Komunitas pengajian yang aktif`,
    benefits: [
      'Al-Qur'an berkualitas cetak bagus dan jelas',
      'Gratis 100% tanpa biaya apapun',
      'Pengiriman ke lokasi (area Bukittinggi)',
      'Berbagai ukuran sesuai kebutuhan',
      'Pahala jariyah mengalir terus bagi wakif',
    ],
    requirements: [
      'Pengajuan tertulis ke sekretariat YTPK',
      'Surat pengantar dari RT/Kelurahan (untuk pribadi)',
      'Surat pengantar pengurus (untuk mushalla/lembaga)',
      'Mencantumkan jumlah yang dibutuhkan',
    ],
    _status: 'published',
    meta: {
      title: 'Program Waqaf Al-Qur\'an - YTPK',
      description: 'Wakaf Al-Qur\'an untuk mushalla, mesjid, dan masyarakat',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
];

export default programs;