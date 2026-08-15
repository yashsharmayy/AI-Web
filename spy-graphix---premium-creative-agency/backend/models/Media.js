import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    public_id: { type: String },
    size: { type: Number, default: 0 },
    mimeType: { type: String, default: 'image/jpeg' },
  },
  { timestamps: true }
);

export const Media = mongoose.models.Media || mongoose.model('Media', mediaSchema);
