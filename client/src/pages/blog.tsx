import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Calendar, Clock, Phone, MapPin, Wrench, Battery, Zap, Home, Settings, User, MessageSquare, Plus, Edit3, Trash2, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import Logo from "@/components/logo";
import FloatingNavigation from "@/components/floating-navigation";
import type { BlogPost, InsertBlogPost } from "@shared/schema";

// Image declarations
const businessVehicleImg = "/images/bussinesvehicle1.jpg";
const vehicleServicingImg = "/images/vehicle-servicing.jpg";
const coolentTemperitureSensorsImg = "/images/sensors.jpg";
const sparkPlugImg = "/images/parts.jpg";
const coolantSensorsImg = "/images/sensors.jpg";
const servicePromoImg = "/images/vehicle.jpg";
const batteryPackImg = "/images/battery.jpg";
const liquidCoolingImg = "/images/battery2.jpg";
const hybridBatteryImg = "/images/battery3.jpg";
const aquaFitImg = "/images/image10.jpg";
const hybridBatteryPackImg = "/images/battery.jpg";
const teamPhotoImg = "/images/about.jpg";
const warrantyImg = "/images/image13.jpg";
const dieselInjectorsImg = "/images/injector.jpg";

export default function BlogPage() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [formData, setFormData] = useState<Partial<InsertBlogPost>>({
    title: "",
    content: "",
    excerpt: "",
    imageUrl: "",
    category: "",
    published: true,
  });

  const queryClient = useQueryClient();

  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const createPostMutation = useMutation({
    mutationFn: async (post: InsertBlogPost) => {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      if (!response.ok) throw new Error("Failed to create post");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setIsCreateDialogOpen(false);
      resetForm();
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: async ({ id, ...post }: Partial<BlogPost>) => {
      const response = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      if (!response.ok) throw new Error("Failed to update post");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setEditingPost(null);
      resetForm();
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete post");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
    },
  });

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      excerpt: "",
      imageUrl: "",
      category: "",
      published: true,
    });
    setImageFile(null);
    setImagePreview("");
  };

  const handleAdminLogin = () => {
    // Simple password protection - in production, use proper authentication
    if (adminPassword === "admin123") {
      setIsAdminMode(true);
      setShowPasswordDialog(false);
      setAdminPassword("");
    } else {
      alert("Incorrect password. Please contact administrator.");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
        setFormData({ ...formData, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      updatePostMutation.mutate({ ...formData, id: editingPost.id });
    } else {
      createPostMutation.mutate(formData as InsertBlogPost);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      imageUrl: post.imageUrl || "",
      category: post.category,
      published: post.published,
    });
    setImagePreview(post.imageUrl || "");
    setIsCreateDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--brand-orange)]"></div>
          <p className="mt-4 text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <FloatingNavigation />

      <div className="container mx-auto px-4 py-24">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-md border border-[var(--brand-blue)]/20">
            <div className="w-3 h-3 bg-[var(--brand-orange)] rounded-full"></div>
            <span className="text-gray-700 font-orbitron font-bold text-sm tracking-widest uppercase">
              Our Services & Solutions
            </span>
          </div> 
        </div>
        
        {/* Admin Controls */}
        {isAdminMode && (
          <div className="mb-8 bg-gradient-to-r from-[var(--brand-blue)]/10 via-white to-[var(--brand-orange)]/10 rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 space-y-4 lg:space-y-0">
              <div>
                <h3 className="font-orbitron font-bold text-2xl text-gray-900 flex items-center">
                  ⚡ Content Management Dashboard
                </h3>
                <p className="text-gray-600 mt-2">Create, edit, and manage your blog posts with ease</p>
              </div>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-[var(--brand-orange)] to-red-500 hover:from-red-500 hover:to-[var(--brand-orange)] text-white font-orbitron font-bold px-8 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                    <Plus className="w-5 h-5 mr-3" />
                    ✨ Create New Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto bg-white">
                  <DialogHeader className="pb-6 border-b border-gray-200">
                    <DialogTitle className="font-orbitron text-2xl text-center bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                      {editingPost ? "✏️ Edit Blog Post" : "✨ Create New Blog Post"}
                    </DialogTitle>
                    <p className="text-center text-gray-600 mt-2">
                      {editingPost ? "Update your existing blog post" : "Add a new blog post to share with your audience"}
                    </p>
                  </DialogHeader>
                  
                  <form onSubmit={handleSubmit} className="space-y-8 pt-6">
                    {/* Basic Information Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-orbitron font-bold text-lg mb-4 text-gray-800 flex items-center">
                        📝 Basic Information
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="title" className="text-sm font-semibold text-gray-700">
                            Post Title *
                          </Label>
                          <Input
                            id="title"
                            value={formData.title || ""}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                            placeholder="Enter a compelling and descriptive title"
                            className="h-12 text-base border-2 border-gray-200 focus:border-[var(--brand-orange)] transition-colors"
                          />
                          <p className="text-xs text-gray-500">This will be the main headline of your blog post</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-sm font-semibold text-gray-700">
                            Category *
                          </Label>
                          <Input
                            id="category"
                            value={formData.category || ""}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            required
                            placeholder="e.g., Hybrid Technology, Diesel Systems"
                            className="h-12 text-base border-2 border-gray-200 focus:border-[var(--brand-orange)] transition-colors"
                          />
                          <p className="text-xs text-gray-500">Choose a relevant category for better organization</p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-orbitron font-bold text-lg mb-4 text-gray-800 flex items-center">
                        📄 Content
                      </h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="excerpt" className="text-sm font-semibold text-gray-700">
                            Short Description (Excerpt) *
                          </Label>
                          <Textarea
                            id="excerpt"
                            value={formData.excerpt || ""}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            required
                            rows={4}
                            placeholder="Write a brief, engaging summary (2-3 sentences) that will appear on the blog listing page"
                            className="text-base border-2 border-gray-200 focus:border-[var(--brand-orange)] transition-colors resize-none"
                          />
                          <p className="text-xs text-gray-500">This summary helps readers decide if they want to read the full post</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="content" className="text-sm font-semibold text-gray-700">
                            Full Article Content *
                          </Label>
                          <Textarea
                            id="content"
                            value={formData.content || ""}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            required
                            rows={12}
                            placeholder="Write your complete blog post content here. Include detailed information, tips, and insights that will be valuable to your readers..."
                            className="text-base border-2 border-gray-200 focus:border-[var(--brand-orange)] transition-colors resize-none"
                          />
                          <p className="text-xs text-gray-500">Write detailed, informative content that provides value to your readers</p>
                        </div>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-orbitron font-bold text-lg mb-4 text-gray-800 flex items-center">
                        🖼️ Featured Image
                      </h3>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label className="text-sm font-semibold text-gray-700">
                                Upload Image File
                              </Label>
                              <Input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="cursor-pointer h-12 border-2 border-dashed border-gray-300 hover:border-[var(--brand-orange)] transition-colors"
                              />
                              <p className="text-xs text-gray-500">Upload JPG, PNG, or WEBP images (recommended size: 800x600px)</p>
                            </div>

                            <div className="text-center text-gray-400 font-semibold">OR</div>

                            <div className="space-y-2">
                              <Label htmlFor="imageUrl" className="text-sm font-semibold text-gray-700">
                                Image URL
                              </Label>
                              <Input
                                id="imageUrl"
                                value={formData.imageUrl || ""}
                                onChange={(e) => {
                                  setFormData({ ...formData, imageUrl: e.target.value });
                                  setImagePreview(e.target.value);
                                }}
                                placeholder="https://images.unsplash.com/photo-..."
                                className="h-12 text-base border-2 border-gray-200 focus:border-[var(--brand-orange)] transition-colors"
                              />
                              <p className="text-xs text-gray-500">Paste a direct link to an image from the web</p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-semibold text-gray-700">
                              Image Preview
                            </Label>
                            <div className="border-2 border-gray-200 rounded-lg h-48 flex items-center justify-center bg-gray-50">
                              {imagePreview ? (
                                <img 
                                  src={imagePreview} 
                                  alt="Preview" 
                                  className="w-full h-full object-cover rounded-lg"
                                  onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800";
                                  }}
                                />
                              ) : (
                                <div className="text-center text-gray-400">
                                  <div className="text-4xl mb-2">🖼️</div>
                                  <p className="text-sm">No image selected</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Publishing Options */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-orbitron font-bold text-lg mb-4 text-gray-800 flex items-center">
                        🚀 Publishing Options
                      </h3>
                      <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                        <Switch
                          id="published"
                          checked={formData.published ?? true}
                          onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                          className="data-[state=checked]:bg-[var(--brand-orange)]"
                        />
                        <div className="flex-1">
                          <Label htmlFor="published" className="text-base font-semibold text-gray-700 cursor-pointer">
                            {formData.published ? "✅ Published (Visible to visitors)" : "📝 Draft (Hidden from visitors)"}
                          </Label>
                          <p className="text-sm text-gray-500 mt-1">
                            {formData.published 
                              ? "This post will be visible on your blog page" 
                              : "This post will be saved as a draft and won't be visible to visitors"
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setIsCreateDialogOpen(false);
                          setEditingPost(null);
                          resetForm();
                        }}
                        className="px-8 py-3 text-base border-2 hover:bg-gray-50"
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        className="px-8 py-3 text-base bg-gradient-to-r from-[var(--brand-orange)] to-red-500 hover:from-red-500 hover:to-[var(--brand-orange)] text-white font-orbitron font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
                        disabled={createPostMutation.isPending || updatePostMutation.isPending}
                      >
                        {createPostMutation.isPending || updatePostMutation.isPending ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>{editingPost ? "Updating..." : "Creating..."}</span>
                          </div>
                        ) : (
                          <>
                            {editingPost ? "💾 Update Post" : "✨ Create Post"}
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Plus className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Create Posts</h4>
                </div>
                <p className="text-sm text-gray-600">Add new blog posts with rich content and images</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Edit Existing</h4>
                </div>
                <p className="text-sm text-gray-600">Click the edit button on any post to modify it</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Delete Posts</h4>
                </div>
                <p className="text-sm text-gray-600">Remove unwanted posts with confirmation dialog</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-center space-x-2 text-amber-800">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-sm font-medium">Important Note</span>
              </div>
              <p className="text-xs text-amber-700 mt-1">All changes are saved immediately. There's no undo function, so please review carefully before saving.</p>
            </div>
          </div>
        )}

        {/* Admin Toggle */}
        <div className="fixed top-24 right-8 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (isAdminMode) {
                setIsAdminMode(false);
              } else {
                setShowPasswordDialog(true);
              }
            }}
            className="bg-white/90 backdrop-blur-sm border-[var(--brand-blue)]/20 hover:bg-[var(--brand-orange)]/10"
          >
            {isAdminMode ? (
              <>
                <EyeOff className="w-4 h-4 mr-2" />
                Exit Admin
              </>
            ) : (
              <>
                <Settings className="w-4 h-4 mr-2" />
                Admin
              </>
            )}
          </Button>
        </div>

        {/* Admin Password Dialog */}
        <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
          <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-gray-50 border-2 border-[var(--brand-blue)]/20">
            <DialogHeader className="text-center pb-6">
              <DialogTitle className="font-orbitron text-2xl bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                🔐 Admin Access Required
              </DialogTitle>
              <p className="text-gray-600 mt-2">Enter your administrator credentials to manage blog content</p>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-blue-800">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Administrative privileges required</span>
                </div>
                <p className="text-xs text-blue-600 mt-1">You need admin access to create, edit, or delete blog posts</p>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="admin-password" className="text-sm font-semibold text-gray-700">
                  Admin Password
                </Label>
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="Enter your admin password here"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="h-12 text-base text-center border-2 border-gray-200 focus:border-[var(--brand-orange)] transition-colors"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAdminLogin();
                    }
                  }}
                />
                <p className="text-xs text-gray-500 text-center">
                  Contact the system administrator if you've forgotten your password
                </p>
              </div>
              
              <div className="flex justify-center space-x-4 pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowPasswordDialog(false);
                    setAdminPassword("");
                  }}
                  className="px-8 py-3 border-2 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleAdminLogin}
                  className="px-8 py-3 bg-gradient-to-r from-[var(--brand-blue)] to-blue-600 hover:from-blue-600 hover:to-[var(--brand-blue)] text-white font-orbitron font-bold transform hover:scale-105 transition-all duration-200"
                >
                  🚀 Login
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card  
              key={post.id}
              className="group bg-white backdrop-blur-sm border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 transform"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-card overflow-hidden">
                  <img
                    src={post.imageUrl || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"}
                    alt={post.title}
                    className="responsive-image group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                  {/* Admin Controls */}
                  {isAdminMode && (
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 backdrop-blur-sm"
                        onClick={() => handleEdit(post)}
                      >
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-red-50/90 backdrop-blur-sm border-red-200 hover:bg-red-100"
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this post?")) {
                            deletePostMutation.mutate(post.id);
                          }
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 text-white border-0">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Service Icon */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Wrench size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/5 to-[var(--brand-orange)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6 relative">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                {/* Title */}
                <h2 className="font-orbitron text-xl font-bold mb-4 transition-all duration-300 text-gray-900 group-hover:text-[var(--brand-orange)] line-clamp-2">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed font-light transition-colors duration-300 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Date */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-[var(--brand-orange)]" />
                    <span>
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Recently posted"}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <div className="flex items-center space-x-2 hover:text-[var(--brand-orange)] transition-all duration-300 cursor-pointer">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">5 min read</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-[var(--brand-blue)] transition-all duration-300 cursor-pointer">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-semibold">Expert Content</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <Button 
                      size="sm" 
                      className="group/btn bg-gradient-to-r from-[var(--brand-orange)] to-orange-500 hover:from-orange-600 hover:to-red-500 text-white font-orbitron font-bold text-sm px-6 py-3 rounded-xl border-0 transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 z-40">
          <div className="flex flex-col space-y-4">
            <Button 
              size="lg"
              className="rounded-full w-16 h-16 bg-[var(--brand-orange)] hover:bg-orange-600 shadow-xl transition-all duration-300 transform hover:scale-110"
              onClick={() => window.open('tel:+263242770389', '_self')}
            >
              <Phone size={24} className="text-white" />
            </Button>
            <Button 
              size="lg"
              className="rounded-full w-16 h-16 bg-[var(--brand-blue)] hover:bg-blue-700 shadow-xl transition-all duration-300 transform hover:scale-110"
              onClick={() => window.open('https://wa.me/+263719974846', '_blank')}
            >
              <MessageSquare size={24} className="text-white" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}