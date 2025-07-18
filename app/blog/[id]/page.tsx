"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2, MessageSquare, Phone, Clipboard as ClipboardIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const params = useParams();
  const postId = params?.id ? parseInt(params.id as string) : null;

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog", postId],
    queryFn: async () => {
      if (!postId) throw new Error("No post ID provided");
      const response = await fetch(`/api/blog/${postId}`);
      if (!response.ok) throw new Error("Failed to fetch post");
      return response.json();
    },
    enabled: !!postId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="animate-pulse space-y-8 max-w-4xl mx-auto">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
            <div className="h-64 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blog">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
        <article className="max-w-3xl mx-auto bg-white/95 dark:bg-slate-900/90 rounded-2xl shadow-2xl p-6 md:p-12 border border-slate-100 dark:border-slate-800">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge variant="secondary" className="bg-orange-500 text-white border-0 px-4 py-1 text-base rounded-full shadow">
                {post.category}
              </Badge>
              <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Recent"}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-900 dark:text-blue-100 mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          {post.imageUrl && (
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10 shadow-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80';
                }}
                loading="lazy"
                style={{ display: 'block' }}
              />
              {/* Optional overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-slate-700 dark:text-slate-300 leading-relaxed">
            {post.content && post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') {
                return <div key={index} className="h-6"></div>;
              }
              return (
                <p key={index} className="mb-8 text-base md:text-lg leading-8 text-justify font-light tracking-wide">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Simple Share and Contact Section */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              {/* Share */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                  Share This Article
                </h3>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={async () => {
                      const shareUrl = window.location.href;
                      const shareText = `${post.title}\n\n${post.excerpt}\n\nView the full article: ${shareUrl}`;
                      const shareData = {
                        title: post.title,
                        text: `${post.excerpt}\n\nView the full article: ${shareUrl}`,
                        url: shareUrl,
                      };
                      if (navigator.share) {
                        try {
                          await navigator.share(shareData);
                        } catch (err) {
                          // fallback to WhatsApp if user cancels or error
                          window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
                        }
                      } else {
                        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
                      }
                    }}
                    aria-label="Share this article"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(window.location.href);
                        // Professional toast/snackbar
                        const toast = document.createElement('div');
                        toast.textContent = 'Link copied to clipboard!';
                        toast.setAttribute('role', 'status');
                        toast.setAttribute('aria-live', 'polite');
                        toast.className = 'fixed top-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold text-base transition-all duration-300 opacity-0 pointer-events-none';
                        document.body.appendChild(toast);
                        // Animate in
                        setTimeout(() => {
                          toast.style.opacity = '1';
                          toast.style.pointerEvents = 'auto';
                        }, 10);
                        // Animate out
                        setTimeout(() => {
                          toast.style.opacity = '0';
                          toast.style.pointerEvents = 'none';
                          setTimeout(() => document.body.removeChild(toast), 300);
                        }, 2000);
                      } catch (err) {
                        alert('Failed to copy link. Please copy manually.');
                      }
                    }}
                    aria-label="Copy article link"
                  >
                    <ClipboardIcon className="w-4 h-4 mr-2" />
                    Copy Link
                  </Button>
                </div>
              </div>

              {/* Contact */}
              <div className="text-right">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                  Need Help?
                </h3>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <p>Harare: +263 242 770 389</p>
                  <p>Bulawayo: +263 292 883 884</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 