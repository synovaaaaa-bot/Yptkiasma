import { Users, Target, Eye, Award, ArrowLeft, BookOpen, GraduationCap, Briefcase, HandHeart, Calendar, Heart, CheckCircle2, TrendingUp, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useState } from 'react';
import { logoTPK, logoIASMA } from '../../assets/logos';

export default function ProfilPage() {
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const organizers = [
    { name: 'Dr. Ahmad Syarif, S.Pd', position: 'Ketua Yayasan' },
    { name: 'Muhammad Yusuf, M.Pd', position: 'Wakil Ketua' },
    { name: 'Abdullah Rahman, S.Sos', position: 'Sekretaris' },
    { name: 'Suryadi, S.E', position: 'Bendahara' },
    { name: 'Ridwan Kamil, M.Pd', position: 'Bidang Pendidikan' },
    { name: 'Dr. Fahmi Idris', position: 'Bidang Sosial' },
  ];

  const programs = [
    {
      title: 'Pendidikan Al-Quran',
      description: 'Program tahsin dan tahfidz Al-Quran untuk semua kalangan',
      icon: BookOpen,
      color: 'from-primary to-primary/80',
      details: 'Program pembelajaran Al-Quran dengan metode tartil dan tahfidz yang terstruktur untuk anak-anak hingga dewasa.',
      benefits: ['Tahsin Al-Quran', 'Tahfidz Juz 30', 'Kajian Tafsir', 'Bimbingan Ustadz Berpengalaman'],
      link: '/program',
    },
    {
      title: 'Kajian Rutin',
      description: 'Kajian Islam rutin setiap minggu dengan berbagai tema',
      icon: GraduationCap,
      color: 'from-secondary to-secondary/80',
      details: 'Kajian keislaman rutin dengan tema-tema aktual dan relevan dipandu oleh ustadz kompeten.',
      benefits: ['Kajian Mingguan', 'Tema Aktual', 'Tanya Jawab Interaktif', 'Gratis untuk Umum'],
      link: '/kegiatan',
    },
    {
      title: 'Pemberdayaan Ekonomi',
      description: 'Program pelatihan keterampilan dan bantuan modal usaha',
      icon: Briefcase,
      color: 'from-accent to-accent/80',
      details: 'Pemberdayaan ekonomi masyarakat melalui pelatihan keterampilan dan bantuan modal usaha produktif.',
      benefits: ['Pelatihan Gratis', 'Bantuan Modal', 'Pendampingan Usaha', 'Jaringan Pemasaran'],
      link: '/program',
    },
    {
      title: 'Santunan Sosial',
      description: 'Bantuan untuk yatim piatu, dhuafa, dan kaum mustahik',
      icon: HandHeart,
      color: 'from-primary to-primary/80',
      details: 'Program santunan rutin untuk yatim piatu, dhuafa, dan masyarakat kurang mampu.',
      benefits: ['Santunan Rutin', 'Bantuan Pendidikan', 'Bantuan Kesehatan', 'Program Ramadhan'],
      link: '/donasi',
    },
  ];

  const timeline = [
    { year: '2009', event: 'Pendirian Yayasan', desc: 'Yayasan TPK IASMA didirikan oleh alumni SMA 1 Bukittinggi' },
    { year: '2011', event: 'Program Tahfidz', desc: 'Dimulainya program Tahfidz Al-Quran pertama' },
    { year: '2015', event: 'Ekspansi Program', desc: 'Penambahan program pemberdayaan ekonomi dan sosial' },
    { year: '2020', event: 'Digitalisasi', desc: 'Transformasi digital layanan dan program yayasan' },
    { year: '2025', event: 'Saat Ini', desc: 'Melayani ribuan penerima manfaat di berbagai program' },
  ];

  const stats = [
    { count: '15+', label: 'Tahun Berdedikasi', icon: Calendar, color: 'bg-primary' },
    { count: '12', label: 'Program Sosial', icon: HandHeart, color: 'bg-secondary' },
    { count: '11', label: 'Program Pendidikan', icon: GraduationCap, color: 'bg-accent' },
    { count: '5000+', label: 'Penerima Manfaat', icon: Users, color: 'bg-primary' },
  ];

  const values = [
    { title: 'Amanah', icon: CheckCircle2, desc: 'Mengelola dengan penuh tanggung jawab' },
    { title: 'Profesional', icon: Award, desc: 'Bekerja dengan standar terbaik' },
    { title: 'Peduli', icon: Heart, desc: 'Mengutamakan kepentingan sesama' },
    { title: 'Berkelanjutan', icon: TrendingUp, desc: 'Berdampak jangka panjang' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Overlay Text */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1609599006353-e629aaabfeae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/75" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl text-white space-y-6">
            {/* Logo Section */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border-2 border-white/30">
                <img 
                  src={logoTPK} 
                  alt="Logo TPK" 
                  className="h-20 w-20 md:h-24 md:w-24 object-contain"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border-2 border-white/30">
                <img 
                  src={logoIASMA} 
                  alt="Logo IASMA 1 Landbouw" 
                  className="h-20 w-20 md:h-24 md:w-24 object-contain"
                />
              </div>
            </div>
            
            <div className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-4">
              <p className="text-accent font-medium">Sejak 2009</p>
            </div>
            <h1 className="text-4xl md:text-6xl text-white mb-6">
              Yayasan TPK IASMA 1<br />Landbouw Bukittinggi
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Peduli Sesama, Berbagi Kebahagiaan
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span>Bukittinggi, Sumatera Barat</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-primary">Tentang Kami</h2>
          <div className="space-y-4 text-muted-foreground text-justify">
            <p>
              Yayasan TPK IASMA 1 Landbouw Bukittinggi merupakan lembaga sosial dan pendidikan yang dibentuk pada tahun 2009 
              untuk bantuan kemanusiaan oleh IASMA 1 (Ikatan Alumni SMA 1) Bukittinggi. Nama "Landbouw" merujuk pada lokasi 
              SMA Negeri 1 Bukittinggi yang terletak di kawasan bersejarah Landbouw di Kota Bukittinggi, Sumatera Barat.
            </p>
            <p>
              Berawal dari kepedulian para alumni SMA 1 Bukittinggi terhadap kondisi masyarakat, yayasan ini didirikan dengan 
              semangat berbagi dan memberdayakan sesama. Fokus utama TPK IASMA adalah dalam bidang pendidikan, sosial kemanusiaan, 
              dan pemberdayaan ekonomi masyarakat, khususnya bagi kaum dhuafa dan anak yatim.
            </p>
            <p>
              Beberapa program terbaik TPK IASMA yang terus berkembang hingga saat ini seperti Taman Pendidikan Al-Qur'an, 
              program beasiswa pendidikan, bantuan santunan untuk yatim piatu dan dhuafa, serta program pemberdayaan ekonomi 
              masyarakat yang dikhususkan untuk mencetak generasi yang profesional, berilmu, dan berakhlak mulia.
            </p>
            <p>
              Demi terciptanya sumber daya manusia yang berkualitas dan bermanfaat bagi masyarakat, TPK IASMA terus 
              berkomitmen menjalankan program-program pembinaan, pendidikan, dan bantuan sosial yang terstruktur, 
              amanah, dan berkelanjutan dengan semangat alumni yang peduli sesama.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section with Yellow Background */}
      <section className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center transform hover:scale-105 transition-transform">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                    <Icon className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <h2 className="mb-2 text-accent-foreground text-3xl md:text-4xl">{stat.count}</h2>
                  <p className="text-accent-foreground/90 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-primary">Perjalanan Kami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jejak langkah Yayasan TPK IASMA dalam melayani masyarakat
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative mb-12 md:mb-16 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className={`hover:shadow-xl transition-all duration-300 border-l-4 ${
                    index === timeline.length - 1 ? 'border-l-accent bg-gradient-to-br from-accent/5 to-accent/10' : 'border-l-primary'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`px-4 py-1 rounded-full ${
                          index === timeline.length - 1 ? 'bg-accent text-accent-foreground' : 'bg-primary text-white'
                        }`}>
                          <span className="font-bold">{item.year}</span>
                        </div>
                      </div>
                      <h3 className="mb-2 text-primary">{item.event}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                    index === timeline.length - 1 ? 'bg-accent' : 'bg-primary'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary">Nilai-Nilai Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prinsip yang kami pegang dalam setiap langkah
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-t-secondary">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-2 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Eye className="w-8 h-8 text-primary" />
                  <CardTitle>Visi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Menjadi lembaga pendidikan dan sosial yang unggul, sebagai pusat pembelajaran, 
                  pemberdayaan masyarakat yang mampu melahirkan generasi yang beriman, berilmu, 
                  profesional dan berakhlak mulia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Target className="w-8 h-8 text-secondary" />
                  <CardTitle>Misi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Menyelenggarakan pendidikan Al-Qur'an dan pengajaran Islam yang berkualitas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Mengembangkan program pendidikan dan pelatihan keterampilan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Memberdayakan ekonomi masyarakat melalui program-program produktif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Memberikan pelayanan sosial kepada masyarakat yang membutuhkan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4">Program Unggulan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Klik untuk melihat detail program dan cara bergabung
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isSelected = selectedProgram === index;
            return (
              <Card 
                key={index} 
                className={`cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  isSelected ? 'ring-4 ring-primary shadow-2xl' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedProgram(isSelected ? null : index)}
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-primary">{program.title}</h3>
                      <p className="text-muted-foreground text-sm">{program.description}</p>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isSelected ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t pt-4 space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {program.details}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-3">Manfaat Program:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {program.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(program.link);
                        }}
                      >
                        Lihat Detail Program
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Click Indicator */}
                  {!isSelected && (
                    <div className="mt-4 text-center">
                      <span className="text-xs text-primary hover:underline">
                        Klik untuk detail →
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Organizers */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Struktur Pengurus Yayasan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tim pengurus yang amanah dan berdedikasi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizers.map((organizer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1">{organizer.name}</h4>
                      <p className="text-muted-foreground">{organizer.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}