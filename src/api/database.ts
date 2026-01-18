// DEPRECATED: This file uses localStorage
// Use src/api/supabase-db.ts instead for real Supabase integration

const STORAGE_KEYS = {
  PROGRAMS: 'ytpk_programs',
  ACTIVITIES: 'ytpk_activities',
  POSTS: 'ytpk_posts',
  ALBUMS: 'ytpk_albums',
  PHOTOS: 'ytpk_photos',
};

// Generic storage helpers
function getFromStorage<T>(key: string, defaultValue: T[] = []): T[] {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function saveToStorage<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}

// Programs API
export const programsApi = {
  getAll: async () => {
    return getFromStorage(STORAGE_KEYS.PROGRAMS);
  },
  
  getById: async (id: number) => {
    const programs = getFromStorage(STORAGE_KEYS.PROGRAMS);
    return programs.find((p: any) => p.id === id);
  },
  
  create: async (program: any) => {
    const programs = getFromStorage(STORAGE_KEYS.PROGRAMS);
    const newProgram = {
      ...program,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    programs.push(newProgram);
    saveToStorage(STORAGE_KEYS.PROGRAMS, programs);
    return newProgram;
  },
  
  update: async (id: number, updates: any) => {
    const programs = getFromStorage(STORAGE_KEYS.PROGRAMS);
    const index = programs.findIndex((p: any) => p.id === id);
    if (index !== -1) {
      programs[index] = {
        ...programs[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      saveToStorage(STORAGE_KEYS.PROGRAMS, programs);
      return programs[index];
    }
    throw new Error('Program not found');
  },
  
  delete: async (id: number) => {
    const programs = getFromStorage(STORAGE_KEYS.PROGRAMS);
    const filtered = programs.filter((p: any) => p.id !== id);
    saveToStorage(STORAGE_KEYS.PROGRAMS, filtered);
  },
};

// Activities API
export const activitiesApi = {
  getAll: async () => {
    return getFromStorage(STORAGE_KEYS.ACTIVITIES);
  },
  
  create: async (activity: any) => {
    const activities = getFromStorage(STORAGE_KEYS.ACTIVITIES);
    const newActivity = {
      ...activity,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    activities.push(newActivity);
    saveToStorage(STORAGE_KEYS.ACTIVITIES, activities);
    return newActivity;
  },
  
  update: async (id: number, updates: any) => {
    const activities = getFromStorage(STORAGE_KEYS.ACTIVITIES);
    const index = activities.findIndex((a: any) => a.id === id);
    if (index !== -1) {
      activities[index] = {
        ...activities[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      saveToStorage(STORAGE_KEYS.ACTIVITIES, activities);
      return activities[index];
    }
    throw new Error('Activity not found');
  },
  
  delete: async (id: number) => {
    const activities = getFromStorage(STORAGE_KEYS.ACTIVITIES);
    const filtered = activities.filter((a: any) => a.id !== id);
    saveToStorage(STORAGE_KEYS.ACTIVITIES, filtered);
  },
};

// Posts API
export const postsApi = {
  getAll: async () => {
    return getFromStorage(STORAGE_KEYS.POSTS);
  },
  
  create: async (post: any) => {
    const posts = getFromStorage(STORAGE_KEYS.POSTS);
    const newPost = {
      ...post,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    posts.push(newPost);
    saveToStorage(STORAGE_KEYS.POSTS, posts);
    return newPost;
  },
  
  update: async (id: number, updates: any) => {
    const posts = getFromStorage(STORAGE_KEYS.POSTS);
    const index = posts.findIndex((p: any) => p.id === id);
    if (index !== -1) {
      posts[index] = {
        ...posts[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      saveToStorage(STORAGE_KEYS.POSTS, posts);
      return posts[index];
    }
    throw new Error('Post not found');
  },
  
  delete: async (id: number) => {
    const posts = getFromStorage(STORAGE_KEYS.POSTS);
    const filtered = posts.filter((p: any) => p.id !== id);
    saveToStorage(STORAGE_KEYS.POSTS, filtered);
  },
};

// Albums API
export const albumsApi = {
  getAll: async () => {
    return getFromStorage(STORAGE_KEYS.ALBUMS);
  },
  
  create: async (album: any) => {
    const albums = getFromStorage(STORAGE_KEYS.ALBUMS);
    const newAlbum = {
      ...album,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    albums.push(newAlbum);
    saveToStorage(STORAGE_KEYS.ALBUMS, albums);
    return newAlbum;
  },
  
  update: async (id: number, updates: any) => {
    const albums = getFromStorage(STORAGE_KEYS.ALBUMS);
    const index = albums.findIndex((a: any) => a.id === id);
    if (index !== -1) {
      albums[index] = {
        ...albums[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      saveToStorage(STORAGE_KEYS.ALBUMS, albums);
      return albums[index];
    }
    throw new Error('Album not found');
  },
  
  delete: async (id: number) => {
    const albums = getFromStorage(STORAGE_KEYS.ALBUMS);
    const filtered = albums.filter((a: any) => a.id !== id);
    saveToStorage(STORAGE_KEYS.ALBUMS, filtered);
  },
};
