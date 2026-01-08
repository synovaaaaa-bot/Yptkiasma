// Collections Index - Easy import from one place
export { posts, default as postsCollection } from './posts';
export { programs, default as programsCollection } from './programs';
export { events, default as eventsCollection } from './events';

// Re-export types
export type { Post, Program, Event, Media, Category, GalleryItem, Donation } from '../types/collections';
