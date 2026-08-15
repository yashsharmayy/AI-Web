import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    client: { type: String, required: true },
    category: { type: String, required: true },
    year: { type: String, default: '2026' },
    thumbnail: { type: String, required: true },
    heroImage: { type: String, required: true },
    gallery: [{ type: String }],
    summary: { type: String, required: true },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    impactMetrics: [
      {
        label: String,
        value: String,
      },
    ],
    liveUrl: { type: String },
    featured: { type: Boolean, default: false },
    seoTitle: { type: String },
    metaDescription: { type: String },
    keywords: [{ type: String }],
  },
  { timestamps: true }
);

export const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema);
