import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { AdminLayout } from './components/admin/AdminLayout';

// Public Pages
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

// Admin Pages
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import ProgramsPage from './pages/admin/ProgramsPage';
import ActivitiesPage from './pages/admin/ActivitiesPage';
import PostsPage from './pages/admin/PostsPage';
import GalleryPage from './pages/admin/GalleryPage';
import DonationsPage from './pages/admin/DonationsPage';
import FundraisingProgramsPage from './pages/admin/FundraisingProgramsPage';
import MessagesPage from './pages/admin/MessagesPage';
import UsersPage from './pages/admin/UsersPage';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/*"
            element={
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
            }
          />

          {/* Admin Login Route */}
          <Route path="/admin/login" element={<LoginPage />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="programs" element={<ProgramsPage />} />
            <Route path="activities" element={<ActivitiesPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="fundraising-programs" element={<FundraisingProgramsPage />} />
            <Route path="donations" element={<DonationsPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}