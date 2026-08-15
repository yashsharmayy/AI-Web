import mongoose from 'mongoose';

const pricingSchema = new mongoose.Schema(
  {
    planName: { type: String, required: true },
    price: { type: String, required: true },
    billingCycle: { type: String, default: 'per project' },
    description: { type: String },
    features: [{ type: String }],
    recommended: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Pricing = mongoose.models.Pricing || mongoose.model('Pricing', pricingSchema);
