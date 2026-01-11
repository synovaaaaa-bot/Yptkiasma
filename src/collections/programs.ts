import { Program } from '../types/collections';

// Programs Collection - Program Yayasan YPTK
export const programs: Program[] = [
  {
    id: '1',
    title: 'Qurban Idul Adha',
    slug: 'qurban-idul-adha',
    description: 'Program penyaluran daging qurban untuk masyarakat dhuafa di sekitar Bukittinggi',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    participants: 500,
    location: 'Seluruh Bukittinggi',
    content: `Program Qurban YPTK merupakan kegiatan rutin tahunan untuk menyalurkan daging qurban kepada masyarakat dhuafa dan fakir miskin di wilayah Bukittinggi dan sekitarnya.

**Target Penerima:**
- Keluarga dhuafa dan fakir miskin
- Anak yatim piatu
- Janda dan lansia tidak mampu
- Masyarakat prasejahtera

**Proses Pelaksanaan:**
- Penyembelihan hewan qurban sesuai syariat
- Pengemasan dan distribusi daging
- Penyaluran langsung ke rumah penerima
- Dokumentasi dan pelaporan transparan`,
    benefits: [
      'Hewan qurban berkualitas (sapi dan kambing)',
      'Penyembelihan oleh jagal bersertifikat',
      'Distribusi merata dan adil',
      'Laporan transparan kepada donatur',
      'Penyaluran tepat sasaran',
    ],
    requirements: [
      'Pendaftaran qurban H-30 Idul Adha',
      'Pembayaran dapat dicicil',
      'Dapat menitipkan niat qurban',
      'Dokumentasi foto penyembelihan',
    ],
    _status: 'published',
    meta: {
      title: 'Program Qurban Idul Adha - YPTK',
      description: 'Program penyaluran daging qurban untuk masyarakat dhuafa',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Bantuan Bencana Alam',
    slug: 'bantuan-bencana-alam',
    description: 'Respon cepat bantuan kemanusiaan untuk korban bencana alam di berbagai daerah',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    participants: 1000,
    location: 'Sumatera Barat & Sekitarnya',
    content: `Program tanggap darurat YPTK untuk membantu korban bencana alam seperti gempa bumi, banjir, tanah longsor, dan bencana lainnya dengan bantuan logistik dan kebutuhan mendesak.

**Jenis Bantuan:**
- Logistik: makanan, air bersih, obat-obatan
- Kebutuhan darurat: tenda, selimut, pakaian
- Trauma healing dan pendampingan
- Bantuan pemulihan pasca bencana

**Mekanisme Penyaluran:**
- Tim siaga bencana 24 jam
- Koordinasi dengan BPBD dan relawan
- Penyaluran langsung ke lokasi bencana
- Monitoring dan evaluasi berkelanjutan`,
    benefits: [
      'Tim relawan terlatih dan berpengalaman',
      'Respon cepat maksimal 24 jam',
      'Bantuan sesuai kebutuhan mendesak',
      'Koordinasi dengan pemerintah daerah',
      'Laporan transparan dan akuntabel',
    ],
    requirements: [
      'Verifikasi lokasi bencana',
      'Data korban yang membutuhkan',
      'Koordinasi dengan tim SAR',
      'Dokumentasi penyaluran bantuan',
    ],
    _status: 'published',
    meta: {
      title: 'Program Bantuan Bencana Alam - YPTK',
      description: 'Respon cepat bantuan kemanusiaan untuk korban bencana',
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
    location: 'Rumah Sakit Partner YPTK',
    content: `Program kesehatan YPTK bekerja sama dengan rumah sakit dan tim dokter bedah plastik untuk memberikan operasi bibir sumbing gratis bagi anak-anak dari keluarga kurang mampu.

**Layanan yang Diberikan:**
- Pemeriksaan medis lengkap pra-operasi
- Operasi bibir sumbing oleh dokter spesialis
- Perawatan pasca operasi
- Konsultasi dan follow-up gratis
- Bantuan biaya transportasi

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
      'Kelengkapan dokumen identitas',
      'Kesediaan mengikuti prosedur medis',
    ],
    _status: 'published',
    meta: {
      title: 'Program Operasi Bibir Sumbing Gratis - YPTK',
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
    location: 'Rumah Sakit Partner YPTK',
    content: `Program bakti sosial kesehatan mata YPTK memberikan operasi katarak gratis untuk lansia dan masyarakat kurang mampu yang mengalami gangguan penglihatan akibat katarak.

**Layanan yang Diberikan:**
- Pemeriksaan mata lengkap gratis
- Operasi katarak dengan teknologi modern
- Lensa tanam IOL berkualitas
- Perawatan dan obat-obatan pasca operasi
- Kacamata baca gratis (jika diperlukan)

**Proses Pelaksanaan:**
- Screening awal kesehatan mata
- Penjadwalan operasi sesuai urutan
- Operasi oleh dokter spesialis mata
- Kontrol dan evaluasi pasca operasi`,
    benefits: [
      'Operasi dan lensa tanam 100% gratis',
      'Dokter spesialis mata berpengalaman',
      'Teknologi operasi modern dan aman',
      'Obat-obatan lengkap gratis',
      'Pemulihan penglihatan maksimal',
    ],
    requirements: [
      'Usia minimal 40 tahun',
      'Surat keterangan tidak mampu',
      'Hasil pemeriksaan mata awal',
      'Tidak memiliki penyakit mata lain yang berat',
    ],
    _status: 'published',
    meta: {
      title: 'Program Operasi Katarak Gratis - YPTK',
      description: 'Operasi katarak gratis untuk lansia dan masyarakat kurang mampu',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '5',
    title: 'Pembagian Takjil Ramadhan',
    slug: 'pembagian-takjil-ramadhan',
    description: 'Berbagi takjil gratis setiap sore di bulan Ramadhan untuk masyarakat',
    image: 'https://images.unsplash.com/photo-1610399827100-02e3c525f144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    participants: 300,
    location: 'Beberapa Titik di Bukittinggi',
    content: `Program berbagi takjil gratis YPTK di bulan Ramadhan untuk membantu masyarakat yang sedang berpuasa, terutama musafir, pekerja, dan masyarakat kurang mampu.

**Pelaksanaan Program:**
- Pembagian setiap sore pukul 17.00 - 18.00 WIB
- Lokasi strategis di beberapa titik Bukittinggi
- Menu takjil bervariasi dan bergizi
- Khusus hari Jumat: nasi kotak gratis

**Lokasi Pembagian:**
- Simpang 4 Bukittinggi
- Terminal Aur Kuning
- Masjid Raya Bukittinggi
- Kawasan Jam Gadang
- Dan titik-titik lainnya`,
    benefits: [
      'Takjil gratis setiap sore',
      'Menu bervariasi dan higienis',
      'Lokasi mudah diakses',
      'Berbagi kebahagiaan Ramadhan',
      'Pahala bagi donatur takjil',
    ],
    requirements: [
      'Terbuka untuk semua orang',
      'Antri dengan tertib',
      'Satu orang satu porsi',
      'Menjaga kebersihan lokasi',
    ],
    _status: 'published',
    meta: {
      title: 'Program Pembagian Takjil Ramadhan - YPTK',
      description: 'Berbagi takjil gratis setiap sore di bulan Ramadhan',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '6',
    title: 'Go Clean Masjid dan Mushola',
    slug: 'goclean-masjid-mushola',
    description: 'Kegiatan gotong royong membersihkan masjid dan mushola di sekitar Bukittinggi',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    participants: 50,
    location: 'Masjid & Mushola se-Bukittinggi',
    content: `Program Go Clean YPTK mengajak relawan untuk bergotong royong membersihkan masjid dan mushola yang membutuhkan, meliputi pembersihan dalam dan luar bangunan, perawatan fasilitas, dan perbaikan ringan.

**Kegiatan yang Dilakukan:**
- Pembersihan lantai, karpet, dan dinding
- Pembersihan toilet dan tempat wudhu
- Perawatan taman masjid
- Perbaikan fasilitas yang rusak ringan
- Pengecatan jika diperlukan

**Jadwal Pelaksanaan:**
- Setiap bulan 1-2 masjid/mushola
- Hari Sabtu-Ahad pukul 08.00 - 12.00
- Koordinasi dengan pengurus masjid
- Dokumentasi sebelum dan sesudah`,
    benefits: [
      'Masjid/mushola bersih dan nyaman',
      'Mempererat silaturahmi umat',
      'Pahala menjaga rumah Allah',
      'Gratis untuk semua masjid/mushola',
      'Tim relawan berpengalaman',
    ],
    requirements: [
      'Pengajuan dari pengurus masjid/mushola',
      'Survey lokasi terlebih dahulu',
      'Kesediaan pengurus untuk berkoordinasi',
      'Masjid/mushola yang memang membutuhkan',
    ],
    _status: 'published',
    meta: {
      title: 'Program Go Clean Masjid dan Mushola - YPTK',
      description: 'Gotong royong membersihkan masjid dan mushola',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '7',
    title: 'Pembagian Sembako Rutin',
    slug: 'pembagian-sembako',
    description: 'Program distribusi paket sembako bulanan untuk keluarga dhuafa dan prasejahtera',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'sosial',
    status: 'active',
    participants: 200,
    location: 'Seluruh Bukittinggi',
    content: `Program pembagian sembako rutin YPTK memberikan bantuan paket sembako kepada keluarga dhuafa, janda, lansia, dan masyarakat prasejahtera untuk membantu kebutuhan pokok sehari-hari.

**Isi Paket Sembako:**
- Beras 10 kg
- Minyak goreng 2 liter
- Gula pasir 2 kg
- Teh dan kopi
- Mie instan 1 dus
- Susu dan biskuit
- Bahan pokok lainnya

**Frekuensi Penyaluran:**
- Rutin setiap bulan
- Extra di bulan Ramadhan
- Menjelang hari raya
- Saat ada donatur khusus`,
    benefits: [
      'Paket sembako berkualitas',
      'Penyaluran tepat sasaran',
      'Bantuan konsisten setiap bulan',
      'Pendataan penerima transparan',
      'Dapat dijadikan penerima tetap',
    ],
    requirements: [
      'Surat keterangan tidak mampu',
      'Domisili Bukittinggi dan sekitarnya',
      'Verifikasi kondisi ekonomi keluarga',
      'Pengambilan di lokasi yang ditentukan',
    ],
    _status: 'published',
    meta: {
      title: 'Program Pembagian Sembako Rutin - YPTK',
      description: 'Distribusi paket sembako bulanan untuk keluarga dhuafa',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
  {
    id: '8',
    title: 'Distribusi Al-Quran Gratis',
    slug: 'alquran-gratis',
    description: 'Program pembagian Al-Quran gratis untuk masjid, mushola, dan masyarakat yang membutuhkan',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    category: 'pendidikan',
    status: 'active',
    participants: 500,
    location: 'Sumatera Barat',
    content: `Program wakaf Al-Quran YPTK menyediakan mushaf Al-Quran gratis berkualitas untuk disebarkan ke masjid, mushola, pesantren, madrasah, dan masyarakat yang membutuhkan.

**Jenis Al-Quran yang Tersedia:**
- Al-Quran ukuran sedang (A5)
- Al-Quran terjemahan
- Al-Quran tajwid warna
- Juz Amma untuk anak
- Al-Quran ukuran besar untuk lansia

**Syarat Penerima:**
- Masjid/mushola yang membutuhkan
- Pesantren dan madrasah
- Perpustakaan umum
- Masyarakat kurang mampu
- Muallaf dan taman baca`,
    benefits: [
      'Al-Quran berkualitas cetak bagus',
      'Gratis 100% tanpa biaya',
      'Pengiriman ke lokasi (area Bukittinggi)',
      'Berbagai ukuran sesuai kebutuhan',
      'Pahala jariyah bagi donatur',
    ],
    requirements: [
      'Pengajuan tertulis ke YPTK',
      'Surat pengantar dari RT/Kelurahan (pribadi)',
      'Surat pengantar pengurus (masjid/lembaga)',
      'Jumlah yang dibutuhkan (maksimal)',
    ],
    _status: 'published',
    meta: {
      title: 'Program Distribusi Al-Quran Gratis - YPTK',
      description: 'Pembagian Al-Quran gratis untuk masjid, mushola, dan masyarakat',
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-09-15T10:00:00Z',
  },
];

export default programs;
