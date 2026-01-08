import { Heart, Users, Calendar, CheckCircle, Info, Star, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useState } from 'react';

export default function HewanPage() {
  const [selectedType, setSelectedType] = useState<'qurban' | 'aqiqah'>('qurban');
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const qurbanPackages = [
    {
      id: 1,
      name: 'Kambing',
      type: 'Qurban',
      price: 3500000,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      specs: ['Berat 35-45 kg', 'Sehat & berkualitas', 'Untuk 1 orang', 'Gratis pemotongan & distribusi'],
      available: 25,
      sold: 15,
    },
    {
      id: 2,
      name: 'Domba',
      type: 'Qurban',
      price: 4200000,
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      specs: ['Berat 40-50 kg', 'Sehat & berkualitas', 'Untuk 1 orang', 'Gratis pemotongan & distribusi'],
      available: 20,
      sold: 10,
      featured: true,
    },
    {
      id: 3,
      name: 'Sapi 1/7',
      type: 'Qurban',
      price: 3000000,
      image: 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      specs: ['Berat total 400-500 kg', 'Sehat & berkualitas', 'Untuk 1 orang (1/7 sapi)', 'Gratis pemotongan & distribusi'],
      available: 35,
      sold: 28,
    },
    {
      id: 4,
      name: 'Sapi Full',
      type: 'Qurban',
      price: 21000000,
      image: 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      specs: ['Berat 400-500 kg', 'Sehat & berkualitas', 'Untuk 7 orang', 'Gratis pemotongan & distribusi'],
      available: 5,
      sold: 3,
      featured: true,
    },
  ];

  const aqiqahPackages = [
    {
      id: 5,
      name: 'Kambing Aqiqah Betina',
      type: 'Aqiqah',
      price: 2800000,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      specs: ['Berat 25-35 kg', 'Sehat & berkualitas', 'Untuk anak perempuan (1 kambing)', 'Gratis pemotongan & memasak'],
      available: 30,
      sold: 12,
    },
    {
      id: 6,
      name: 'Kambing Aqiqah Jantan',
      type: 'Aqiqah',
      price: 6000000,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      specs: ['Berat 25-35 kg', 'Sehat & berkualitas', 'Untuk anak laki-laki (2 kambing)', 'Gratis pemotongan & memasak'],
      available: 20,
      sold: 8,
      featured: true,
    },
    {
      id: 7,
      name: 'Paket Aqiqah + Nasi Box',
      type: 'Aqiqah',
      price: 7500000,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      specs: ['2 Kambing (laki-laki)', 'Sehat & berkualitas', '100 box nasi aqiqah', 'Gratis pemotongan & memasak'],
      available: 15,
      sold: 6,
    },
  ];

  const currentPackages = selectedType === 'qurban' ? qurbanPackages : aqiqahPackages;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const benefits = [
    {
      title: 'Amanah & Transparan',
      description: 'Laporan lengkap dengan foto dan video',
      icon: CheckCircle,
    },
    {
      title: 'Hewan Berkualitas',
      description: 'Hewan sehat dan memenuhi syarat syariah',
      icon: Star,
    },
    {
      title: 'Gratis Pemotongan',
      description: 'Sudah termasuk biaya pemotongan',
      icon: Package,
    },
    {
      title: 'Distribusi Merata',
      description: 'Didistribusikan ke yang berhak',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl text-white">Qurban & Aqiqah</h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Tunaikan ibadah qurban dan aqiqah dengan mudah, amanah, dan berkualitas
            </p>
            
            {/* Type Selection */}
            <div className="flex gap-4">
              <Button
                size="lg"
                variant={selectedType === 'qurban' ? 'default' : 'outline'}
                className={selectedType === 'qurban' ? 'bg-white text-primary hover:bg-white/90' : 'text-white border-white hover:bg-white/10'}
                onClick={() => setSelectedType('qurban')}
              >
                <Heart className="w-5 h-5 mr-2" />
                Qurban
              </Button>
              <Button
                size="lg"
                variant={selectedType === 'aqiqah' ? 'default' : 'outline'}
                className={selectedType === 'aqiqah' ? 'bg-white text-primary hover:bg-white/90' : 'text-white border-white hover:bg-white/10'}
                onClick={() => setSelectedType('aqiqah')}
              >
                <Users className="w-5 h-5 mr-2" />
                Aqiqah
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4">Pilih Paket {selectedType === 'qurban' ? 'Qurban' : 'Aqiqah'}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {selectedType === 'qurban' 
              ? 'Pilihan hewan qurban berkualitas dengan harga terjangkau dan amanah'
              : 'Paket aqiqah lengkap untuk menyambut kelahiran buah hati'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentPackages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`overflow-hidden transition-all cursor-pointer ${
                selectedPackage === pkg.id 
                  ? 'ring-2 ring-primary shadow-xl' 
                  : 'hover:shadow-lg'
              } ${pkg.featured ? 'border-primary border-2' : ''}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.featured && (
                <div className="bg-primary text-white text-center py-1 text-xs font-semibold">
                  ⭐ PALING POPULER
                </div>
              )}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-white/90 text-primary">
                    {pkg.available} tersedia
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{pkg.name}</CardTitle>
                <p className="text-2xl font-bold text-primary">{formatCurrency(pkg.price)}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {pkg.specs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Terjual: {pkg.sold}</span>
                    <span>{Math.round((pkg.sold / (pkg.sold + pkg.available)) * 100)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${(pkg.sold / (pkg.sold + pkg.available)) * 100}%` }}
                    />
                  </div>
                </div>

                <Button 
                  className="w-full"
                  variant={selectedPackage === pkg.id ? 'default' : 'outline'}
                >
                  {selectedPackage === pkg.id ? 'Dipilih' : 'Pilih Paket'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        {selectedPackage && (
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="border-primary">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h3 className="mb-2">Paket yang Dipilih</h3>
                  <p className="text-3xl font-bold text-primary mb-2">
                    {currentPackages.find(p => p.id === selectedPackage)?.name}
                  </p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(currentPackages.find(p => p.id === selectedPackage)?.price || 0)}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button size="lg" className="flex-1">
                    <Heart className="w-5 h-5 mr-2" />
                    Pesan Sekarang
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setSelectedPackage(null)}>
                    Batalkan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Kenapa Pilih Kami?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h4 className="mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Qurban Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Tentang Qurban
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Syarat Hewan Qurban</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Kambing/Domba minimal 1 tahun</li>
                  <li>• Sapi/Kerbau minimal 2 tahun</li>
                  <li>• Sehat dan tidak cacat</li>
                  <li>• Cukup gemuk dan tidak kurus</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Waktu Penyembelihan</h5>
                <p className="text-sm text-muted-foreground">
                  Dimulai setelah sholat Idul Adha (10 Dzulhijjah) hingga sebelum maghrib tanggal 13 Dzulhijjah
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Pembagian Daging</h5>
                <p className="text-sm text-muted-foreground">
                  Disunnahkan dibagi 3: untuk keluarga, tetangga, dan fakir miskin
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Aqiqah Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Tentang Aqiqah
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Ketentuan Aqiqah</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Anak laki-laki: 2 ekor kambing</li>
                  <li>• Anak perempuan: 1 ekor kambing</li>
                  <li>• Kambing minimal 1 tahun</li>
                  <li>• Sehat dan tidak cacat</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Waktu Pelaksanaan</h5>
                <p className="text-sm text-muted-foreground">
                  Disunnahkan pada hari ke-7 setelah kelahiran, boleh juga hari ke-14 atau ke-21
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Hikmah Aqiqah</h5>
                <p className="text-sm text-muted-foreground">
                  Ungkapan syukur atas kelahiran, perlindungan untuk anak, dan berbagi dengan sesama
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">Timeline Pemesanan</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Proses mudah dan transparan dari pemesanan hingga distribusi
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h4 className="mb-2 text-white">1. Pemesanan</h4>
              <p className="text-sm text-white/80">Pilih paket dan lakukan pembayaran</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="mb-2 text-white">2. Verifikasi</h4>
              <p className="text-sm text-white/80">Konfirmasi pembayaran dan data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8" />
              </div>
              <h4 className="mb-2 text-white">3. Penyembelihan</h4>
              <p className="text-sm text-white/80">Dilakukan sesuai waktu yang ditentukan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="mb-2 text-white">4. Distribusi</h4>
              <p className="text-sm text-white/80">Daging dibagikan ke yang berhak</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
