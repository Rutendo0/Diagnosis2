import { users, type User, type InsertUser, type BlogPost, type InsertBlogPost } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private currentUserId: number;
  private currentBlogId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.currentUserId = 1;
    this.currentBlogId = 1;
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const samplePosts: BlogPost[] = [
      {
        id: 1,
        title: "Toyota Aqua Hybrid Battery Replacement Guide",
        content: "Complete guide on replacing Toyota Aqua hybrid batteries. Learn about the 2012-2016 and 2020-2024 models, warranty options, and trade-in programs. Our expert technicians provide professional installation with 3-month warranty.",
        excerpt: "Expert guide to Toyota Aqua hybrid battery replacement with warranty coverage",
        imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
        category: "Hybrid Technology",
        published: true,
        createdAt: new Date("2024-12-01")
      },
      {
        id: 2,
        title: "Understanding Diesel Injector Maintenance",
        content: "Diesel injectors are crucial for optimal engine performance. Learn about symptoms of faulty injectors, maintenance schedules, and our specialized repair services for Toyota D4D, Land Rover TDV6, and Mercedes Benz diesel engines.",
        excerpt: "Complete maintenance guide for diesel injectors across multiple vehicle brands",
        imageUrl: "https://images.unsplash.com/photo-1486752770946-e09405e2b0b6?w=800",
        category: "Diesel Systems",
        published: true,
        createdAt: new Date("2024-11-28")
      },
      {
        id: 3,
        title: "Honda GP5 Hybrid System Components",
        content: "Explore the Honda GP5 hybrid system including EGR valves, water pumps, coil packs, and dual clutch bearings. Learn about common issues, replacement procedures, and fitting services available at our workshop.",
        excerpt: "Comprehensive overview of Honda GP5 hybrid components and services",
        imageUrl: "https://images.unsplash.com/photo-1520796048297-ee5bff07b1dd?w=800",
        category: "Honda Systems",
        published: true,
        createdAt: new Date("2024-11-25")
      },
      {
        id: 4,
        title: "Spark Plug Replacement: Signs and Solutions",
        content: "Identify symptoms of faulty spark plugs including engine misfire, high fuel consumption, black smoke, poor idling, and car stalling. Learn about different spark plug types and our professional replacement services.",
        excerpt: "Essential guide to spark plug diagnosis and replacement services",
        imageUrl: "https://images.unsplash.com/photo-1617634667039-8e20fe363851?w=800",
        category: "Engine Maintenance",
        published: true,
        createdAt: new Date("2024-11-22")
      }
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
      if (post.id >= this.currentBlogId) {
        this.currentBlogId = post.id + 1;
      }
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogId++;
    const post: BlogPost = { 
      ...insertPost, 
      id, 
      createdAt: new Date(),
      published: insertPost.published ?? true
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: number, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) return undefined;
    
    const updatedPost = { ...existingPost, ...updateData };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    return this.blogPosts.delete(id);
  }
}

export const storage = new MemStorage();
