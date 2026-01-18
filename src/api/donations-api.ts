import { supabase } from '@/lib/supabase';
import { requireAuth, getCurrentUser } from '@/lib/auth-helpers';
import type { Donation, NewDonation } from '@/db/schema';

interface DonationStats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  totalAmount: number;
}

export const donationsApi = {
  // Get all donations
  async getAll(): Promise<Donation[]> {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Get donations by status
  async getByStatus(status: string): Promise<Donation[]> {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .eq('payment_status', status)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Get donation by ID
  async getById(id: number): Promise<Donation> {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Create donation (from public form)
  async create(donation: Omit<NewDonation, 'id' | 'createdAt' | 'paymentStatus'>): Promise<Donation> {
    // Ensure payment_status is set to pending for new donations
    const donationData = {
      ...donation,
      payment_status: 'pending',
    };
    
    const { data, error } = await supabase
      .from('donations')
      .insert([donationData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Approve donation
  async approve(id: number, adminNotes?: string, verifiedBy?: string): Promise<Donation> {
    await requireAuth(); // Require authentication
    
    // Get current user email if verifiedBy not provided
    if (!verifiedBy) {
      const user = await getCurrentUser();
      verifiedBy = user?.email || 'admin';
    }
    
    const { data, error } = await supabase
      .from('donations')
      .update({
        payment_status: 'approved',
        admin_notes: adminNotes,
        verified_by: verifiedBy,
        verified_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Reject donation
  async reject(id: number, adminNotes: string, verifiedBy?: string): Promise<Donation> {
    await requireAuth(); // Require authentication
    
    // Get current user email if verifiedBy not provided
    if (!verifiedBy) {
      const user = await getCurrentUser();
      verifiedBy = user?.email || 'admin';
    }
    
    const { data, error } = await supabase
      .from('donations')
      .update({
        payment_status: 'rejected',
        admin_notes: adminNotes,
        verified_by: verifiedBy,
        verified_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete donation
  async delete(id: number): Promise<void> {
    await requireAuth(); // Require authentication
    
    const { error } = await supabase
      .from('donations')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Get statistics
  async getStats(): Promise<DonationStats> {
    const { data, error } = await supabase
      .from('donations')
      .select('payment_status, amount');
    
    if (error) throw error;

    const stats: DonationStats = {
      total: data?.length || 0,
      pending: data?.filter(d => d.payment_status === 'pending').length || 0,
      approved: data?.filter(d => d.payment_status === 'approved').length || 0,
      rejected: data?.filter(d => d.payment_status === 'rejected').length || 0,
      totalAmount: data?.filter(d => d.payment_status === 'approved').reduce((sum, d) => sum + (d.amount || 0), 0) || 0,
    };

    return stats;
  },
};
