// Statistics API - Calculate statistics from database
import { programsApi, activitiesApi } from './supabase-db';
import { donationsApi } from './donations-api';

export interface PublicStats {
  penerimaManfaat: string; // Formatted number
  programAktif: number;
  tahunBerdedikasi: string; // Formatted string
  amanahTransparan: string; // Percentage
}

export const statsApi = {
  // Get public statistics for homepage and profile page
  async getPublicStats(): Promise<PublicStats> {
    try {
      // Get all data in parallel
      const [programs, activities, donationStats] = await Promise.all([
        programsApi.getAll(),
        activitiesApi.getAll(),
        donationsApi.getStats().catch(() => ({ approved: 0, total: 0 })),
      ]);

      // Calculate Program Aktif (active programs)
      const activePrograms = programs.filter(p => p.status === 'active').length;

      // Calculate Penerima Manfaat
      // Option 1: Use approved donations count (each donation = 1 beneficiary)
      // Option 2: Use activities count (each activity = multiple beneficiaries)
      // We'll use a combination: approved donations + activities count
      const penerimaManfaatCount = donationStats.approved + activities.length * 10; // Estimate 10 beneficiaries per activity
      const penerimaManfaat = penerimaManfaatCount >= 1000 
        ? `${Math.floor(penerimaManfaatCount / 1000)}K+`
        : penerimaManfaatCount >= 100
        ? `${Math.floor(penerimaManfaatCount / 100) * 100}+`
        : `${penerimaManfaatCount}+`;

      // Calculate Tahun Berdedikasi
      // Find the earliest program/activity date, or use 2009 as default
      const allDates: Date[] = [];
      programs.forEach(p => {
        if (p.createdAt) allDates.push(new Date(p.createdAt));
      });
      activities.forEach(a => {
        if (a.date) allDates.push(new Date(a.date));
      });
      
      const earliestDate = allDates.length > 0 
        ? new Date(Math.min(...allDates.map(d => d.getTime())))
        : new Date('2009-01-01'); // Default founding year
      
      const currentYear = new Date().getFullYear();
      const yearsActive = currentYear - earliestDate.getFullYear();
      const tahunBerdedikasi = yearsActive >= 15 ? '15+' : `${yearsActive}+`;

      // Calculate Amanah & Transparan (percentage of approved donations)
      const amanahPercentage = donationStats.total > 0
        ? Math.round((donationStats.approved / donationStats.total) * 100)
        : 100;
      const amanahTransparan = `${amanahPercentage}%`;

      return {
        penerimaManfaat,
        programAktif: activePrograms,
        tahunBerdedikasi,
        amanahTransparan,
      };
    } catch (error) {
      console.error('Error calculating stats:', error);
      // Return default values on error
      return {
        penerimaManfaat: '5000+',
        programAktif: 23,
        tahunBerdedikasi: '15+',
        amanahTransparan: '100%',
      };
    }
  },
};
