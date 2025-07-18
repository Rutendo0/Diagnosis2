import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db';
import { blogPosts, insertBlogPostSchema } from '@shared/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  _req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = parseInt(context.params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid blog post ID' }, { status: 400 });
    }
    const post = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).then(rows => rows[0]);
    if (!post) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = parseInt(context.params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid blog post ID' }, { status: 400 });
    }
    const body = await req.json();
    const result = insertBlogPostSchema.partial().safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: 'Invalid blog post data', details: result.error }, { status: 400 });
    }
    const updated = await db.update(blogPosts).set(result.data).where(eq(blogPosts.id, id)).returning();
    const post = updated[0];
    if (!post) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = parseInt(context.params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid blog post ID' }, { status: 400 });
    }
    const deleted = await db.delete(blogPosts).where(eq(blogPosts.id, id)).returning();
    if (!deleted[0]) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
} 