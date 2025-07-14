import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog API routes
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      console.log(`Error fetching blog posts: ${error}`);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid blog post ID" });
      }
      
      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.log(`Error fetching blog post: ${error}`);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog", async (req, res) => {
    try {
      const result = insertBlogPostSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid blog post data", details: result.error });
      }
      
      const post = await storage.createBlogPost(result.data);
      res.status(201).json(post);
    } catch (error) {
      console.log(`Error creating blog post: ${error}`);
      res.status(500).json({ error: "Failed to create blog post" });
    }
  });

  app.put("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid blog post ID" });
      }

      const result = insertBlogPostSchema.partial().safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid blog post data", details: result.error });
      }
      
      const post = await storage.updateBlogPost(id, result.data);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.log(`Error updating blog post: ${error}`);
      res.status(500).json({ error: "Failed to update blog post" });
    }
  });

  app.delete("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid blog post ID" });
      }
      
      const deleted = await storage.deleteBlogPost(id);
      if (!deleted) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json({ success: true });
    } catch (error) {
      console.log(`Error deleting blog post: ${error}`);
      res.status(500).json({ error: "Failed to delete blog post" });
    }
  });

  // Admin authentication endpoint
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { password } = req.body;
      const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
      
      if (password === adminPassword) {
        // Generate a simple session token
        const sessionToken = Date.now().toString(36) + Math.random().toString(36).substr(2);
        res.json({ success: true, token: sessionToken });
      } else {
        res.status(401).json({ error: "Invalid password" });
      }
    } catch (error) {
      console.log(`Error in admin login: ${error}`);
      res.status(500).json({ error: "Login failed" });
    }
  });

  // Admin verification endpoint
  app.get("/api/admin/verify", async (req, res) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');
      if (token && token.length > 10) {
        res.json({ valid: true });
      } else {
        res.status(401).json({ valid: false });
      }
    } catch (error) {
      res.status(401).json({ valid: false });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, vehicle, service } = req.body;

      // Basic validation
      if (!firstName || !lastName || !email || !phone || !service) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Create email content
      const emailSubject = `New Contact Form Submission - ${firstName} ${lastName}`;
      const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background-color: #f97316; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #f97316; }
    .footer { background-color: #f3f4f6; padding: 15px; margin-top: 20px; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="header">
    <h2>New Contact Form Submission</h2>
    <p>Diagnosis & Sensors Website</p>
  </div>
  
  <div class="content">
    <h3>Customer Details:</h3>
    
    <div class="field">
      <span class="label">Name:</span> ${firstName} ${lastName}
    </div>
    
    <div class="field">
      <span class="label">Email:</span> ${email}
    </div>
    
    <div class="field">
      <span class="label">Phone:</span> ${phone}
    </div>
    
    <div class="field">
      <span class="label">Vehicle:</span> ${vehicle || 'Not specified'}
    </div>
    
    <h3>Service Request:</h3>
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #f97316; margin: 10px 0;">
      ${service.replace(/\n/g, '<br>')}
    </div>
    
    <div class="footer">
      <p><strong>Action Required:</strong> Please respond to this customer inquiry within 24 hours.</p>
      <p><strong>Customer Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Customer Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
    </div>
  </div>
</body>
</html>
      `;

      console.log('Contact form submission received:', {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        vehicle: vehicle || 'Not specified',
        service: service.substring(0, 100) + '...'
      });

      // Configure email transporter
      // Note: In production, you should use environment variables for email credentials
      const transporter = nodemailer.createTransporter({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER || 'your-email@gmail.com',
          pass: process.env.EMAIL_PASSWORD || 'your-app-password'
        }
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER || 'website@diagnosisandsensors.co.zw',
        to: 'sales@diagnosisandsensors.co.zw',
        subject: emailSubject,
        html: emailContent,
        replyTo: email
      };

      // Send email (only if email credentials are configured)
      if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
        await transporter.sendMail(mailOptions);
        console.log('Contact form email sent successfully');
      } else {
        console.log('Email not sent - configure EMAIL_USER and EMAIL_PASSWORD environment variables');
      }

      res.json({ 
        success: true, 
        message: 'Contact form submitted successfully. We will get back to you within 24 hours.' 
      });
    } catch (error) {
      console.log(`Error processing contact form: ${error}`);
      res.status(500).json({ error: "Failed to process contact form submission" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
