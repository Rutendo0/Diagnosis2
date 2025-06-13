import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@shared/schema";

export default function BlogPage() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-96 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Automotive Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Expert insights, technical guides, and the latest automotive diagnostic solutions
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts?.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
              <CardHeader className="p-0">
                {post.imageUrl && (
                  <div className="relative overflow-hidden rounded-t-lg h-48">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80';
                      }}
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-orange-500 text-white border-0">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
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
                  
                  <Link href={`/blog/${post.id}`}>
                    <div className="inline-flex items-center space-x-1 text-orange-600 hover:text-orange-700 font-medium transition-colors cursor-pointer">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No posts message */}
        {posts && posts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-4">
              No blog posts yet
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Check back soon for expert automotive insights and guides.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}