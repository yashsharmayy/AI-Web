import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    category: { type: String, required: true },
    shortDesc: { type: String, required: true },
    fullDesc: { type: String, required: true },
    iconName: { type: String, default: 'Box' },
    subServices: [{ type: String }],
    benefits: [{ type: String }],
    workflow: [
      {
        step: String,
        title: String,
        desc: String,
      },
    ],
    pricing: [
      {
        tier: String,
        price: String,
        features: [String],
      },
    ],
    deliverables: [{ type: String }],
    heroImage: { type: String, required: true },
    featured: { type: Boolean, default: false },
    seoTitle: { type: String },
    metaDescription: { type: String },
    keywords: [{ type: String }],
  },
  { timestamps: true }
);

export const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);
