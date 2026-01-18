// Script to migrate data from collections to localStorage/database
import { programs } from '@/collections/programs';
import { activities } from '@/collections/activities';
import { posts } from '@/collections/posts';
import { programsApi, activitiesApi, postsApi } from './database';

export async function migrateData() {
  console.log('🚀 Starting data migration...');

  try {
    // Check if data already migrated
    const existingPrograms = await programsApi.getAll();
    if (existingPrograms.length > 0) {
      console.log('✅ Data already migrated. Skipping...');
      return;
    }

    // Migrate Programs
    console.log('📦 Migrating programs...');
    for (const program of programs) {
      await programsApi.create({
        title: program.title,
        description: program.description,
        category: program.category,
        image: program.image,
        status: 'active',
      });
    }
    console.log(`✅ Migrated ${programs.length} programs`);

    // Migrate Activities
    console.log('📦 Migrating activities...');
    for (const activity of activities) {
      await activitiesApi.create({
        title: activity.title,
        description: activity.description,
        date: activity.date,
        location: activity.location,
        image: activity.images?.[0] || '',
        status: new Date(activity.date) > new Date() ? 'upcoming' : 'completed',
      });
    }
    console.log(`✅ Migrated ${activities.length} activities`);

    // Migrate Posts
    console.log('📦 Migrating posts...');
    for (const post of posts) {
      await postsApi.create({
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        image: post.featuredImage,
        author: post.author,
        category: post.categories[0],
        status: 'published',
        publishedAt: post.publishedDate,
      });
    }
    console.log(`✅ Migrated ${posts.length} posts`);

    console.log('🎉 Data migration completed!');
  } catch (error) {
    console.error('❌ Migration error:', error);
  }
}

// Note: Call migrateData() manually from admin dashboard when needed
// Do not auto-execute to avoid performance issues and duplicate data
