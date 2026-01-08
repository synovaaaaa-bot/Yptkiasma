import { Calculator, DollarSign, Coins, TrendingUp, CheckCircle, Info, Banknote, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useState } from 'react';

export default function ZakatPage() {
  const [zakatType, setZakatType] = useState<'mal' | 'penghasilan' | 'emas' | 'perak'>('mal');
  
  // Zakat Mal
  const [harta, setHarta] = useState('');
  
  // Zakat Penghasilan
  const [penghasilan, setPenghasilan] = useState('');
  
  // Zakat Emas
  const [beratEmas, setBeratEmas] = useState('');
  const [hargaEmas, setHargaEmas] = useState('1050000'); // Harga per gram
  
  // Zakat Perak
  const [beratPerak, setBeratPerak] = useState('');
  const [hargaPerak, setHargaPerak] = useState('15000'); // Harga per gram

  const nishabEmas = 85; // gram
  const nishabPerak = 595; // gram
  const nishabUang = nishabEmas * parseFloat(hargaEmas); // Berdasarkan harga emas

  const calculateZakatMal = () => {
    const hartaValue = parseFloat(harta) || 0;
    if (hartaValue >= nishabUang) {
      return hartaValue * 0.025; // 2.5%
    }
    return 0;
  };

  const calculateZakatPenghasilan = () => {
    const penghasilanValue = parseFloat(penghasilan) || 0;
    const nishabPerBulan = nishabUang / 12;
    if (penghasilanValue >= nishabPerBulan) {
      return penghasilanValue * 0.025; // 2.5%
    }
    return 0;
  };

  const calculateZakatEmas = () => {
    const berat = parseFloat(beratEmas) || 0;
    const harga = parseFloat(hargaEmas) || 0;
    if (berat >= nishabEmas) {
      return berat * harga * 0.025; // 2.5%
    }
    return 0;
  };

  const calculateZakatPerak = () => {
    const berat = parseFloat(beratPerak) || 0;
    const harga = parseFloat(hargaPerak) || 0;
    if (berat >= nishabPerak) {
      return berat * harga * 0.025; // 2.5%
    }
    return 0;
  };

  const getCurrentZakat = () => {
    switch (zakatType) {
      case 'mal':
        return calculateZakatMal();
      case 'penghasilan':
        return calculateZakatPenghasilan();
      case 'emas':
        return calculateZakatEmas();
      case 'perak':
        return calculateZakatPerak();
      default:
        return 0;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const zakatTypes = [
    { id: 'mal', name: 'Zakat Mal', icon: Wallet, description: 'Harta yang tersimpan selama 1 tahun' },
    { id: 'penghasilan', name: 'Zakat Penghasilan', icon: Banknote, description: 'Gaji atau penghasilan bulanan' },
    { id: 'emas', name: 'Zakat Emas', icon: Coins, description: 'Emas yang dimiliki minimal 85 gram' },
    { id: 'perak', name: 'Zakat Perak', icon: DollarSign, description: 'Perak yang dimiliki minimal 595 gram' },
  ];

  const zakatBenefits = [
    {
      title: 'Mensucikan Harta',
      description: 'Membersihkan dan menyucikan harta yang kita miliki',
      icon: CheckCircle,
    },
    {
      title: 'Membantu Sesama',
      description: 'Menolong fakir miskin dan yang membutuhkan',
      icon: CheckCircle,
    },
    {
      title: 'Berkah Rezeki',
      description: 'Harta yang dizakati akan bertambah berkah',
      icon: CheckCircle,
    },
    {
      title: 'Rukun Islam',
      description: 'Menunaikan salah satu rukun Islam',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1639086420499-0abd22764cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/70" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl text-white">Kalkulator Zakat</h1>
            </div>
            <p className="text-lg md:text-xl text-white/90">
              Hitung zakat Anda dengan mudah dan akurat sesuai syariat Islam
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Type Selection */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Jenis Zakat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {zakatTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setZakatType(type.id as any)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        zakatType === type.id
                          ? 'bg-primary text-white shadow-md'
                          : 'hover:bg-muted border border-transparent hover:border-primary/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`w-5 h-5 mt-0.5 ${zakatType === type.id ? 'text-white' : 'text-primary'}`} />
                        <div>
                          <div className="font-semibold mb-1">{type.name}</div>
                          <div className={`text-xs ${zakatType === type.id ? 'text-white/80' : 'text-muted-foreground'}`}>
                            {type.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Info Nishab */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Info Nishab</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Nishab Emas:</span>
                  <span className="font-semibold">{nishabEmas} gram</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Nishab Perak:</span>
                  <span className="font-semibold">{nishabPerak} gram</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Nishab Uang:</span>
                  <span className="font-semibold">{formatCurrency(nishabUang)}</span>
                </div>
                <div className="pt-3 border-t">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <p>Zakat wajib dikeluarkan sebesar 2.5% jika harta mencapai nishab dan telah dimiliki selama 1 tahun (haul)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  {zakatTypes.find(t => t.id === zakatType)?.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Zakat Mal */}
                {zakatType === 'mal' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Total Harta yang Tersimpan Selama 1 Tahun
                      </label>
                      <Input
                        type="number"
                        placeholder="Masukkan jumlah harta (Rp)"
                        value={harta}
                        onChange={(e) => setHarta(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Termasuk: Tabungan, deposito, saham, emas, perak, dan aset lainnya
                      </p>
                    </div>
                  </div>
                )}

                {/* Zakat Penghasilan */}
                {zakatType === 'penghasilan' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Penghasilan per Bulan
                      </label>
                      <Input
                        type="number"
                        placeholder="Masukkan penghasilan bulanan (Rp)"
                        value={penghasilan}
                        onChange={(e) => setPenghasilan(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Gaji bersih atau penghasilan kotor sebelum dikurangi kebutuhan pokok
                      </p>
                    </div>
                  </div>
                )}

                {/* Zakat Emas */}
                {zakatType === 'emas' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Berat Emas yang Dimiliki (gram)
                      </label>
                      <Input
                        type="number"
                        placeholder="Masukkan berat emas"
                        value={beratEmas}
                        onChange={(e) => setBeratEmas(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Harga Emas per Gram (Rp)
                      </label>
                      <Input
                        type="number"
                        placeholder="Masukkan harga emas"
                        value={hargaEmas}
                        onChange={(e) => setHargaEmas(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Nishab: {nishabEmas} gram emas
                      </p>
                    </div>
                  </div>
                )}

                {/* Zakat Perak */}
                {zakatType === 'perak' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Berat Perak yang Dimiliki (gram)
                      </label>
                      <Input
                        type="number"
                        placeholder="Masukkan berat perak"
                        value={beratPerak}
                        onChange={(e) => setBeratPerak(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Harga Perak per Gram (Rp)
                      </label>
                      <Input
                        type="number"
                        placeholder="Masukkan harga perak"
                        value={hargaPerak}
                        onChange={(e) => setHargaPerak(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Nishab: {nishabPerak} gram perak
                      </p>
                    </div>
                  </div>
                )}

                {/* Result */}
                <div className="pt-6 border-t">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Zakat yang Harus Dibayar:</p>
                      <p className="text-4xl font-bold text-primary mb-4">{formatCurrency(getCurrentZakat())}</p>
                      {getCurrentZakat() > 0 ? (
                        <Badge className="bg-green-500 text-white">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Wajib Zakat
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          Belum Mencapai Nishab
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {getCurrentZakat() > 0 && (
                  <div className="flex gap-3">
                    <Button className="flex-1" size="lg">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Bayar Zakat Sekarang
                    </Button>
                    <Button variant="outline" size="lg">
                      Reset
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Keutamaan Menunaikan Zakat</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Zakat adalah rukun Islam yang ketiga dan memiliki banyak hikmah serta keutamaan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zakatBenefits.map((benefit, index) => {
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
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Penerima Zakat (8 Asnaf)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Fakir</h5>
                    <p className="text-sm text-muted-foreground">Orang yang tidak memiliki harta dan pekerjaan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Miskin</h5>
                    <p className="text-sm text-muted-foreground">Orang yang memiliki harta namun tidak mencukupi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Amil</h5>
                    <p className="text-sm text-muted-foreground">Panitia atau pengelola zakat</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Muallaf</h5>
                    <p className="text-sm text-muted-foreground">Orang yang baru masuk Islam</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">5</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Riqab</h5>
                    <p className="text-sm text-muted-foreground">Budak atau hamba sahaya yang ingin merdeka</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">6</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Gharimin</h5>
                    <p className="text-sm text-muted-foreground">Orang yang memiliki hutang</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">7</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Fisabilillah</h5>
                    <p className="text-sm text-muted-foreground">Pejuang di jalan Allah</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">8</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Ibnu Sabil</h5>
                    <p className="text-sm text-muted-foreground">Orang yang kehabisan bekal dalam perjalanan</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
