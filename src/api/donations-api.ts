import { supabase } from '@/lib/supabase';
import { requireAuth, getCurrentUser } from '@/lib/auth-helpers';
import type { Donation, NewDonation } from '@/db/schema';
import { fundraisingProgramsApi } from './supabase-db';

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
    
    if (error) {
      console.error('Error fetching donations:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    return (data || []).map((donation: any) => ({
      id: donation.id,
      donorName: donation.donor_name || donation.donorName,
      donorEmail: donation.donor_email || donation.donorEmail,
      donorPhone: donation.donor_phone || donation.donorPhone,
      amount: donation.amount,
      program: donation.program,
      paymentMethod: donation.payment_method || donation.paymentMethod,
      accountNumber: donation.account_number || donation.accountNumber,
      paymentProof: donation.payment_proof || donation.paymentProof,
      paymentStatus: donation.payment_status || donation.paymentStatus,
      adminNotes: donation.admin_notes || donation.adminNotes,
      verifiedAt: donation.verified_at || donation.verifiedAt,
      verifiedBy: donation.verified_by || donation.verifiedBy,
      message: donation.message,
      createdAt: donation.created_at || donation.createdAt,
    }));
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
    
    if (error) {
      console.error('Error fetching donation:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    return {
      id: data.id,
      donorName: data.donor_name || data.donorName,
      donorEmail: data.donor_email || data.donorEmail,
      donorPhone: data.donor_phone || data.donorPhone,
      amount: data.amount,
      program: data.program,
      paymentMethod: data.payment_method || data.paymentMethod,
      accountNumber: data.account_number || data.accountNumber,
      paymentProof: data.payment_proof || data.paymentProof,
      paymentStatus: data.payment_status || data.paymentStatus,
      adminNotes: data.admin_notes || data.adminNotes,
      verifiedAt: data.verified_at || data.verifiedAt,
      verifiedBy: data.verified_by || data.verifiedBy,
      message: data.message,
      createdAt: data.created_at || data.createdAt,
    };
  },

  // Create donation (from public form)
  async create(donation: Omit<NewDonation, 'id' | 'createdAt' | 'paymentStatus'> | any): Promise<Donation> {
    // Validate required fields
    if (!donation.donorName && !donation.donor_name) {
      throw new Error('Nama donatur wajib diisi');
    }
    if (!donation.amount || donation.amount <= 0) {
      throw new Error('Jumlah donasi harus lebih dari 0');
    }
    
    // Transform camelCase to snake_case for Supabase
    // TODO: Consider changing `program` field to integer with foreign key to `fundraising_programs`
    // for better data integrity (currently stored as text for backward compatibility)
    const donationData: any = {
      donor_name: donation.donorName || donation.donor_name,
      donor_email: donation.donorEmail || donation.donor_email || null,
      donor_phone: donation.donorPhone || donation.donor_phone || null,
      amount: Number(donation.amount),
      program: donation.program || null, // Can be program ID (string) or null
      payment_method: donation.paymentMethod || donation.payment_method || null,
      account_number: donation.accountNumber || donation.account_number || null,
      payment_proof: donation.paymentProof || donation.payment_proof || null,
      payment_status: 'pending',
      message: donation.message || null,
    };
    
    console.log('Creating donation with data:', donationData);
    
    const { data, error } = await supabase
      .from('donations')
      .insert([donationData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating donation:', error);
      console.error('Error code:', error.code);
      console.error('Error details:', error.details);
      console.error('Error hint:', error.hint);
      throw new Error(error.message || 'Gagal membuat donasi');
    }
    
    if (!data) {
      throw new Error('Tidak ada data yang dikembalikan dari server');
    }
    
    console.log('Donation created successfully:', data);
    
    // Transform snake_case to camelCase
    return {
      id: data.id,
      donorName: data.donor_name || data.donorName,
      donorEmail: data.donor_email || data.donorEmail,
      donorPhone: data.donor_phone || data.donorPhone,
      amount: data.amount,
      program: data.program,
      paymentMethod: data.payment_method || data.paymentMethod,
      accountNumber: data.account_number || data.accountNumber,
      paymentProof: data.payment_proof || data.paymentProof,
      paymentStatus: data.payment_status || data.paymentStatus,
      adminNotes: data.admin_notes || data.adminNotes,
      verifiedAt: data.verified_at || data.verifiedAt,
      verifiedBy: data.verified_by || data.verifiedBy,
      message: data.message,
      createdAt: data.created_at || data.createdAt,
    };
  },

  // Approve donation
  async approve(id: number, adminNotes?: string, verifiedBy?: string): Promise<Donation> {
    await requireAuth(); // Require authentication
    
    // Get current user email if verifiedBy not provided
    if (!verifiedBy) {
      const user = await getCurrentUser();
      verifiedBy = user?.email || 'admin';
    }
    
    // Get donation first to check program
    const { data: donationData, error: fetchError } = await supabase
      .from('donations')
      .select('*')
      .eq('id', id)
      .single();
    
    if (fetchError) {
      console.error('Error fetching donation:', fetchError);
      throw fetchError;
    }
    
    const { data, error } = await supabase
      .from('donations')
      .update({
        payment_status: 'approved',
        admin_notes: adminNotes || null,
        verified_by: verifiedBy,
        verified_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error approving donation:', error);
      throw error;
    }
    
    // Update collected amount in fundraising program if program is set
    if (donationData.program && !isNaN(Number(donationData.program))) {
      try {
        await fundraisingProgramsApi.updateCollected(Number(donationData.program));
      } catch (updateError) {
        console.warn('Failed to update fundraising program collected amount:', updateError);
        // Don't throw - donation is already approved
      }
    }
    
    // Transform snake_case to camelCase
    return {
      id: data.id,
      donorName: data.donor_name || data.donorName,
      donorEmail: data.donor_email || data.donorEmail,
      donorPhone: data.donor_phone || data.donorPhone,
      amount: data.amount,
      program: data.program,
      paymentMethod: data.payment_method || data.paymentMethod,
      accountNumber: data.account_number || data.accountNumber,
      paymentProof: data.payment_proof || data.paymentProof,
      paymentStatus: data.payment_status || data.paymentStatus,
      adminNotes: data.admin_notes || data.adminNotes,
      verifiedAt: data.verified_at || data.verifiedAt,
      verifiedBy: data.verified_by || data.verifiedBy,
      message: data.message,
      createdAt: data.created_at || data.createdAt,
    };
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
        admin_notes: adminNotes || null,
        verified_by: verifiedBy,
        verified_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error rejecting donation:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    return {
      id: data.id,
      donorName: data.donor_name || data.donorName,
      donorEmail: data.donor_email || data.donorEmail,
      donorPhone: data.donor_phone || data.donorPhone,
      amount: data.amount,
      program: data.program,
      paymentMethod: data.payment_method || data.paymentMethod,
      accountNumber: data.account_number || data.accountNumber,
      paymentProof: data.payment_proof || data.paymentProof,
      paymentStatus: data.payment_status || data.paymentStatus,
      adminNotes: data.admin_notes || data.adminNotes,
      verifiedAt: data.verified_at || data.verifiedAt,
      verifiedBy: data.verified_by || data.verifiedBy,
      message: data.message,
      createdAt: data.created_at || data.createdAt,
    };
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
