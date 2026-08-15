import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true },
    clientRole: { type: String, required: true },
    company: { type: String, required: true },
    avatar: { type: String, required: true },
    rating: { type: Number, default: 5 },
    quote: { type: String, required: true },
    projectTitle: { type: String, required: true },
  },
  { timestamps: true }
);

export const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
