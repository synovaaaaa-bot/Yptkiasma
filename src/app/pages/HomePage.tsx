import { Link } from 'react-router-dom';
import { Calendar, Users, Heart, BookOpen, Clock, MapPin, GraduationCap, HandHeart, Briefcase, ArrowRight, Sparkles, TrendingUp, Award, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useState, useEffect } from 'react';
import { programsApi, activitiesApi } from '@/api/supabase-db';
import { statsApi } from '@/api/stats-api';

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [programs, setPrograms] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [stats, setStats] = useState({
    penerimaManfaat: '5000+',
    programAktif: 23,
    tahunBerdedikasi: '15+',
    amanahTransparan: '100%',
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Load data from database
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [programsData, activitiesData, statsData] = await Promise.all([
        programsApi.getAll(),
        activitiesApi.getAll(),
        statsApi.getPublicStats(),
      ]);
      setPrograms(programsData);
      setActivities(activitiesData);
      setStats(statsData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  // Get 3 featured programs from database
  const featuredPrograms = programs.slice(0, 3).map((program, index) => ({
    title: program.title,
    description: program.description,
    image: program.image || 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800',
    category: program.category || 'Sosial',
    stats: '100+ Penerima Manfaat',
    color: index === 0 ? 'from-primary to-primary/70' : index === 1 ? 'from-secondary to-secondary/70' : 'from-accent to-accent/70',
    icon: index === 0 ? BookOpen : index === 1 ? HandHeart : Briefcase,
    slug: program.id,
  }));

  // Get recent activities as upcoming events
  const upcomingEvents = activities.slice(0, 4).map(activity => ({
    title: activity.title,
    date: new Date(activity.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }),
    time: new Date(activity.date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    category: 'Kegiatan',
    venue: activity.location || 'TBA',
    speaker: 'Tim YTPK IASMA 1',
  }));

  const impactStats = [
    { value: stats.penerimaManfaat, label: 'Penerima Manfaat', icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
    { value: stats.programAktif.toString(), label: 'Program Aktif', icon: Target, color: 'text-secondary', bg: 'bg-secondary/10' },
    { value: stats.tahunBerdedikasi, label: 'Tahun Berdedikasi', icon: Award, color: 'text-accent', bg: 'bg-accent/10' },
    { value: stats.amanahTransparan, label: 'Amanah & Transparan', icon: TrendingUp, color: 'text-primary', bg: 'bg-primary/10' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Clean & Modern */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-white">
              <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Sejak 2009 - Ikatan Alumni SMA 1 Landbouw Bukittinggi
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Berbagi Kebahagiaan<br />
                untuk <span className="text-accent">Sesama</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                YTPK Iasma I Landbouw Bukittinggi hadir sebagai wadah kepedulian alumni dalam 
                memberdayakan masyarakat melalui pendidikan, sosial, dan ekonomi.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/donasi">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl">
                    <Heart className="mr-2 w-5 h-5" />
                    Mulai Berdonasi
                  </Button>
                </Link>
                <Link to="/program">
                  <Button size="lg" variant="outline" className="border-2 border-white bg-white text-primary hover:bg-white/90 hover:text-primary shadow-lg">
                    Lihat Program
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-accent">{stats.penerimaManfaat}</div>
                  <div className="text-xs md:text-sm text-white/80">Terbantu</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-accent">{stats.programAktif}</div>
                  <div className="text-xs md:text-sm text-white/80">Program</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-accent">{stats.tahunBerdedikasi}</div>
                  <div className="text-xs md:text-sm text-white/80">Tahun</div>
                </div>
              </div>
            </div>

            {/* Right Content - Removed Prayer Times */}
          </div>
        </div>

        {/* Wave Separator */}
        <div className="relative">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,42.7C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path>
          </svg>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Al-Qur\'an Digital', desc: 'Baca 30 juz lengkap', icon: BookOpen, gradient: 'from-emerald-500 to-teal-600', link: '/alquran' },
            { title: 'Donasi Sekarang', desc: 'Berbagi kebahagiaan', icon: Heart, gradient: 'from-yellow-500 to-accent', link: '/donasi' },
            { title: 'Zakat Hewan', desc: 'Kurban & Aqiqah', icon: HandHeart, gradient: 'from-blue-500 to-cyan-600', link: '/hewan' },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <Link key={index} to={action.link}>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{action.title}</h3>
                        <p className="text-sm text-muted-foreground">{action.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <Sparkles className="w-4 h-4 mr-1 text-primary" />
            Program Unggulan
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Program yang Berdampak</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kami fokus pada tiga pilar utama: Pendidikan, Sosial, dan Pemberdayaan Ekonomi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                  
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-primary border-0 shadow-lg">
                      {program.category}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/30">
                      <div className="text-white font-semibold">{program.stats}</div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/program">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Lihat Semua Program
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Calendar className="w-4 h-4 mr-1 text-accent" />
              Agenda Terkini
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Kegiatan Mendatang</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ikuti berbagai kegiatan bermanfaat dan jadilah bagian dari perubahan positif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{event.date}</div>
                      <div className="text-sm text-muted-foreground">Januari 2026</div>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {event.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time} WIB</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.speaker}</span>
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Detail Acara
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/kegiatan">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Lihat Semua Kegiatan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Dampak Nyata Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lebih dari sekedar angka, ini adalah cerita kehidupan yang berubah
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
                <CardContent className="p-8 space-y-4">
                  <div className={`inline-flex w-16 h-16 ${stat.bg} rounded-2xl items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left - Image */}
          <div 
            className="relative min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          </div>

          {/* Right - Content */}
          <div className="bg-primary text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-xl">
              <Badge className="bg-accent/20 text-accent border-accent/30 mb-6">
                <Heart className="w-3 h-3 mr-1" />
                Mari Berbagi
              </Badge>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Jadilah Bagian dari Perubahan
              </h2>
              
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Setiap donasi Anda adalah investasi untuk masa depan yang lebih baik. 
                Bersama kita wujudkan mimpi anak-anak Indonesia untuk mendapatkan pendidikan 
                dan kehidupan yang layak.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Amanah dan transparan dalam pengelolaan',
                  'Laporan berkala kepada donatur',
                  'Tersalur langsung ke penerima manfaat',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/donasi">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl">
                    Donasi Sekarang
                    <Heart className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/profil">
                  <Button size="lg" variant="outline" className="border-2 border-white bg-white text-primary hover:bg-white/90 hover:text-primary shadow-lg">
                    Tentang Kami
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}