// Migration script untuk migrate data dari collections ke Supabase
import { supabase } from '@/lib/supabase';
import { programs } from '@/collections/programs';
import { activities } from '@/collections/activities';
import { posts } from '@/collections/posts';

export async function migrateToSupabase() {
  console.log('🚀 Starting Supabase migration...');

  try {
    // Check if data already exists
    const { data: existingPrograms } = await supabase
      .from('programs')
      .select('id')
      .limit(1);

    if (existingPrograms && existingPrograms.length > 0) {
      console.log('✅ Data already migrated. Skipping...');
      return { success: true, message: 'Data already exists' };
    }

    // Migrate Programs
    console.log('📦 Migrating programs...');
    const programsToInsert = programs.map(program => ({
      title: program.title,
      description: program.description,
      category: program.category,
      image: program.image,
      status: 'active',
    }));

    const { error: programsError } = await supabase
      .from('programs')
      .insert(programsToInsert);

    if (programsError) {
      console.error('Error migrating programs:', programsError);
      throw programsError;
    }
    console.log(`✅ Migrated ${programs.length} programs`);

    // Migrate Activities
    console.log('📦 Migrating activities...');
    const activitiesToInsert = activities.map(activity => ({
      title: activity.title,
      description: activity.description,
      date: activity.date,
      location: activity.location,
      image: activity.images?.[0] || null,
      status: new Date(activity.date) > new Date() ? 'upcoming' : 'completed',
    }));

    const { error: activitiesError } = await supabase
      .from('activities')
      .insert(activitiesToInsert);

    if (activitiesError) {
      console.error('Error migrating activities:', activitiesError);
      throw activitiesError;
    }
    console.log(`✅ Migrated ${activities.length} activities`);

    // Migrate Posts
    console.log('📦 Migrating posts...');
    const postsToInsert = posts.map(post => ({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      image: post.featuredImage,
      author: post.author,
      category: post.categories[0] || 'Umum',
      status: 'published',
      published_at: post.publishedDate,
    }));

    const { error: postsError } = await supabase
      .from('posts')
      .insert(postsToInsert);

    if (postsError) {
      console.error('Error migrating posts:', postsError);
      throw postsError;
    }
    console.log(`✅ Migrated ${posts.length} posts`);

    console.log('🎉 Migration completed successfully!');
    return { 
      success: true, 
      message: `Migrated ${programs.length} programs, ${activities.length} activities, ${posts.length} posts` 
    };

  } catch (error) {
    console.error('❌ Migration error:', error);
    return { success: false, error };
  }
}

// Auto-run migration on app start (only once)
if (typeof window !== 'undefined') {
  const migrated = localStorage.getItem('supabase_migrated');
  if (!migrated) {
    migrateToSupabase().then(result => {
      if (result.success) {
        localStorage.setItem('supabase_migrated', 'true');
      }
    });
  }
}
