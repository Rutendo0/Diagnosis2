
import { promises as fs } from 'fs';
import path from 'path';
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

export class FileStorage implements IStorage {
  private dataDir: string;
  private usersFile: string;
  private blogPostsFile: string;
  private metaFile: string;

  constructor() {
    this.dataDir = path.join(process.cwd(), 'data');
    this.usersFile = path.join(this.dataDir, 'users.json');
    this.blogPostsFile = path.join(this.dataDir, 'blogPosts.json');
    this.metaFile = path.join(this.dataDir, 'meta.json');
    this.initializeStorage();
  }

  private async initializeStorage() {
    try {
      await fs.mkdir(this.dataDir, { recursive: true });
      
      // Initialize files if they don't exist
      if (!(await this.fileExists(this.usersFile))) {
        await fs.writeFile(this.usersFile, JSON.stringify({}));
      }
      
      if (!(await this.fileExists(this.blogPostsFile))) {
        await this.initializeBlogPosts();
      }
      
      if (!(await this.fileExists(this.metaFile))) {
        await fs.writeFile(this.metaFile, JSON.stringify({ currentUserId: 1, currentBlogId: 1 }));
      }
    } catch (error) {
      console.error('Failed to initialize storage:', error);
    }
  }

  private async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  private async initializeBlogPosts() {
    const samplePosts: Record<string, BlogPost> = {
      "1": {
        id: 1,
        title: "Toyota Aqua Hybrid Battery Replacement Guide",
        content: "Complete guide on replacing Toyota Aqua hybrid batteries. Learn about the 2012-2016 and 2020-2024 models, warranty options, and trade-in programs. Our expert technicians provide professional installation with 3-month warranty.\n\nThe Toyota Aqua hybrid system uses a sophisticated battery pack that requires specialized knowledge for replacement. Our certified technicians have extensive experience with both first and second-generation Aqua models.\n\nWe offer competitive pricing, quality assurance, and comprehensive warranty coverage. Contact us for a free diagnostic assessment of your hybrid battery system.",
        excerpt: "Expert guide to Toyota Aqua hybrid battery replacement with warranty coverage",
        imageUrl: "/images/battery.jpg",
        category: "Hybrid Technology",
        published: true,
        createdAt: new Date("2024-12-01")
      },
      "2": {
        id: 2,
        title: "Understanding Diesel Injector Maintenance",
        content: "Diesel injectors are crucial for optimal engine performance. Learn about symptoms of faulty injectors, maintenance schedules, and our specialized repair services for Toyota D4D, Land Rover TDV6, and Mercedes Benz diesel engines.\n\nCommon symptoms include rough idling, black smoke, poor fuel economy, and starting difficulties. Regular maintenance can prevent costly repairs and extend injector life.\n\nOur advanced diagnostic equipment can pinpoint injector issues quickly and accurately. We use OEM-quality parts and provide comprehensive testing after repairs.",
        excerpt: "Complete maintenance guide for diesel injectors across multiple vehicle brands",
        imageUrl: "/images/injector.jpg",
        category: "Diesel Systems",
        published: true,
        createdAt: new Date("2024-11-28")
      },
      "3": {
        id: 3,
        title: "Honda GP5 Hybrid System Components",
        content: "Understanding the Honda GP5 Fit hybrid system components and maintenance requirements. This comprehensive guide covers battery diagnostics, motor controllers, and system optimization.\n\nThe Honda GP5 features an innovative IMA (Integrated Motor Assist) system that requires specialized maintenance procedures. Learn about common issues and preventive care.\n\nOur technicians are trained in Honda hybrid systems and use genuine Honda diagnostic tools for accurate service and repairs.",
        excerpt: "Comprehensive guide to Honda GP5 hybrid system maintenance and components",
        imageUrl: "/images/battery2.jpg",
        category: "Hybrid Technology",
        published: true,
        createdAt: new Date("2024-11-25")
      }
    };

    await fs.writeFile(this.blogPostsFile, JSON.stringify(samplePosts, null, 2));
    
    // Update meta with next available ID
    const maxId = Math.max(...Object.values(samplePosts).map(post => post.id));
    await fs.writeFile(this.metaFile, JSON.stringify({ currentUserId: 1, currentBlogId: maxId + 1 }));
  }

  private async readUsers(): Promise<Record<string, User>> {
    try {
      const data = await fs.readFile(this.usersFile, 'utf-8');
      return JSON.parse(data);
    } catch {
      return {};
    }
  }

  private async writeUsers(users: Record<string, User>): Promise<void> {
    await fs.writeFile(this.usersFile, JSON.stringify(users, null, 2));
  }

  private async readBlogPosts(): Promise<Record<string, BlogPost>> {
    try {
      const data = await fs.readFile(this.blogPostsFile, 'utf-8');
      const posts = JSON.parse(data);
      // Ensure dates are properly parsed
      Object.values(posts).forEach((post: any) => {
        if (post.createdAt) {
          post.createdAt = new Date(post.createdAt);
        }
      });
      return posts;
    } catch (error) {
      console.error('Error reading blog posts:', error);
      return {};
    }
  }

  private async writeBlogPosts(posts: Record<string, BlogPost>): Promise<void> {
    await fs.writeFile(this.blogPostsFile, JSON.stringify(posts, null, 2));
  }

  private async readMeta(): Promise<{ currentUserId: number; currentBlogId: number }> {
    try {
      const data = await fs.readFile(this.metaFile, 'utf-8');
      return JSON.parse(data);
    } catch {
      return { currentUserId: 1, currentBlogId: 1 };
    }
  }

  private async writeMeta(meta: { currentUserId: number; currentBlogId: number }): Promise<void> {
    await fs.writeFile(this.metaFile, JSON.stringify(meta, null, 2));
  }

  async getUser(id: number): Promise<User | undefined> {
    const users = await this.readUsers();
    return users[id.toString()];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const users = await this.readUsers();
    return Object.values(users).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const users = await this.readUsers();
    const meta = await this.readMeta();
    
    const id = meta.currentUserId++;
    const user: User = { ...insertUser, id };
    users[id.toString()] = user;
    
    await this.writeUsers(users);
    await this.writeMeta(meta);
    
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    const posts = await this.readBlogPosts();
    return Object.values(posts)
      .filter(post => post.published)
      .sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      });
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const posts = await this.readBlogPosts();
    return posts[id.toString()];
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const posts = await this.readBlogPosts();
    const meta = await this.readMeta();
    
    const id = meta.currentBlogId++;
    const post: BlogPost = { 
      ...insertPost, 
      id, 
      createdAt: new Date(),
      published: insertPost.published ?? true,
      imageUrl: insertPost.imageUrl ?? null
    };
    
    posts[id.toString()] = post;
    
    await this.writeBlogPosts(posts);
    await this.writeMeta(meta);
    
    return post;
  }

  async updateBlogPost(id: number, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const posts = await this.readBlogPosts();
    const existingPost = posts[id.toString()];
    
    if (!existingPost) return undefined;
    
    const updatedPost = { ...existingPost, ...updateData };
    posts[id.toString()] = updatedPost;
    
    await this.writeBlogPosts(posts);
    return updatedPost;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    const posts = await this.readBlogPosts();
    
    if (!posts[id.toString()]) return false;
    
    delete posts[id.toString()];
    await this.writeBlogPosts(posts);
    
    return true;
  }
}

export const storage = new FileStorage();
