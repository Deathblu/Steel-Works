import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.products.get.path, async (req, res) => {
    const product = await storage.getProduct(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getProducts();
  if (existing.length === 0) {
    const seeds = [
      {
        name: "Stainless Steel Work Table",
        description: "Heavy-duty 304 stainless steel work table with undershelf. Perfect for commercial kitchens. Dimensions: 60\" x 30\".",
        imageUrl: "https://images.unsplash.com/photo-1584680208573-455b55027581?auto=format&fit=crop&q=80&w=800",
        category: "Tables",
        isFeatured: true
      },
      {
        name: "Commercial Double Bowl Sink",
        description: "Industrial grade double bowl sink with drainboards. NSF certified for food safety. Deep basins for large pots.",
        imageUrl: "https://images.unsplash.com/photo-1621905470507-1910a5ae9522?auto=format&fit=crop&q=80&w=800",
        category: "Sinks",
        isFeatured: true
      },
      {
        name: "Wall Mounted Pot Rack",
        description: "Space-saving stainless steel pot rack with 12 hooks. Heavy gauge steel construction to support heavy cookware.",
        imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
        category: "Storage",
        isFeatured: true
      },
      {
        name: "Equipment Stand / Cabinet",
        description: "Enclosed stainless steel cabinet with sliding doors. Ideal for equipment storage and prep surface.",
        imageUrl: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=800",
        category: "Cabinets",
        isFeatured: true
      }
    ];

    for (const seed of seeds) {
      await storage.createProduct(seed);
    }
    console.log("Database seeded with initial products");
  }
}
