import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Youtube, Twitter, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useState } from 'react';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: ['+62 752 123 4567', '+62 812 3456 7890'],
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@tpkiasma.org', 'admin@tpkiasma.org'],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: MapPin,
      title: 'Alamat',
      details: ['Jl. Landbouw No. 123', 'Bukittinggi, Sumatera Barat 26115'],
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['Senin - Jumat: 08:00 - 17:00', 'Sabtu: 08:00 - 12:00'],
      gradient: 'from-yellow-500 to-accent',
    },
  ];

  const socialMedia = [
    { name: 'Facebook', icon: Facebook, link: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, link: '#', color: 'hover:text-pink-600' },
    { name: 'Youtube', icon: Youtube, link: '#', color: 'hover:text-red-600' },
    { name: 'Twitter', icon: Twitter, link: '#', color: 'hover:text-sky-600' },
  ];

  const departments = [
    { name: 'Pendidikan', phone: '0812-3456-7890', email: 'pendidikan@tpkiasma.org' },
    { name: 'Sosial', phone: '0812-3456-7891', email: 'sosial@tpkiasma.org' },
    { name: 'Ekonomi', phone: '0812-3456-7892', email: 'ekonomi@tpkiasma.org' },
    { name: 'Donasi', phone: '0812-3456-7893', email: 'donasi@tpkiasma.org' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-accent/85"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-4">
              <MessageCircle className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Hubungi Kami</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ada yang Bisa <span className="text-accent">Kami Bantu?</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Tim kami siap melayani dan menjawab setiap pertanyaan Anda
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${info.gradient}`}></div>
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} items-center justify-center mb-2`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{info.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Send className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">Kirim Pesan</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-muted-foreground text-lg">
                Isi form di bawah ini dan kami akan segera merespons pesan Anda
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Lengkap *</label>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nomor Telepon *</label>
                  <input
                    type="tel"
                    placeholder="08xx xxxx xxxx"
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subjek *</label>
                  <input
                    type="text"
                    placeholder="Apa yang ingin Anda tanyakan?"
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pesan *</label>
                  <textarea
                    placeholder="Tulis pesan Anda di sini..."
                    rows={6}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {isSubmitting ? (
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90" disabled>
                    Mengirim...
                  </Button>
                ) : (
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90" onClick={handleSubmit}>
                    Kirim Pesan
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                )}

                {isSuccess && (
                  <div className="mt-4 text-sm text-green-500">
                    Pesan Anda telah terkirim!
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-8">
            {/* Map */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="relative h-[400px] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.234567890123!2d100.3693!3d-0.3055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd54b5c0000000%3A0x0!2sBukittinggi!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TPK IASMA Location"
                ></iframe>
              </div>
            </Card>

            {/* Departments */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Kontak Departemen</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{dept.name}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{dept.phone}</p>
                        <p className="text-sm text-muted-foreground">{dept.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">Ikuti Kami</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Media Sosial</h2>
              <p className="text-muted-foreground text-lg">
                Ikuti media sosial kami untuk update terbaru
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform ${social.color}`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-lg">{social.name}</div>
                            <div className="text-sm text-muted-foreground">@tpkiasma</div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-2 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pertanyaan Umum</h2>
            <p className="text-muted-foreground text-lg">
              Temukan jawaban cepat untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'Bagaimana cara berdonasi?', a: 'Kunjungi halaman Donasi untuk melihat berbagai cara mudah berdonasi' },
              { q: 'Program apa saja yang tersedia?', a: 'Lihat halaman Program untuk informasi lengkap program kami' },
              { q: 'Bagaimana cara menjadi relawan?', a: 'Hubungi kami melalui form kontak atau telepon untuk informasi relawan' },
              { q: 'Apakah ada laporan keuangan?', a: 'Ya, kami transparansi penuh. Laporan dapat diakses di website' },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <MessageCircle className="w-16 h-16 mx-auto text-accent" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Butuh Respon Cepat?
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              Hubungi kami via WhatsApp untuk mendapatkan respon lebih cepat
            </p>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl">
              <Phone className="mr-2 w-5 h-5" />
              WhatsApp: +62 812 3456 7890
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}