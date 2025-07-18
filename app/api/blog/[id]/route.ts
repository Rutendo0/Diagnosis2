import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/../server/storage';
import { insertBlogPostSchema } from '@shared/schema';

export async function GET(
  _req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = parseInt(context.params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid blog post ID' }, { status: 400 });
    }
    const post = await storage.getBlogPost(id);
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
    const post = await storage.updateBlogPost(id, result.data);
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
    const deleted = await storage.deleteBlogPost(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
} 