import { BookOpen, Search, Volume2, Play, Pause, ChevronLeft, ChevronRight, Bookmark, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useState } from 'react';

export default function AlQuranPage() {
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const surahs = [
    { number: 1, name: 'Al-Fatihah', arabicName: 'الفاتحة', meaning: 'Pembukaan', verses: 7, revelation: 'Makkah' },
    { number: 2, name: 'Al-Baqarah', arabicName: 'البقرة', meaning: 'Sapi Betina', verses: 286, revelation: 'Madinah' },
    { number: 3, name: 'Ali \'Imran', arabicName: 'آل عمران', meaning: 'Keluarga Imran', verses: 200, revelation: 'Madinah' },
    { number: 4, name: 'An-Nisa', arabicName: 'النساء', meaning: 'Wanita', verses: 176, revelation: 'Madinah' },
    { number: 5, name: 'Al-Ma\'idah', arabicName: 'المائدة', meaning: 'Hidangan', verses: 120, revelation: 'Madinah' },
    { number: 6, name: 'Al-An\'am', arabicName: 'الأنعام', meaning: 'Hewan Ternak', verses: 165, revelation: 'Makkah' },
    { number: 7, name: 'Al-A\'raf', arabicName: 'الأعراف', meaning: 'Tempat Tertinggi', verses: 206, revelation: 'Makkah' },
    { number: 8, name: 'Al-Anfal', arabicName: 'الأنفال', meaning: 'Harta Rampasan', verses: 75, revelation: 'Madinah' },
    { number: 9, name: 'At-Taubah', arabicName: 'التوبة', meaning: 'Pengampunan', verses: 129, revelation: 'Madinah' },
    { number: 10, name: 'Yunus', arabicName: 'يونس', meaning: 'Nabi Yunus', verses: 109, revelation: 'Makkah' },
    { number: 11, name: 'Hud', arabicName: 'هود', meaning: 'Nabi Hud', verses: 123, revelation: 'Makkah' },
    { number: 12, name: 'Yusuf', arabicName: 'يوسف', meaning: 'Nabi Yusuf', verses: 111, revelation: 'Makkah' },
  ];

  const ayahs = [
    {
      number: 1,
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      translation: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.',
      tafsir: 'Setiap muslim diperintahkan membaca basmalah sebelum memulai segala sesuatu yang baik.',
    },
    {
      number: 2,
      arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      translation: 'Segala puji bagi Allah, Tuhan seluruh alam.',
      tafsir: 'Segala puji hanya bagi Allah yang telah menciptakan dan memelihara seluruh alam semesta.',
    },
    {
      number: 3,
      arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
      translation: 'Yang Maha Pengasih, Maha Penyayang.',
      tafsir: 'Allah memiliki sifat Rahman dan Rahim yang mencakup seluruh makhluk-Nya.',
    },
    {
      number: 4,
      arabic: 'مَالِكِ يَوْمِ الدِّينِ',
      translation: 'Pemilik hari pembalasan.',
      tafsir: 'Allah adalah pemilik mutlak hari kiamat, tempat semua makhluk akan dimintai pertanggungjawaban.',
    },
    {
      number: 5,
      arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
      translation: 'Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami mohon pertolongan.',
      tafsir: 'Pernyataan keikhlasan dalam beribadah dan memohon pertolongan hanya kepada Allah semata.',
    },
    {
      number: 6,
      arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
      translation: 'Tunjukilah kami jalan yang lurus.',
      tafsir: 'Doa untuk ditunjukkan jalan Islam yang benar dan lurus menuju keridhaan Allah.',
    },
    {
      number: 7,
      arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      translation: 'Yaitu jalan orang-orang yang telah Engkau beri nikmat, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat.',
      tafsir: 'Jalan orang-orang yang diberi nikmat seperti para nabi, shiddiqin, syuhada, dan shalihin.',
    },
  ];

  const filteredSurahs = surahs.filter(surah =>
    surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    surah.arabicName.includes(searchQuery) ||
    surah.meaning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentSurah = surahs.find(s => s.number === selectedSurah);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1609599006353-e629aaabfeae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl text-white">Al-Qur'an Digital</h1>
            </div>
            <p className="text-lg md:text-xl text-white/90">
              Baca, dengarkan, dan pelajari Al-Qur'an dengan terjemahan dan tafsir dalam Bahasa Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - List Surah */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Daftar Surah</CardTitle>
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Cari surah..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent className="max-h-[600px] overflow-y-auto">
                <div className="space-y-2">
                  {filteredSurahs.map((surah) => (
                    <button
                      key={surah.number}
                      onClick={() => setSelectedSurah(surah.number)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        selectedSurah === surah.number
                          ? 'bg-primary text-white shadow-md'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`w-8 h-8 rounded flex items-center justify-center text-sm font-bold ${
                            selectedSurah === surah.number ? 'bg-white/20' : 'bg-primary/10 text-primary'
                          }`}>
                            {surah.number}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{surah.name}</div>
                            <div className="text-xs opacity-80">{surah.meaning} • {surah.verses} Ayat</div>
                          </div>
                        </div>
                        <div className="text-xl">{surah.arabicName}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Ayat Display */}
          <div className="lg:col-span-2 space-y-6">
            {/* Surah Header */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h2 className="text-3xl mb-2">{currentSurah?.arabicName}</h2>
                  <h3 className="text-xl mb-2">{currentSurah?.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {currentSurah?.meaning} • {currentSurah?.verses} Ayat • Diturunkan di {currentSurah?.revelation}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Pause Audio
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Play Audio
                        </>
                      )}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Tandai
                    </Button>
                  </div>
                </div>

                {/* Bismillah */}
                {selectedSurah !== 9 && (
                  <div className="text-center py-8 border-y">
                    <p className="text-3xl text-primary mb-2" style={{ fontFamily: 'serif' }}>
                      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                    </p>
                    <p className="text-muted-foreground">
                      Dengan nama Allah Yang Maha Pengasih, Maha Penyayang
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Ayat List */}
            <div className="space-y-4">
              {ayahs.map((ayah) => (
                <Card key={ayah.number} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    {/* Arabic Text */}
                    <div className="text-right mb-4">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="outline" className="text-primary border-primary">
                          {ayah.number}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Volume2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-3xl leading-loose mb-4" style={{ fontFamily: 'serif' }}>
                        {ayah.arabic}
                      </p>
                    </div>

                    {/* Translation */}
                    <div className="bg-muted/50 p-4 rounded-lg mb-3">
                      <p className="text-sm font-semibold mb-1">Terjemahan:</p>
                      <p className="leading-relaxed">{ayah.translation}</p>
                    </div>

                    {/* Tafsir */}
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="w-4 h-4 text-secondary" />
                        <p className="text-sm font-semibold">Tafsir Singkat:</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ayah.tafsir}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedSurah(Math.max(1, selectedSurah - 1))}
                    disabled={selectedSurah === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Surah Sebelumnya
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedSurah(Math.min(12, selectedSurah + 1))}
                    disabled={selectedSurah === 12}
                  >
                    Surah Selanjutnya
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Keutamaan Membaca Al-Qur'an</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h4 className="mb-2">Pahala Berlipat</h4>
                  <p className="text-sm text-muted-foreground">
                    Setiap huruf yang dibaca mendapat 10 kebaikan
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h4 className="mb-2">Syafaat di Akhirat</h4>
                  <p className="text-sm text-muted-foreground">
                    Al-Qur'an akan memberi syafaat di hari kiamat
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h4 className="mb-2">Ketenangan Hati</h4>
                  <p className="text-sm text-muted-foreground">
                    Memberikan ketenangan dan kedamaian jiwa
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
