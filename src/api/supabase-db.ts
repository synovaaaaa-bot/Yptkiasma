// Supabase Database API untuk CRUD operations
import { supabase } from '@/lib/supabase';
import { requireAuth } from '@/lib/auth-helpers';
import type { NewProgram, Program, NewActivity, Activity, NewPost, Post, NewAlbum, Album, NewPhoto, Photo } from '@/db/schema';

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
    
    const { data, error } = await supabase
      .from('activities')
      .insert([activity])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: number, updates: Partial<Omit<Activity, 'id' | 'createdAt'>>): Promise<Activity> => {
    await requireAuth(); // Require authentication
    
    const { data, error } = await supabase
      .from('activities')
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
