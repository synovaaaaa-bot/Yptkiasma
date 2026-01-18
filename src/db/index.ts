import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// NOTE: This file is for SERVER-SIDE operations only (migrations, seeding)
// For client-side database access, use Supabase client in src/api/supabase-db.ts

// Get database URL from environment variable (server-side only)
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set. This file requires server-side Node.js environment.');
}

// Create postgres connection
const client = postgres(connectionString, { ssl: 'require' });

// Create Drizzle instance
export const db = drizzle(client, { schema });

// Export schema for use in queries
export * from './schema';
