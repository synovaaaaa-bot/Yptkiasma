import { supabase } from './supabase';

/**
 * Check if user is authenticated
 * @returns Boolean indicating if user has valid session
 */
export async function isAuthenticated(): Promise<boolean> {
  const { data: { session } } = await supabase.auth.getSession();
  return !!session;
}

/**
 * Get current authenticated user
 */
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

/**
 * Get current session
 */
export async function getCurrentSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

/**
 * Throw error if user is not authenticated
 * Use this at the start of admin operations
 */
export async function requireAuth() {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    throw new Error('Authentication required. Please log in.');
  }
}

/**
 * Get authorization header for API calls
 * Returns the JWT token for authenticated requests
 */
export async function getAuthHeader(): Promise<string | null> {
  const session = await getCurrentSession();
  return session?.access_token || null;
}
