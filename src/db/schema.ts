import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

// Admin Users Table
export const adminUsers = pgTable('admin_users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
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

export type AdminUser = typeof adminUsers.$inferSelect;
export type NewAdminUser = typeof adminUsers.$inferInsert;
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
