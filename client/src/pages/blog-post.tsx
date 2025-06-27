import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const [match, params] = useRoute("/blog/:id");
  const postId = params?.id ? parseInt(params.id) : null;

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog", postId],
    enabled: !!postId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12">
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
        <div className="container mx-auto px-4 py-12">
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
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Badge variant="secondary" className="bg-orange-500 text-white border-0">
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

            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          {post.imageUrl && (
            <div className="relative aspect-hero overflow-hidden rounded-xl mb-8 shadow-lg">
              <img
                src="/images/image10.jpg"
                alt={post.title}
                className="responsive-image"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80';
                }}
                loading="lazy"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {post.content && post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Found this helpful?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Share it with others who might benefit from this information.
                </p>
              </div>
              <Button 
                variant="outline" 
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-orange-200 hover:bg-orange-50"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Related/Contact Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-orange-900/20 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Need Professional Help?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Our expert technicians are ready to help with all your automotive diagnostic needs.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Harare:</strong> 0242 770 389 | +263 772 974 846
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Bulawayo:</strong> 0292 883 884 | +263 779 298 117
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}