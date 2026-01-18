import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Get database URL from environment variable
const connectionString = import.meta.env.VITE_DATABASE_URL || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set in environment variables');
}

// Create postgres connection
const client = postgres(connectionString, { ssl: 'require' });

// Create Drizzle instance
export const db = drizzle(client, { schema });

// Export schema for use in queries
export * from './schema';
