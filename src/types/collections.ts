// Collection Types - matching Payload CMS structure
import { LucideIcon } from 'lucide-react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'author' | 'user';
  createdAt: string;
  updatedAt: string;
}

export interface Media {
  id: string;
  alt: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width?: number;
  height?: number;
  focalX?: number;
  focalY?: number;
  sizes?: {
    thumbnail?: { url: string; width: number; height: number };
    card?: { url: string; width: number; height: number };
    tablet?: { url: string; width: number; height: number };
  };
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parent?: string | Category;
  breadcrumbs?: Array<{
    id: string;
    label: string;
    url: string;
  }>;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string | Media;
  categories: Array<string | Category>;
  tags?: string[];
  author: string | User;
  publishedDate: string;
  _status: 'draft' | 'published';
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  layout?: LayoutBlock[];
  _status: 'draft' | 'published';
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string | Media;
  category: 'pendidikan' | 'sosial' | 'ekonomi' | 'kesehatan';
  status: 'active' | 'completed' | 'upcoming';
  targetAmount?: number;
  currentAmount?: number;
  participants?: number;
  startDate?: string;
  endDate?: string;
  location?: string;
  content?: string;
  benefits?: string[];
  requirements?: string[];
  _status: 'draft' | 'published';
  meta?: {
    title?: string;
    description?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string | Media;
  category: string;
  date: string;
  time: string;
  location: string;
  speaker?: string;
  maxParticipants?: number;
  registeredCount?: number;
  content?: string;
  _status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string | Media;
  category: 'bantuan-bencana' | 'bantuan-air-bersih' | 'donasi-santunan' | 'program-pendidikan' | 'bantuan-material' | 'majelis-taklim' | 'komunitas-alumni';
  date: string;
  location: string;
  participants?: number;
  content?: string;
  socialLinks?: Array<{
    platform: 'instagram' | 'facebook' | 'youtube' | 'threads';
    url: string;
  }>;
  featured?: boolean;
  _status: 'draft' | 'published';
  meta?: {
    title?: string;
    description?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Donation {
  id: string;
  donorName: string;
  amount: number;
  message?: string;
  program?: string | Program;
  isAnonymous: boolean;
  paymentMethod: 'transfer' | 'ewallet' | 'qris';
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image: string | Media;
  category: string;
  tags?: string[];
  date: string;
  _status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

// Layout Builder Blocks
export type LayoutBlock = HeroBlock | ContentBlock | MediaBlock | CTABlock | StatsBlock | FeaturesBlock;

export interface HeroBlock {
  blockType: 'hero';
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string | Media;
  ctaButtons?: Array<{
    label: string;
    link: string;
    style: 'primary' | 'secondary' | 'outline';
  }>;
}

export interface ContentBlock {
  blockType: 'content';
  id?: string;
  content: string;
  columns?: 1 | 2 | 3;
}

export interface MediaBlock {
  blockType: 'media';
  id?: string;
  media: string | Media;
  caption?: string;
  position: 'default' | 'wide' | 'fullWidth';
}

export interface CTABlock {
  blockType: 'cta';
  id?: string;
  title: string;
  description?: string;
  buttons: Array<{
    label: string;
    link: string;
    style: 'primary' | 'secondary';
  }>;
  backgroundColor?: string;
}

export interface StatsBlock {
  blockType: 'stats';
  id?: string;
  stats: Array<{
    value: string;
    label: string;
    icon?: LucideIcon;
  }>;
}

export interface FeaturesBlock {
  blockType: 'features';
  id?: string;
  title?: string;
  features: Array<{
    title: string;
    description: string;
    icon?: LucideIcon;
    image?: string | Media;
  }>;
}