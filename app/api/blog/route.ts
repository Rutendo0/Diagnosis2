import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/../server/storage';
import { insertBlogPostSchema } from '@shared/schema';

export async function GET() {
  try {
    const posts = await storage.getBlogPosts();
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
    const post = await storage.createBlogPost(result.data);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
} 