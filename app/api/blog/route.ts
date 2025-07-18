import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../lib/db';
import { blogPosts, insertBlogPostSchema } from '@shared/schema';
import { desc } from 'drizzle-orm';

export async function GET() {
  try {
    const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = insertBlogPostSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: 'Invalid blog post data', details: result.error }, { status: 400 });
    }
    const inserted = await db.insert(blogPosts).values(result.data).returning();
    const post = inserted[0];
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
} 