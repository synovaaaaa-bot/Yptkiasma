import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { adminUsers } from './schema';
import bcrypt from 'bcryptjs';

async function seed() {
  try {
    console.log('🌱 Seeding database...');

    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL is not set in environment variables');
    }

    const client = postgres(connectionString, { ssl: 'require' });
    const db = drizzle(client);

    // Create default admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    await db.insert(adminUsers).values({
      username: 'admin',
      password: hashedPassword,
      email: 'admin@yayasan.com',
      fullName: 'Administrator',
      role: 'admin',
    }).onConflictDoNothing();

    console.log('✅ Database seeded successfully!');
    console.log('Default admin credentials:');
    console.log('Username: admin');
    console.log('Password: admin123');
    
    await client.end();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed();
