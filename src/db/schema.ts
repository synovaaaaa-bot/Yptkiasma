import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

// Admin Users Table
// NOTE: Authentication is handled by Supabase Auth (no password storage here)
// This table stores additional admin metadata only
export const adminUsers = pgTable('admin_users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  fullName: text('full_name').notNull(),
  role: text('role').notNull().default('admin'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Programs Table
export const programs = pgTable('programs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  image: text('image'),
  category: text('category').notNull(),
  status: text('status').notNull().default('active'),
  schedule: text('schedule'), // Jadwal program (e.g., "Sepanjang Tahun")
  location: text('location'), // Lokasi program (e.g., "Berbagai Lokasi")
  participants: text('participants'), // Jumlah peserta (e.g., "100+ Terbantu")
  contact: text('contact'), // Kontak informasi (e.g., "0812-3456-7890")
  benefits: text('benefits'), // Manfaat program (JSON array atau comma-separated)
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Activities Table
export const activities = pgTable('activities', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  image: text('image'),
  date: text('date').notNull(),
  location: text('location'),
  status: text('status').notNull().default('upcoming'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Posts/News Table
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  image: text('image'),
  author: text('author').notNull(),
  category: text('category').notNull(),
  status: text('status').notNull().default('draft'),
  sourceUrl: text('source_url'), // URL sumber artikel (e.g., Instagram, Facebook)
  documentationUrl: text('documentation_url'), // URL dokumentasi (e.g., Instagram post)
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Gallery Albums Table
export const albums = pgTable('albums', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  coverImage: text('cover_image'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Gallery Photos Table
export const photos = pgTable('photos', {
  id: serial('id').primaryKey(),
  albumId: integer('album_id').notNull().references(() => albums.id, { onDelete: 'cascade' }),
  url: text('url').notNull(),
  caption: text('caption'),
  order: integer('order').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Donations Table
export const donations = pgTable('donations', {
  id: serial('id').primaryKey(),
  donorName: text('donor_name').notNull(),
  donorEmail: text('donor_email'),
  donorPhone: text('donor_phone'),
  amount: integer('amount').notNull(),
  program: text('program'),
  paymentMethod: text('payment_method'),
  accountNumber: text('account_number'), // Nomor rekening pengirim
  paymentProof: text('payment_proof'), // URL bukti transfer
  paymentStatus: text('payment_status').notNull().default('pending'), // pending, approved, rejected
  adminNotes: text('admin_notes'), // Catatan admin
  verifiedAt: timestamp('verified_at'),
  verifiedBy: text('verified_by'),
  message: text('message'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Contact Messages Table
export const contactMessages = pgTable('contact_messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  status: text('status').notNull().default('unread'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Fundraising Programs Table (Program Donasi)
export const fundraisingPrograms = pgTable('fundraising_programs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  target: integer('target').notNull(), // Target donasi
  collected: integer('collected').default(0), // Total terkumpul (calculated from approved donations)
  image: text('image'), // Cover image
  status: text('status').notNull().default('active'), // active, completed, paused
  urgent: boolean('urgent').default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type AdminUser = typeof adminUsers.$inferSelect;
export type NewAdminUser = typeof adminUsers.$inferInsert;
export type FundraisingProgram = typeof fundraisingPrograms.$inferSelect;
export type NewFundraisingProgram = typeof fundraisingPrograms.$inferInsert;

// Note: For admin authentication, use Supabase Auth API:
// supabase.auth.signInWithPassword({ email, password })
// Passwords are securely hashed by Supabase Auth
export type Program = typeof programs.$inferSelect;
export type NewProgram = typeof programs.$inferInsert;
export type Activity = typeof activities.$inferSelect;
export type NewActivity = typeof activities.$inferInsert;
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
export type Album = typeof albums.$inferSelect;
export type NewAlbum = typeof albums.$inferInsert;
export type Photo = typeof photos.$inferSelect;
export type NewPhoto = typeof photos.$inferInsert;
export type Donation = typeof donations.$inferSelect;
export type NewDonation = typeof donations.$inferInsert;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type NewContactMessage = typeof contactMessages.$inferInsert;

// Contact Info Table (General contact information)
export const contactInfo = pgTable('contact_info', {
  id: serial('id').primaryKey(),
  phone: text('phone'),
  phone2: text('phone2'), // Second phone number
  email: text('email'),
  address: text('address'),
  operationalHours: text('operational_hours'), // First line of hours
  operationalHours2: text('operational_hours2'), // Second line of hours
  mapEmbedUrl: text('map_embed_url'), // Google Maps embed URL
  heroTitle: text('hero_title'), // Hero section title
  heroSubtitle: text('hero_subtitle'), // Hero section subtitle
  whatsapp: text('whatsapp'), // WhatsApp number
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Contact Departments Table
export const contactDepartments = pgTable('contact_departments', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  phone: text('phone'),
  email: text('email'),
  order: integer('order').default(0), // For sorting
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type NewContactInfo = typeof contactInfo.$inferInsert;
export type ContactInfo = typeof contactInfo.$inferSelect;
export type NewContactDepartment = typeof contactDepartments.$inferInsert;
export type ContactDepartment = typeof contactDepartments.$inferSelect;

// Management Team (Pengurus) Table
export const managementTeam = pgTable('management_team', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  position: text('position').notNull(),
  image: text('image'), // Profile image URL
  bio: text('bio'), // Short biography
  email: text('email'),
  phone: text('phone'),
  order: integer('order').default(0), // For sorting/display order
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type NewManagementTeam = typeof managementTeam.$inferInsert;
export type ManagementTeam = typeof managementTeam.$inferSelect;
