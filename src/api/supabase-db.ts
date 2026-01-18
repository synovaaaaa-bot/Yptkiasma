// Supabase Database API untuk CRUD operations
import { supabase } from '@/lib/supabase';
import { requireAuth } from '@/lib/auth-helpers';
import type { NewProgram, Program, NewActivity, Activity, NewPost, Post, NewAlbum, Album } from '@/db/schema';

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
    
    if (error) throw error;
    return data || [];
  },

  create: async (album: Omit<NewAlbum, 'id' | 'createdAt' | 'updatedAt'>): Promise<Album> => {
    await requireAuth(); // Require authentication
    
    const { data, error } = await supabase
      .from('albums')
      .insert([album])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: number, updates: Partial<Omit<Album, 'id' | 'createdAt'>>): Promise<Album> => {
    await requireAuth(); // Require authentication
    
    const { data, error } = await supabase
      .from('albums')
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
      .from('albums')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};
