import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { BookOpen, Users, GraduationCap, Briefcase, HandHeart, Heart, Baby, Utensils, Home, ArrowRight, CheckCircle2, Clock, MapPin, Phone, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProgramDetailModal } from '../components/ProgramDetailModal';
import { RegistrationModal } from '../components/RegistrationModal';
import { programs as programsData } from '../../collections/programs';

export default function ProgramPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [programForDetail, setProgramForDetail] = useState<any>(null);
  const [programForRegistration, setProgramForRegistration] = useState<any>(null);

  const categories = [
    { name: 'Semua', count: 7, icon: Heart },
    { name: 'Sosial', count: 5, icon: HandHeart },
    { name: 'Kesehatan', count: 2, icon: Heart },
    { name: 'Pendidikan', count: 1, icon: BookOpen },
  ];

  // Map programs from collections to match display format
  const programs = programsData.map((prog, index) => ({
    id: parseInt(prog.id),
    title: prog.title,
    category: prog.category.charAt(0).toUpperCase() + prog.category.slice(1),
    description: prog.description,
    image: prog.image,
    icon: prog.category === 'sosial' ? HandHeart : prog.category === 'kesehatan' ? Heart : BookOpen,
    gradient: index % 7 === 0 ? 'from-teal-500 to-green-600' : 
               index % 7 === 1 ? 'from-rose-500 to-red-600' :
               index % 7 === 2 ? 'from-pink-500 to-rose-600' :
               index % 7 === 3 ? 'from-blue-500 to-cyan-600' :
               index % 7 === 4 ? 'from-amber-500 to-orange-600' :
               index % 7 === 5 ? 'from-emerald-500 to-teal-600' :
               'from-purple-500 to-indigo-600',
    schedule: prog.category === 'sosial' ? 'Sepanjang Tahun' : 'Batch Berkala',
    participants: `${prog.participants}+ Terbantu`,
    location: prog.location,
    benefits: prog.benefits || [],
    contact: '0812-3456-7890',
  }));

  const filteredPrograms = activeCategory === 'Semua' 
    ? programs 
    : programs.filter(p => p.category === activeCategory);

  const handleViewDetail = (program: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setProgramForDetail(program);
    setDetailModalOpen(true);
    setSelectedProgram(null);
  };

  const handleRegister = (program: any) => {
    setProgramForRegistration(program);
    setDetailModalOpen(false);
    setRegistrationModalOpen(true);
  };

  const handleDirectRegister = (program: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setProgramForRegistration(program);
    setRegistrationModalOpen(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-accent/85"></div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">12 Program Berdampak</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Program <span className="text-accent">Pemberdayaan</span><br />
              untuk Sesama
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Beragam program sosial, pendidikan, dan ekonomi yang dirancang untuk 
              memberdayakan masyarakat dan menciptakan perubahan positif
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="text-sm text-white/80">Terbantu</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-white/80">Tahun Aktif</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Category Filter - Interactive Tabs */}
      <section className="container mx-auto px-4 -mt-10 relative z-10">
        <Card className="shadow-2xl border-0">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.name;
                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                        : 'bg-muted hover:bg-muted/80 text-foreground hover:scale-105'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-primary'}`} />
                    <span className="font-semibold">{category.name}</span>
                    <Badge 
                      variant={isActive ? "secondary" : "outline"} 
                      className={isActive ? "bg-white/20 text-white border-0" : ""}
                    >
                      {category.count}
                    </Badge>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Programs Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {activeCategory === 'Semua' ? 'Semua Program' : `Program ${activeCategory}`}
          </h2>
          <p className="text-muted-foreground text-lg">
            {filteredPrograms.length} program tersedia untuk Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => {
            const Icon = program.icon;
            const isSelected = selectedProgram === program.id;
            
            return (
              <Card 
                key={program.id}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 ${
                  isSelected ? 'ring-4 ring-primary shadow-2xl' : ''
                }`}
              >
                {/* Image with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <Badge className="bg-white text-primary shadow-lg">
                      {program.category}
                    </Badge>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 border border-white/30">
                      <div className="text-white font-semibold text-sm">{program.participants}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {program.description}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="line-clamp-1">{program.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="line-clamp-1">{program.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Link 
                      to="/donasi" 
                      state={{ programId: program.id.toString() }}
                      className="flex-1"
                    >
                      <Button className="w-full bg-secondary hover:bg-secondary/90">
                        <Heart className="mr-2 w-4 h-4" />
                        Donasi
                      </Button>
                    </Link>
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={(e) => handleDirectRegister(program, e)}
                    >
                      Daftar
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={(e) => handleViewDetail(program, e)}
                    >
                      Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-4">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Mari Bergabung</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ingin Ikut Program atau<br />Menjadi Donatur?
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              Hubungi kami untuk informasi lebih lanjut atau langsung salurkan donasi Anda 
              untuk mendukung program-program pemberdayaan masyarakat
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/kontak">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                  Hubungi Kami
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/donasi">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl">
                  Donasi Sekarang
                  <Heart className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Detail Modal */}
      <ProgramDetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        program={programForDetail}
        onRegister={handleRegister}
      />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={registrationModalOpen}
        onClose={() => setRegistrationModalOpen(false)}
        title={programForRegistration?.title || ''}
        category={programForRegistration?.category || ''}
        type="program"
      />
    </div>
  );
}