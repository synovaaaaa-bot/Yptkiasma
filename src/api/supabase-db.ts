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
    
    // Transform camelCase to snake_case for Supabase (if needed)
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };
    if (updates.title !== undefined) updateData.title = updates.title;
    if (updates.description !== undefined) updateData.description = updates.description;
    if (updates.image !== undefined) updateData.image = updates.image || null;
    if (updates.category !== undefined) updateData.category = updates.category;
    if (updates.status !== undefined) updateData.status = updates.status;
    if ((updates as any).schedule !== undefined) updateData.schedule = (updates as any).schedule || null;
    if ((updates as any).location !== undefined) updateData.location = (updates as any).location || null;
    if ((updates as any).participants !== undefined) updateData.participants = (updates as any).participants || null;
    if ((updates as any).contact !== undefined) updateData.contact = (updates as any).contact || null;
    if ((updates as any).benefits !== undefined) updateData.benefits = (updates as any).benefits || null;
    
    const { data, error } = await supabase
      .from('programs')
      .update(updateData)
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
    
    // Ensure required fields are present
    if (!activityData.title || !activityData.description || !activityData.date) {
      throw new Error('Judul, deskripsi, dan tanggal wajib diisi');
    }
    
    // Transform camelCase to snake_case for Supabase
    const insertData: any = {
      title: activityData.title,
      description: activityData.description,
      date: activityData.date,
      location: activityData.location || null,
      status: activityData.status || 'upcoming',
      image: activityData.image || null,
    };
    
    console.log('Creating activity with data:', insertData);
    
    const { data, error } = await supabase
      .from('activities')
      .insert([insertData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating activity:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      throw new Error(error.message || 'Gagal membuat kegiatan');
    }
    
    console.log('Activity created successfully:', data);
    return data;
  },

  update: async (id: number, updates: Partial<Omit<Activity, 'id' | 'createdAt'>>): Promise<Activity> => {
    await requireAuth(); // Require authentication
    
    // Remove category if it exists (not in schema)
    const { category, ...updateData } = updates as any;
    
    // Transform camelCase to snake_case for Supabase
    const updatePayload: any = {
      updated_at: new Date().toISOString(),
    };
    
    if (updateData.title !== undefined) updatePayload.title = updateData.title;
    if (updateData.description !== undefined) updatePayload.description = updateData.description;
    if (updateData.date !== undefined) updatePayload.date = updateData.date;
    if (updateData.location !== undefined) updatePayload.location = updateData.location || null;
    if (updateData.status !== undefined) updatePayload.status = updateData.status;
    if (updateData.image !== undefined) updatePayload.image = updateData.image || null;
    
    console.log('Updating activity with data:', updatePayload);
    
    const { data, error } = await supabase
      .from('activities')
      .update(updatePayload)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating activity:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      throw new Error(error.message || 'Gagal mengupdate kegiatan');
    }
    
    console.log('Activity updated successfully:', data);
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
    
    // Transform camelCase to snake_case for Supabase
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };
    if (updates.title !== undefined) updateData.title = updates.title;
    if (updates.content !== undefined) updateData.content = updates.content;
    if (updates.excerpt !== undefined) updateData.excerpt = updates.excerpt;
    if (updates.author !== undefined) updateData.author = updates.author;
    if (updates.category !== undefined) updateData.category = updates.category;
    if (updates.status !== undefined) updateData.status = updates.status;
    if (updates.image !== undefined) updateData.image = updates.image || null;
    if (updates.sourceUrl !== undefined) updateData.source_url = updates.sourceUrl || null;
    if (updates.documentationUrl !== undefined) updateData.documentation_url = updates.documentationUrl || null;
    if (updates.publishedAt !== undefined) updateData.published_at = updates.publishedAt || null;
    
    const { data, error } = await supabase
      .from('posts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    // Transform snake_case to camelCase
    return {
      id: data.id,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt || null,
      image: data.image || null,
      author: data.author,
      category: data.category,
      status: data.status,
      sourceUrl: data.source_url || null,
      documentationUrl: data.documentation_url || null,
      publishedAt: data.published_at || null,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
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
    try {
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .eq('album_id', albumId)
        .order('order', { ascending: true });
      
      if (error) {
        console.error('Error fetching photos for album:', albumId, error);
        console.error('Error code:', error.code, 'Error message:', error.message);
        throw error;
      }
      
      if (!data) {
        console.log(`No photos found for album ${albumId}`);
        return [];
      }
      
      // Transform snake_case to camelCase
      const photos = data.map((photo: any) => ({
        id: photo.id,
        albumId: photo.album_id || photo.albumId,
        url: photo.url,
        caption: photo.caption || null,
        order: photo.order || 0,
        createdAt: photo.created_at || photo.createdAt,
      }));
      
      console.log(`Loaded ${photos.length} photos for album ${albumId}`);
      return photos;
    } catch (error: any) {
      console.error(`Failed to load photos for album ${albumId}:`, error);
      throw error;
    }
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

// Contact Info API
export const contactInfoApi = {
  get: async (): Promise<any> => {
    const { data, error } = await supabase
      .from('contact_info')
      .select('*')
      .order('id', { ascending: true })
      .limit(1)
      .single();
    
    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Error fetching contact info:', error);
      throw error;
    }
    
    // Return default if no data
    if (!data) {
      return {
        phone: '+62 752 1234567',
        phone2: '+62 812 3456 7890',
        email: 'info@ytpk.or.id',
        address: 'Jl. Landbouw No. 10, Bukittinggi, Sumatera Barat 26115',
        operationalHours: 'Senin - Jumat: 08:00 - 17:00',
        operationalHours2: 'Sabtu: 08:00 - 12:00',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.234567890123!2d100.3693!3d-0.3055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd54b5c0000000%3A0x0!2sBukittinggi!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid',
        heroTitle: 'Ada yang Bisa Kami Bantu?',
        heroSubtitle: 'Tim kami siap melayani dan menjawab setiap pertanyaan Anda',
        whatsapp: '+62 812 3456 7890',
      };
    }
    
    // Transform snake_case to camelCase
    return {
      id: data.id,
      phone: data.phone || null,
      phone2: data.phone2 || null,
      email: data.email || null,
      address: data.address || null,
      operationalHours: data.operational_hours || null,
      operationalHours2: data.operational_hours2 || null,
      mapEmbedUrl: data.map_embed_url || null,
      heroTitle: data.hero_title || null,
      heroSubtitle: data.hero_subtitle || null,
      whatsapp: data.whatsapp || null,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
  },

  update: async (updates: Partial<any>): Promise<any> => {
    await requireAuth();
    
    // Transform camelCase to snake_case
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };
    if (updates.phone !== undefined) updateData.phone = updates.phone || null;
    if (updates.phone2 !== undefined) updateData.phone2 = updates.phone2 || null;
    if (updates.email !== undefined) updateData.email = updates.email || null;
    if (updates.address !== undefined) updateData.address = updates.address || null;
    if (updates.operationalHours !== undefined) updateData.operational_hours = updates.operationalHours || null;
    if (updates.operationalHours2 !== undefined) updateData.operational_hours2 = updates.operationalHours2 || null;
    if (updates.mapEmbedUrl !== undefined) updateData.map_embed_url = updates.mapEmbedUrl || null;
    if (updates.heroTitle !== undefined) updateData.hero_title = updates.heroTitle || null;
    if (updates.heroSubtitle !== undefined) updateData.hero_subtitle = updates.heroSubtitle || null;
    if (updates.whatsapp !== undefined) updateData.whatsapp = updates.whatsapp || null;
    
    // Check if record exists
    const { data: existing } = await supabase
      .from('contact_info')
      .select('id')
      .limit(1)
      .single();
    
    let result;
    if (existing) {
      // Update existing
      const { data, error } = await supabase
        .from('contact_info')
        .update(updateData)
        .eq('id', existing.id)
        .select()
        .single();
      
      if (error) throw error;
      result = data;
    } else {
      // Create new
      const { data, error } = await supabase
        .from('contact_info')
        .insert([updateData])
        .select()
        .single();
      
      if (error) throw error;
      result = data;
    }
    
    // Transform snake_case to camelCase
    return {
      id: result.id,
      phone: result.phone || null,
      phone2: result.phone2 || null,
      email: result.email || null,
      address: result.address || null,
      operationalHours: result.operational_hours || null,
      operationalHours2: result.operational_hours2 || null,
      mapEmbedUrl: result.map_embed_url || null,
      heroTitle: result.hero_title || null,
      heroSubtitle: result.hero_subtitle || null,
      whatsapp: result.whatsapp || null,
      createdAt: result.created_at || result.createdAt,
      updatedAt: result.updated_at || result.updatedAt,
    };
  },
};

// Contact Departments API
export const contactDepartmentsApi = {
  getAll: async (): Promise<any[]> => {
    const { data, error } = await supabase
      .from('contact_departments')
      .select('*')
      .order('order', { ascending: true })
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    
    // Transform snake_case to camelCase
    return (data || []).map((dept: any) => ({
      id: dept.id,
      name: dept.name,
      phone: dept.phone || null,
      email: dept.email || null,
      order: dept.order || 0,
      createdAt: dept.created_at || dept.createdAt,
      updatedAt: dept.updated_at || dept.updatedAt,
    }));
  },

  create: async (department: Omit<any, 'id' | 'createdAt' | 'updatedAt'>): Promise<any> => {
    await requireAuth();
    
    const deptData: any = {
      name: department.name,
      phone: department.phone || null,
      email: department.email || null,
      order: department.order || 0,
    };
    
    const { data, error } = await supabase
      .from('contact_departments')
      .insert([deptData])
      .select()
      .single();
    
    if (error) throw error;
    
    return {
      id: data.id,
      name: data.name,
      phone: data.phone || null,
      email: data.email || null,
      order: data.order || 0,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
  },

  update: async (id: number, updates: Partial<any>): Promise<any> => {
    await requireAuth();
    
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };
    if (updates.name !== undefined) updateData.name = updates.name;
    if (updates.phone !== undefined) updateData.phone = updates.phone || null;
    if (updates.email !== undefined) updateData.email = updates.email || null;
    if (updates.order !== undefined) updateData.order = updates.order || 0;
    
    const { data, error } = await supabase
      .from('contact_departments')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return {
      id: data.id,
      name: data.name,
      phone: data.phone || null,
      email: data.email || null,
      order: data.order || 0,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
  },

  delete: async (id: number): Promise<void> => {
    await requireAuth();
    
    const { error } = await supabase
      .from('contact_departments')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};

// Management Team API
export const managementTeamApi = {
  getAll: async (): Promise<any[]> => {
    const { data, error } = await supabase
      .from('management_team')
      .select('*')
      .order('order', { ascending: true })
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    
    // Transform snake_case to camelCase
    return (data || []).map((member: any) => ({
      id: member.id,
      name: member.name,
      position: member.position,
      image: member.image || null,
      bio: member.bio || null,
      email: member.email || null,
      phone: member.phone || null,
      order: member.order || 0,
      createdAt: member.created_at || member.createdAt,
      updatedAt: member.updated_at || member.updatedAt,
    }));
  },

  getById: async (id: number): Promise<any> => {
    const { data, error } = await supabase
      .from('management_team')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    
    return {
      id: data.id,
      name: data.name,
      position: data.position,
      image: data.image || null,
      bio: data.bio || null,
      email: data.email || null,
      phone: data.phone || null,
      order: data.order || 0,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
  },

  create: async (member: Omit<any, 'id' | 'createdAt' | 'updatedAt'>): Promise<any> => {
    await requireAuth();
    
    const memberData: any = {
      name: member.name,
      position: member.position,
      image: member.image || null,
      bio: member.bio || null,
      email: member.email || null,
      phone: member.phone || null,
      order: member.order || 0,
    };
    
    const { data, error } = await supabase
      .from('management_team')
      .insert([memberData])
      .select()
      .single();
    
    if (error) throw error;
    
    return {
      id: data.id,
      name: data.name,
      position: data.position,
      image: data.image || null,
      bio: data.bio || null,
      email: data.email || null,
      phone: data.phone || null,
      order: data.order || 0,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
  },

  update: async (id: number, updates: Partial<any>): Promise<any> => {
    await requireAuth();
    
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };
    if (updates.name !== undefined) updateData.name = updates.name;
    if (updates.position !== undefined) updateData.position = updates.position;
    if (updates.image !== undefined) updateData.image = updates.image || null;
    if (updates.bio !== undefined) updateData.bio = updates.bio || null;
    if (updates.email !== undefined) updateData.email = updates.email || null;
    if (updates.phone !== undefined) updateData.phone = updates.phone || null;
    if (updates.order !== undefined) updateData.order = updates.order || 0;
    
    const { data, error } = await supabase
      .from('management_team')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return {
      id: data.id,
      name: data.name,
      position: data.position,
      image: data.image || null,
      bio: data.bio || null,
      email: data.email || null,
      phone: data.phone || null,
      order: data.order || 0,
      createdAt: data.created_at || data.createdAt,
      updatedAt: data.updated_at || data.updatedAt,
    };
  },

  delete: async (id: number): Promise<void> => {
    await requireAuth();
    
    const { error } = await supabase
      .from('management_team')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};
