import { supabase } from '@/lib/supabase';

export const donationsApi = {
  // Get all donations
  async getAll() {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Get donations by status
  async getByStatus(status: string) {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .eq('status', status)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Get donation by ID
  async getById(id: number) {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Create donation (from public form)
  async create(donation: any) {
    const { data, error } = await supabase
      .from('donations')
      .insert([donation])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Approve donation
  async approve(id: number, adminNotes?: string, verifiedBy?: string) {
    const { data, error } = await supabase
      .from('donations')
      .update({
        status: 'approved',
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
  async reject(id: number, adminNotes: string, verifiedBy?: string) {
    const { data, error } = await supabase
      .from('donations')
      .update({
        status: 'rejected',
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
  async delete(id: number) {
    const { error } = await supabase
      .from('donations')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Get statistics
  async getStats() {
    const { data, error } = await supabase
      .from('donations')
      .select('status, amount');
    
    if (error) throw error;

    const stats = {
      total: data?.length || 0,
      pending: data?.filter(d => d.status === 'pending').length || 0,
      approved: data?.filter(d => d.status === 'approved').length || 0,
      rejected: data?.filter(d => d.status === 'rejected').length || 0,
      totalAmount: data?.filter(d => d.status === 'approved').reduce((sum, d) => sum + (d.amount || 0), 0) || 0,
    };

    return stats;
  },
};
