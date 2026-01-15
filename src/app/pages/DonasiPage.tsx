import { Heart, TrendingUp, Users, Building2, CheckCircle, BarChart3, HandHeart, Gift, Sparkles, QrCode, CreditCard, Wallet, ArrowRight, Target, Award, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DonationModal } from '../components/DonationModal';

export default function DonasiPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const programs = [
    {
      id: 1,
      title: 'Pembangunan Gedung Baru',
      target: 500000000,
      collected: 350000000,
      donors: 450,
      icon: Building2,
      description: 'Pembangunan gedung baru berlantai 3 untuk menampung lebih banyak program pendidikan dan kegiatan yayasan',
      gradient: 'from-emerald-500 to-teal-600',
      urgent: true,
    },
    {
      id: 2,
      title: 'Santunan Yatim Piatu',
      target: 100000000,
      collected: 75000000,
      donors: 320,
      icon: Heart,
      description: 'Program santunan rutin bulanan untuk 150 anak yatim dan dhuafa di wilayah Bukittinggi',
      gradient: 'from-rose-500 to-pink-600',
      urgent: false,
    },
    {
      id: 3,
      title: 'Beasiswa Tahfidz 2026',
      target: 200000000,
      collected: 120000000,
      donors: 180,
      icon: TrendingUp,
      description: 'Beasiswa penuh untuk 50 santri penghafal Al-Quran termasuk biaya pendidikan dan asrama',
      gradient: 'from-blue-500 to-cyan-600',
      urgent: false,
    },
  ];

  const quickAmounts = [50000, 100000, 250000, 500000, 1000000, 2500000];

  const bankAccounts = [
    { 
      bank: 'Bank Syariah Indonesia', 
      account: '1234 5678 9012', 
      name: 'YTPK Iasma I Landbouw Bukittinggi',
      icon: '🏦',
    },
    { 
      bank: 'Bank Mandiri', 
      account: '0987 6543 2109', 
      name: 'YTPK Iasma I Landbouw Bukittinggi',
      icon: '🏦',
    },
    { 
      bank: 'Bank BNI', 
      account: '5555 6666 7777', 
      name: 'YTPK Iasma I Landbouw Bukittinggi',
      icon: '🏦',
    },
  ];

  const paymentMethods = [
    { name: 'Transfer Bank', icon: Wallet, description: 'Transfer ke rekening yayasan' },
    { name: 'QRIS', icon: QrCode, description: 'Scan QR Code untuk bayar' },
    { name: 'E-Wallet', icon: CreditCard, description: 'GoPay, OVO, Dana, dll' },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getPercentage = (collected: number, target: number) => {
    return Math.round((collected / target) * 100);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-accent/85"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-4">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Mari Berbagi Kebahagiaan</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Wujudkan Mimpi<br />
              <span className="text-accent">Generasi Qurani</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Setiap donasi Anda adalah investasi untuk masa depan yang lebih baik. 
              Bersama kita wujudkan mimpi anak-anak Indonesia.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">950+</div>
                <div className="text-sm text-white/80">Total Donatur</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">545M</div>
                <div className="text-sm text-white/80">Terkumpul</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-white/80">Program Aktif</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Program Penggalangan Dana</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Program yang Membutuhkan Dukungan</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pilih program yang ingin Anda dukung dan jadilah bagian dari perubahan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            const percentage = getPercentage(program.collected, program.target);
            
            return (
              <Card 
                key={program.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0"
              >
                {/* Header with Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${program.gradient} p-6 flex flex-col justify-between`}>
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {program.urgent && (
                      <Badge className="bg-accent text-accent-foreground border-0">
                        Mendesak
                      </Badge>
                    )}
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{program.donors} Donatur</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 space-y-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>

                  {/* Progress */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-bold text-primary">{percentage}%</span>
                    </div>
                    <Progress value={percentage} className="h-3" />
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Terkumpul</div>
                        <div className="font-bold text-primary">{formatCurrency(program.collected)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground mb-1">Target</div>
                        <div className="font-bold">{formatCurrency(program.target)}</div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform" onClick={() => { setDonationModalOpen(true); setSelectedProgram(program); }}>
                    Donasi Sekarang
                    <Heart className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Quick Donation Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-4xl font-bold mb-4">Donasi Cepat</h2>
              <p className="text-muted-foreground text-lg">
                Pilih nominal atau masukkan jumlah donasi Anda
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 space-y-8">
                {/* Quick Amount Selection */}
                <div>
                  <label className="block text-sm font-medium mb-4">Pilih Nominal</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-4 rounded-xl font-semibold transition-all ${
                          selectedAmount === amount
                            ? 'bg-primary text-white shadow-lg scale-105'
                            : 'bg-muted hover:bg-muted/80'
                        }`}
                      >
                        {formatCurrency(amount)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-sm font-medium mb-2">Atau Masukkan Nominal Lain</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">Rp</span>
                    <input
                      type="text"
                      placeholder="0"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-lg font-semibold"
                    />
                  </div>
                </div>

                {/* Donor Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="08xx xxxx xxxx"
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pesan (Opsional)</label>
                  <textarea
                    placeholder="Tulis pesan atau doa Anda..."
                    rows={4}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" id="anonim" />
                  <label htmlFor="anonim" className="text-sm text-muted-foreground">
                    Sembunyikan nama saya (donasi anonim)
                  </label>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                  Lanjutkan ke Pembayaran
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Metode Pembayaran</h2>
          <p className="text-muted-foreground text-lg">
            Berbagai cara mudah untuk berdonasi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{method.name}</h3>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bank Accounts */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Rekening Donasi</h3>
          <div className="space-y-4">
            {bankAccounts.map((bank, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl">
                        {bank.icon}
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">{bank.bank}</div>
                        <div className="text-2xl font-bold text-primary tracking-wider">{bank.account}</div>
                        <div className="text-sm text-muted-foreground">a.n. {bank.name}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Copy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Amanah</h3>
              <p className="text-sm text-muted-foreground">Pengelolaan dana transparan dan bertanggung jawab</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Terpercaya</h3>
              <p className="text-sm text-muted-foreground">15+ tahun mengabdi untuk masyarakat</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Tersalurkan</h3>
              <p className="text-sm text-muted-foreground">Donasi langsung ke penerima manfaat</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Heart className="w-16 h-16 mx-auto text-accent" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ada Pertanyaan?
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              Tim kami siap membantu Anda. Hubungi kami untuk informasi lebih lanjut tentang program donasi
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/kontak">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                  Hubungi Kami
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/profil">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl">
                  Tentang Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        program={selectedProgram}
        selectedAmount={selectedAmount}
        customAmount={customAmount}
        setSelectedAmount={setSelectedAmount}
        setCustomAmount={setCustomAmount}
      />
    </div>
  );
}