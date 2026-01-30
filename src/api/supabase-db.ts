// Supabase Database API untuk CRUD operations
import { supabase } from '@/lib/supabase';
import { requireAuth } from '@/lib/auth-helpers';
import type { NewProgram, Program, NewActivity, Activity, NewPost, Post, NewAlbum, Album, NewPhoto, Photo, ContactMessage, NewContactMessage, FundraisingProgram, NewFundraisingProgram } from '@/db/schema';

// Programs API
export const programsApi = {
  getAll: async (): Promise<Program[]> => {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  getById: async (id: number): Promise<Program> => {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  create: async (program: Omit<NewProgram, 'id' | 'createdAt' | 'updatedAt'>): Promise<Program> => {
    await requireAuth(); // Require authentication
    
    const { data, error } = await supabase
      .from('programs')
      .insert([program])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: number, updates: Partial<Omit<Program, 'id' | 'createdAt'>>): Promise<Program> => {
    await requireAuth(); // Require authentication
    
    const { data, error } = await supabase
      .from('programs')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: number): Promise<void> => {
    await requireAuth(); // Require authentication
    
    const { error } = await supabase
      .from('programs')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};

// Activities API
export const activitiesApi = {
  getAll: async (): Promise<Activity[]> => {
    const { data, error } = await supabase
      .from('activities')
      .select('*')
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  create: async (activity: Omit<NewActivity, 'id' | 'createdAt' | 'updatedAt'>): Promise<Activity> => {
    await requireAuth(); // Require authentication
    
    // Remove category if it exists (not in schema)
    const { category, ...activityData } = activity as any;
    
    const { data, error } = await supabase
      .from('activities')
      .insert([activityData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating activity:', error);
      throw new Error(error.message || 'Gagal membuat kegiatan');
    }
    return data;
  },

  update: async (id: number, updates: Partial<Omit<Activity, 'id' | 'createdAt'>>): Promise<Activity> => {
    await requireAuth(); // Require authentication
    
    // Remove category if it exists (not in schema)
    const { category, ...updateData } = updates as any;
    
    const { data, error } = await supabase
      .from('activities')
      .update({
        ...updateData,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating activity:', error);
      throw new Error(error.message || 'Gagal mengupdate kegiatan');
    }
    return data;
  },

  delete: async (id: number): Promise<void> => {
    await requireAuth(); // Require authentication
    
    const { error } = await supabase
      .from('activities')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};

// Posts API
export const postsApi = {
  getAll: async (): Promise<Post[]> => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  create: async (post: Omit<NewPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<Post> => {
    await requireAuth(); // Require authentication
    
    const { data, error } = await supabase
      .from('posts')
      .insert([post])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: number, updates: Partial<Omit<Post, 'id' | 'createdAt'>>): Promise<Post> => {
    await requireAuth(); // Require authentication
    
    const { data, error } = await supabase
      .from('posts')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: number): Promise<void> => {
    await requireAuth(); // Require authentication
    
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};

// Albums API
export const albumsApi = {
  getAll: async (): Promise<Album[]> => {
    const { data, error } = await supabase
      .from('albums')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching albums:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    const transformed = (data || []).map((album: any) => ({
      id: album.id,
      title: album.title,
      description: album.description || null,
      coverImage: album.cover_image || album.coverImage || null,
      createdAt: album.created_at || album.createdAt,
      updatedAt: album.updated_at || album.updatedAt,
    }));
    
    return transformed;
  },

  create: async (album: Omit<NewAlbum, 'id' | 'createdAt' | 'updatedAt'>): Promise<Album> => {
    await requireAuth(); // Require authentication
    
    // Transform camelCase to snake_case for Supabase
    const albumData: any = {
      title: album.title,
      description: album.description || null,
      cover_image: album.coverImage || null,
    };
    
    const { data, error } = await supabase
      .from('albums')
      .insert([albumData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating album:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    const transformed = {
      id: data.id,
      title: data.title,
      description: data.description || null,
      coverImage: data.cover_image || data.coverImage || null,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
    
    return transformed;
  },

  update: async (id: number, updates: Partial<Omit<Album, 'id' | 'createdAt'>>): Promise<Album> => {
    await requireAuth(); // Require authentication
    
    // Transform camelCase to snake_case for Supabase
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };
    
    if (updates.title !== undefined) updateData.title = updates.title;
    if (updates.description !== undefined) updateData.description = updates.description || null;
    if (updates.coverImage !== undefined) updateData.cover_image = updates.coverImage || null;
    
    const { data, error } = await supabase
      .from('albums')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating album:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    const transformed = {
      id: data.id,
      title: data.title,
      description: data.description || null,
      coverImage: data.cover_image || data.coverImage || null,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
    
    return transformed;
  },

  delete: async (id: number): Promise<void> => {
    await requireAuth(); // Require authentication
    
    const { error } = await supabase
      .from('albums')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};

// Photos API
export const photosApi = {
  getByAlbumId: async (albumId: number): Promise<Photo[]> => {
    const { data, error } = await supabase
      .from('photos')
      .select('*')
      .eq('album_id', albumId)
      .order('order', { ascending: true })
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    // Transform snake_case to camelCase
    return (data || []).map(photo => ({
      id: photo.id,
      albumId: photo.album_id,
      url: photo.url,
      caption: photo.caption,
      order: photo.order,
      createdAt: photo.created_at,
    }));
  },

  create: async (photo: Omit<NewPhoto, 'id' | 'createdAt'>): Promise<Photo> => {
    await requireAuth(); // Require authentication
    
    // Transform camelCase to snake_case for Supabase
    const photoData = {
      album_id: photo.albumId,
      url: photo.url,
      caption: photo.caption,
      order: photo.order,
    };
    
    const { data, error } = await supabase
      .from('photos')
      .insert([photoData])
      .select()
      .single();
    
    if (error) throw error;
    // Transform snake_case to camelCase
    return {
      id: data.id,
      albumId: data.album_id,
      url: data.url,
      caption: data.caption,
      order: data.order,
      createdAt: data.created_at,
    };
  },

  update: async (id: number, updates: Partial<Omit<Photo, 'id' | 'createdAt'>>): Promise<Photo> => {
    await requireAuth(); // Require authentication
    
    // Transform camelCase to snake_case for Supabase
    const updateData: any = {};
    if (updates.albumId !== undefined) updateData.album_id = updates.albumId;
    if (updates.url !== undefined) updateData.url = updates.url;
    if (updates.caption !== undefined) updateData.caption = updates.caption;
    if (updates.order !== undefined) updateData.order = updates.order;
    
    const { data, error } = await supabase
      .from('photos')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    // Transform snake_case to camelCase
    return {
      id: data.id,
      albumId: data.album_id,
      url: data.url,
      caption: data.caption,
      order: data.order,
      createdAt: data.created_at,
    };
  },

  delete: async (id: number): Promise<void> => {
    await requireAuth(); // Require authentication
    
    const { error } = await supabase
      .from('photos')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};

// Contact Messages API
export const contactMessagesApi = {
  getAll: async (): Promise<ContactMessage[]> => {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching contact messages:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    return (data || []).map((msg: any) => ({
      id: msg.id,
      name: msg.name,
      email: msg.email,
      phone: msg.phone || null,
      subject: msg.subject,
      message: msg.message,
      status: msg.status || 'unread',
      createdAt: msg.created_at || msg.createdAt,
    }));
  },

  getById: async (id: number): Promise<ContactMessage> => {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching contact message:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject,
      message: data.message,
      status: data.status || 'unread',
      createdAt: data.created_at || data.createdAt,
    };
  },

  create: async (message: Omit<NewContactMessage, 'id' | 'createdAt' | 'status'>): Promise<ContactMessage> => {
    // Transform camelCase to snake_case for Supabase
    const messageData: any = {
      name: message.name,
      email: message.email,
      phone: message.phone || null,
      subject: message.subject,
      message: message.message,
      status: 'unread',
    };
    
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([messageData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating contact message:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject,
      message: data.message,
      status: data.status || 'unread',
      createdAt: data.created_at || data.createdAt,
    };
  },

  update: async (id: number, updates: Partial<Omit<ContactMessage, 'id' | 'createdAt'>>): Promise<ContactMessage> => {
    await requireAuth(); // Require authentication
    
    const updateData: any = {};
    if (updates.name !== undefined) updateData.name = updates.name;
    if (updates.email !== undefined) updateData.email = updates.email;
    if (updates.phone !== undefined) updateData.phone = updates.phone;
    if (updates.subject !== undefined) updateData.subject = updates.subject;
    if (updates.message !== undefined) updateData.message = updates.message;
    if (updates.status !== undefined) updateData.status = updates.status;
    
    const { data, error } = await supabase
      .from('contact_messages')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating contact message:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject,
      message: data.message,
      status: data.status || 'unread',
      createdAt: data.created_at || data.createdAt,
    };
  },

  markAsRead: async (id: number): Promise<ContactMessage> => {
    await requireAuth(); // Require authentication
    
    const { data, error } = await supabase
      .from('contact_messages')
      .update({ status: 'read' })
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error marking message as read:', error);
      throw error;
    }
    
    // Transform snake_case to camelCase
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject,
      message: data.message,
      status: data.status || 'unread',
      createdAt: data.created_at || data.createdAt,
    };
  },

  delete: async (id: number): Promise<void> => {
    await requireAuth(); // Require authentication
    
    const { error } = await supabase
      .from('contact_messages')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting contact message:', error);
      throw error;
    }
  },
};

// Fundraising Programs API
export const fundraisingProgramsApi = {
  getAll: async (): Promise<FundraisingProgram[]> => {
    const { data, error } = await supabase
      .from('fundraising_programs')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching fundraising programs:', error);
      throw error;
    }
    
    return (data || []).map((program: any) => ({
      id: program.id,
      title: program.title,
      description: program.description || null,
      target: program.target,
      collected: program.collected || 0,
      image: program.image || null,
      status: program.status || 'active',
      urgent: program.urgent || false,
      createdAt: program.created_at || program.createdAt,
      updatedAt: program.updated_at || program.updatedAt,
    }));
  },

  getById: async (id: number): Promise<FundraisingProgram> => {
    const { data, error } = await supabase
      .from('fundraising_programs')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching fundraising program:', error);
      throw error;
    }
    
    return {
      id: data.id,
      title: data.title,
      description: data.description || null,
      target: data.target,
      collected: data.collected || 0,
      image: data.image || null,
      status: data.status || 'active',
      urgent: data.urgent || false,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
  },

  create: async (program: Omit<NewFundraisingProgram, 'id' | 'createdAt' | 'updatedAt' | 'collected'>): Promise<FundraisingProgram> => {
    await requireAuth();
    
    const programData: any = {
      title: program.title,
      description: program.description || null,
      target: program.target,
      collected: 0,
      image: program.image || null,
      status: program.status || 'active',
      urgent: program.urgent || false,
    };
    
    const { data, error } = await supabase
      .from('fundraising_programs')
      .insert([programData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating fundraising program:', error);
      throw error;
    }
    
    return {
      id: data.id,
      title: data.title,
      description: data.description || null,
      target: data.target,
      collected: data.collected || 0,
      image: data.image || null,
      status: data.status || 'active',
      urgent: data.urgent || false,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
  },

  update: async (id: number, updates: Partial<Omit<FundraisingProgram, 'id' | 'createdAt' | 'collected'>>): Promise<FundraisingProgram> => {
    await requireAuth();
    
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };
    if (updates.title !== undefined) updateData.title = updates.title;
    if (updates.description !== undefined) updateData.description = updates.description;
    if (updates.target !== undefined) updateData.target = updates.target;
    if (updates.image !== undefined) updateData.image = updates.image;
    if (updates.status !== undefined) updateData.status = updates.status;
    if (updates.urgent !== undefined) updateData.urgent = updates.urgent;
    
    const { data, error } = await supabase
      .from('fundraising_programs')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating fundraising program:', error);
      throw error;
    }
    
    return {
      id: data.id,
      title: data.title,
      description: data.description || null,
      target: data.target,
      collected: data.collected || 0,
      image: data.image || null,
      status: data.status || 'active',
      urgent: data.urgent || false,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
  },

  delete: async (id: number): Promise<void> => {
    await requireAuth();
    
    const { error } = await supabase
      .from('fundraising_programs')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting fundraising program:', error);
      throw error;
    }
  },

  // Update collected amount from approved donations
  updateCollected: async (id: number): Promise<number> => {
    await requireAuth();
    
    // Get program title for backward compatibility
    const program = await fundraisingProgramsApi.getById(id);
    
    // Get all approved donations for this program (by ID or title for backward compatibility)
    const { data: donations, error: donationsError } = await supabase
      .from('donations')
      .select('amount')
      .eq('payment_status', 'approved')
      .or(`program.eq.${id},program.eq.${program.title}`);
    
    if (donationsError) {
      console.error('Error calculating collected amount:', donationsError);
      throw donationsError;
    }
    
    const collected = donations?.reduce((sum, d) => sum + (d.amount || 0), 0) || 0;
    
    // Update the collected amount
    const { error } = await supabase
      .from('fundraising_programs')
      .update({ collected })
      .eq('id', id);
    
    if (error) {
      console.error('Error updating collected amount:', error);
      throw error;
    }
    
    return collected;
  },
};
