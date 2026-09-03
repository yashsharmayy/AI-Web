import "dotenv/config";

import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

import { connectDB } from "./backend/config/database.js";
import { uploadToCloudinaryMock } from "./backend/config/cloudinary.js";
import { upload } from "./backend/middleware/upload.middleware.js";
import { errorHandler } from "./backend/middleware/error.middleware.js";
import { sendMail, verifyMailConnection } from "./backend/utils/sendMail.js";

import authRoutes from "./backend/routes/auth.routes.js";
import userRoutes from "./backend/routes/user.routes.js";
import serviceRoutes from "./backend/routes/service.routes.js";
import portfolioRoutes from "./backend/routes/portfolio.routes.js";
import blogRoutes from "./backend/routes/blog.routes.js";
import testimonialRoutes from "./backend/routes/testimonial.routes.js";
import faqRoutes from "./backend/routes/faq.routes.js";
import pricingRoutes from "./backend/routes/pricing.routes.js";
import contactRoutes from "./backend/routes/contact.routes.js";
import newsletterRoutes from "./backend/routes/newsletter.routes.js";
import teamRoutes from "./backend/routes/team.routes.js";
import analyticsRoutes from "./backend/routes/analytics.routes.js";
import categoryRoutes from "./backend/routes/category.routes.js";
import mediaRoutes from "./backend/routes/media.routes.js";

const PORT = 3000;

async function startServer() {
  const app = express();

  // Connect MongoDB
  const dbConnected = await connectDB();

  if (!dbConnected) {
    console.error("❌ MongoDB connection failed.");
    console.error("❌ Server will continue, but database operations may fail.");
  }
  await verifyMailConnection();

  // Middleware
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    }),
  );

  app.use(cookieParser());

  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      stack: "MERN Stack (MongoDB, Express, React, Node.js)",
      agency: "SPY GRAPHIX",
      database: dbConnected ? "MongoDB Atlas" : "Disconnected",
      time: new Date().toISOString(),
    });
  });

  // Image upload
  app.post("/api/upload", upload.single("image"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          error: "No image file uploaded",
        });
      }

      const result = await uploadToCloudinaryMock(
        req.file.buffer,
        req.file.originalname,
      );

      res.json({
        success: true,
        url: result.secure_url,
        public_id: result.public_id,
      });
    } catch (err) {
      console.error("Upload error:", err);

      res.status(500).json({
        error: err.message || "Image upload failed",
      });
    }
  });

  // AI generation
  app.post("/api/ai/generate", async (req, res) => {
    try {
      const { prompt, type } = req.body;

      if (!prompt) {
        return res.status(400).json({
          error: "Prompt is required",
        });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      // Fallback if Gemini key isn't configured
      if (!apiKey) {
        return res.json({
          result: `[SPY GRAPHIX AI Strategy Engine]

Concept Direction for: "${prompt}"

1. Visual Identity & Mood:
Glass refractive elements, warm ivory palette (#FAFAFA), high-contrast Cormorant Garamond typography.

2. Suggested Slogan:
"Where Technical Precision Architecture Meets Infinite Brand Elevation."

3. 3D Canvas Asset Direction:
Floating liquid chrome rings with light dispersion shaders and slow orbital rotation.

4. Color Palette:
#FAFAFA Canvas | #111111 Charcoal | #6d001a Electric Red Accent.`,
          source: "creative-engine-preset",
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
      });

      const systemInstruction =
        "You are the Lead Creative Strategy AI for SPY GRAPHIX, an award-winning luxury MERN-stack agency. Provide clean, inspiring creative concept directions and slogans.";

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${systemInstruction}

Task: Generate an elevated ${type || "creative concept"} for: "${prompt}"`,
      });

      res.json({
        result: response.text,
        source: "gemini-2.5-flash",
      });
    } catch (err) {
      console.error("Gemini API Error:", err);

      res.status(500).json({
        error: err.message || "Failed to generate creative concept.",
      });
    }
  });

  // API routes
  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/services", serviceRoutes);
  app.use("/api/portfolio", portfolioRoutes);
  app.use("/api/blogs", blogRoutes);
  app.use("/api/testimonials", testimonialRoutes);
  app.use("/api/faqs", faqRoutes);
  app.use("/api/pricing", pricingRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/newsletter", newsletterRoutes);
  app.use("/api/team", teamRoutes);
  app.use("/api/analytics", analyticsRoutes);
  app.use("/api/categories", categoryRoutes);
  app.use("/api/media", mediaRoutes);

  app.get("/test-email", async (req, res) => {
    try {
      const result = await sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: "SPY GRAPHIX Test Email",
        text: "This is a test email from the SPY GRAPHIX backend.",
        html: `
        <h2>SPY GRAPHIX Test</h2>
        <p>Your email system is working correctly.</p>
      `,
      });

      res.json({
        success: true,
        result,
      });
    } catch (error) {
      console.error("TEST EMAIL ERROR:", error);

      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  });

  // Error handler
  app.use(errorHandler);

  // Vite development server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
      },
      appType: "spa",
    });

    app.use(vite.middlewares);
  } else {
    // Production frontend
    const distPath = path.join(process.cwd(), "dist");

    app.use(express.static(distPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(
      `🚀 SPY GRAPHIX MERN Stack server active on http://0.0.0.0:${PORT}`,
    );
  });
}

startServer();
