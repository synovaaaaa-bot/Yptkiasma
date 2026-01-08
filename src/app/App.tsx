import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilPage from './pages/ProfilPage';
import ProgramPage from './pages/ProgramPage';
import KegiatanPage from './pages/KegiatanPage';
import BeritaPage from './pages/BeritaPage';
import GaleriPage from './pages/GaleriPage';
import DonasiPage from './pages/DonasiPage';
import KontakPage from './pages/KontakPage';
import AlQuranPage from './pages/AlQuranPage';
import ZakatPage from './pages/ZakatPage';
import HewanPage from './pages/HewanPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/kegiatan" element={<KegiatanPage />} />
            <Route path="/berita" element={<BeritaPage />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/donasi" element={<DonasiPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            <Route path="/alquran" element={<AlQuranPage />} />
            <Route path="/zakat" element={<ZakatPage />} />
            <Route path="/hewan" element={<HewanPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}